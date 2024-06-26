document.addEventListener("DOMContentLoaded", async () => {
  const loaderBox = document.querySelector(".loader-box")
  const loader = document.querySelector(".loader")
  // Fetch data from data.json
  try {
    const response = await fetch("./data/data.json");
    var data = await response.json();
  } catch (error) {
    console.log(error);
  }

  const itemsPerPage = 9; // Card per page
  var currentPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Create card and display
  const displayPage = (data, page) => {
    const container = document.querySelector(".destination");
    container.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    // Group data into rows of 3 cards each
    for (let i = 0; i < pageData.length; i += 3) {
      const row = document.createElement("div");
      row.classList.add("row");

      pageData.slice(i, i + 3).forEach((destination) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = destination.img;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = destination.name;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = destination.description;

        const cardPrice = document.createElement("span");
        cardPrice.classList.add("card-price", "mr-2");
        cardPrice.textContent = `${destination.estimatedCost}$`;

        const cardRate = document.createElement("span");
        cardRate.classList.add("card-rate");
        cardRate.innerHTML = `<i class="fa-solid fa-star"></i>${destination.rating}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(cardRate);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);

        card.addEventListener("click", () => {
          window.location.href = `detail.html?id=${destination.id}`;
        });
      });

      container.appendChild(row);
    }
  };

  // Pagination
  const createPagination = (totalPages, data) => {
    const paginationContainer = document.querySelector(".pagination-container");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.classList.add("page-button", "btn", "mr-2");
      pageButton.textContent = i;
      if (i == 1) {
        pageButton.classList.add("button-visited");
      }

      pageButton.addEventListener("click", () => {
        pageButton.classList.add("button-visited");

        const listButton = document.querySelectorAll(".page-button");
        listButton.forEach((button) => {
          if (button != pageButton) {
            button.classList.remove("button-visited");
          }
        });

        currentPage = i;
        document.documentElement.scrollTop = 430;
        displayPage(data, currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }
  };
  
  setTimeout(() => {
    loaderBox.classList.add("d-none")
    loader.classList.add("d-none")
    displayPage(data, 1);
    createPagination(totalPages, data);
  }, 2000);

  // Sort
  const buttonsSort = document.querySelectorAll(".btn-sort");
  
  // Sort price low to high
  const lowToHigh = (data) => {
    return data.sort((a, b) => a.estimatedCost - b.estimatedCost);
  };
  // Sort price low to high
  const highToLow = (data) => {
    return data.sort((a, b) => b.estimatedCost - a.estimatedCost);
  };
  // Sort by name
  const sortByName = (data) => {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  //Sort by rate
  const sortByRate = (data) => {
    return data.sort((a, b) => b.rating - a.rating);
  };

  
  // Add even click to button
  buttonsSort.forEach((button) => {
    button.addEventListener("click", () => {
      buttonsSort.forEach(btn => btn.classList.remove("selected"))
      button.classList.add("selected")

      let sortedData = data;
      const buttonClass = button.classList;

      if (buttonClass.contains("low-to-high")) {
        sortedData = lowToHigh([...data]);
      } else if (buttonClass.contains("high-to-low")) {
        sortedData = highToLow([...data]);
      } else if (buttonClass.contains("name")) {
        sortedData = sortByName([...data]);
      } else if (buttonClass.contains("rate")) {
        sortedData = sortByRate([...data]);
      }

      displayPage(sortedData, 1);
      createPagination(totalPages, sortedData);
    });
  });

  // Search
  const searchInput = document.querySelector(".search-input")
  searchInput.addEventListener("input", () => {
    let alertNotFound = document.querySelector(".alert-danger")
    const keyword = searchInput.value
    const regex = new RegExp(keyword, "i")
    let filterData = data.filter(card => regex.test(card.name))

    displayPage(filterData, 1);
    createPagination(Math.ceil(filterData.length / itemsPerPage), filterData);

    if(filterData.length == 0){
      console.log(alertNotFound)
      alertNotFound.classList.remove("d-none")
    }else{
      alertNotFound.classList.add("d-none")
    }
  })

});

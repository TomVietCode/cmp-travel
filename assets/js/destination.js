document.addEventListener("DOMContentLoaded", async () => {
  // Fetch data from data.json
  try {
    const response = await fetch("data.json")
    var data = await response.json()
  } catch (error) {
    console.log(error)
  }


  const itemsPerPage = 9; // Card per page
  var currentPage = 1;
  const totalPages = 4;
  
  // Pagination
  function createPagination(totalPages) {
    const paginationContainer = document.querySelector(".pagination-container");
    paginationContainer.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.classList.add("page-button", "btn", "mr-2");
      pageButton.textContent = i;
      if(i == 1){
        pageButton.classList.add("button-visited")
      }

      pageButton.addEventListener("click", () => {
        pageButton.classList.add("button-visited")

        const listButton = document.querySelectorAll(".page-button")
        listButton.forEach(button => {
          if(button != pageButton){
            button.classList.remove("button-visited")
          }
        })

        currentPage = i
        document.documentElement.scrollTop = 0;
        displayPage(data, currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }
  }
  
  
  // Create card and display 
  function displayPage(data, page) {
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
        img.alt = destination.name;
  
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
          window.location.href = `detail.html?id=${destination.id}`
        })
      });
  
      container.appendChild(row);
    }
  }

  displayPage(data, 1);
  createPagination(totalPages);

})


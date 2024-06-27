document.addEventListener("DOMContentLoaded", async () => {
  document.documentElement.scrollTop = 430;
  //Get id from url
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get("id");

  // Get data from data.json
  try {
    const response = await fetch("./data/data.json");
    var data = await response.json();
  } catch (error) {
    console.log(error);
  }

  var objectLocation = data.find((obj) => obj.id == cardId);
  // console.log(objectLocation)

  document.title = `${objectLocation.name}`;

  const container = document.querySelector(".container");
  const row = document.querySelector(".row");

  const backBox = document.createElement("div");
  backBox.classList.add("mb-3", "back");
  backBox.innerHTML = `
    <a href="destination.html" class="btn btn-back"><i class="fa-solid fa-arrow-left"></i>Back</a>
  `;

  const col7 = document.createElement("div");
  col7.classList.add("col-7");

  // Destination Information
  const destinationInfo = document.createElement("div");
  destinationInfo.classList.add("destination-info");

  destinationInfo.innerHTML = `
    <h1>${objectLocation.name}</h1>
    <span class="price">${objectLocation.estimatedCost}$ / Person</span>
    <span class="d-block mt-2 rating"><i class="fa-solid fa-star"></i>${objectLocation.rating}</span>
    <p class="my-4 description">${objectLocation.description}</p>
  `;

  col7.appendChild(destinationInfo);

  // Detail list
  const detailList = document.createElement("ul");
  detailList.classList.add("detail-list", "row");

  const details = [
    {
      label: "Destination",
      value: `${objectLocation.name}, ${objectLocation.country}`,
    },
    { label: "Attractions", value: `${objectLocation.attractions.join(", ")}` },
    { label: "Common Foods", value: `${objectLocation.food.join(", ")}` },
    {
      label: "Estimated Cost",
      value: `$${objectLocation.estimatedCost} / 1 Person`,
    },
  ];

  details.forEach((detail) => {
    const li = document.createElement("li");
    li.classList.add("col-sm-12");
    li.innerHTML = `
      <span class="col-sm-4">${detail.label}</span>
      <span class="col-sm-8">${detail.value}</span>
    `;
    detailList.appendChild(li);
  });

  col7.appendChild(detailList);

  //Main Image
  const col5 = document.createElement("div");
  col5.classList.add("col-5", "main-image");

  const imageZoom = document.createElement("div");
  imageZoom.classList.add("image-zoom");

  const image = document.createElement("img");
  image.classList.add("light-box");
  image.src = `${objectLocation.img}`
  imageZoom.appendChild(image);

  col5.appendChild(imageZoom);

  const col12 = document.createElement("div");
  col12.classList.add("col-12");
  col12.innerHTML = `<a href="reservation.html" class="btn btn-book px-4">Book now!</a>`;

  row.appendChild(col7);
  row.appendChild(col5);
  row.appendChild(col12);

  container.appendChild(backBox);
  container.appendChild(row);

  // Get Library image by using api from unsplash
  const accessKey = "r4tOZXvBx-YGL47ar91HwJIEfL9MqOnzicNl81aaQ-M";
  const query = `${objectLocation.name}`; // Search key

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=9`
    );
    const data = await response.json();
    const listImages = data.results;

    // console.log(listImages)
    const gallery = document.querySelector(".gallery");
    const galleryPictures = document.querySelector(".gallery-pictures");

    listImages.forEach((img) => {
      const col4 = document.createElement("div");
      col4.classList.add("col-4", "mb-4");

      const innerImage = document.createElement("div");
      innerImage.classList.add("inner-image");

      const image = document.createElement("img");
      image.classList.add("light-box");
      image.src = `${img.urls.regular}`;

      innerImage.appendChild(image);
      col4.appendChild(innerImage);
      galleryPictures.appendChild(col4);
    });

    gallery.appendChild(galleryPictures);
    container.appendChild(gallery);
  } catch (error) {
    console.log(error);
  }

  // Popup Image
  const popup = document.querySelector("#popup");
  const popupImg = document.querySelector("#popup-img");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".light-box");

  // console.log(images);
  if (images) {
    images.forEach((image) => {
      image.addEventListener("click", () => {
        popup.style.display = "block";
        popupImg.src = image.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == popup) {
        // console.log(e.target)
        popup.style.display = "none";
      }
    });
  }
  // End Popup Image
});

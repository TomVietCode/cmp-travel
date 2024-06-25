document.addEventListener('DOMContentLoaded', () => {
  const clientImg = document.querySelector('.clientimg');
  const clientFeedback = document.querySelector('.review');
  const clientName = document.querySelector('.client');
  const clientRating = document.querySelector('.rating');
  const prevButton = document.getElementById('trai');
  const nextButton = document.getElementById('phai');
  let testimonials = [];
  let currentIndex = 0;

  // Fetch data from API
  fetch('https://mock-every-sunday-server.onrender.com/testimonials')
      .then(response => response.json())
      .then(data => {
          testimonials = data;
          displayTestimonial(currentIndex);
      })
      .catch(error => console.error('Error fetching testimonials:', error));

  // Display the current testimonial
  function displayTestimonial(index) {
      const testimonial = testimonials[index];
      // console.log(testimonial.imgAvatar)
      clientImg.src = `./assets/images/feedback/avatar/${testimonial.imgAvatar}.jpg`
      clientFeedback.innerHTML = `${testimonial.review}`;
      clientName.textContent = `${testimonial.name}`;
      clientRating.innerHTML = `Rating: ${testimonial.rating} <i class="fa-solid fa-star"></i>`;
  }

  // Event listeners for previous and next buttons
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
      displayTestimonial(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
      displayTestimonial(currentIndex);
  });

  setInterval(() => {
    nextButton.click()
  }, 4000);

  
});

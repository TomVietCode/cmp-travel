document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll('.slider video');
  const slider = document.querySelector('.slider');

  // Play video when clicked on navigation dots
  document.querySelectorAll('.slider-nav a').forEach((navDot, index) => {
      navDot.addEventListener('click', (e) => {
          e.preventDefault();
          const video = videos[index];
          video.scrollIntoView({ behavior: 'smooth' });
          videos.forEach(v => v.pause());
          video.play();
      });
  });
});

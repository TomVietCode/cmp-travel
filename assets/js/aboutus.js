const boxes = document.querySelectorAll('.pakage');
const options = {
  root: null,
  threshold: 0.5, // Hiệu ứng bắt đầu khi 50% box xuất hiện trong vùng nhìn
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, options);

boxes.forEach(box => observer.observe(box));
const scrollUpIcon = document.getElementById('scrollUpIcon');
const scrollDownIcon = document.getElementById('scrollDownIcon');
const scrollToPosition = 635; // Vị trí cuộn theo pixel (ví dụ: 500px từ đầu trang)

let isAtScrollDownPosition = false; // Biến cờ để theo dõi vị trí cuộn

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop >= scrollToPosition) {
    isAtScrollDownPosition = true;
    scrollUpIcon.style.display = 'block';
    scrollDownIcon.style.display = 'none'; // Ẩn icon "mũi tên đi xuống" khi cuộn đến vị trí
  } else {
    isAtScrollDownPosition = false;
    scrollUpIcon.style.display = 'none';
    scrollDownIcon.style.display = 'block';
  }
});

scrollUpIcon.addEventListener('click', () => {
  if (isAtScrollDownPosition) { // Kiểm tra trước khi cuộn lên đầu
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});

scrollDownIcon.addEventListener('click', () => {
  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
  });
});

// Ẩn icon "mũi tên đi lên" ban đầu
scrollUpIcon.style.display = 'none';

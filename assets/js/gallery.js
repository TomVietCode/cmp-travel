// scroll viewpackage
function scrollToTargetPosition(targetY) {
    // Kiểm tra xem targetY có phải là một số hợp lệ hay không
    if (typeof targetY !== 'number') {
      return;
    }
  
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }
  
  const viewPackageButton = document.querySelector('.nutview');
  const viewPackageButton8 = document.querySelector('.iconmove');
  const viewPackageButton1 = document.getElementById('nutview1');
  const viewPackageButton2 = document.getElementById('nutview2');
  const viewPackageButton3 = document.getElementById('nutview3');
  const viewPackageButton4 = document.getElementById('nutview4');
  const viewPackageButton5 = document.getElementById('nutview5');
  const viewPackageButton6 = document.getElementById('nutview6');
  const viewPackageButton7 = document.getElementById('nutview7');


  
  // Gọi hàm scrollToTargetPosition với tọa độ y mong muốn khi nhấp nút
  viewPackageButton.addEventListener('click', () => {
    scrollToTargetPosition(2540); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton1.addEventListener('click', () => {
    scrollToTargetPosition(3240); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton2.addEventListener('click', () => {
    scrollToTargetPosition(4240); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton3.addEventListener('click', () => {
    scrollToTargetPosition(5240); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton4.addEventListener('click', () => {
    scrollToTargetPosition(6240); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton5.addEventListener('click', () => {
    scrollToTargetPosition(7210); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton6.addEventListener('click', () => {
    scrollToTargetPosition(8210); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  viewPackageButton7.addEventListener('click', () => {
    scrollToTargetPosition(9210); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });

  // lam icon bien mat khi keo qua vi tri
  const targetY = 2670; // Vị trí Y mục tiêu (thay đổi giá trị này)

const iconElement = document.querySelector('.iconmove'); // Chọn icon bằng class

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition <= targetY) {
//     iconElement.style.display = 'none';
//   } else {
//     iconElement.style.display = 'block';
//   }
// });

// popup anh
// const imageGallery = document.querySelector('.a1');

// if (imageGallery) { // Check if '.a1' element exists
//   imageGallery.addEventListener('click', (event) => {
//     if (event.target.tagName === 'IMG' && typeof openImagePopup === 'function') { // Ensure function exists
//       const imageUrl = event.target.getAttribute('src');
//       openImagePopup(imageUrl);
//     }
//   });
// } else {
//   console.error("Element with class '.a1' not found. Please check your HTML structure.");
// }
// function openImagePopup(imageUrl) {
//   window.open(imageUrl, '_blank', 'width=600,height=400');
// } //

function openImagePopup(imageUrl) {
  // 1. Tạo phần tử container cho popup
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('pop'); // Thêm class để định dạng

  // 2. Tạo phần tử <img> để hiển thị ảnh
  const popupImage = document.createElement('img');
  popupImage.src = imageUrl;
  popupImage.alt = "Ảnh popup";

  // 3. Tạo nút đóng (tùy chọn)
  const closeButton = document.createElement('button');
  closeButton.classList.add('dong'); // Add the class 'close-button'
  closeButton.textContent = "Đóng";
  closeButton.addEventListener('click', () => {
    popupContainer.remove(); // Xóa container popup khi click nút đóng
  });

  // 4. Thêm các phần tử vào container popup
  popupContainer.appendChild(popupImage);
  if (closeButton) { // Thêm nút đóng nếu đã tạo
    popupContainer.appendChild(closeButton);
  }

  // 5. Định vị popup tuyệt đối và đặt z-index cao
  popupContainer.style.position = 'absolute';
  popupContainer.style.top = '50%';
  popupContainer.style.left = '50%';
  popupContainer.style.transform = 'translate(-50%, -50%)';
  popupContainer.style.zIndex = 1000; // Đảm bảo popup hiển thị trên các phần tử khác

  // 6. Thêm container popup vào body
  document.body.appendChild(popupContainer);
}

// Thêm sự kiện click cho các liên kết hình ảnh
const imageLinks = document.querySelectorAll('.image-container');
imageLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    const imageUrl = link.dataset.imageUrl;
    openImagePopup(imageUrl);
  });
});



  // slide anh


  const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const dots = document.querySelector('.dots').querySelectorAll('a');

let currentSlideIndex = 0;
let isAnimating = false;

// Hàm chuyển đến slide tiếp theo
function moveToNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slider.scrollTo({ left: currentSlideIndex * slider.offsetWidth, behavior: 'smooth', // Adjust as needed
    duration: 700 });
  updateDots();
}

// Hàm cập nhật trạng thái của các chấm tròn
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlideIndex) {
      dot.classList.add('active');
    }
  });
}

// Bắt đầu slide đầu tiên (tùy chọn)
moveToNextSlide();

// Thiết lập tự động phát (điều chỉnh khoảng thời gian theo nhu cầu)
setInterval(moveToNextSlide, 3000); // Chuyển slide sau mỗi 3 giây
  
  




  



// let thisPage = 1;
// let limit = 5;
// let list = document.querySelectorAll('.noidung .box');

// function loadItem(){
//     let beginGet = limit * (thisPage - 1);
//     let endGet = limit * thisPage - 1;
//     list.forEach((box, key)=>{
//         if(key >= beginGet && key <= endGet){
//             box.style.display = 'flex';
//         }else{
//             box.style.display = 'none';
//         }
//     })
//     listPage();
// }
// loadItem();
// function listPage(){
//     let count = Math.ceil(list.length / limit);
//     document.querySelector('.listPage').innerHTML = '';

    

//     for(i = 1; i <= count; i++){
//         let newPage = document.createElement('li');
//         newPage.innerText = i;
//         if(i == thisPage){
//             newPage.classList.add('active');
//         }
//         newPage.setAttribute('onclick', "changePage(" + i + ")");
//         document.querySelector('.listPage').appendChild(newPage);
//     }

// }
// function changePage(i){
//     thisPage = i;
//     loadItem();
// }
let thisPage = 1;
let limit = 5;
let list = document.querySelectorAll('.noidung .box');

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;

  list.forEach((box, key) => {
    if (key >= beginGet && key <= endGet) {
      box.style.display = 'flex';
    } else {
      box.style.display = 'none';
    }
  });

  listPage();
}

loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  const listPageElement = document.querySelector('.listPage');
  listPageElement.innerHTML = ''; // Xóa các biểu tượng trang trước

  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement('li');
    newPage.innerText = i;

    if (i === thisPage) {
      newPage.classList.add('active');
    } else {
      newPage.classList.remove('active');
    }

    // Thêm trình lắng nghe sự kiện click và cuộn lên đầu khi nhấp
    newPage.addEventListener('click', () => {
      thisPage = i;
      loadItem();
      window.scrollTo(0, 770); // Cuộn đến đầu trang
    });

    listPageElement.appendChild(newPage);
  }
}

// Hàm changePage không còn cần thiết
const scrollUpIcon = document.getElementById('scrollUpIcon');
const scrollDownIcon = document.getElementById('scrollDownIcon');
const scrollToPosition = 730; // Vị trí cuộn theo pixel (ví dụ: 500px từ đầu trang)

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



// js box hiện ra khi scroll
const boxes = document.querySelectorAll('.box');
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

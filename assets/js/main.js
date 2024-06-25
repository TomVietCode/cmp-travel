// Footer
const footer = document.querySelector("footer")
if(footer){
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-left">
        <img src="./assets/images/header/logo-removebg-preview.png" alt="Logo" class="footer-logo" />
        <p class="footer-text">Travel helps companies manage payments easily.</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-facebook-messenger"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fas fa-infinity"></i></a>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="aboutus.html">About us</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Destination</h3>
          <ul>
            <li><a href="detail.html?id=35">Maldives</a></li>
            <li><a href="detail.html?id=36">Switzerland</a></li>
            <li><a href="detail.html?id=27">Venice</a></li>
            <li><a href="detail.html?id=2">Toronto</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-subscribe">
        <h3>Join Our Newsletter</h3>
        <div class="email-box">
          <img src="./assets/images/homepage/footer/email.png" alt="Email Icon" />
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <p>* Will send you weekly updates for your better tour packages.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright @ CMP-2024. All Rights Reserved.</p>
    </div>
  `
}
// End Footer

// Scroll Event
const scrollUpIcon = document.getElementById('scrollUpIcon');
const scrollDownIcon = document.getElementById('scrollDownIcon');
const scrollToPosition = window.innerHeight; // Vị trí cuộn theo pixel (ví dụ: 500px từ đầu trang)

let isAtScrollDownPosition = false; // Biến cờ để theo dõi vị trí cuộn
if(scrollDownIcon && scrollUpIcon){
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
}
// End Scroll Event

// Form Submit
const buttonSubmit = document.querySelector("button[type=submit]")
if(buttonSubmit){
  const formControl = document.querySelectorAll(".form-control[required]")
  console.log(formControl)
  const formControlArray = Array.from(formControl)
  buttonSubmit.addEventListener("click", (e) => {
    const checkValid = formControlArray.some(input => input.value == "")
    const alertSuccess = document.querySelector(".alert-success")
    const alertFail = document.querySelector(".alert-danger")
    
    if(checkValid){
      alertSuccess.classList.add("d-none")
      alertFail.classList.remove("d-none")
    }else{
      alertFail.classList.add("d-none")
      alertSuccess.classList.remove("d-none")
      formControlArray.forEach(input => input.value = "")

      e.preventDefault()
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 4000);
    }
  })
}
// End Form Submit
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
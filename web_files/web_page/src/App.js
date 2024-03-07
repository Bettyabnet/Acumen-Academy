import React, { useEffect } from 'react';
import './style.css';

function App() {
  useEffect(() => {
    const registerForm = document.querySelector(".register-form");
    const loginForm = document.querySelector(".login-form");
    const registerButton = document.querySelector("#register-button");
    const loginButton = document.querySelector("#login-btn");
  
    const handleRegisterButtonClick = () => {
      registerForm.classList.add("active");
      loginForm.classList.remove("active");
    };
  
    const handleLoginButtonClick = () => {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    };
  
    registerButton.addEventListener("click", handleRegisterButtonClick);
    loginButton.addEventListener("click", handleLoginButtonClick);
  
    return () => {
      registerButton.removeEventListener("click", handleRegisterButtonClick);
      loginButton.removeEventListener("click", handleLoginButtonClick);
    };
  }, []);  

  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic here

    event.target.email.value = '';
    event.target.password.value = '';
  };
 
  const handleRegistration = (event) => {
    event.preventDefault();
    
    const { name, email, password, grade } = event.target.elements;

    console.log(name.value, email.value, password.value, grade.value);

    console.log(name, email, password, grade);
    
    // Perform registration logic here
    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.password.value = '';
    event.target.elements.grade.value = '';
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo_acumen.png" alt="logo" />
          <h1>CUMEN ACADEMY</h1>
        </div>
        <nav class ="navbar">
          <a href="#home" class="hover-underline">Home</a>
          <a href="#about" class="hover-underline">About</a>
          <a href="#courses" class="hover-underline">Courses</a>
          <a href="#teacher" class="hover-underline">Teachers</a>
          <a href="#blog" class="hover-underline">Blog</a>
          <a href="#contact" class="hover-underline">Contact</a>
        </nav>
    
        <div class="icons">
          <div id="login-btn" class="fas fa-user"></div>
          <div id="menu-btn" class="fas fa-bars"></div>
        </div>
        </header>
        <body>
          <div class="main">
            <div class="register-form slide-form">
              <form onSubmit={handleRegistration}>
                <label htmlFor="chk" aria-hidden="true">Student Registration Form</label>
                <input type="text" name="name" placeholder="First Name" required="" />
                <input type="text" name="name" placeholder="Middle Name" required="" />
                <input type="text" name="name" placeholder="Last Name" required="" />
                <input type="date" name="birthdate" placeholder="Birthdate" />
                <select id="gender" name="gender" required>
                  <option value="">Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </select>
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" id="password" name="password" placeholder="Create Password" required />
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                <select id="grade" name="grade" required>
                  <option value="">Select Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                </select>
                <button type="submit">REGISTER</button>
              </form>
            </div>
             
            <div class="login-form slide-form">
              <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" required="" />
                <input type="password" name="pswd" placeholder="Password" required="" />
                <div class="remember">
                  <input type="checkbox" name="" id="remember" />
                  <label for="remember-me"> Remember me</label>
                </div>
                <button type="submit">LOGIN NOW</button>
              </form>
            </div>
                
            <div class="buttons">
              <button id="register-button">Join Us</button>
            </div>
          </div>
        
              
          <section class="home" id="home">
            <div class="content">
              <h3> Unlocking Knowledge, Empowering Minds: 
                  Your Path to Digital Enlightenment.</h3>
              <p>Our digital education platform is dedicated to supporting underprivileged communities in 
                their quest for knowledge and empowerment. At Acumen Academy, we strive to make learning 
                easy, accessible, and effective for all.</p>
              <div class="buttons">
                <a href="learn" class="btn">
                  <button type="Learn">Learn more</button>
                </a>
              </div>
            </div>
          </section>
              
          <section class="about" id="about">
            <div class="container">
              <figure class="about-img">
                <img src="assets/1.jpg" alt="" />
              </figure>
              <figure class="abt">
                <img src="assets/kid3.jpg" alt="" class="abt" />
              </figure>
                <h1 class="heading">About us</h1>
                <h3 class="moto">Education for all!</h3>
                <p class="text">At Acumen Academy, we are passionate about bridging the educational gap and providing opportunities for underprivileged communities to thrive. Our mission is to empower individuals through education, unlocking a world of possibilities and shaping a brighter future for all.
                  At Acumen Academy, we are also deeply committed to fostering partnerships and collaborations with like-minded organizations, policymakers, and stakeholders. By working together, we can amplify our impact, advocate for systemic change, and drive social transformation on a broader scale.</p>
              
              <div class="buttons read-more-button">
                <a href="read" class="btn">
                  <button type="button">Read more</button>
                </a>
              </div>
            </div>
        </section>
      


      <section class="courses">

        <h1 class="heading">Subjects </h1>
        
        <div class="box-container">

          <div class="book">
            <img src="assets/image.png" alt="" />
          </div>
      
        </div>
      </section>

</body>
    </div>
  );
}

export default App;
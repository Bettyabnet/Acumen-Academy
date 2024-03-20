import React, { useEffect } from 'react';
import './style.css';

function App() {
  // Handles side effects for register and login forms, such as attaching click listeners
  useEffect(() => {
    // Select DOM elements
    const registerForm = document.querySelector(".register-form");
    const loginForm = document.querySelector(".login-form");
    const registerButton = document.querySelector("#register-button");
    const loginButton = document.querySelector("#login-btn");
    
    // Function executed when the register button is clicked
    const handleRegisterButtonClick = () => {
      registerForm.classList.add("active");
      loginForm.classList.remove("active");
    };
    
    // Function executed when the login button is clicked
    const handleLoginButtonClick = () => {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    };
  
    registerButton.addEventListener("click", handleRegisterButtonClick);
    loginButton.addEventListener("click", handleLoginButtonClick);
    
    // Clean up event listeners on unmount
    return () => {
      registerButton.removeEventListener("click", handleRegisterButtonClick);
      loginButton.removeEventListener("click", handleLoginButtonClick);
    };
  }, []); // Empty dependency array means the effect runs once on mount and clean up on unmount 


  // Handle submission of the registration form
  const handleLogin = (event) => {
    event.preventDefault();

    // Perform login logic 

    event.target.email.value = '';
    event.target.password.value = '';
  };
 
  const handleRegistration = (event) => {
    event.preventDefault();
    
    const { name, email, password, grade } = event.target.elements;

    console.log(name.value, email.value, password.value, grade.value);

    console.log(name, email, password, grade);
    
    // Perform registration logic 
    event.target.elements.name.value = '';
    event.target.elements.email.value = '';
    event.target.elements.password.value = '';
    event.target.elements.grade.value = '';
  };

  return (
    <div>
      {/* Application header */}
      <header className="header">
        {/* Logo container */}
        <div className="logo">
          <img src="logo_acumen.png" alt="logo" />
          <h1>CUMEN ACADEMY</h1>
        </div>
         {/* Navigation bar */}
        <nav class ="navbar">
          <a href="#home" class="hover-underline">Home</a>
          <a href="#about" class="hover-underline">About</a>
          <a href="#Courses" class="hover-underline">Courses</a>
          <a href="#videos" class="hover-underline">videos</a>
          <a href="#blog" class="hover-underline">Blog</a>
          <a href="#assignments" class="hover-underline">Assignments</a>
          
        </nav>

        {/* Container holding icons */}
        <div class="icons">
          <div id="login-btn" class="fas fa-user"></div>
          <div id="menu-btn" class="fas fa-bars"></div>
        </div>
        </header>
         {/* Main content area */}
        <body>
          <div class="main">
            {/* Register form container */}
            <div class="register-form slide-form">
              <form onSubmit={handleRegistration}>
                {/* Input fields for the registration form */}
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
                {/* Button submitting the registration form */}
                <button type="submit">REGISTER</button>
              </form>
            </div>
             
            {/* Login form container */}
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

            {/* Container housing buttons */}    
            <div class="buttons">
              <button id="register-button">Join Us</button>
            </div>
          </div>
        
          {/*Section for homepage */}
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
        
          {/*Section for About Us page */}
          <section class="about" id="about">
            <div class="container">
              <figure class="about-img">
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
    
         
         {/*Section listing available courses */}
         <section class="Courses" id="Courses">
            <h1 class="heading">Courses</h1>
              <div>
                <ul>
                    <li>
                        <h3>ENGLISH</h3>
                        <p>Effective communication is the key to success in any endeavor. This English course will help you develop strong reading, writing, and speaking skills. You'll explore various literary works, learn proper grammar and composition techniques, and enhance your ability to express yourself clearly and persuasively. </p>
                    </li>
                    <li>
                        <h3>MATHS</h3>
                        <p>Mathematics is the language of the universe, and this course will equip you with the essential mathematical skills needed to understand and solve complex problems.</p>
                    </li>
                    <li>
                        <h3>ICT</h3>
                        <p>In today's digital age, technology plays a crucial role in almost every aspect of our lives. The ICT course will introduce you to the fundamentals of computer systems, software applications, and digital communication technologies. </p>
                    </li>
                    <li>
                        <h3>INTEGRATED SCIENCE</h3>
                        <p>Science is the pursuit of knowledge about the natural world. The Integrated Science course combines elements of biology, chemistry, physics, and earth science, providing you with a comprehensive understanding of scientific principles and their interconnections. </p>
                    </li>
                    <li>
                        <h3>SOCIAL STUDIES</h3>
                        <p>Understand the world around you and develop a well-rounded perspective on society, culture, and historical events. The Social Studies course covers a range of disciplines, including history, geography, economics, and political science.</p>
                    </li>
                    
                  </ul>
                    <h2 class="enrollh">Enroll now and start learning today!</h2>
                    <div class="buttons enroll-button">
                    <a href="enroll" class="btn">
                      <button type="enroll">Enroll Now</button>
                    </a>
                    </div>
                </div>
           </section>

            {/*Section introducing video lessons feature */}
            <section class="videos" id="videos">
            <h3 class="heading">videos</h3>
            <div class="video">
            <h1>Unlock the Power of Video Learning!</h1>
              <h1>🎥 Engaging Video Content for Every Course! 📚</h1>
                <ul>
                  <li>🌟 Visualize Concepts.</li>
                  <li>🎓 Comprehensive Course Coverage.</li>
                  <li>📈 Flexible Learning.</li>
                  <li>💡 Interactive Learning Tools.</li>
                  <li>🌐 Join a Thriving Community.</li>
                  <li>🏆 Achieve Your Potential.</li>
                </ul>
              <p>🎓 Join Acumen Academy today and unlock a world of knowledge and growth through our captivating video content. Visit our website or download our app to start your video learning adventure.</p>
              </div>
                <div class="video-container">
                  <ul>
                    <li><vid>video 1</vid></li>
                    <li><vid>video 2</vid></li>
                    <li><vid>video 3</vid></li>
                    <li><vid>video 4</vid></li>
                    <li><vid>video 5</vid></li>
                    <li><vid>video 6</vid></li>
                  </ul>
                </div>
                </section>

            {/* Section featuring blog posts */}
            <section class="blog" id="blog">
              <h1 class="heading">Blog</h1>
              <div class="blogpost">
                  <h2>Empowering Underprivileged Students Through Digital Education</h2>
                  <p>Introducing Acumen Academy, our digital education platform designed to uplift underprivileged students in grades 1 to 6. With a focus on accessibility and engagement, we provide a range of services to support their educational journey.</p>
                  <p>Through our user-friendly mobile application, students can easily register and access grade-specific video tutorials, assignments, quizzes, and an extensive library of books. With just a few taps, learning becomes interactive and exciting.</p>
                  <p>At Acumen Academy, we believe in equal opportunities for quality education. Join us in our mission to empower underprivileged students and create a brighter future for all.</p>
                  <p class="author">Posted by Acumen Academy</p>
                </div>
            </section>

            {/*Testimonials section */}
            <section class="testimonials" id="testimonials">
              <h2 class="heading">Testimonials</h2>
              <div class="testimonals">
                <div class="testimonial">
                  <div class="testimonial-content">
                <blockquote>
                  <p>"Acumen Academy's digital education platform has revolutionized learning for underprivileged students. As an educator, I have witnessed firsthand how this platform has enhanced student engagement and provided them with valuable resources. The mobile app makes it accessible for students to learn anytime, anywhere. Acumen Academy is a beacon of hope, bridging the educational gap and empowering students to reach their full potential."</p>
                  <cite>- Mr. Smith, Teacher</cite>
                  <div class="img1"></div>
                </blockquote>
                <blockquote>
                  <p>"Acumen Academy is a game-changer for our community. The platform's focus on providing quality education to underprivileged students is commendable. The video tutorials, assignments, and quizzes have helped our students develop essential skills and gain confidence in their abilities. The library of books has expanded their knowledge and sparked a love for reading. Acumen Academy is transforming education and making a lasting impact on our community."</p>
                  <cite>- Mr. Ossai, Community Leader</cite>
                  <div class="img2"></div>
                </blockquote>
                <blockquote>
                  <p>"I cannot express how grateful I am for Acumen Academy. As a parent from an underprivileged community, I always worried about my child's access to quality education. But thanks to Acumen Academy's digital platform, my child now has access to video tutorials, assignments, and quizzes that have transformed their learning experience. The convenience of the mobile app makes it even better. Thank you, Acumen Academy, for empowering our children and giving them a brighter future!"</p>
                  <cite>- Maria S., Parent</cite>
                  <div class="img3"></div>
                </blockquote>
              </div>
              </div>
              </div>
            </section>

            {/*Assignment section*/}
            <section class="assignments" id="assignments">
              <div class="assignment-container">
              <h3 class="heading">Assignments</h3>
                <h1>Your Gateway to Comprehensive Assignments for Every Course!</h1>
                <p>📚 English, Maths, Integrated Science, Social Studies, and ICT! 🖥️</p>
                <p>Are you ready to enhance your learning experience? Look no further! Acumen Academy brings you a vast collection of meticulously curated assignments for each of your courses, ensuring a comprehensive and engaging learning journey.</p>
                <ul>
                  <li>🔒 Unlock Your Potential!</li>
                  <li>🌟 Master Every Subject!</li>
                  <li>📈 Track Your Progress!</li>
                  <li>🌐 Anytime, Anywhere!</li>
                </ul>
                <h3>🎓 Join the Acumen Academy community today and unlock a world of knowledge!</h3>
                  <p>Visit our website or download our app to embark on your learning adventure.</p>
                <p>Don't miss out on this opportunity to excel in your studies!</p>
                </div>
              
            </section>
          
        </body>

        {/*Application footer*/}
        <footer className="footer">
        <nav class="navbar">
            <a href="about">About Us</a>
            <a href="privacy">Privacy Policy</a>
            <a href="terms">Terms of Use</a>
            <a href="contact">Contact</a>
            <a href="blogt">Blog</a>
            <a href="testimonials">Testimonials</a>
        </nav>
        <p>&copy; 2024 Acumen Academy</p>
      </footer>
    </div>
  );
}

export default App;
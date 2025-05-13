// import React from "react";
// import studentHouse from "../assets/images/student-house.jpg";
// import "./services.css";// تأكد من وجود ملف CSS في نفس المسار

// const Services = () => {
//   return (
//     <>
//       {/* Slide 1 */}
//       <header className="hero">
//         {/* <nav className="navbar">
//           <div className="logo">
//             Swap<span>Learn</span>
//           </div>
//           <ul className="nav-links">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About Us</a></li>
//             <li className="active"><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </nav> */}

//         <div className="hero-content">
//           <div className="left">
//             <h1>Empowering Students with Housing & Knowledge Exchange</h1>
//             <p>
//               SwapLearn is a platform designed to help university students find
//               suitable housing while also facilitating a knowledge exchange system
//               based on mutual benefit.
//             </p>
//             <button>Get Started</button>
//           </div>

//           <div className="middle">
//           <img src={studentHouse} alt="Student House" />
//           </div>

//           <div className="right">
//             <div className="box orange-box">
//               <i className="fas fa-quote-left fa-2x"></i>
//               <p>
//                 <strong>
//                   "Education and collaboration build stronger communities."
//                 </strong>
//               </p>
//             </div>
//             <div className="box">
//               <i className="fas fa-home fa-2x"></i>
//               <h4>Easy Housing Solutions</h4>
//               <p>Find and share housing effortlessly with verified listings.</p>
//             </div>
//             <div className="box">
//               <i className="fas fa-book-open fa-2x"></i>
//               <h4>Knowledge Exchange</h4>
//               <p>Offer and receive free courses to enhance your skills.</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Slide 2 */}
//       <section className="services">
//         <h2>Choose the Service You Need</h2>
//         <div className="service-cards">
//           <div className="card">
//             <i className="fas fa-building fa-3x"></i>
//             <h3>Student Housing</h3>
//             <p>
//               Easily search for affordable and verified student accommodations.
//             </p>
//             <button>Click Here</button>
//           </div>
//           <div className="card">
//             <i className="fas fa-chalkboard-teacher fa-3x"></i>
//             <h3>Knowledge Exchange</h3>
//             <p>Share your skills and learn from other students for free.</p>
//             <button>Click Here</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;







// // src/pages/Services.jsx
// import React from "react";
// import studentHouse from "../assets/images/student-house.jpg";
// import "./services.css"; // مسار دقيق إلى ملف CSS

// const Services = () => {
//   return (
//     <>
//       <header className="hero">
//         <div className="hero-content">
//           <div className="left">
//             <h1>Empowering Students with Housing & Knowledge Exchange</h1>
//             <p>
//               SwapLearn is a platform designed to help university students find
//               suitable housing while also facilitating a knowledge exchange system
//               based on mutual benefit.
//             </p>
//             <button>Get Started</button>
//           </div>

//           <div className="middle">
//             <img src={studentHouse} alt="Student House" />
//           </div>

//           <div className="right">
//             <div className="box orange-box">
//               <i className="fas fa-quote-left fa-2x"></i>
//               <p>
//                 <strong>
//                   "Education and collaboration build stronger communities."
//                 </strong>
//               </p>
//             </div>
//             <div className="box">
//               <i className="fas fa-home fa-2x"></i>
//               <h4>Easy Housing Solutions</h4>
//               <p>Find and share housing effortlessly with verified listings.</p>
//             </div>
//             <div className="box">
//               <i className="fas fa-book-open fa-2x"></i>
//               <h4>Knowledge Exchange</h4>
//               <p>Offer and receive free courses to enhance your skills.</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <section className="services">
//         <h2>Choose the Service You Need</h2>
//         <div className="service-cards">
//           <div className="card">
//             <i className="fas fa-building fa-3x"></i>
//             <h3>Student Housing</h3>
//             <p>Easily search for affordable and verified student accommodations.</p>
//             <button>Click Here</button>
//           </div>
//           <div className="card">
//             <i className="fas fa-chalkboard-teacher fa-3x"></i>
//             <h3>Knowledge Exchange</h3>
//             <p>Share your skills and learn from other students for free.</p>
//             <button>Click Here</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Services;




// import React from "react";
// //import { FaBuilding, FaChalkboardTeacher, FaCheckCircle, FaShieldAlt, FaHandshake, FaUsers } from "react-icons/fa";
// import "./services.css";
// import { 
//   FaBuilding, 
//   FaChalkboardTeacher, 
//   FaCheckCircle, 
//   FaShieldAlt, 
//   FaHandshake, 
//   FaUsers
 
   
// } from "react-icons/fa";
// import { FaSearch, FaGraduationCap } from "react-icons/fa";

// const Services = () => {
//   return (
//     <div className="services-container">
//       {/* Header */}
//       <div className="services-header">
//         <h1>Choose the Service You Need</h1>
//         <p>
//           SwapLearn offers comprehensive solutions for students to find housing and 
//           exchange knowledge in one unified platform.
//         </p>
//       </div>

//       {/* Service Cards */}
//       <div className="service-cards">
//         <div className="service-card">
//           <div className="service-icon">
//             <FaBuilding />
//           </div>
//           <h3>Student Housing</h3>
//           <p>
//             Easily search for affordable and verified student accommodations near 
//             your university with our trusted network of landlords.
//           </p>
//           <button className="service-btn">Explore Housing</button>
//         </div>

//         <div className="service-card highlight">
//           <div className="service-icon">
//             <FaChalkboardTeacher />
//           </div>
//           <h3>Knowledge Exchange</h3>
//           <p>
//             Share your skills and learn from other students through our innovative 
//             peer-to-peer learning platform - completely free.
//           </p>
//           <button className="service-btn">Start Learning</button>
//         </div>
//       </div>

//       {/* Features Section */}
//       {/* <div className="features">
//         <h2>Why Choose SwapLearn?</h2>
//         <div className="feature-grid">
//           <div className="feature-item">
//             <div className="feature-icon">
//               <FaCheckCircle />
//             </div>
//             <div className="feature-content">
//               <h4>Verified Listings</h4>
//               <p>All housing options are carefully vetted for your safety.</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <div className="feature-icon">
//               <FaShieldAlt />
//             </div>
//             <div className="feature-content">
//               <h4>Secure Platform</h4>
//               <p>Your data and transactions are always protected.</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <div className="feature-icon">
//               <FaHandshake />
//             </div>
//             <div className="feature-content">
//               <h4>Community Driven</h4>
//               <p>Built by students, for students.</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <div className="feature-icon">
//               <FaUsers />
//             </div>
//             <div className="feature-content">
//               <h4>24/7 Support</h4>
//               <p>Our team is always ready to help you.</p>
//             </div>
//           </div>
//         </div>

//       </div> */}



      
// <div className="feature-grid">
//   <div className="feature-item">
//     <div className="feature-icon">
//       <FaCheckCircle />
//     </div>
//     <div className="feature-content">
//       <h4>Verified Listings</h4>
//       <p>All housing options are carefully vetted for your safety.</p>
//     </div>
//   </div>

//   <div className="feature-item">
//     <div className="feature-icon">
//       <FaShieldAlt />
//     </div>
//     <div className="feature-content">
//       <h4>Secure Platform</h4>
//       <p>Your data and transactions are always protected.</p>
//     </div>
//   </div>

//   <div className="feature-item">
//     <div className="feature-icon">
//       <FaHandshake />
//     </div>
//     <div className="feature-content">
//       <h4>Community Driven</h4>
//       <p>Built by students, for students.</p>
//     </div>
//   </div>

//   <div className="feature-item">
//     <div className="feature-icon">
//       <FaUsers />
//     </div>
//     <div className="feature-content">
//       <h4>24/7 Support</h4>
//       <p>Our team is always ready to help you.</p>
//     </div>
//   </div>

//   {/* الفيتشر الجديد 1: بحث متقدم */}
//   <div className="feature-item">
//     <div className="feature-icon blue-icon">
//       <FaSearch />
//     </div>
//     <div className="feature-content">
//       <h4>Advanced Search</h4>
//       <p>Find exactly what you need with our powerful filters and search tools.</p>
//     </div>
//   </div>

//   {/* الفيتشر الجديد 2: شهادات تعليمية */}
//   <div className="feature-item">
//     <div className="feature-icon purple-icon">
//       <FaGraduationCap />
//     </div>
//     <div className="feature-content">
//       <h4>Learning Certificates</h4>
//       <p>Earn recognition for your knowledge sharing achievements.</p>
//     </div>
//   </div>
// </div>
// {/* التفسير للفيتشرين  */}
//     </div>
//   );
// };

// export default Services;








import React from "react";
import { 
  FaBuilding, 
  FaChalkboardTeacher, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaHandshake, 
  FaUsers,
  FaSearch,
  FaGraduationCap
} from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Empowering Students with Housing & Knowledge Exchange</h1>
          <p>
            SwapLearn helps university students find safe, affordable housing while 
            facilitating knowledge sharing between peers.
          </p>
        </div>
      </section>

      {/* Main Services Cards */}
      <section className="main-services">
        <div className="services-container">
          <h2>Our Core Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Student Housing</h3>
              <p>
                Find verified student accommodations near your university with our 
                trusted network of landlords and property managers.
              </p>
              <button className="service-btn">Explore Housing</button>
            </div>

            <div className="service-card highlight">
              <div className="service-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>Knowledge Exchange</h3>
              <p>
                Share your skills and learn from other students through our 
                innovative peer-to-peer learning platform.
              </p>
              <button className="service-btn">Start Learning</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose SwapLearn?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h4>Verified Listings</h4>
              <p>All housing options are carefully vetted for your safety.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h4>Secure Platform</h4>
              <p>Your data and transactions are always protected.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h4>Community Driven</h4>
              <p>Built by students, for students.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h4>24/7 Support</h4>
              <p>Our team is always ready to help you.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue-icon">
                <FaSearch />
              </div>
              <h4>Advanced Search</h4>
              <p>Powerful filters to find exactly what you need.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple-icon">
                <FaGraduationCap />
              </div>
              <h4>Learning Certificates</h4>
              <p>Get recognition for your knowledge sharing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
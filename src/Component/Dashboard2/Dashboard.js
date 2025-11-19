


import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 600) setMenuOpen(false);
    };
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        html,body{
          width:100%;
          height:100%;
          padding:0;
          margin:0;
          overflow-x:hidden; 
          background:#ffffff;
        }

        /* ROOT FIX – white corner bug fix */
        #root, .container{
          margin:0 !important;
          padding:0 !important;
          width:100% !important;
          max-width:100% !important;
          border:none !important;
          border-radius:0 !important;
          background:#ffffff !important;
        }

        .container{
          width:100%;
          height:auto;
        }

        /* HEADER */
        .header{
          position:fixed;
          top:0;
          left:0;
          width:100vw;
          padding:12px 18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#ffffff;
          box-shadow:0 2px 12px rgba(0,0,0,0.08);
          z-index:10000;
          border-radius:0 !important;
        }

        .logo{
          font-size:21px;
          font-weight:700;
          color:#ff2e63;
          text-transform:uppercase;
          white-space:nowrap;
        }

        .nav{
          display:flex;
          gap:20px;
        }

        .nav a{
          color:#333;
          font-size:15px;
          text-decoration:none;
          font-weight:500;
          transition:0.3s;
        }
        .nav a:hover{
          color:#ff2e63;
          transform:translateY(-3px);
        }

        .menu-btn{
          display:none;
          font-size:32px;
          color:#ff2e63;
          cursor:pointer;
        }

        /* MOBILE NAV */
        .mobile-nav{
          display:none;
        }
        .mobile-nav.open{
          display:flex;
          flex-direction:column;
          width:100%;
          position:fixed;
          top:55px;
          left:0;
          background:white;
          text-align:center;
          padding:20px 0;
          gap:18px;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
          animation:drop 0.3s ease-out;
          z-index:9999;
        }
        @keyframes drop{
          from{opacity:0;transform:translateY(-10px);}
          to{opacity:1;transform:translateY(0);}
        }

        .mobile-nav a{
          font-size:18px;
          font-weight:600;
          text-decoration:none;
          color:#444;
        }
        .mobile-nav a:hover{
          color:#ff2e63;
        }

        @media(max-width:780px){
          .nav{display:none;}
          .menu-btn{display:block;}
          .header{padding:10px 14px;}
        }

        /* HERO */
        .hero{
          height:100vh;
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          background:url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2') no-repeat center/cover;
          position:relative;
          padding:20px;
          margin-top:65px;
        }
        .hero::after{
          content:'';
          position:absolute;
          top:0;left:0;
          width:100%;height:100%;
          background:rgba(0,0,0,0.55);
        }
        .hero-content{
          position:relative;
          z-index:2;
          text-align:center;
          max-width:900px;
          color:white;
        }
        .hero-content h1{
          font-size:42px;
          font-weight:800;
          background:linear-gradient(45deg,#ff2e63,#ff8ba7,#ffffff);
          -webkit-background-clip:text;
          color:transparent;
        }
        @media(max-width:450px){
          .hero-content h1{font-size:32px;}
        }
        .hero-content p{
          font-size:17px;
          margin-top:10px;
          color:#f1f1f1;
        }

        .btn{
          margin-top:20px;
          padding:13px 30px;
          border:none;
          font-size:17px;
          border-radius:40px;
          color:#fff;
          background:#ff2e63;
          cursor:pointer;
          transition:0.3s;
        }
        .btn:hover{
          background:#ff4d7a;
          transform:scale(1.08);
        }

        /* STATS */
        .stats{
          padding:80px 30px;
          display:flex;
          justify-content:space-evenly;
          text-align:center;
          flex-wrap:wrap;
          gap:25px;
        }
        .stat-box h2{
          font-size:34px;
          color:#ff2e63;
        }
        .stat-box p{
          font-size:16px;
          color:#555;
        }

        /* SERVICES */
        .services{padding:110px 30px;text-align:center;}
        .title{font-size:38px;color:#ff2e63;font-weight:700;}
        .sub{font-size:16px;color:#777;margin-top:8px;margin-bottom:40px;}

        .service-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:30px;
        }

        .box{
          background:white;
          padding:22px;
          border-radius:20px;
          border:1px solid #eee;
          text-align:center;
          transition:0.3s;
          box-shadow:0 4px 12px rgba(0,0,0,0.06);
        }
        .box:hover{
          transform:translateY(-10px);
          border-color:#ff2e63;
          box-shadow:0 8px 20px rgba(255,46,99,0.25);
        }
        .box img{
          width:100%;
          height:170px;
          object-fit:cover;
          border-radius:15px;
          margin-bottom:15px;
        }

        /* PORTFOLIO */
        .portfolio{padding:110px 30px;background:#fafafa;}
        .portfolio-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:22px;
          margin-top:40px;
        }
        .port-img{
          width:100%;
          border-radius:15px;
          transition:0.3s;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
        }
        .port-img:hover{transform:scale(1.05);}

        /* ABOUT */
        .about{
          padding:110px 30px;
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:35px;
        }
        .about img{
          width:380px;
          border-radius:20px;
          box-shadow:0 8px 25px rgba(255,46,99,0.3);
        }
        .about-text{flex:1;}
        .about-text h2{
          font-size:36px;
          color:#ff2e63;
        }
        .about-text p{
          font-size:16px;
          color:#555;
          margin-top:10px;
          line-height:1.8;
        }

        /* CONTACT */
        .contact{
          padding:100px 30px;
          background:linear-gradient(135deg,#ffe6ef,#ffffff,#ffe1f1);
        }
        .contact-container{
          display:flex;
          gap:30px;
          flex-wrap:wrap;
          background:white;
          padding:30px;
          border-radius:20px;
          box-shadow:0 4px 15px rgba(0,0,0,0.15);
        }
        .map{flex:1;}
        .map iframe{
          width:100%;
          height:330px;
          border:0;
          border-radius:15px;
        }

        .form{flex:1;}
        .form input,.form textarea{
          width:100%;
          padding:12px;
          margin-bottom:16px;
          border-radius:10px;
          border:1px solid #ddd;
          font-size:15px;
        }
        .form textarea{
          height:130px;
          resize:none;
        }

        /* FOOTER */
        .footer{
          text-align:center;
          padding:20px;
          background:white;
          font-size:13px;
          color:#555;
          border-top:1px solid #eee;
        }
      `}</style>

      {/* HTML STRUCTURE */}
      <div className="container">

        {/* HEADER */}
        <header className="header">
          <h1 className="logo">SP Advertising</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </header>

        {/* MOBILE NAV */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Creative Advertising That Grows Your Brand</h1>
            <p>Digital marketing, branding, video ads, social media promotion — we build brands that stand out.</p>
            <button className="btn">Get Started</button>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stat-box"><h2>200+</h2><p>Brands Promoted</p></div>
          <div className="stat-box"><h2>350+</h2><p>Ad Campaigns</p></div>
          <div className="stat-box"><h2>98%</h2><p>Client Satisfaction</p></div>
        </div>

        {/* SERVICES */}
        <section className="services" id="services">
          <h2 className="title">Our Services</h2>
          <p className="sub">Premium advertising & branding solutions</p>

          <div className="service-grid">
            <div className="box">
              <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702" />
              <h3>Digital Marketing</h3>
              <p>High-performance ads for growth.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
              <h3>Brand Identity</h3>
              <p>Logos & brand kit creation.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
              <h3>Social Media Ads</h3>
              <p>Boost engagement & visibility.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" />
              <h3>Video Advertising</h3>
              <p>Cinematic ad productions.</p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="portfolio" id="portfolio">
          <h2 className="title">Our Projects</h2>
          <div className="portfolio-grid">
            <img className="port-img" src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980" />
            <img className="port-img" src="https://images.unsplash.com/photo-1557804506-669a67965ba0" />
            <img className="port-img" src="https://images.unsplash.com/photo-1522199710521-72d69614c702" />
            <img className="port-img" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1" />
          <div className="about-text">
            <h2>About SP Advertising</h2>
            <p>SP Advertising is a creative-focused agency delivering digital ad performance, branding excellence and video promotions that help businesses scale faster.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <h2 className="title">Contact Us</h2>

          <div className="contact-container">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5234759967443!2d81.6593468750379!3d21.250736780454734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd005c2f0f7b%3A0x868f353689bfd1ea!2sSP%20Advertising!5e0!3m2!1sen!2sin!4v1763554463514!5m2!1sen!2sin"></iframe>
            </div>

            <div className="form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message"></textarea>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </section>

        <footer className="footer">© 2025 SP Advertising Company. All Rights Reserved.</footer>
      </div>
    </>
  );
}

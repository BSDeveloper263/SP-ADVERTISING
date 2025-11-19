import React from "react";

export default function LandingPage() {
  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins',sans-serif;}
        body{background:#ffffff;color:#222;overflow-x:hidden;}
        .container{width:100%;height:auto;}

        /* HEADER */
        .header{
          position:fixed;top:0;left:0;width:100%;
          padding:20px 50px;
          display:flex;justify-content:space-between;align-items:center;
          background:#ffffff;
          box-shadow:0 2px 12px rgba(0,0,0,0.08);
          z-index:1000;
        }
        .logo{
          font-size:32px;font-weight:700;color:#ff2e63;
          letter-spacing:1px;text-transform:uppercase;
        }
        .nav{display:flex;gap:35px;}
        .nav a{
          color:#333;font-size:18px;text-decoration:none;font-weight:500;
          transition:0.3s;
        }
        .nav a:hover{color:#ff2e63;transform:translateY(-3px);}

        /* HERO */
        .hero{
          height:100vh;width:100%;
          display:flex;justify-content:center;align-items:center;
          background:url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2') no-repeat center/cover;
          position:relative;padding:20px;
        }
        .hero::after{
          content:'';position:absolute;top:0;left:0;width:100%;height:100%;
          background:rgba(0,0,0,0.55);
        }
        .hero-content{
          position:relative;z-index:2;text-align:center;max-width:900px;
          animation:fadeUp 1s ease forwards;
          color:white;
        }
        @keyframes fadeUp{
          from{opacity:0;transform:translateY(50px);}
          to{opacity:1;transform:translateY(0);}
        }
        .hero-content h1{
          font-size:65px;font-weight:800;margin-bottom:20px;
          background:linear-gradient(45deg,#ff2e63,#ff8ba7,#fff);
          -webkit-background-clip:text;color:transparent;
        }
        .hero-content p{
          font-size:22px;margin-bottom:30px;line-height:1.6;color:#f1f1f1;
        }
        .btn{
          padding:15px 40px;border:none;font-size:20px;
          border-radius:50px;color:#fff;
          background:#ff2e63;cursor:pointer;transition:0.3s;
        }
        .btn:hover{background:#ff4d7a;transform:scale(1.08);}

        /* STATISTICS */
        .stats{
          padding:100px 50px;display:flex;justify-content:space-around;
          text-align:center;background:#ffffff;
        }
        .stat-box h2{font-size:45px;color:#ff2e63;}
        .stat-box p{color:#555;font-size:18px;margin-top:5px;}

        /* SERVICES */
        .services{padding:120px 50px;text-align:center;background:white;}
        .title{
          font-size:48px;color:#ff2e63;font-weight:700;margin-bottom:10px;
        }
        .sub{font-size:18px;color:#777;margin-bottom:50px;}
        .service-grid{
          display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:40px;
        }

        .box{
          background:#ffffff;padding:30px;border-radius:20px;
          border:1px solid #eee;transition:0.3s;text-align:center;
          box-shadow:0 4px 12px rgba(0,0,0,0.06);
        }
        .box:hover{
          transform:translateY(-12px);
          border-color:#ff2e63;
          box-shadow:0 8px 20px rgba(255,46,99,0.25);
        }
        .box img{
          width:100%;height:200px;object-fit:cover;
          border-radius:15px;margin-bottom:20px;
        }
        .box h3{font-size:25px;color:#ff2e63;margin-bottom:10px;}
        .box p{color:#555;font-size:15px;line-height:1.7;}

        /* PORTFOLIO */
        .portfolio{
          padding:120px 50px;background:#fafafa;
        }
        .portfolio-grid{
          display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:35px;margin-top:40px;
        }
        .port-img{
          width:100%;border-radius:15px;transition:0.3s;
          box-shadow:0 4px 12px rgba(0,0,0,0.15);
        }
        .port-img:hover{transform:scale(1.05);}

        /* TESTIMONIALS */
        .testimonials{
          padding:120px 50px;text-align:center;background:#ffffff;
        }
        .review{
          background:#fff;padding:30px;border-radius:15px;
          border:1px solid #eee;width:80%;margin:0 auto;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }
        .review p{color:#444;font-size:17px;line-height:1.8;}
        .review h4{margin-top:15px;color:#ff2e63;font-size:20px;}

        /* ABOUT */
        .about{
          padding:120px 50px;
          display:flex;flex-wrap:wrap;align-items:center;gap:60px;
          background:white;
        }
        .about img{
          width:500px;border-radius:20px;
          box-shadow:0 8px 25px rgba(255,46,99,0.3);
        }
        .about-text{flex:1;}
        .about-text h2{
          font-size:45px;color:#ff2e63;margin-bottom:20px;
        }
        .about-text p{
          color:#555;font-size:17px;line-height:1.8;
        }

        /* CONTACT */
        .contact{
          padding:120px 50px;text-align:center;background:#fafafa;
        }
        .contact h2{font-size:40px;color:#ff2e63;margin-bottom:20px;}

        /* FOOTER */
        .footer{
          text-align:center;padding:25px;background:#ffffff;
          color:#666;font-size:14px;margin-top:40px;
          border-top:1px solid #eee;
        }

        /* RESPONSIVE */
        @media(max-width:768px){
          .header{padding:15px 20px;}
          .nav{gap:15px;}
          .hero-content h1{font-size:40px;}
          .stats{flex-direction:column;gap:30px;}
          .about{flex-direction:column;text-align:center;}
          .about img{width:100%;}
          .review{width:100%;}
        }
      `}</style>

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
        </header>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h1>Creative Advertising That Grows Your Brand</h1>
            <p>
              Digital marketing, branding, video ads, social media promotion,
              campaign management — we build brands that stand out.
            </p>
            <button className="btn">Get Started</button>
          </div>
        </section>

        {/* STATISTICS */}
        <div className="stats">
          <div className="stat-box">
            <h2>200+</h2>
            <p>Brands Promoted</p>
          </div>
          <div className="stat-box">
            <h2>350+</h2>
            <p>Ad Campaigns Completed</p>
          </div>
          <div className="stat-box">
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>
        </div>

        {/* SERVICES */}
        <section className="services" id="services">
          <h2 className="title">Our Services</h2>
          <p className="sub">Premium advertising & branding solutions</p>

          <div className="service-grid">
            <div className="box">
              <img src="https://images.unsplash.com/photo-1522199710521-72d69614c702" />
              <h3>Digital Marketing</h3>
              <p>High-performance ads for massive brand growth.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
              <h3>Brand Identity</h3>
              <p>Logo, brand kit & visual identity development.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
              <h3>Social Media Ads</h3>
              <p>Viral campaigns, reels & audience engagement.</p>
            </div>

            <div className="box">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0" />
              <h3>Video Advertising</h3>
              <p>Cinematic ad production for higher conversions.</p>
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

        {/* TESTIMONIALS */}
        <section className="testimonials">
          <h2 className="title">What Clients Say</h2>

          <div className="review">
            <p>
              "SP Advertising changed my business completely. Their marketing
              skills and creativity are next-level. Highly recommended!"
            </p>
            <h4>- Rajesh Sharma (Business Owner)</h4>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1" alt="about" />
          <div className="about-text">
            <h2>About SP Advertising</h2>
            <p>
              SP Advertising is a creative-focused performance agency.  
              From digital campaigns to video production, we craft ideas  
              that deliver real business results and unforgettable brand experiences.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <button className="btn">Reach Out Now</button>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          © 2025 SP Advertising Company. All Rights Reserved.
        </footer>

      </div>
    </>
  );
}



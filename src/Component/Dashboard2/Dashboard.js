import React, { useState, useEffect } from "react";

export default function ZomatoClone() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const exploreOptions = [ 
    {
      title: "Popular cuisines near me",
      content: "Biryani, Pizza, Chinese, Fast Food, South Indian, Ice Cream...",
    },
    {
      title: "Popular restaurant types near me",
      content: "Cafes, Quick Bites, Bars, Pubs, Sweet Shops, Bakeries...",
    },
    {
      title: "Top restaurant chains",
      content:
        "KFC, Domino’s, McDonald’s, Haldiram’s, Subway, Barbeque Nation...",
    },
    {
      title: "Cities we deliver to",
      content: "Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Jaipur...",
    },
  ];

  const foods = [
    {
      name: "Biryani",
      img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
    },
    {
      name: "Pizza",
      img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      name: "Veg Meal",
      img: "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg",
    },
    {
      name: "Thali",
      img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
      name: "Chicken",
      img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
  ];

  const brands = [
    {
      name: "KFC",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726677910.png",
    },
    {
      name: "Domino’s",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/752d731f93b94ffbde3fec28902e823a_1611254806.png",
    },
    {
      name: "Haldiram’s",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/9bda49aef895fd01560e8545a9ccf9c4_1604451253.png",
    },
    {
      name: "Satyam Bakery",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/3e522aba0323bee7aa3b27c360566c04_1605103065.png",
    },
    {
      name: "Burger King",
      img: "https://b.zmtcdn.com/data/brand_creatives/logos/37729068c556ece5401d2ecae201e6a31717181227.png",
    },
  ];

  const bestFoods = [
    {
      name: "Ramdev's Khana Kazana",
      img: "https://b.zmtcdn.com/data/pictures/1/21644991/2f898427bec12b216472ea620ee31ee5_o2_featured_v2.jpg",
      cuisine: "North Indian, Chinese",
      price: "₹100 for one",
      rating: "4.2",
      time: "22 min",
      offer: "50% OFF",
    },
    {
      name: "Domino's Pizza",
      img: "https://b.zmtcdn.com/data/pictures/8/18871678/99d44cef2ee253be0f44255516b4ce74_o2_featured_v2.jpg?output-format=webp",
      cuisine: "Pizza, Italian, Pasta, Fast Food",
      price: "₹200 for one",
      rating: "4.2",
      time: "24 min",
    },
    {
      name: "Big Hunger Ashoka Biryani",
      img: "https://b.zmtcdn.com/data/pictures/8/21225418/169a25c0fc8be6bb1b8c73d7f286c04d_o2_featured_v2.jpg",
      cuisine: "Biryani, Kebab, Chinese, North Indian",
      price: "₹400 for one",
      rating: "3.6",
      time: "21 min",
      offer: "50% OFF",
    },
    {
      name: "Haldiram's Sweet House",
      img: "https://b.zmtcdn.com/data/pictures/6/18824316/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg",
      cuisine: "Desserts, Mithai, Snacks",
      price: "₹150 for one",
      rating: "4.5",
      time: "15 min",
    },
    {
      name: "KFC Durg",
      img: "https://b.zmtcdn.com/data/pictures/6/18824316/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg",
      cuisine: "Fried Chicken, Fast Food, Burgers",
      price: "₹250 for one",
      rating: "4.1",
      time: "19 min",
      offer: "30% OFF",
    },
    {
      name: "Subway Bhilai",
      img: "https://b.zmtcdn.com/data/pictures/9/18824829/7c625d3cf93c53b66a47aa1cb9396020_o2_featured_v2.jpg",
      cuisine: "Healthy Food, Sandwiches, Beverages",
      price: "₹180 for one",
      rating: "4.3",
      time: "18 min",
    },
    {
      name: "Barbeque Nation",
      img: "https://api.barbequenation.com/sites/default/files/2025-02/Cover_3_11zon_13.jpg",
      cuisine: "BBQ, North Indian, Desserts",
      price: "₹500 for one",
      rating: "4.6",
      time: "30 min",
      offer: "50% OFF",
    },
    {
      name: "The Belgian Waffle Co.",
      img: "https://b.zmtcdn.com/data/pictures/1/18872621/12bf01ba16e38e0e17a1b696fccc443b_o2_featured_v2.jpg",
      cuisine: "Waffles, Ice Cream, Dessert",
      price: "₹120 for one",
      rating: "4.7",
      time: "12 min",
      offer: "40% OFF",
    },
    {
      name: "Burger King",
      img: "https://b.zmtcdn.com/data/pictures/5/21309535/bc853abd4e07ec8d96793c784c5c031d_o2_featured_v2.jpg",
      cuisine: "Burgers, Fast Food, Beverages",
      price: "₹200 for one",
      rating: "4.4",
      time: "20 min",
    },
  ];

  const localities = [
    { name: "Nehru Nagar", places: "414 places" },
    { name: "Durg", places: "185 places" },
    { name: "Bhilai Nagar Township", places: "133 places" },
    { name: "Kohka", places: "127 places" },
    { name: "Supela", places: "126 places" },
    { name: "Risali", places: "119 places" },
    { name: "Janjgiri", places: "49 places" },
    { name: "Light Industrial Area", places: "41 places" },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* ======== INTERNAL RESPONSIVE STYLES (same file, no external CSS) ======== */}
      <style>{`
        /* reset a few properties so inline styles behave consistently */
        * { box-sizing: border-box; }

        /* header adjustments */
        .zc-header { display: flex; align-items: center; justify-content: space-between;
          padding: 20px 50px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: #fff;
          position: sticky; top: 0; z-index: 10;
        }

        .zc-search-box { display:flex; align-items:center; background:#fff; border-radius:8px;
          border:1px solid #ddd; padding:10px 15px; gap:10px; width:500px;
        }
        .zc-search-box input { flex:1; border:none; outline:none; font-size:15px; background:transparent; }

        /* inspiration / brands */
        .zc-center-flex { display:flex; justify-content:center; flex-wrap:wrap; gap:40px; }
        .zc-circle { width:120px; height:120px; border-radius:50%; object-fit:cover; border:2px solid #eee; box-shadow:0 4px 10px rgba(0,0,0,0.1); }

        /* best foods grid */
        .zc-best-grid { display:flex; flex-wrap:wrap; gap:30px; justify-content:center; }
        .zc-card { width:360px; border-radius:12px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1); background:#fff; }
        .zc-card img { width:100%; height:230px; object-fit:cover; display:block; }

        /* localities grid */
        .zc-localities { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; }

        /* accordion */
        .zc-acc { border:1px solid #ddd; border-radius:10px; margin-bottom:10px; overflow:hidden; }
        .zc-acc-head { padding:18px 20px; background:#fff; display:flex; justify-content:space-between; align-items:center; cursor:pointer; font-weight:500; font-size:18px; }
        .zc-acc-body { background:#fafafa; padding:20px; border-top:1px solid #ddd; color:#555; }

        /* footer */
        .zc-footer { text-align:center; padding:30px; background:#f8f8f8; color:#888; }

        /* responsive */
        @media (max-width: 1024px) {
          .zc-header { padding:16px 30px; }
          .zc-search-box { width: 100%; max-width: 700px; }
        }

        @media (max-width: 768px) {
          .zc-header { flex-direction: column; align-items: flex-start; gap:12px; padding:14px 18px; }
          .zc-search-box { width:100%; }
          .zc-center-flex { gap:24px; }
          .zc-circle { width:100px; height:100px; }
          .zc-card { max-width:100%; width:100%; }
          .zc-card img { height:200px; }
          .zc-best-grid { gap:18px; padding:0 6px; }
          .zc-localities { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:14px; }
          .zc-acc-head { font-size:16px; padding:14px 16px; }
          .zc-acc-body { padding:14px 16px; font-size:14px; }
          .zc-header h2 { font-size:22px; }
        }

        @media (max-width: 480px) {
          .zc-header { padding:12px 12px; }
          .zc-search-box { padding:8px 10px; gap:8px; }
          .zc-circle { width:80px; height:80px; }
          .zc-card img { height:160px; }
          .zc-acc-head { font-size:15px; }
          .zc-acc-body { font-size:13px; padding:12px; }
          .zc-header h2 { font-size:20px; }
          .zc-footer { padding:20px; font-size:13px; }
        }
      `}</style>

      {/* ---------- Header ---------- */}
      <header className="zc-header" style={{}}>
        <h2 style={{ color: "#E23744", fontWeight: 700 }}>zomato</h2>
        <div className="zc-search-box" style={{}}>
          <span style={{ color: "#E23744" }}>📍 Durg Bhilai</span>
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            style={{}}
          />
        </div>
        <div style={{ display: "flex", gap: "20px", color: "#555" }}>
          <span style={{ cursor: "pointer" }}>Log in</span>
          <span style={{ cursor: "pointer" }}>Sign up</span>
        </div>
      </header>

      {/* ---------- Inspiration Section ---------- */}
      <section style={{ textAlign: "center", padding: "50px 0", background: "#fafafa" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
          Inspiration for your first order
        </h2>
        <div className="zc-center-flex">
          {foods.map((f, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img
                className="zc-circle"
                src={f.img}
                alt={f.name}
                style={{}}
              />
              <p style={{ marginTop: "10px", fontWeight: 500 }}>{f.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Top Brands ---------- */}
      <section style={{ textAlign: "center", padding: "50px 0" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>Top brands for you</h2>
        <div className="zc-center-flex">
          {brands.map((b, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img
                className="zc-circle"
                src={b.img}
                alt={b.name}
                style={{ background: "#fff" }}
              />
              <p style={{ marginTop: "10px", fontWeight: 500 }}>{b.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Best Food Section ---------- */}
      <section style={{ padding: "50px 80px", background: "#fafafa" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
          Best Food in Durg Bhilai
        </h2>
        <div className="zc-best-grid">
          {bestFoods.map((food, i) => (
            <div key={i} className="zc-card">
              <div style={{ position: "relative" }}>
                <img src={food.img} alt={food.name} />
                {food.offer && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      background: "#1a73e8",
                      color: "#fff",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontSize: "13px",
                      fontWeight: 500,
                    }}
                  >
                    {food.offer}
                  </span>
                )}
              </div>
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <p style={{ margin: 0 }}>{food.name}</p>
                  <span
                    style={{
                      background: "#388e3c",
                      color: "#fff",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  >
                    {food.rating}★
                  </span>
                </div>
                <p style={{ color: "#666", fontSize: "14px", margin: "5px 0" }}>
                  {food.cuisine}
                </p>
                <p style={{ color: "#000", fontWeight: 500, fontSize: "15px" }}>
                  {food.price}
                </p>
                <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>{food.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        
      {/* ---------- Popular Localities Section ---------- */}
      <section style={{ padding: "50px 80px", background: "#fff" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "25px" }}>
          Popular localities in and around <span style={{ color: "#E23744" }}>Durg Bhilai</span>
        </h2>
        <div className="zc-localities">
          {localities.map((loc, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                background: "#fff",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>{loc.name}</h3>
              <p style={{ color: "#777", margin: 0 }}>{loc.places}</p>
            </div>
          ))}
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              color: "#E23744",
              cursor: "pointer",
            }}
          >
            see more ⌄
          </div>
        </div>
      </section>

      {/* ---------- Explore Options Near Me (Accordion) ---------- */}
      <section style={{ padding: "50px 80px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>
          Explore options near me
        </h2>
        {exploreOptions.map((item, i) => (
          <div key={i} className="zc-acc">
            <div
              onClick={() => toggle(i)}
              className="zc-acc-head"
            >
              {item.title}
              <span
                style={{
                  fontWeight: "bold",
                  transform: active === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s",
                }}
              >
                ▼
              </span>
            </div>
            {active === i && <div className="zc-acc-body">{item.content}</div>}
          </div>
        ))}
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="zc-footer">
       
      </footer>
    </div>
  );
}

"use client";

const placementStats = [
  {
    title: "Participating Organisations",
    color: "#dc1f2f",
    icon: "fa-solid fa-handshake",
  },
  {
    title: "Highest Salary",
    color: "#55b5d8",
    icon: "fa-solid fa-money-bill-wave",
  },
  {
    title: "Average Salary",
    color: "#f5b51b",
    icon: "fa-solid fa-chart-line",
  },
];

export default function PlacementStats() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row g-4">
          {placementStats.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              key={index}
            >
              <div
                className="placement-card"
                style={{
                  background: item.color,
                }}
              >

                <div className="icon">
                  <i className={item.icon}></i>
                </div>

                <p>{item.title}</p>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`

        .heading {
          color:#c2185b;
          font-size:28px;
          font-weight:800;
        }

        .placement-card {
          height:270px;
          border-radius:6px;
          color:white;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          text-align:center;
          transition:.4s ease;
          box-shadow:0 15px 35px rgba(0,0,0,.15);
        }

        .placement-card:hover {
          transform:translateY(-10px);
          box-shadow:0 25px 50px rgba(0,0,0,.25);
        }

        .icon {
          width:85px;
          height:85px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:rgba(255,255,255,.18);
          border-radius:50%;
          margin-bottom:25px;
        }

        .icon i {
          font-size:45px;
          color:white;
        }

        p {
          font-size:28px;
          font-weight:800;
          max-width:280px;
          line-height:1.2;
          margin:0;
          color:white;

        }

        @media(max-width:768px){

          .placement-card {
            height:230px;
          }

          p {
            font-size:22px;
          }

        }

      `}</style>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    number: 100,
    suffix: "%",
    title: "Placement Assistance",
    color: "#0d6efd",
    icon: "🎯",
  },
  {
    number: 25,
    suffix: "+",
    title: "Recruiters On Campus",
    color: "#6610f2",
    icon: "🏢",
  },
  {
    number: 500,
    suffix: "+",
    title: "Students Trained",
    color: "#198754",
    icon: "🎓",
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
    color: "#fd7e14",
    icon: "⭐",
  },
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;

    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2 mb-3">
            Our Achievements
          </span>

          <h2 className="fw-bold display-5">
            Numbers That Speak For Themselves
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: 650 }}>
            Empowering students through industry-focused education, expert
            faculty, and outstanding placement opportunities.
          </p>
        </div>
        <div className="row g-4">
          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stat-card h-100">
                <div
                  className="icon-box"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                  }}
                >
                  {item.icon}
                </div>

                <h2 style={{ color: item.color }}>
                  <Counter end={item.number} suffix={item.suffix} />
                </h2>

                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        section {
          background: linear-gradient(135deg, #f8fbff, #eef5ff);
          position: relative;
          overflow: hidden;
        }

        section:before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(13, 110, 253, 0.06);
          top: -100px;
          left: -80px;
        }

        section:after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(102, 16, 242, 0.05);
          bottom: -80px;
          right: -70px;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          padding: 45px 25px;
          text-align: center;
          transition: 0.45s;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .stat-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #0d6efd, #6610f2, #20c997);
        }

        .stat-card:hover {
          transform: translateY(-14px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .icon-box {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          color: #fff;
          margin: auto auto 25px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          transition: 0.4s;
        }

        .stat-card:hover .icon-box {
          transform: rotate(12deg) scale(1.12);
        }

        h2 {
          font-size: 58px;
          font-weight: 800;
          margin-bottom: 12px;
          line-height: 1;
          text-shadow: 0 8px 20px rgba(13, 110, 253, 0.15);
        }

        p {
          font-size: 18px;
          color: #6c757d;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .stat-card {
            padding: 35px 20px;
          }

          .icon-box {
            width: 75px;
            height: 75px;
            font-size: 34px;
          }

          h2 {
            font-size: 42px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}

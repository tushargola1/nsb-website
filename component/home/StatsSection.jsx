"use client";

import { useEffect, useState, useRef } from "react";

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

function Counter({ end, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-5 bg-light" ref={sectionRef}>
      <div className="container">
        <div className=" section-space-bottom">
          <div className="section-title-wrapper text-center">
            <h2 className="section-title rs-split-text-enable split-in-left has-theme-blue mb-1">
              WHY NSB
            </h2>
          </div>
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
                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                    start={startCounter}
                  />
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
          background: #fff;
          border-radius: 24px;
          padding: 20px 25px;
          text-align: center;
          transition: 0.45s ease;
          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.05),
            0 20px 45px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stat-card:hover {
          transform: translateY(-12px);
          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.08),
            0 35px 70px rgba(0, 0, 0, 0.12);
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: -70px;
          right: -70px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(13, 110, 253, 0.06);
          transition: 0.4s;
        }

        .stat-card:hover::before {
          transform: scale(1.2);
        }

        .stat-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, transparent, #ffca08, transparent);
          transform: scaleX(0);
          transition: 0.4s;
        }

        .stat-card:hover::after {
          transform: scaleX(1);
        }

        .icon-box {
          width: 88px;
          height: 88px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          color: #fff;
          margin: auto auto 28px;
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
          transition: 0.45s;
        }

        .stat-card:hover .icon-box {
          transform: rotate(-8deg) scale(1.08);
        }

        h2 {
          margin-bottom: 10px;

          letter-spacing: -2px;
        }

        p {
          font-size: 17px;
          color: #5b6572;
          font-weight: 600;
          margin: 0;
        }

        .stat-card .bg-number {
          position: absolute;
          right: 15px;
          bottom: 0;
          font-size: 90px;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.03);
          line-height: 1;
          pointer-events: none;
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

"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Maintenance = () => {
  const [maintenanceAnimation, setMaintenanceAnimation] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(
          "/assets/images/maintainance/under-maintainance.json"
        );
        const data = await response.json();
        setMaintenanceAnimation(data);
      } catch (error) {
        console.error("Lottie loading error:", error);
      }
    };

    loadAnimation();
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "100%",
        }}
      >
        {maintenanceAnimation && (
          <Lottie
            animationData={maintenanceAnimation}
            loop
            autoplay
            renderer="svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Maintenance;
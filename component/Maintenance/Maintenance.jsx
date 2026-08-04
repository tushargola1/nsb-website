"use client";

import Lottie from "lottie-react";
import maintenanceAnimation from "@/public/assets/images/maintainance/under-maintainance.json";

const Maintenance = () => {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">

        <Lottie
          animationData={maintenanceAnimation}
          loop={true}
          style={{
            width: "300px",
            height: "300px",
          }}
        />

        <h2 className="mt-4 fw-bold">
          Under Maintenance
        </h2>

        <p className="text-muted">
          We are working on something amazing.
          Please check back soon.
        </p>

      </div>
    </div>
  );
};

export default Maintenance;
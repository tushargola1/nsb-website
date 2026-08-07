"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },800); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
     <div id="pre-load">
          <div id="loader" className="loader">
            <div className="loader-container">
              <div className="loader-icon">
                <Image
                  src="/assets/images/logo/nsblogoshort.jpg"
                  alt={"NTPC School Of Buisness"}
                  width={500}
                  height={400}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
  );
}

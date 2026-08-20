import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Maintenance from "@/component/Maintenance";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Doctoral (PhD)" parentPage="Programmes" />
      <section className="rs-history-area section-space bg-primary rs-history-one">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12 col-lg-12">
              <div className="rs-history-wrapper margin-15">
                <h2 className="section-title has-theme-blue mb-20">
                  Doctoral (PhD)
                </h2>
                <div
                  className="position-relative overflow-hidden rounded-4"
                  style={{
                    height: "450px",
                  }}
                >
                  {/* Blurry Background Image */}
                  <Image
                    src="/assets/images/program/phd.webp"
                    alt="Doctoral (PhD)"
                    fill
                    style={{
                      objectFit: "cover",
                      filter: "blur(20px)",
                      transform: "scale(1.1)",
                      opacity: 0.7,
                    }}
                  />

                  {/* Main Full Image */}
                  <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                    <Image
                      src="/assets/images/program/phd.webp"
                      alt="Doctoral (PhD)"
                      fill
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-20">
                  <p class="section-desc mb-10">
                    The{" "}
                    <span className="fw-bold">Doctoral programme of NSB</span>{" "}
                    is conducted in association with the Pandit Deendayal Energy
                    University, Gandhinagar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

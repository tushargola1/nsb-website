"use client";
import { RecruitersData } from "../../../data/RecruitersData";
import LogoCarousel from "../logoCarousel/LogoCarousel";
export default function Recruiters() {
  return (
    <section
      className="hero-banner section-space "
      style={{ background: "#f7f9fb" }}
    >
      <div className="container">
        <div className=" section-space-bottom">
          <div className="section-title-wrapper text-center">
            <h2 className="section-title rs-split-text-enable split-in-left has-theme-blue mb-1">
              Our Recruiters
            </h2>
          </div>
        </div>
        <LogoCarousel data={RecruitersData} />
      </div>
    </section>
  );
}

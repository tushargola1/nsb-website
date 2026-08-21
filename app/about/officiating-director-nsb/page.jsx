import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Breadcrump currentPage="Director, NTPC School of Business" parentPage="About" />
      <section className="rs-team-details-details-area rs-team-details section-space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="rs-team-details-wrapper">
                {/* Left sidebar: photo + name */}
                <div className="rs-team-details-thumb-wrapper">
                  <div className="rs-team-details-author-thumb">
                    <Image
                      src="/assets/images/about/officiating.jpg"
                      alt=""
                      width={200}
                      height={300}
                      style={{
                        width: "100%",
                        height: " 100%",  
                        objectFit: "contain",
                      }}
                      priority
                    />
                  </div>
                  <div className="rs-team-details-author-info text-center">
                    <h5 className="rs-team-details-author-name">
                      Dr. R Gopichandran
                    </h5>
                    <span className="rs-team-details-author-desig">
                      Director, NTPC School Of Business
                    </span>
                  </div>
                </div>

                {/* Right content */}
                <div className="rs-team-details-content-wrapper">
                  <h3 className="rs-team-details-title">
                 Director, NTPC School of Business
                  </h3>
                  <p className="">
                    Dr. R Gopichandran’s work over 37 years has been on
                    principles and practice of preventive management including
                    mitigation and chemical ecology-centered adaptation
                    strategies. His most important contributions pertain to
                    technical / compliance assistance for ozone layer
                    protection, at the national, regional and global levels.
                  </p>
                  <p className="">
                    He holds two doctoral degrees in the areas of microbial and
                    chemical ecology, and a degree in law, and is a Fellow of the
                    Indian Geophysical Union, the National Environmntal Science Academy and the Andhra Pradesh Akademi of
                    Sciences.
                  </p>
                  <p className="">
                    He is also an alumnus of the International Visitors
                    Leadership Programme of the Department of State, USA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

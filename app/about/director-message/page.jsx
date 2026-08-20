import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Maintenance from "@/component/Maintenance";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Director's Message" parentPage="About" />
      <section className="rs-about-area section-space bg-primary rs-about-seven">
        <div className="container">
          <div
            className="rs-quote-wrapper row align-items-center flex-lg-row flex-md-column flex-column gap-lg-0 gap-md-4 gap-4"
            style={{ background: "#ffdead" }}
          >
            <div className="col-md-12 col-lg-3 col-12">
              <Image
                src="/assets/images/faculty/gopi.webp"
                width={300}
                height={400}
                alt="NSB Logo"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="col-md-12 col-lg-9 col-12">
              <div className="rs-quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
                  <path d="M0 0V24L12 12V0H0Z"></path>
                  <path d="M20 0V24L32 12V0H20Z"></path>
                </svg>
              </div>

              <p
                className="rs-quote-desc position-relative mb-0 pb-10 "
                style={{ fontSize: "16px" }}
              >
                The NTPC School of Business is uniquely positioned to build
                capacities of stakeholders and processes that twin development
                and sustainability agendas. Energy economics, regulations,
                technology transitions, business models, finance, energy mix and
                multilateral agreements are some of the thrust areas in this
                context.
              </p>
              <p
                className="rs-quote-desc position-relative"
                style={{ fontSize: "16px" }}
              >
                NSB will rise higher in its pursuits, building on insights
                gathered over 12 years of its service since 2014. Four important
                considerations in this context are:
              </p>
              <div className="rs-history-list-wrapper">
                <ul className="ps-3 mb-4 energy-management-li">
                  <li className="mb-2 ">
                    <p className="rs-history-desc mb-0">
                      1. Its impacts across several geographies globally are
                      growing; evident from the increasing number of bilateral
                      and multilateral initiatives with power / energy entities.
                      Sincere thanks especially to NTPC IBD for opportunities
                      that bring us together with peers from across the globe.
                    </p>
                  </li>

                  <li className="mb-2">
                    <p className="rs-history-desc mb-0">
                      2. The School is able to assist capacity building
                      initiatives that serve the Global South in particular and
                      capitalize on every chance to showcase the best this
                      segment has to offer for the rest of the world too.
                    </p>
                  </li>

                  <li>
                    <p className="rs-history-desc mb-0">
                      3. We are keen to collaborate for long – term test beds;
                      essential to go beyond evidence-based policy making to
                      evidence – informed engagements. Value based options are
                      critical in this context.
                    </p>
                  </li>
                  <li>
                    <p className="rs-history-desc mb-0">
                      4. Local level resilience planning is critical to tackle
                      vagaries posed by inclement geo-political dynamics. This
                      is true of the whole energy / power sector value chain.
                    </p>
                  </li>
                </ul>
              </div>

              <p
                className="rs-quote-desc position-relative"
                style={{ fontSize: "16px" }}
              >
                The School is inspired by India’s outlook to serve with purpose.
                It is about welfare of humanity as a whole and is therefore
                ready to enrich value-based learning and knowledge sharing
                processes. Academic and research excellence for society’s
                benefit will be a logical outcome of this integrated outlook.
              </p>

              <h5 className="rs-quote-author">
                - Prof. R. Gopichandran - Director, NTPC School of Business.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

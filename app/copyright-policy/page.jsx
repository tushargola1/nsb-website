import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage={"Copyright Policy"} parentPage={"Policy"} />
      <section className="policy-area section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="policy-wrapper policy-translate p-relative z-index-1">
                <div className="policy-item">
                  <h4 className="policy-title">Copyright Policy</h4>
                  <p>
                    Unless otherwise stated, the content available on this
                    website, including text, photographs, graphics,
                    publications, reports, videos, documents, logos, and other
                    materials, is the property of NTPC School of Business or is
                    used with appropriate authorization and is protected under
                    applicable copyright and intellectual property laws.
                  </p>
                </div>

                <div className="policy-item">
                  <h4 className="policy-title">Permitted Use</h4>
                  <p>
                    Website content may be accessed, downloaded, printed, and
                    reproduced for personal, educational, academic, research,
                    and other non-commercial purposes, provided that the content
                    is not modified or misrepresented and appropriate
                    acknowledgement is given to NTPC School of Business.
                    Commercial reproduction, republication, distribution,
                    modification, or exploitation of website content requires
                    prior written permission from NSB.
                  </p>
                </div>

                <div className="policy-item">
                  <h4 className="policy-title">
                    Use of Institutional Identity
                  </h4>
                  <p>
                    The name, logo, emblem, and other institutional identifiers
                    of NTPC School of Business may not be used without prior
                    written authorization.
                  </p>
                </div>

                <div className="policy-item">
                  <h4 className="policy-title">Third-Party Materials</h4>
                  <p>
                    Materials belonging to third parties remain the property of
                    their respective copyright holders and may be subject to
                    additional terms and conditions.
                  </p>
                </div>

                <div className="policy-contact">
                  <h4 className="policy-title">Contact Information</h4>
                  <p className="mb-10">
                    For permissions, copyright concerns, or infringement
                    notices, please contact:
                  </p>

                  <ul>
                    <li>
                      Email:{" "}
                      <span className="blue-color">
                        <a href="mailto:it@nsb.ac.in">it@nsb.ac.in</a>
                      </span>
                    </li>
                  </ul>
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

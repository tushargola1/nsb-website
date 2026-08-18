import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump
        currentPage="A Snapshot of Townhall Series"
        parentPage={"Corporate Relations"}
      />
      <div className="container mt-50">
        <div className="rs-postbox-text">
          <p>
            Session of Greentreprenuers-India's first CleanTech focussed Series.
            At a time when are the buzz word, our students were more than
            delighted to interact with Shri. VIKASH MISHRA, Head External
            Relations, Lithium Urban Technologies, the world's largest four
            wheeler EV fleet outside of China. Understanding the dynamics of
            Mobility- as-a-Service couldn't have come at a better time. The
            school thanks you for that insightful session.
          </p>
        </div>
      </div>
      <section className="rs-postbox-area section-space-top">
        <div className="container">
          <h5 className="section-title has-theme-blue mb-20">
            GREENTREPRENEURS TOWN HALL SERES{" "}
            <span className="blue-color">2019</span>
          </h5>
          <div className="row g-5">
            <div className=" rs-blog-two has-theme-green">
              <div className="rs-postbox-wrapper d-flex">
                <article className="rs-postbox-item col-md-6 px-0">
                  <div className="rs-postbox-thumb">
                    <a href="">
                      <Image
                        src="/assets/images/townhall/1.webp"
                        alt="NTPC school of buisness"
                        width={800}
                        height={400}
                      />
                    </a>
                  </div>
                  <div className="rs-postbox-content">
                    <div className="rs-postbox-meta-list">
                      <span className="rs-postbox-meta-item">
                        <i className="ri-user-3-line"></i>Mrs. Vaishali Nigam
                        Sinha
                      </span>
                      <span className="rs-postbox-meta-item">
                        <i className="ri-calendar-line"></i>September 9, 2019
                      </span>
                    </div>
                    <h6 className="rs-postbox-title fs-3">
                      Chief CSR, Sustainability & Communications Officer- ReNew
                      Power, Alumnus of HBS, Columbia University & Hindu
                      College, DU
                    </h6>
                    <div className="rs-postbox-text">
                      <p>
                        Enlightening session on entrepreneurship and renewable
                        energy by Vaishali Nigam Sinha where she spoke about her
                        journey from Art of Charity Organization (iCharity) to
                        ReNew Power that she and Shri. Sumant Sinha embarked
                        upon eight years ago. A dream that got realized into a
                        juggernaut in the Indian renewable energy sector.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="rs-postbox-item col-md-6 ">
                  <div className="rs-postbox-thumb">
                    <a href="">
                      <Image
                        src="/assets/images/townhall/2.webp"
                        alt="NTPC school of buisness"
                        width={800}
                        height={400}
                      />
                    </a>
                  </div>
                  <div className="rs-postbox-content">
                    <div className="rs-postbox-meta-list">
                      <span className="rs-postbox-meta-item">
                        <i className="ri-user-3-line"></i>Shri. Vikash Mishra
                      </span>
                      <span className="rs-postbox-meta-item">
                        <i className="ri-calendar-line"></i>August 31, 2019
                      </span>
                    </div>
                    <h6 className="rs-postbox-title fs-3">
                      Head External Relations, Lithium Urban Technologies
                    </h6>
                    <div className="rs-postbox-text">
                      <p>
                        Session of Greentreprenuers-India's first CleanTech
                        focussed Series. At a time when are the buzz word, our
                        students were more than delighted to interact with Shri.
                        VIKASH MISHRA, Head External Relations, Lithium Urban
                        Technologies, the world's largest four wheeler EV fleet
                        outside of China. Understanding the dynamics of
                        Mobility- as-a-Service couldn't have come at a better
                        time. The school thanks you for that insightful session.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

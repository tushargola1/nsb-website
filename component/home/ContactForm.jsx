import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="rs-contact-area bg-primary rs-contact-one mt-50">
      <div className="rs-contact-wrapper">
        <div
          className="rs-contact-bg-thumb include-bg"
          data-background="/assets/images/bg/contact-bg-thumb-01.webp"
        ></div>
        <div className="container">
          <div className="row align-items-end g-5">
            <div className="col-xl-12 col-lg-12">
              <div
                className="rs-contact-form wow fadeInRight"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <div className="section-title-wrapper mb-30">
                  <h5 className="form-title rs-split-text-enable split-in-left mb-10">
                    Grievance Redressal
                  </h5>
                </div>
                <form id="contact-form" action="" method="POST">
                  <div className="row rs-gutter-24">
                    {/* First Name */}
                    <div className="col-md-6">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="col-md-6">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* NSB Email */}
                    <div className="col-md-6">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <input
                            id="nsbEmail"
                            name="nsbEmail"
                            type="email"
                            placeholder="NSB Email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Enrollment No. */}
                    <div className="col-md-6">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <input
                            id="enrollmentNo"
                            name="enrollmentNo"
                            type="text"
                            placeholder="Enrollment No."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Your Grievance */}
                    <div className="col-md-12">
                      <div className="rs-contact-input-box">
                        <div className="rs-contact-input">
                          <textarea
                            id="grievance"
                            name="grievance"
                            placeholder="Your Grievance"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                      <div className="rs-contact-btn">
                        <button
                          type="submit"
                          className="rs-btn has-theme-yellow hover-white radius-6 w-100"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="form-messages"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rs-footer-area rs-footer-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-footer-wrapper">
              <div className="rs-footer-left">
                <div className="rs-footer-widget footer-1-col-1">
                  <div className="rs-footer-widget-logo ">
                    <Link href="/">
                      <Image
                        src="/assets/images/logo/nsblogowhite.png"
                        width={280}
                        height={70}
                        alt="NSB Logo"
                        priority
                      />
                    </Link>
                  </div>
                  <div
                    className="rs-footer-widget-content "
                    style={{ marginTop: "20px" }}
                  >
                    <div className="rs-footer-content-item">
                      <span>Location:</span>
                      <p className="text-white">
                        Plot No. 5-14, Sector 16-A, Noida (U.P.) <br /> Pin Code
                        - 201301
                      </p>
                    </div>
                    <div
                      className="rs-footer-content-item"
                      style={{ marginTop: "10px" }}
                    >
                      <span>Temporary Working Address:</span>
                      <p className="text-white">
                        NTPC-EOC, R&D Building Sector 24, Noida (U.P.)
                      </p>
                    </div>
                    <div className="rs-footer-widget-contact-info">
                      <div className="rs-footer-content-item">
                        <span>Phone:</span>
                        <a href="tel:+919958880671">+91-99588-80671</a>
                      </div>
                      <div className="rs-footer-content-item">
                        <span>Email:</span>
                        <a href="mailto:admission@nsb.ac.in">
                          admission@nsb.ac.in
                        </a>
                        <a href="mailto:contact@nsb.ac.in">contact@nsb.ac.in</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rs-footer-right">
                <div className="rs-footer-widget-wrapper">
                  <div className="rs-footer-widget footer-1-col-2">
                    <h5 className="rs-footer-widget-title">Resources</h5>
                    <div className="rs-footer-widget-link has-theme-yellow">
                      <ul>
                        <li>
                          <Link href="/about">Faculty Publications</Link>
                        </li>
                        <li>
                          <Link href="/research/centres-of-excellence">Centres Of Excellence</Link>
                        </li>
                        <li>
                          <Link href="/libraries">Administrative Staff</Link>
                        </li>
                        <li>
                          <Link href="/campus-life">NewsLetter</Link>
                        </li>
                        <li>
                          <Link href="/campus-life">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rs-footer-widget footer-1-col-3">
                    <h5 className="rs-footer-widget-title">Academics</h5>
                    <div className="rs-footer-widget-link has-theme-yellow">
                      <ul>
                        <li>
                          <Link href="/programmes/pgdm-energy-management">PGDM (Energy Management)</Link>
                        </li>
                        <li>
                          <Link href="/programmes/pgdm-executive">PGDM (Executive)</Link>
                        </li>
                        <li>
                          <Link href="/programmes/doctoral-phd">PGDM (PH.D.)</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rs-footer-widget footer-1-col-4">
                    <h5 className="rs-footer-widget-title">Quick Enquiry</h5>
                    <div className="rs-cta-input d-flex flex-column gap-3">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                      <input
                        id="email2"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <input
                        id="number"
                        name="number"
                        type="number"
                        placeholder="Enter your number"
                      />
                      <select name="program" id="program">
                        <option value="Select Program">Select Program</option>
                        <option value="PGDM (Energy Management)">PGDM (Energy Management)</option>
                        <option value="PGDM (Executive)">PGDM (Executive)</option>
                        <option value="PHD">PHD</option>
                      </select>
                      <div className="rs-program-btn text-center w-100">
                        <a
                          className="rs-btn has-icon has-theme-cyan hover-cyan"
                          href="program-details.html"
                        >
                          <span className="btn-text-wrap">
                            <span className="text-default">Submit</span>
                            <span className="text-hover">Submit</span>
                          </span>
                          <span className="icon-box has-rotate">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 15"
                            >
                              <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z"></path>
                              <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z"></path>
                              <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z"></path>
                              <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"></path>
                              <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z"></path>
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="rs-footer-copyright-area rs-copyright-one mt-0">
              <div className="rs-footer-copyright-wrapper">
                <div>
                  <div className="rs-footer-widget-social">
                    <span className="rs-footer-social-title">Social Link:</span>
                    <div className="rs-footer-social theme-social has-radius-none has-medium hover-yellow has-theme-blue">
                      <a
                        href="https://wa.me/919319888448"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-whatsapp fs-2"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/NSB.NTPC"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.624 11.9541L12.193 8.54137L8.63572 8.54137V6.32676C8.63572 5.39311 9.13264 4.48303 10.7258 4.48303H12.343V1.57748C12.343 1.57748 10.8755 1.34692 9.47233 1.34692C6.54282 1.34692 4.62796 2.98146 4.62796 5.94041L4.62796 8.54137H1.37158L1.37158 11.9541H4.62796L4.62796 20.2041H8.63572L8.63572 11.9541H11.624Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/school/nsb-ntpc/mycompany/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rs-footer-copyright-right">
                  <div className="rs-footer-copyright-item">
                    <div className="rs-footer-copyright">
                      <p className="underline">
                        Copyright © <span id="year">2026</span> | NTPC School Of
                        Business
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rs-footer-copyright-left">
                  <div className="rs-footer-copyright-item">
                    <div className="rs-footer-copyright-link">
                      <Link href="/terms-conditions">Terms & Agreements</Link>
                    </div>
                  </div>
                  <div className="rs-footer-copyright-item">
                    <div className="rs-footer-copyright-link">
                      <Link href="/privacy-policy">Privacy policy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";

export default function Offcanvas({ open = false, onClose }) {
  return (
    <div className={`fix${open ? " offcanvas-open" : ""}`}>
      <div className="offcanvas-area has-theme-yellow" data-lenis-prevent>
        <div className="offcanvas-wrapper">
          <div className="offcanvas-content">
            {/* Top */}
            <div className="offcanvas-top d-flex justify-content-between align-items-center mb-20">
              <div className="offcanvas-logo">
                <Link className="logo-black" href="/">
                  <img src="/assets/images/logo/nsblogo.webp" alt="NSB logo" />
                </Link>
              </div>
              <div className="offcanvas-close">
                <button
                  className="offcanvas-close-icon animation--flip"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <span className="offcanvas-m-lines">
                    <span className="offcanvas-m-line line--1"></span>
                    <span className="offcanvas-m-line line--2"></span>
                    <span className="offcanvas-m-line line--3"></span>
                  </span>
                </button>
              </div>
            </div>

            {/* About text */}
            <div className="offcanvas-about mb-30 d-none d-xl-block">
              <p>
                Welcome to the National School of Business (NSB). We are
                committed to developing future-ready leaders through excellence
                in management education.
              </p>
            </div>

            {/* Quick Links */}
            <div className="offcanvas-contact mb-30">
              <h4 className="offcanvas-title-meta">Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li><Link href="/about/director-nsb" onClick={onClose}>Director NSB</Link></li>
                <li><Link href="/about/governing-board" onClick={onClose}>Governing Board</Link></li>
                <li><Link href="/programmes/pgdm-executive" onClick={onClose}>PGDM (Executive)</Link></li>
                <li><Link href="/programmes/pgdm-energy-management" onClick={onClose}>PGDM (Energy Management)</Link></li>
                <li><Link href="/programmes/doctoral-phd" onClick={onClose}>Doctoral (Ph.D.)</Link></li>
                <li><Link href="/research/faculty-publications" onClick={onClose}>Faculty Publications</Link></li>
                <li><Link href="/corporate/placements" onClick={onClose}>Placements</Link></li>
                <li><Link href="/admissions" onClick={onClose}>Admissions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="offcanvas-contact mb-30">
              <h4 className="offcanvas-title-meta">Contact Info</h4>
              <ul>
                <li className="d-flex gap-15">
                  <div className="offcanvas-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                      <path d="M11.8768 9.68475C11.3059 10.835 10.5331 11.9818 9.74128 13.0109C8.95198 14.0368 8.15999 14.9249 7.5643 15.5572C7.48514 15.6412 7.40956 15.7206 7.33802 15.7951C7.26648 15.7206 7.1909 15.6412 7.11174 15.5572C6.51605 14.9249 5.72406 14.0368 4.93476 13.0109C4.14299 11.9818 3.37019 10.835 2.79925 9.68475C2.22242 8.52266 1.89032 7.43373 1.89032 6.5C1.89032 3.50846 4.32934 1.08333 7.33802 1.08333C10.3467 1.08333 12.7857 3.50846 12.7857 6.5C12.7857 7.43373 12.4536 8.52266 11.8768 9.68475ZM7.33802 17.3333C7.33802 17.3333 13.8753 11.1732 13.8753 6.5C13.8753 2.91015 10.9484 0 7.33802 0C3.7276 0 0.800781 2.91015 0.800781 6.5C0.800781 11.1732 7.33802 17.3333 7.33802 17.3333Z" fill="#6D6D6D" />
                      <path d="M7.33802 8.66667C6.13455 8.66667 5.15894 7.69662 5.15894 6.5C5.15894 5.30338 6.13455 4.33333 7.33802 4.33333C8.54149 4.33333 9.5171 5.30338 9.5171 6.5C9.5171 7.69662 8.54149 8.66667 7.33802 8.66667ZM7.33802 9.75C9.14323 9.75 10.6066 8.29492 10.6066 6.5C10.6066 4.70507 9.14323 3.25 7.33802 3.25C5.53281 3.25 4.0694 4.70507 4.0694 6.5C4.0694 8.29492 5.53281 9.75 7.33802 9.75Z" fill="#6D6D6D" />
                    </svg>
                  </div>
                  <div className="offcanvas-contact-text">
                    <a href="#">NTPC Campus, NOIDA, Uttar Pradesh, India</a>
                  </div>
                </li>
                <li className="d-flex gap-15">
                  <div className="offcanvas-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.65387 1.32849C3.40343 1.00649 2.92745 0.976861 2.639 1.26531L1.60508 2.29923C1.1216 2.78271 0.94387 3.46766 1.1551 4.06847C2.00338 6.48124 3.39215 8.74671 5.32272 10.6773C7.25329 12.6078 9.51876 13.9966 11.9315 14.8449C12.5323 15.0561 13.2173 14.8784 13.7008 14.3949L14.7347 13.361C15.0231 13.0726 14.9935 12.5966 14.6715 12.3461L12.3653 10.5524C12.2008 10.4245 11.9866 10.3793 11.7845 10.4298L9.59541 10.9771C9.00082 11.1257 8.37183 10.9515 7.93845 10.5181L5.48187 8.06155C5.04849 7.62817 4.87427 6.99919 5.02292 6.40459L5.57019 4.21553C5.62073 4.01336 5.57552 3.79918 5.44758 3.63468L3.65387 1.32849Z" fill="#6D6D6D" />
                      <path d="M11 0.5C11 0.223858 11.2239 0 11.5 0H15.5C15.7761 0 16 0.223858 16 0.5V4.5C16 4.77614 15.7761 5 15.5 5C15.2239 5 15 4.77614 15 4.5V1.70711L10.8536 5.85355C10.6583 6.04882 10.3417 6.04882 10.1464 5.85355C9.95118 5.65829 9.95118 5.34171 10.1464 5.14645L14.2929 1H11.5C11.2239 1 11 0.776142 11 0.5Z" fill="#6D6D6D" />
                    </svg>
                  </div>
                  <div className="offcanvas-contact-text">
                    <a href="tel:+911234567890">+91 12345 67890</a>
                  </div>
                </li>
                <li className="d-flex gap-15">
                  <div className="offcanvas-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2C0.895431 2 0 2.89543 0 4V12L2.58386e-05 12.0103C0.00555998 13.1101 0.898859 14 2 14H7.5C7.77614 14 8 13.7761 8 13.5C8 13.2239 7.77614 13 7.5 13H2C1.53715 13 1.14774 12.6855 1.03376 12.2586L6.67417 8.7876L8 9.5831L15 5.3831V8.5C15 8.77614 15.2239 9 15.5 9C15.7761 9 16 8.77614 16 8.5V4C16 2.89543 15.1046 2 14 2H2ZM5.70808 8.20794L1 11.1052V5.3831L5.70808 8.20794ZM1 4.2169V4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4V4.2169L8 8.4169L1 4.2169Z" fill="#6D6D6D" />
                    </svg>
                  </div>
                  <div className="offcanvas-contact-text">
                    <a href="mailto:info@nsb.ac.in">info@nsb.ac.in</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="offcanvas-social">
              <h4 className="offcanvas-title-meta">Follow Us</h4>
              <ul>
                <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="#"><i className="ri-twitter-x-fill"></i></a></li>
                <li><a href="#"><i className="ri-youtube-fill"></i></a></li>
                <li><a href="#"><i className="ri-linkedin-box-fill"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" onClick={onClose}></div>
      <div className="offcanvas-overlay-white"></div>
    </div>
  );
}

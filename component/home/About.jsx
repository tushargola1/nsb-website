import Link from "next/link";

export default function About() {
  return (
    <section className="rs-about-area pb-130 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="rs-about-thumb-wrapper wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
              <div className="rs-about-thumb">
                <img src="/assets/images/about/about-thumb-01.webp" alt="image" />
              </div>
              <div className="rs-about-thumb-two">
                <img src="/assets/images/about/about-thumb-02.webp" alt="image" />
              </div>
              <div className="rs-about-thumb-shape">
                <img src="/assets/images/shape/about-shape-01.webp" alt="image" />
              </div>
              <div className="rs-about-year-shape">
                <div className="rs-about-year-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <path
                      d="M6 10H8V6C8 3.79086 9.79086 2 12 2H36C38.2091 2 40 3.79086 40 6V10H42C43.1046 10 44 10.8954 44 12V36C44 38.2091 42.2091 40 40 40H8C5.79086 40 4 38.2091 4 36V12C4 10.8954 4.89543 10 6 10ZM8 14V36H40V14H8ZM12 10H36V6H12V10ZM24 33C27.866 33 31 29.866 31 26C31 22.134 27.866 19 24 19C20.134 19 17 22.134 17 26C17 29.866 20.134 33 24 33ZM24 29C22.3431 29 21 27.6569 21 26C21 24.3431 22.3431 23 24 23C25.6569 23 27 24.3431 27 26C27 27.6569 25.6569 29 24 29Z"
                      fill="#005B5C" />
                  </svg>
                </div>
                <h4 className="rs-about-year-title"> 56+ <br /> <span>Years Of History</span></h4>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="rs-about-content-wrapper">
              <div className="section-title-wrapper mb-25">
                <span className="section-subtitle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z">
                    </path>
                    <path
                      d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z">
                    </path>
                  </svg>
                  About Univet
                </span>
                <h2 className="section-title rs-split-text-enable split-in-left">Excellence in <br />
                  Education Since 1950</h2>
                <p className="section-desc mb-0">Univet is a vibrant community of scholars, researchers, and
                  students dedicated to advancing knowledge and fostering innovation.</p>
              </div>
              <div className="rs-about-list">
                <ul>
                  <li><i className="ri-check-line"></i> We are committed to providing a transformative</li>
                  <li><i className="ri-check-line"></i> A strong foundation in the liberal arts</li>
                  <li><i className="ri-check-line"></i> Dedicated to advancing knowledge and fostering
                  </li>
                </ul>
              </div>
              <div className="rs-about-btn-wrapper animation--flip">
                <div className="rs-about-btn">
                  <Link className="rs-btn has-icon has-theme-yellow hover-white" href="/about">
                    <span className="btn-text-wrap">
                      <span className="text-default">More About Univet</span>
                      <span className="text-hover">More About Univet</span>
                    </span>
                    <span className="icon-box has-rotate">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                        <path
                          d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z">
                        </path>
                        <path
                          d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z">
                        </path>
                        <path
                          d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z">
                        </path>
                        <path
                          d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z">
                        </path>
                        <path
                          d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z">
                        </path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="rs-about-author">
                  <div className="rs-about-author-thumb">
                    <img src="/assets/images/user/user-thumb-01.webp" alt="image" />
                  </div>
                  <div className="rs-about-author-content">
                    <h5 className="rs-about-author-title">Michael A. Smith</h5>
                    <span className="rs-about-author-desc">Vice Chancellor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

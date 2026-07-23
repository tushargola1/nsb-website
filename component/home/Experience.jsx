import Link from "next/link";

export default function Experience() {
  return (
    <section className="rs-campus-life-area rs-campus-life-one section-space rs-swiper">
      <div className="rs-campus-life-shape">
        <img src="/assets/images/shape/draw-shape.webp" alt="image" />
      </div>
      <div className="container">
        <div className="row align-items-center g-5 section-title-space">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title-wrapper">
              <span className="section-subtitle has-theme-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z">
                  </path>
                  <path
                    d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z">
                  </path>
                </svg>
                Experience Campus Life
              </span>
              <h2 className="section-title rs-split-text-enable split-in-left has-theme-blue">Univet Campus Life
                Where Learning Meets Living
              </h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <p className="rs-campus-life-sec-desc">
              Experience Univet Campus Life where learning meets living through vibrant academics diverse
              communities and unforgettable student experiences every day.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="rs-campus-life-wrapper">
            <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="1500" data-autoplay="true" data-dots-dynamic="false" data-effect="false" data-delay="2000" data-item="3" data-item-xl="2" data-item-lg="2" data-item-md="2" data-item-sm="1" data-item-xs="1" data-margin="30">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="rs-campus-life-item">
                    <div className="rs-campus-life-thumb">
                      <img src="/assets/images/campus-life/campus-life-thumb-01.webp" alt="image" />
                      <div className="rs-campus-life-content">
                        <h5 className="rs-campus-life-title">Moments of Success</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rs-campus-life-item">
                    <div className="rs-campus-life-thumb">
                      <img src="/assets/images/campus-life/campus-life-thumb-02.webp" alt="image" />
                      <div className="rs-campus-life-content">
                        <h5 className="rs-campus-life-title">Creative Activities</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rs-campus-life-item">
                    <div className="rs-campus-life-thumb">
                      <img src="/assets/images/campus-life/campus-life-thumb-03.webp" alt="image" />
                      <div className="rs-campus-life-content">
                        <h5 className="rs-campus-life-title">Enjoying Campus Life</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rs-campus-life-item">
                    <div className="rs-campus-life-thumb">
                      <img src="/assets/images/campus-life/campus-life-thumb-04.webp" alt="image" />
                      <div className="rs-campus-life-content">
                        <h5 className="rs-campus-life-title">Sports & Wellness</h5>
                      </div>
                    </div>
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

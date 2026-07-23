import Link from "next/link";

export default function Programs() {
  return (
    <section className="rs-program-area pt-130 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title-wrapper text-center mb-50">
              <span className="section-subtitle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M5.21484 12.8949V16.6564C5.21484 16.6564 8.82175 15.1537 12.0198 15.1537C15.2178 15.1537 18.8255 16.6564 18.8255 16.6564V12.8424C18.8255 12.8424 15.3844 11.0225 11.9665 11.0225C8.55018 11.021 5.21484 12.8949 5.21484 12.8949Z">
                  </path>
                  <path
                    d="M22.6467 11.9993L24 11.2716L22.6467 10.5222V10.1666C22.6467 10.1666 23.0278 8.23413 20.862 9.24464C20.7517 9.30465 20.6924 9.36542 20.6684 9.42468L11.7367 4.47119L0 11.1884L4.43211 13.2019V12.5485C4.43211 12.5485 8.15079 10.4607 11.9625 10.4607C15.7734 10.4607 19.6092 12.4899 19.6092 12.4899V13.631L22.0563 12.3167V17.6377H21.2416V19.529L22.3248 18.7803L23.5274 19.529V17.637H22.6467V11.9993ZM22.0555 9.83803V10.1944L21.3413 9.79827C21.6017 9.62573 22.0555 9.38642 22.0555 9.83803ZM21.814 11.9251C21.737 11.9279 21.6603 11.9152 21.5883 11.8877C21.5164 11.8602 21.4507 11.8185 21.3952 11.7651C21.3398 11.7117 21.2956 11.6476 21.2655 11.5768C21.2353 11.5059 21.2198 11.4297 21.2197 11.3527C21.2197 11.2757 21.2351 11.1994 21.2652 11.1285C21.2953 11.0576 21.3393 10.9935 21.3947 10.94C21.4501 10.8865 21.5157 10.8447 21.5876 10.8172C21.6595 10.7896 21.7362 10.7768 21.8132 10.7795C21.9615 10.7848 22.102 10.8474 22.2051 10.9542C22.3082 11.0609 22.3659 11.2035 22.366 11.3519C22.3661 11.5003 22.3086 11.643 22.2056 11.7499C22.1027 11.8568 21.9623 11.9196 21.814 11.9251Z">
                  </path>
                </svg>
                Trending Program
              </span>
              <h2 className="section-title rs-split-text-enable split-in-left">Explore University Degree <br /> Program
                At Univet</h2>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-program-item wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">
              <div className="rs-program-icon">
                <i className="ri-flask-line"></i>
              </div>
              <h4 className="rs-program-title"><Link href="/program-details">School of Science &
                Technology</Link></h4>
              <p className="rs-program-desc">Dive into a World of Opportunities Prepare the future with science &
                Technology</p>
              <div className="rs-program-btn">
                <Link className="rs-program-link" href="/program-details"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-program-item has-theme-bg has-title-white wow fadeIn" data-wow-delay=".4s"
              data-wow-duration="1s">
              <div className="rs-program-icon">
                <i className="ri-first-aid-kit-line"></i>
              </div>
              <h4 className="rs-program-title"><Link href="/program-details">School of Medicine &
                Science</Link></h4>
              <p className="rs-program-desc">Dive into a World of Opportunities Prepare the future with science &
                Technology</p>
              <div className="rs-program-btn">
                <Link className="rs-program-link" href="/program-details"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-program-item wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
              <div className="rs-program-icon">
                <i className="ri-building-line"></i>
              </div>
              <h4 className="rs-program-title"><Link href="/program-details">School of Arts &
                Humanities</Link></h4>
              <p className="rs-program-desc">Dive into a World of Opportunities Prepare the future with science &
                Technology</p>
              <div className="rs-program-btn">
                <Link className="rs-program-link" href="/program-details"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-program-item wow fadeIn" data-wow-delay=".6s" data-wow-duration="1s">
              <div className="rs-program-icon">
                <i className="ri-pie-chart-line"></i>
              </div>
              <h4 className="rs-program-title"><Link href="/program-details">School of Business
                & Administration</Link></h4>
              <p className="rs-program-desc">Dive into a World of Opportunities Prepare the future with science &
                Technology</p>
              <div className="rs-program-btn">
                <Link className="rs-program-link" href="/program-details"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

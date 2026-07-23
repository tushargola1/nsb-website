import Link from "next/link";

export default function Features() {
  return (
    <div className="rs-feature-area rs-feature-one">
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-feature-item">
              <div className="rs-feature-icon">
                <i className="ri-flask-line"></i>
              </div>
              <h4 className="rs-feature-title"><Link href="/program">Explore Degree <br /> Program</Link></h4>
              <p className="rs-feature-desc">Universities also offer extracurricular activities, such as
                student organizations, sports teams, and cultural events.</p>
              <div className="rs-feature-btn">
                <Link className="rs-feature-link" href="/program"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-feature-item has-theme-bg">
              <div className="rs-feature-icon">
                <i className="ri-flask-line"></i>
              </div>
              <h4 className="rs-feature-title"><Link href="/campus-life">Life At Our <br /> Univet</Link></h4>
              <p className="rs-feature-desc">Universities also offer extracurricular activities, such as
                student organizations, sports teams, and cultural events.</p>
              <div className="rs-feature-btn">
                <Link className="rs-feature-link" href="/campus-life"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-feature-item has-blue-bg">
              <div className="rs-feature-icon">
                <i className="ri-flask-line"></i>
              </div>
              <h4 className="rs-feature-title"><Link href="/tuition-fee">Univet Tuition & <br /> Fees</Link>
              </h4>
              <p className="rs-feature-desc">Universities also offer extracurricular activities, such as
                student organizations, sports teams, and cultural events.</p>
              <div className="rs-feature-btn">
                <Link className="rs-feature-link" href="/tuition-fee"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="rs-feature-item has-black-bg">
              <div className="rs-feature-icon">
                <i className="ri-flask-line"></i>
              </div>
              <h4 className="rs-feature-title"><Link href="/how-to-apply">Start Your <br /> Application</Link>
              </h4>
              <p className="rs-feature-desc">Universities also offer extracurricular activities, such as
                student organizations, sports teams, and cultural events.</p>
              <div className="rs-feature-btn">
                <Link className="rs-feature-link" href="/how-to-apply"><i className="ri-arrow-right-line"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

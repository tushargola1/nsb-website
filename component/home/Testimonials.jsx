import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="rs-testimonial-area rs-testimonial-one rs-swiper bg-primary">
      <div className="rs-testimonial-bg-thumb include-bg" data-background="/assets/images/bg/testimonial-bg-thumb-01.webp"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="rs-testimonial-wrapper">
              <div className="rs-testimonial-thumb">
                <img src="/assets/images/testimonial/testimonial-thumb-01.webp" alt="image" />
                <div className="rs-testimonial-video-btn">
                  <div className="rs-tween_max_btn-yes gsap-move-no">
                    <a href="https://www.youtube.com/watch?v=go7QYaQR494" className="rs-play-btn popup-video is-medium is-white hover-yellow"><i
                      className="ri-play-large-fill"></i></a>
                  </div>
                </div>
              </div>
              <div className="rs-testimonial-item">
                <p className="rs-testimonial-desc">“The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested, mono rum mailroom Cicero are also their exact original
                  form, accompanied by English versions stay connected.
                </p>
                <div className="rs-testimonial-info">
                  <div className="rs-testimonial-avater-wrapper">
                    <div className="rs-testimonial-avater-info">
                      <h5 className="rs-testimonial-avater-title">Jackson David</h5>
                      <span className="rs-testimonial-avater-designation">Vice-chancellor</span>
                    </div>
                    <div className="rs-testimonial-avater-sign">
                      <img src="/assets/images/testimonial/sign-thumb.webp" alt="image" />
                    </div>
                  </div>
                  <div className="rs-testimonial-btn">
                    <Link className="rs-btn has-icon has-theme-yellow hover-white" href="/vice-chancellor">
                      <span className="btn-text-wrap">
                        <span className="text-default">Read More</span>
                        <span className="text-hover">Read More</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

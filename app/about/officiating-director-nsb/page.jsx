
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
 <>
   <section class="rs-breadcrumb-area rs-breadcrumb-one p-relative" style={{ padding:"30px" }}>
            <div class="rs-breadcrumb-bg-thumb include-bg" data-background="assets/images/bg/breadcrumb-bg-thumb-01.webp">
            </div>
            <div class="container-fluid g-0">
                <div class="row">
                    <div class="col-xxl-8 col-xl-9 col-lg-10">
                        <div class="rs-breadcrumb-wrapper">
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li class="rs-breadcumb-item">
                                            <Link href="/">
                                                Home
                                            </Link>
                                            <span class="rs-breadcrumb-icon">
                                    <svg class="e-font-icon-svg e-fas-angle-double-right" viewBox="0 0 448 512"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z">
                                       </path>
                                    </svg>
                                 </span>
                                        </li>
                                        <li class="rs-breadcumb-item">
                                         About
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="rs-breadcrumb-title-wrapper">
                                <h1 class="rs-breadcrumb-title">Officiating Director</h1>
                                <span class="rs-breadcrumb-line"></span>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
 </>
  );
}

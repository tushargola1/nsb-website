import "./globals.css";
import Script from "next/script";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";
import Preloader from "@/component/layout/Preloader";
import BackToTop from "@/component/layout/BackToTop";
import WhatsappChat from "@/component/whatsapp/WhatsappChat";
import Image from "next/image";

export const metadata = {
  title: "Best Energy Management College in India - NSB Noida",
  description:
    "Univet University — a destination for ambitious learners. Discover our programs, research excellence, and the opportunities that make Univet University exceptional.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="no-js">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/logo/nsblogoshort.jpg"
        />
        {/* CSS */}
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/plugins/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/vendor/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/spacing.css" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        {/* {font awesome} */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.0/css/all.min.css"
          integrity="sha512-ApSLB1Pd3/bZN8fWB/RG9YhN/7bd9Hkf3AGaE2mPfebjrxagjuBtx2GcgdqIlJkUzwylBo61r9Xa9NmgBI0swA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/* <body className="rs-smoother-yes"> */}
      <body>
        <Preloader />
   
        {/* Cursor */}
        <div id="rs-mouse">
          <div id="cursor-ball"></div>
        </div>

        <Navbar />
        <main>{children}</main>
        <WhatsappChat />
        <Footer />
        <BackToTop />

        {/* JS — must load in order */}
        <Script
          src="/assets/js/vendor/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/vendor/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/plugins/meanmenu.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/swiper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/wow.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/jarallax.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/isotope.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/imagesloaded.pkgd.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/ajax-form.js"
          strategy="afterInteractive"
        />
        {/* <Script src="/assets/js/plugins/lenis.min.js" strategy="afterInteractive" /> */}
        <Script
          src="/assets/js/plugins/gsap.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/rs-anim-int.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/rs-scroll-trigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/rs-splitText.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/jquery.appear.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/nice-select.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/flatpickr.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/nouislider.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/vendor/odometer.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

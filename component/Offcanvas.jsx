"use client";

import Link from "next/link";
import Image from "next/image";

export default function Offcanvas({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[9999] h-screen w-[360px] max-w-full overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/images/logo/logo-green.webp"
                alt="Logo"
                width={170}
                height={60}
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-gray-100"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* About */}
          <div className="mb-8">
            <p className="text-gray-600 leading-7">
              Welcome to Univet University. It was founded in 1966, and Univet
              University has grown into one of the leading institutions of
              higher education.
            </p>
          </div>

          {/* Gallery */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-semibold">Gallery</h4>

            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link key={item} href="#">
                  <Image
                    src={`/assets/images/gallery/gallery-thumb-0${item}.webp`}
                    alt={`Gallery ${item}`}
                    width={100}
                    height={100}
                    className="rounded-md object-cover hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-semibold">Menu</h4>

            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>

              <Link href="/program" onClick={() => setIsOpen(false)}>
                Programs
              </Link>

              <Link href="/admission" onClick={() => setIsOpen(false)}>
                Admission
              </Link>

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>

            <div className="space-y-5">
              <div className="flex gap-3">
                <i className="ri-map-pin-line mt-1 text-xl text-[#0166ab]"></i>
                <p className="text-gray-600">
                  374 William S Canning Blvd, Fall River MA Road 2721, USA
                </p>
              </div>

              <div className="flex gap-3">
                <i className="ri-phone-line mt-1 text-xl text-[#0166ab]"></i>

                <a href="tel:+12346691234" className="text-gray-600">
                  +123-4669-1234
                </a>
              </div>

              <div className="flex gap-3">
                <i className="ri-mail-line mt-1 text-xl text-[#0166ab]"></i>

                <a
                  href="mailto:univet@gmail.com"
                  className="text-gray-600"
                >
                  univet@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>

            <div className="flex gap-4">
              <Link href="#">
                <i className="ri-facebook-fill text-2xl hover:text-blue-600"></i>
              </Link>

              <Link href="#">
                <i className="ri-twitter-x-fill text-2xl"></i>
              </Link>

              <Link href="#">
                <i className="ri-youtube-fill text-2xl hover:text-red-600"></i>
              </Link>

              <Link href="#">
                <i className="ri-linkedin-box-fill text-2xl hover:text-blue-700"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9998] bg-black/60"
        />
      )}
    </>
  );
}
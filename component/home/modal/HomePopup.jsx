"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./HomePopup.css";

const popupImages = [
  {
    id: 1,
    image: "/assets/images/modal/modal.webp",
    title: "NSB Announcement",
  },
 
];

export default function HomePopup() {
  const pathname = usePathname();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      const modalElement = document.getElementById("homePopupModal");

      if (modalElement && window.bootstrap) {
        const modal = new window.bootstrap.Modal(modalElement, {
          backdrop: true,
          keyboard: true,
        });

        modal.show();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== "/" || popupImages.length === 0) {
    return null;
  }

  const currentImage = popupImages[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === popupImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div
      className="modal fade"
      id="homePopupModal"
      tabIndex="-1"
      aria-labelledby="homePopupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0">
          {/* HEADER */}
          <div className="modal-header">
            <h5 className="modal-title" id="homePopupModalLabel">
              {currentImage.title}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* BODY */}
          <div className="modal-body">
            <Image
              key={currentImage.id}
              src={currentImage.image}
              alt={currentImage.title}
              width={800}
              height={500}
              className="w-100"
              priority
            />
          </div>

          {/* FOOTER */}
          <div className="modal-footer">
            {popupImages.length > 1 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
              >
                Next
              </button>
            )}

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

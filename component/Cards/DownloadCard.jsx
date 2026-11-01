// import React from "react";

// const DownloadCard = ({item}) => {
//   return (
//     <div
//       className="mandatory-disclosure-card"
//       style={{
//         background: "#f5f5f5",
//         padding: "25px 30px",
//         minHeight: "100px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         gap: "20px",
//         flexWrap:"wrap",
//     }}
//     >
//       <h5
//         className="mb-0"
//         style={{
//           color: "#1670c5",
//           fontWeight: "600",
//           lineHeight: "1.1",
//         }}
//       >
//         {item.name}
//       </h5>

//       <a
//         href={item.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="rs-btn has-icon has-theme-cyan hover-cyan"
//         style={{
//           flexShrink: 0,
//           padding: "10px 20px",
//           fontSize: "14px",
//         }}
//       >
//         <span className="btn-text-wrap">
//           <span className="text-default">Download</span>
//           <span className="text-hover">Download</span>
//         </span>

//         <span className="icon-box has-rotate">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
//             <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
//             <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12 10.5 13.5Z" />
//             <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
//             <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 7.32843 16.5 9C17.3284 9 18 7.5 18 7.5Z" />
//             <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
//           </svg>
//         </span>
//       </a>
//     </div>
//   );
// };

// export default DownloadCard;


"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const DownloadCard = ({ item, enablePdfModal = false }) => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  const handleDownload = () => {
    if (enablePdfModal) {
      setShowModal(true);
    } else {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {/* Download Card */}
      <div
        className="mandatory-disclosure-card"
        style={{
          background: "#f5f5f5",
          padding: "25px 30px",
          minHeight: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <h5
          className="mb-0"
          style={{
            color: "#1670c5",
            fontWeight: "600",
            lineHeight: "1.1",
          }}
        >
          {item.name}
        </h5>

        <button
          type="button"
          onClick={handleDownload}
          className="rs-btn has-icon has-theme-cyan hover-cyan"
          style={{
            flexShrink: 0,
            padding: "10px 20px",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span className="btn-text-wrap">
            <span className="text-default">Download</span>
            <span className="text-hover">Download</span>
          </span>

          <span className="icon-box has-rotate">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
              <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
              <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12.6716 10.5 13.5Z" />
              <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
              <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
              <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
            </svg>
          </span>
        </button>
      </div>

      {/* Modal rendered directly inside document.body */}
      {enablePdfModal &&
        mounted &&
        showModal &&
        createPortal(
          <div
            className="pdf-modal-overlay"
            onClick={() => setShowModal(false)}
          >
            <div
              className="pdf-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pdf-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pdf-modal-header">
                <h5 id="pdf-modal-title">{item.name}</h5>

                <button
                  type="button"
                  className="pdf-close-btn"
                  onClick={() => setShowModal(false)}
                  aria-label="Close PDF preview"
                >
                  &times;
                </button>
              </div>

              <div className="pdf-modal-body">
                <iframe
                  src={`${item.url}#toolbar=1&navpanes=0&view=FitH`}
                  title={item.name}
                  className="pdf-viewer"
                />
              </div>

              <div className="pdf-modal-footer">
                <a
                  href={item.url}
                  download
                  className="rs-btn has-icon has-theme-cyan hover-cyan"
                >
                  Download PDF
                </a>

                <button
                  type="button"
                  className="pdf-close-footer"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      <style jsx>{`
        .pdf-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 2147483647;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .pdf-modal {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 90vh;
          height: 90dvh;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .pdf-modal-header {
          min-height: 60px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-bottom: 1px solid #ddd;
        }

        .pdf-modal-header h5 {
          margin: 0;
          color: #1670c5;
          font-size: 16px;
          font-weight: 600;
        }

        .pdf-close-btn {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border: none;
          border-radius: 50%;
          background: #eee;
          color: #333;
          font-size: 26px;
          cursor: pointer;
        }

        .pdf-modal-body {
          flex: 1;
          min-height: 0;
          background: #525659;
        }

        .pdf-viewer {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .pdf-modal-footer {
          min-height: 65px;
          padding: 10px 20px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #ddd;
        }

        .pdf-close-footer {
          border: 1px solid #ddd;
          background: #fff;
          color: #333;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        @media (max-width: 767px) {
          .pdf-modal-overlay {
            padding: 0;
          }

          .pdf-modal {
            width: 100%;
            max-width: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
          }

          .pdf-modal-header {
            padding: 10px 14px;
          }

          .pdf-modal-footer {
            padding: 10px 14px;
          }
        }
      `}</style>
    </>
  );
};

export default DownloadCard;

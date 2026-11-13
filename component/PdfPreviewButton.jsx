"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PdfPreviewButton = ({ pdfUrl, title = "Full CV" }) => {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!showModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showModal]);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="rs-btn has-icon has-theme-blue hover-yellow"
        style={{ border: "none", cursor: "pointer" }}
      >
        <span className="btn-text-wrap">
          <span className="text-default">← Full CV</span>
          <span className="text-hover">← Full CV</span>
        </span>
      </button>

      {mounted &&
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
                <h5 id="pdf-modal-title">{title}</h5>

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
                  src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title={title}
                  className="pdf-viewer"
                />
              </div>

              <div className="pdf-modal-footer">
                <a
                  href={pdfUrl}
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
            max-width: 100%;
            height: 100vh;
            height: 100dvh;
            border-radius: 0;
          }

          .pdf-modal-header,
          .pdf-modal-footer {
            padding: 10px 14px;
          }
        }
      `}</style>
    </>
  );
};

export default PdfPreviewButton;
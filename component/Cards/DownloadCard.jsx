import React from "react";

const DownloadCard = ({item}) => {
  return (
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
        flexWrap:"wrap",
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

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="rs-btn has-icon has-theme-cyan hover-cyan"
        style={{
          flexShrink: 0,
          padding: "10px 20px",
          fontSize: "14px",
        }}
      >
        <span className="btn-text-wrap">
          <span className="text-default">Download</span>
          <span className="text-hover">Download</span>
        </span>

        <span className="icon-box has-rotate">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
            <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
            <path d="M10.5 13.5C10.5 14.3284 9.82843 15 9 15C8.17157 15 7.5 14.3284 7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82843 12 10.5 12 10.5 13.5Z" />
            <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
            <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 7.32843 16.5 9C17.3284 9 18 7.5 18 7.5Z" />
            <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 8.17157 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default DownloadCard;

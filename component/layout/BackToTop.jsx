"use client";

export default function BackToTop() {
  return (
    <div id="backtotop-wrap">
      <svg className="arrowicon" viewBox="0 0 24 24" width="18" height="18">
        <path
          d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
          fill="#000"
        />
      </svg>
      <svg className="scrollprogress" width="40" height="40">
        <circle
          className="progress-circle"
          cx="20"
          cy="20"
          r="18"
          strokeWidth="2"
          fill="none"
          stroke="#fff"
          strokeDasharray="113.1"
          strokeDashoffset="113.1"
        />
      </svg>
    </div>
  );
}

"use client";

import { YoutubeGallery } from "@/data/YoutubeGallery";

export default function VideoGallery() {
  const getVideoId = (url) => {
    return url.split("youtu.be/")[1];
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title has-theme-blue mb-20 ps-0">
          <span className="blue-color">Video</span> Gallery
        </h2>
        <div className="row g-3 align-items-center justify-content-center">
          {YoutubeGallery.map((video) => (
            <div className="col-lg-4 col-md-6 col-12" key={video.id}>
              <div className="video-card">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                    title={`Youtube Video ${video.id}`}
                    allowFullScreen
                    className="rounded"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .video-card {
          background: #fff;
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

          transition: 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-8px);

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        iframe {
          width: 100%;
          border: 0;
        }
      `}</style>
    </section>
  );
}

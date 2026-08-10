import DownloadCard from "@/component/Cards/DownloadCard";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import React from "react";

const page = () => {
    const ArchiveData = [
  {
    id: 1,
    name: "Staff Archives",
    url: "https://nsb.ac.in/archives",
  },
  {
    id: 2,
    name: "Job Archives",
    url: "https://drive.google.com/drive/folders/1xYppnbn2dlUpIY3Rjs6IjEObXCrfJ3Mf?usp=share_link",
  },
  {
    id: 3,
    name: "Photographs Archives",
    url: "https://drive.google.com/drive/folders/1IV2dBgWAr4hZnPoSGiHqmAc2xnBRm4g1?usp=share_link",
  },
];
  return (
    <div>
      <Breadcrump currentPage="Archives" parentPage="Important Links" />

     <section className="rs-history-area section-space bg-primary rs-history-one">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            {ArchiveData.map((item) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-12" key={item.id}>
                <DownloadCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
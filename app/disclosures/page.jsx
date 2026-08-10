import DownloadCard from "@/component/Cards/DownloadCard";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import { Disclosures } from "@/data/Disclosures";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump
        currentPage="Disclosures"
        parentPage="Important Links"
      />

      <section className="rs-history-area section-space bg-primary rs-history-one">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-center">
            {Disclosures.map((item) => (
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

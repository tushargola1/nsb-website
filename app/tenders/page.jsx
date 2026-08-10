import Breadcrump from "@/component/common/breadcrump/Breadcrump";
// import { TenderData } from "@/data/TenderData";
import React from "react";

const page = () => {
    const TenderData = [
  {
    id: 1,
    title:
      "Delivering In-Person Training On Installation, Commissioning, Operation And Maintenance Of Small-Scale Rooftop Solar PV And Solar Mini Grid Of Capacity Up To 100 KW In Bangladesh",
    documentUrl: "https://drive.google.com/file/d/1TOuZyM9zr3sKnGJUq9Xi_gZnk-VMRrtb/view?usp=sharing",
    corrigendums: [],
  },
  {
    id: 2,
    title: "PROVIDING CANTEEN SERVICES AT NSB NOIDA",
    refNo: "REF. NO. : NSB/C(H)/2023-24",
    documentUrl: "https://drive.google.com/file/d/1bN4sltPDd-GoavTbIzxoF5banBqXt3p8/view?usp=sharing",
    corrigendums: [
      {
        id: 1,
        name: "Corrigendum - 1",
        url: "https://drive.google.com/file/d/19brMgdgz8W5vhLB8tvxOLCMstZetsW1V/view?usp=sharing",
      },
      {
        id: 2,
        name: "Corrigendum - 2",
        url: "https://drive.google.com/file/d/1ogaOmoPTaxV0TmCyy1yaRVbKjCyeCn-a/view?usp=sharing",
      },
      {
        id: 3,
        name: "Corrigendum - 3",
        url: "https://drive.google.com/file/d/1uRsuvlnIPmZ6J0UJgFIusxoaHVMBYcpl/view?usp=sharing",
      },
    ],
  },
];
  return (
    <div>
      <Breadcrump currentPage="Tenders" parentPage="Important Links" />

      <section className="rs-history-area section-space bg-primary">
        <div className="container">
          <div className="row g-4">
            {TenderData.map((tender) => (
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-12"
                key={tender.id}
              >
                <div
                  style={{
                    background: "#f5f5f5",
                    padding: "25px 30px",
                  }}
                >
                  <h4
                    style={{
                      color: "#1670c5",
                      fontWeight: "600",
                      lineHeight: "1.05",
                      marginBottom: "12px",
                    }}
                  >
                    {tender.title}
                  </h4>

                  {tender.refNo && (
                    <p
                      style={{
                        marginBottom: "8px",
                        fontSize: "13px",
                      }}
                    >
                    {tender.refNo}
                    </p>
                  )}

                  {tender.corrigendums?.length > 0 && (
                    <div className="mb-3">
                      {tender.corrigendums.map((item) => (
                        <div key={item.id} className="mb-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "#1670c5",
                              fontWeight: "600",
                              fontSize: "13px",
                            }}
                          >
                            {item.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={tender.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rs-btn has-icon has-theme-cyan hover-cyan"
                  >
                    <span className="btn-text-wrap">
                      <span className="text-default">
                        View Tender Document
                      </span>
                      <span className="text-hover">
                        View Tender Document
                      </span>
                    </span>

                    <span className="icon-box has-rotate">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 15"
                      >
                        <path d="M10.5 7.5C10.5 8.32843 9.82843 9 9 9C8.17157 9 7.5 8.32843 7.5 7.5C7.5 6.67157 8.17157 6 9 6C9.82843 6 10.5 6.67157 10.5 7.5Z" />
                        <path d="M10.5 13.5C10.5 14.32843 9.82843 15 9 15C8.17157 15 7.5 12.6716 7.5 13.5C7.5 14.3284 8.17157 15 9 15C9.82843 15 10.5 14.3284 10.5 13.5Z" />
                        <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" />
                        <path d="M18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z" />
                        <path d="M10.5 1.5C10.5 2.32843 9.82843 3 9 3C8.17157 3 7.5 2.32843 7.5 1.5C7.5 0.671573 7.5 0 9 0C9.82843 0 10.5 0.671573 10.5 1.5Z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
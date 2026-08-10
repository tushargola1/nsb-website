"use client";

import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const page = () => {
  const AdministrativeStaff = [
    {
      id: 1,
      name: "Amit Bhatnagar",
      position: "Controller Of Examination",
      image: "/assets/images/administrative/102.webp",
    },
    {
      id: 2,
      name: "Farooque Saifullah",
      position: "Finance Manager",
      image: "/assets/images/administrative/103.webp",
    },
    {
      id: 3,
      name: "Priyadarshani Singh",
      position: "Associate Manager",
      image: "/assets/images/administrative/104.webp",
    },
    {
      id: 4,
      name: "Eishan",
      position: "Associate Manager",
      image: "/assets/images/administrative/105.webp",
    },
    {
      id: 5,
      name: "Arjun Tiwari",
      position: "Associate Manager",
      image: "/assets/images/administrative/106.webp",
    },
    {
      id: 6,
      name: "Pushkar Raj",
      position: "Associate Manager",
      image: "/assets/images/administrative/107.jpeg",
    },
    {
      id: 7,
      name: "Guddu Singh",
      position: "Multitasking Staff",
      image: "/assets/images/administrative/108.jpeg",
    },
    {
      id: 8,
      name: "Mahadeb Karjee",
      position: "Multitasking Staff",
      image: "/assets/images/administrative/109.webp",
    },
    {
      id: 9,
      name: "Manish Kumar Prasad",
      position: "Multitasking Staff",
      image: "/assets/images/administrative/110.webp",
    },
  ];
  return (
    <div>
      <Breadcrump currentPage="Administrative Staff" parentPage={"Staff"} />
      <div className="container mt-50 mb-50 ">
        <div className="row align-items-center justify-content-center gap-5">
          {AdministrativeStaff.map((item, id) => {
            return (
              <div className="col-lg-3 col-md-5 col-12" key={id}>
                <TeamCard2 data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import TeamCard from "@/component/Cards/TeamCard";
import TeamCard2 from "@/component/Cards/TeamCard2";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import FacultyTabs from "@/component/faculty/tabs";
import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const page = () => {
  const AdministrativeStaff = [
    {
      id: 1,
      name: "Amit Bhatnagar",
      designation: "Controller Of Examination",
      image: "/assets/images/administrative/102.jpeg",
      category: "Programme Office",
    },
    {
      id: 2,
      name: "Digvijay Prasad Singh",
      designation: "Head (HR & Admin)",
      image: "/assets/images/administrative/112.jpg",
      category: "HR Department",
    },

    {
      id: 8,
      name: "Priyadarshani Singh",
      designation: "Associate Manager",
      image: "/assets/images/administrative/104.jpeg",
      category: "HR Department",
    },
    {
      id: 5,
      name: "Eishan",
      designation: "Associate Manager",
      image: "/assets/images/administrative/105.jpg",
      category: "Director's Office",
    },
    {
      id: 10,
      name: "Arjun Tiwari",
      designation: "Associate Manager",
      image: "/assets/images/administrative/106.webp",
      category: "Admission",
    },
    {
      id: 9,
      name: "Pushkar Raj",
      designation: "Associate Manager",
      image: "/assets/images/administrative/107.png",
      category: "HR Department",
    },
    {
      id: 12,
      name: "Guddu Singh",
      designation: "Multitasking Staff",
      image: "/assets/images/administrative/108.jpeg",
      category: "HR Department",
    },
    {
      id: 13,
      name: "Mahadeb Karjee",
      designation: "Multitasking Staff",
      image: "/assets/images/administrative/109.jpeg",
      category: "HR Department",
    },
    {
      id: 14,
      name: "Manish Kumar Prasad",
      designation: "Multitasking Staff",
      image: "/assets/images/administrative/110.webp",
      category: "HR Department",
    },
    {
      id: 6,
      name: "Deepak K. Vishwakarma",
      designation: "Associate Manager",
      image: "/assets/images/administrative/114.jpeg",
      category: "Programme Office",
    },
    {
      id: 3,
      name: "Sanjay Bharadwaj",
      designation: "Chief Financial Officer (CFO)",
      image: "/assets/images/administrative/115.jpeg",
      category: "Finance Department",
    },
    {
      id: 4,
      name: "Farooque Saifullah",
      designation: "Finance Manager",
      image: "/assets/images/administrative/103.webp",
      category: "Finance Department",
    },
    {
      id: 7,
      name: "Navneet Katheriya",
      designation: "Associate Manager",
      image: "/assets/images/administrative/111.jpeg",
      category: "Finance Department",
    },

    {
      id: 11,
      name: "Money Kumar ",
      designation: "IT Assistant",
      image: "/assets/images/administrative/113.jpeg",
      category: "IT",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Programme Office");
  const categories = [
    "All",
    "Programme Office",
    "Finance Department",
    "HR Department",
    "IT",
    "Admission",
    "Director's Office",
  ];

 const filteredFaculty =
  activeCategory === "All"
    ? [...AdministrativeStaff].sort((a, b) => a.id - b.id)
    : AdministrativeStaff.filter(
        (item) => item.category === activeCategory
      );
  return (
    <div>
      <Breadcrump currentPage="Administrative Staff" parentPage={"Staff"} />
      {/* <div className="container mt-50 mb-50 ">
        <div className="row align-items-center justify-content-center gap-5">
          {AdministrativeStaff.map((item, id) => {
            return (
              <div className="col-lg-3 col-md-5 col-12" key={id}>
                <TeamCard2 data={item} />
                  <TeamCard member={item} />
              </div>
            );
          })}
        </div>
      </div> */}
      <div className="mt-40 mb-40">
        <FacultyTabs
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          category={categories}
        />
      </div>
      <section className="rs-team-area section-space-bottom rs-team-one has-theme-blue">
        <div className="container">
          <div className="row gy-4 align-items-center justify-content-center gap-5">
            {/* <div className="rs-team-wrapper"> */}
            {filteredFaculty.map((member) => (
              <div className="col-lg-3" key={member.slug}>
                <TeamCard member={member} urlNeeded={false} />
              </div>
            ))}

            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

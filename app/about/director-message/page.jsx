import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Maintenance from "@/component/Maintenance";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Doctoral (PhD)" parentPage="Programmes" />
      <Maintenance />
    </div>
  );
};

export default page;

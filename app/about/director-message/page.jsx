import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Maintenance from "@/component/Maintenance";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrump currentPage="Director's Message" parentPage="About" />
      <Maintenance />
    </div>
  );
};

export default page;

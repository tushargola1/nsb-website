import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import ChairmenMessage from "@/component/common/message/ChairmenMessage";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrump currentPage={"CMD's Message"} parentPage={"About"} />

       <section className="rs-about-area section-space bg-primary rs-about-seven">
      <div className="container">
          <ChairmenMessage isReadMore={false} />
     
      </div>
    </section>
    </>
 
  );
};

export default page;

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import EventsCalendar from "@/component/events-calendar/EventsCalendar";
import React from "react";

const page = () => {
  return (
        <>
        <Breadcrump currentPage="Events" parentPage={"Events"} />

    <div className="container">
      <div className="row mt-40 mb-40 align-items-center justify-content-center">
     <div className="col-md-8">
           <EventsCalendar />
     </div>
      </div>
    </div>
        </>
  );
};

export default page;

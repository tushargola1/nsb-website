import React from 'react'
import Testimonials from "@/component/common/testimonials/Testimonials";
import Breadcrump from '@/component/common/breadcrump/Breadcrump';
import VideoGallery from '@/component/common/videogallery/VideoGallery';

const page = () => {
  return (
    <div>
        <Breadcrump currentPage={"Testimonials"} parentPage={"Testimonial"}/>
        <div className="mt-50">
                    <Testimonials/>

                    <VideoGallery/>
        </div>
        
    </div>
  )
}

export default page

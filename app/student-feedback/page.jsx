import Breadcrump from '@/component/common/breadcrump/Breadcrump'
import Testimonials from '@/component/common/testimonials/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrump currentPage={"Student Feedback"} parentPage={"Feedback"}/>
            <Testimonials isShow={false}/>
    </div>
  )
}

export default page

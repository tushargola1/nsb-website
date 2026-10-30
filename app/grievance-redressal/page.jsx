import Breadcrump from '@/component/common/breadcrump/Breadcrump'
import ContactForm from '@/component/home/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrump currentPage={"Grievance Redressal"} parentPage={"Grievance Form"}/>
      <ContactForm/>
    </div>
  )
}

export default page

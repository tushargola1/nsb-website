import Breadcrump from '@/component/common/breadcrump/Breadcrump'
import Gallery from '@/component/home/Gallery'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcrump currentPage={"Events"} parentPage={"Gallery"}/>
      <Gallery />
    </div>
  )
}

export default page

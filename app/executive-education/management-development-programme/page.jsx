import Breadcrump from '@/component/common/breadcrump/Breadcrump'
import Maintenance from '@/component/Maintenance'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrump currentPage={"Management Development Programme (MDP)"} parentPage={"Executive Education"} />
      <Maintenance/>
    </div>
  )
}

export default page

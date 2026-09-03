import Breadcrump from '@/component/common/breadcrump/Breadcrump'
import Maintenance from '@/component/Maintenance'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrump currentPage={"Institutional Committees"} parentPage={"Important Links"} />

        <Maintenance/>
    </div>
  )
}

export default page

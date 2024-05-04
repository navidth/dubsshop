import Image from 'next/image'
import React from 'react'
import imageUser from '../../../public/images/dashboard/user-profile.png'
function InformationUser() {
  return (
    <div className='profile'>
      <div className="imgUser">
            <Image src={imageUser} width={80} height={80} className='d-block mx-auto' alt='profile' />
      </div>
      <div className="idUser"></div>
      <div className="phoneUser"></div>
    </div>
  )
}

export default InformationUser
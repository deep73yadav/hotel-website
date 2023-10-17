import React from 'react'
// import { showToast } from '../../component/CustomeToast'
import '../page.css'
import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';
import FeatureRoom from '../../Component/FeatureRoom';
export const Rooms = () => {  
  return (
    <>
    <div className='ms-3'>
    <Breadcrumb path="/rooms" />
    </div>     
    <FeatureRoom/>
    </>
  )
}

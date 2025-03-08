import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import HelpYouBox from '../HelpYouBox/HelpYouBox'

export default function HelpYou() {
  return (
    <>
      <SectionTitle
        title='ما چه کمکی بهتون میکنیم؟'
        subTitle='از شروع کار کنارتیم نمیزاریم آب تو دلت تکون بخوره'
      />


      <div className='mt-5'>
        <div className='container'>
          <div className='row'>
            <HelpYouBox />
            <HelpYouBox />
            <HelpYouBox />
            <HelpYouBox />
          </div>
        </div>
      </div>
    </>
  )
}

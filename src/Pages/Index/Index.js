import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import LastCourses from '../../Components/LastCourses/LastCourses'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import HelpYou from '../../Components/HelpYou/HelpYou'
import Accordion from '../../Components/Accordion/Accordion'
import LastArticles from '../../Components/LastArticles/LastArticles'

import './index.css'


export default function Index() {
  return (
    <>
       <Header />
      <LastCourses />
      <PopularCourses />
      <LastArticles />
      <HelpYou />
      <Accordion />
      <Footer /> 
    </>
  )
}

import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import CourseBox from '../CourseBox/CourseBox'
import { Swiper, SwiperSlide } from "swiper/react";



import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function PopularCourses() {
    return (
        <div>
            <SectionTitle
                title='محبوب تریت دوره ها'
                subTitle='انتخاب های شما همیشه بهترین هاست'
                btn='رفتن به دوره های محبوب'
            />

            <div className='mt-3'>
                <div className='container'>
                    <div className='row'>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            speed={7000}
                            className="mySwiper">
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                             <SwiperSlide>
                                <CourseBox isSlider={true}/>
                             </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

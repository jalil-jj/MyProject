import React from 'react'
import './LastCourses.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import CourseBox from '../CourseBox/CourseBox'

export default function LastCourses() {
    return (
        <div className='mt-5'>
            <SectionTitle
                title='جدید ترین دوره ها'
                subTitle='سکوی پرتاب شما به سمت موفقیت'
                btn='تمامی دوره ها'
            />

            <div className='mt-3'>
                <div className='container'>
                    <div className='row'>
                           <CourseBox />
                           <CourseBox />
                           <CourseBox />
                           <CourseBox />
                           <CourseBox />
                           <CourseBox />
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

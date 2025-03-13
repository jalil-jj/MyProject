import React from 'react'
import { IoSearch } from "react-icons/io5";
import './CourseCategory.css'
import CourseBox from '../../Components/CourseBox/CourseBox';
import Topbar from '../../Components/Topbat/Topbar';
import Footer from '../../Components/Footer/Footer';

export default function CourseCategory() {
    return (
        <>
            <Topbar />
            <div className='courseCategory'>
                <div className='container'>

                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <h1 className='title'>دوره های فرانت اند</h1>
                        </div>
                        <div>
                            29 دوره آموزشی
                        </div>
                    </div>

                    <div className='d-flex align-items-center justify-content-between mt-5'>
                        <div className='select-box'>
                            <select>
                                <option value="1">ارزان ترین</option>
                                <option value="2">گران ترین</option>
                                <option value="3">محبوب ترین</option>
                                <option value="4">جدید ترین</option>
                                <option value="5">قدیمی ترین</option>
                            </select>
                        </div>
                        <div className='search-box'>
                            <input type="text" placeholder='جست و جو ...' />
                            <IoSearch />
                        </div>
                    </div>

                    <div className='row'>
                        <CourseBox />
                        <CourseBox />
                        <CourseBox />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

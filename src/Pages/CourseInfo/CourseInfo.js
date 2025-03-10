import React from 'react'
import './CourseInfo.css'
import { RiGraduationCapLine } from "react-icons/ri";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import Footer from '../../Components/Footer/Footer'
import { PiPaperPlaneRight } from "react-icons/pi";
import Topbar from '../../Components/Topbat/Topbar'
import CommentBox from '../../Components/CommentBox/CommentBox';

export default function CourseInfo() {
    return (
        <div>

            <Topbar />

            <div className='video-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='right-col p-5'>
                                <div className='right-top'>
                                    <h2>آموزش کاربردی Nodejs</h2>
                                    <p>برای متخصص شدن در این دوره شما باید صبر خوبی به خرج بدهید . همه چیز برای متخصص شدن شما اینجا مهیاست.</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between w-100'>
                                    <button className='button'>
                                        <RiGraduationCapLine className='icon-title' />
                                        <span className='mx-3'>
                                            افزودن به سبد خرید
                                        </span>
                                    </button>
                                    <p>2000 تومان</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-6'>
                            <div className='left-col p-5'>
                                <img src="./images/courses/python.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='details-section'>
                <div className="container">
                    <div className='row'>
                        <div className="col-12">
                            <div className='row gx-0'>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-4'>
                                    <div className='details-box'>
                                        <div>
                                            <RiGraduationCapLine className='icon-title' />
                                        </div>
                                        <div>
                                            <h3>وضعیت دوره</h3>
                                            <p>پیش فروش</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12'>
                            <div className='info-box'>
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className='details-box'>
                                            <div>
                                                <RiGraduationCapLine className='icon-title' />
                                            </div>
                                            <div>
                                                <h3>وضعیت دوره</h3>
                                                <p>پیش فروش</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className='details-box'>
                                            <div>
                                                <RiGraduationCapLine className='icon-title' />
                                            </div>
                                            <div>
                                                <h3>وضعیت دوره</h3>
                                                <p>پیش فروش</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className='details-box-prograss'>
                                            <div className='d-flex align-items-center justify-content-between w-100 mb-4'>
                                                <h3>درصد تکمیل دوره</h3>
                                                <p>20%</p>
                                            </div>
                                            <div>
                                                <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                    <div class="progress-bar w-75"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>

                            <div className='desc'>
                                <h3 className='title'>توضیحات</h3>

                                <div className='main-img'>
                                    <img src="./images/courses/python.png" alt="" />
                                </div>

                                <div>
                                    <h2 className='title'>معرفی دوره آموزش Eslint</h2>
                                    <p className='mt-4'>
                                        اگر در زمینه کدنویسی با جاوا اسکریپت فعالیت دارید و به‌دنبال ابزاری برای بهبود کدهای خود هستید، یادگیری Eslint قطعا برای شما مفید خواهد بود. این ابزار با شناسایی خطاهای معمول و تشخیص ناسازگاری‌ها در کدنویسی، به برنامه‌نویسان کمک می‌کند تا کدهایی بهینه‌تر و مطابق با استانداردهای روز جهانی بنویسند. در دوره آموزش Eslint سبزلرن یاد می‌گیرید که چطور با این ابزار کار کنید و استانداردهای دلخواه خود را برای پروژه‌های مختلف کدنویسی تعریف نمایید.
                                    </p>
                                </div>


                            </div>

                            <div className='headed'>
                                <h3 className='title'>سرفصل ها</h3>

                                <div>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    معرفی دوره
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>1</p>
                                                        <h3>معرفی دوره + پاسخ به سوالات</h3>
                                                    </div>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>09:38</p>
                                                        <SiGoogledisplayandvideo360 />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>1</p>
                                                        <h3>معرفی دوره + پاسخ به سوالات</h3>
                                                    </div>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>09:38</p>
                                                        <SiGoogledisplayandvideo360 />
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body d-flex align-items-center justify-content-between">
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>1</p>
                                                        <h3>معرفی دوره + پاسخ به سوالات</h3>
                                                    </div>
                                                    <div className='d-flex align-items-center gap-3'>
                                                        <p>09:38</p>
                                                        <SiGoogledisplayandvideo360 />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className='comments mt-5'>
                                <div className='d-flex align-items-center justify-content-between mb-5'>
                                    <h2 className='title'>نظرات</h2>
                                    <button className='btn btn-success'>ایجاد نظر جدید</button>
                                </div>
                                <CommentBox />
                                <CommentBox />
                                <CommentBox />
                                <CommentBox />
                            </div>
                        </div>

                        <div className='col-4'>
                            <div className='teacher-box'>
                                <img src="./images/courses/python.png" alt="" />
                                <h2>محمد امین سعیدی راد | مدرس دوره</h2>
                                <button className='btn btn-success'>مشاهده پروفایل من</button>
                            </div>

                            <div className='teacher-box'>
                                <h2>لینک کوتاه دوره</h2>

                                <div className='link-box'>
                                    <PiPaperPlaneRight />
                                    <p>sabzlearn.ir/?p=5418</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

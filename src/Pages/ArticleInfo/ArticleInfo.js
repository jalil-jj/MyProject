import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import './ArticleInfo.css'
import CommentBox from '../../Components/CommentBox/CommentBox';
import OrderBox from '../../Components/OrderBox/OrderBox';
import { PiPaperPlaneRight } from "react-icons/pi";
import Footer from '../../Components/Footer/Footer';
import Topbar from '../../Components/Topbat/Topbar';


export default function ArticleInfo() {
    return (
        <>
            <Topbar />

            <div className='articleInfo py-5'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-12 col-md-8'>
                            <div className='border-bottom pb-4'>
                                <h1 className='title'>چگونه با مهارت برنامه‌نویسی، بدون کار کردن برای دیگران درآمد کسب کنیم؟</h1>
                            </div>

                            <div className='d-flex align-items-center justify-content-between mt-4'>

                                <div className='d-flex align-items-center gap-2'>
                                    <IoPersonOutline className='icon' />
                                    <p className='mx-2'>شهرام قایدی</p>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <BsCalendarDateFill className='icon' />
                                    <p className='mx-2'>1403/12/18</p>
                                </div>

                                <div className='d-flex align-items-center gap-2'>
                                    <FaEye className='icon' />
                                    <p className='mx-2'>12312</p>
                                </div>

                            </div>

                            <div className='mt-5'>
                                <img src="./images/courses/python.png" className='article-img' alt="" />
                            </div>

                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            سر فصل های این مقاله
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul className='article-menu'>
                                                <li>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</li>
                                                <li>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</li>
                                                <li>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</li>
                                                <li>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</li>
                                                <li>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div>
                                <p>تا به حال فکر کرده‌اید که اگر مجبور نبودید به سبک کارمندی کار کنید، زندگی‌تان چه شکلی می‌شد؟ اگر پروژه‌ها و ساعت‌های کاری را خودتان انتخاب می‌کردید، بدون رئیس، بدون جلسات بی‌پایان و بدون محدودیت درآمد؟ بسیاری از برنامه‌نویسان، در نقطه‌ای از مسیر شغلی‌شان، این سوال را از خود می‌پرسند: «چگونه می‌توانم از مهارت برنامه‌نویسی درآمد داشته باشم، بدون اینکه کارمند کسی باشم؟»

                                    خبر خوب این است که امروزه فرصت‌های زیادی برای کسب درآمد از برنامه‌نویسی به‌صورت فریلنسری و بدون ورود به دنیای کارمندی وجود دارد دارد! توسعه‌ی محصولات دیجیتال، آموزش آنلاین و حتی راه‌اندازی استارتاپ شخصی جزو مسیرهایی است که برنامه‌نویس‌ها می‌توانند بدون استخدام شدن در یک مجموعه،سبک زندگی جدیدی را تجربه کنند. در ادامه این مقاله از مجله سبزلرن، می‌خواهیم به سراغ بهترین روش‌های درآمدزایی از برنامه‌نویسی، بدون نیاز به کار کردن برای دیگران برویم.</p>

                                <img src="./images/courses/python.png" className='article-img' alt="" />

                                <h2 className='title mb-4'>۱. فریلنسینگ: اولین قدم برنامه نویسان به سوی استقلال</h2>

                                <p className='mb-5'>فریلنسینگ یکی از سریع‌‌ترین و در دسترس‌‌ترین روش‌ها برای کسب درآمد از برنامه‌ نویسی است. شما در این روش به‌جای کار در یک شرکت ثابت، به‌‌صورت پروژه‌‌ای با کارفرماهای مختلف همکاری خواهید کرد و نرخ دستمزد خود را معمولا بدون در نظر گرفتن ساعت کاری تعیین می‌کنید. این یعنی انعطاف‌ پذیری در کار، آزادی در انتخاب پروژه‌ها و امکان کسب درآمد بیشتر نسبت به یک شغل ثابت!
                                </p>

                                <h2 className='title mb-4'>چگونه فریلنسینگ را شروع کنیم؟</h2>

                                <p className='mb-5'>
                                    برای شروع، اولین قدم این است که مهارت‌های خود را مشخص کنید. آیا در توسعه وب تخصص دارید؟ یا برنامه‌نویسی موبایل و هوش مصنوعی؟ حوزه تخصصی شما است. مشخص کردن حوزه‌ای که در آن مهارت دارید، به شما کمک می‌کند تا پروژه‌های مناسب‌‌تری پیدا کنید. سپس باید یک پروفایل حرفه‌ای بسازید و نمونه‌ کارهای خود را در آن قرار دهید. داشتن نمونه‌ کار قوی و جذاب، یکی از مهم‌ترین عوامل جذب مشتری است.
                                </p>

                                <h2 className='title  mb-3'>مزایا</h2>

                                <ul className='mb-5'>
                                    <li>درآمد غیر مستقیم و مقیاس‌پذیر</li>
                                    <li>فروش مداوم بدون نیاز به حضور فیزیکی</li>
                                    <li>امکان ایجاد جریان‌های درآمدی متنوع</li>
                                </ul>

                                <h2 className='title mb-3'>معایب</h2>

                                <ul className='mb-5 '>
                                    <li>درآمد غیر مستقیم و مقیاس‌پذیر</li>
                                    <li>فروش مداوم بدون نیاز به حضور فیزیکی</li>
                                    <li>امکان ایجاد جریان‌های درآمدی متنوع</li>
                                </ul>

                            </div>

                            <div className='offer'>
                                <div>
                                    <h3 className='title mb-3'>پیشنهاد مطالعه</h3>
                                </div>
                                <div className='row'>
                                    <OrderBox />
                                    <OrderBox />
                                    <OrderBox />
                                    <OrderBox />
                                </div>
                            </div>

                            <div className='comments mt-5'>
                                <div className='d-flex align-items-center justify-content-between mb-5'>
                                    <h2 className='title'>نظرات</h2>
                                    <button className='btn btn-success'>ایجاد نظر جدید</button>
                                </div>
                                <CommentBox />
                                <CommentBox />
                            </div>

                        </div>

                        <div className='col-4'>
                            <h2>لینک کوتاه دوره</h2>
                            <div className='link-box'>
                                <PiPaperPlaneRight />
                                <p>sabzlearn.ir/?p=5418</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

import React from 'react'
import './Footer.css'
import { LiaTelegramPlane } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { TiPhoneOutline } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { RiArrowLeftWideLine } from "react-icons/ri";


export default function Footer() {
    return (
        <div>
            <div className='container'>
                <div className='footer-top d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-3'>
                        <img src="./hat-graduation-svgrepo-com.svg" className='logo' alt="" />
                        <h1 className='footer-title'><span className='text-success'>سبز</span>لرن</h1>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <div>
                            <IoLogoInstagram className='icon' />
                        </div>
                        <div>
                            <LiaTelegramPlane className='icon' />
                        </div>
                        <div>
                            <SiWhatsapp className='icon' />
                        </div>
                    </div>
                </div>
                <div className='footer-middle d-flex flex-column flex-sm-row align-items-center justify-content-center gap-5'>
                    <div>
                        09151600690
                        <TiPhoneOutline className='icon' />
                    </div>
                    <div>
                        sabzlearn@gmail.com
                        <HiOutlineMail className='icon' />
                    </div>
                </div>
                <div className='footer-bottom mt-5'>
                    <div className='row'>
                        <div className="col-12 col-sm-6 col-md-4 mt-5">
                            <h2 className='fs-2 fw-bold mb-4'>درباره سبزلرن</h2>
                            <p>شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 mt-5'>
                            <h2 className='fs-2 fw-bold mb-4'>دوره های پر طرفدار</h2>
                            <ul className='link-wrapper'>
                                <li>
                                    <RiArrowLeftWideLine />
                                    آموزش پایتون
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    دوره BootStrap
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    مستر فریلنس
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    دوره های طراحی قالب
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 mt-5'>
                            <h2 className='fs-2 fw-bold mb-4'>دسترسی سریع</h2>
                            <ul className='link-wrapper'>
                                <li>
                                    <RiArrowLeftWideLine />
                                    قوانین و مقررات
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    ارسال تیکت
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    همه دوره ها
                                </li>
                                <li>
                                    <RiArrowLeftWideLine />
                                    ارتباط با ما
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
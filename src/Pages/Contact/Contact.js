import React from 'react'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbat/Topbar'

export default function Contact() {
    return (
        <>
            <Topbar />
            <div className='contact'>
                <div className='container'>
                    <div className='input-wrapper'>
                        <div className='d-flex align-items-center justify-content-center gap-3 mb-5'>
                            <img src="./hat-graduation-svgrepo-com.svg" className='logo' alt="logo" />
                            <h1 className='footer-title'><span className='text-success'>سبز</span>لرن</h1>
                        </div>
                        <form className='d-flex flex-column justify-content-center align-items-center'>
                            <input type="text" placeholder='نام و نام خانوادگی' />
                            <input type="password" placeholder='آدرس ایمیل' />
                            <input type="password" placeholder='شماره تماس' />
                            <textarea className='mb-3' cols="30" rows="1" placeholder='متن خود را وارد فرمایید :'></textarea>
                            <button className='sign-btn'>ادامه</button>
                            <div className='d-flex align-items-center justify-content-between w-100 mt-5'>
                                <div>
                                    <a href="#">ورود با ایمیل</a>
                                </div>
                                <div>
                                    <a href="#">ثبت نام</a>
                                </div>
                            </div>
                            <div className='mt-3 '>
                                <p className='fs-5 rule-text'>با عضویت در سایت ، تمامی قوانین و شرایط استفاده از خدمات سبزلرن را پذرفته اید . </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

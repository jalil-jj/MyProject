import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className='container'>
                <div className='input-wrapper'>
                    <div className='d-flex align-items-center justify-content-center gap-3 mb-5'>
                        <img src="./hat-graduation-svgrepo-com.svg" className='logo' alt="logo" />
                        <h1 className='footer-title'><span className='text-success'>سبز</span>لرن</h1>
                    </div>
                    <form className='d-flex flex-column justify-content-center align-items-center'>
                        <input type="text" placeholder='نام کاربری' />
                        <input type="password" placeholder='رمز ورود' />
                        <button className='sign-btn'>ادامه</button>
                        <div className='d-flex align-items-center justify-content-between w-100 mt-5'>
                            <div>
                                <a href="#">ورود با ایمیل</a>
                            </div>
                            <div>
                                <a href="#">ثبت نام</a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='fs-5'>با عضویت در سایت ، تمامی قوانین و شرایط استفاده از خدمات سبزلرن را پذرفته اید . </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

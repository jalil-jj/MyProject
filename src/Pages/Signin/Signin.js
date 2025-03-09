import React from 'react';
import './Signin.css';

export default function Signin() {
    return (
        <div className='signin'>
            <div className='container'>
                <div className='input-wrapper'>
                    <div className='d-flex align-items-center justify-content-center gap-3 mb-5'>
                        <img src="./hat-graduation-svgrepo-com.svg" className='logo' alt="logo" />
                        <h1 className='footer-title'><span className='text-success'>سبز</span>لرن</h1>
                    </div>
                    <form className='d-flex flex-column justify-content-center align-items-center'>
                        <input type="text" placeholder='نام و نام خانوادگی' />
                        <input type="text" placeholder='نام کاربری' />
                        <input type="email" placeholder='ایمیل' />
                        <input type="text" placeholder='شماره تماس' />
                        <input type="password" placeholder='رمز ورود' />
                        <button className='sign-btn'>ادامه</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

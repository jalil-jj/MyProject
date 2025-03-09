import React from 'react'
import './Header.css'
import Topbar from '../Topbat/Topbar'
import { FiSearch } from "react-icons/fi";

export default function Header() {
    return (
        <div className='header'>
            <Topbar />


                    <div className="container">
            <div className='header-main'>
                <h1>سبزلرن ، اولین گام برنامه نویس شدن</h1>

                <p className='header-main-p'>با آکادمی خصوصی سبزلرن ، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</p>

                <div className='header-search-wrapper'>
                    <input type="text" placeholder='جست و جو در بین دوره ها ...' />
                    <FiSearch className='icon' />
                </div>

                <div className='w-100 mt-5'>
                    <div className='row'>
                        <div className='col-4 text-center'>
                            <img src="./team-svgrepo-com.svg" className='header-box-icon' alt="" />
                            <span className='header-box-number'>31231</span>
                            <p className='header-box-p'>دانشجو</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src="./book-open-svgrepo-com.svg" className='header-box-icon' alt="" />
                            <span className='header-box-number'>31231</span>
                            <p className='header-box-p'>دانشجو</p>
                        </div>
                        <div className='col-4 text-center'>
                            <img src="./clock-svgrepo-com.svg" className='header-box-icon' alt="" />
                            <span className='header-box-number'>31231</span>
                            <p className='header-box-p'>دانشجو</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

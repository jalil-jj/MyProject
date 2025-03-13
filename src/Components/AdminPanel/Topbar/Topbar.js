import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import './Topbar.css'

export default function Topbar() {
    return (
        <div className='mt-4 border-bottom pb-5'>
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h1 className='title'>سبزلرن</h1>
                    </div>
                    <div className='d-flex align-items-center gap-3'>
                        <input className='input' type="text" placeholder='جست و جو ...' />
                        <IoMdNotificationsOutline className='icon' />
                    </div>
                    <div className='admin-profile d-flex align-items-center gap-3'>
                        <img src="/images/courses/python.png" alt="" />
                        <h2 className='fw-bold'>امین سعیدی راد</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

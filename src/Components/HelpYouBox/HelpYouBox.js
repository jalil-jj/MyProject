import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import './HelpYouBox.css'

export default function HelpYouBox() {
    return (
        <div className='col-6'>
            <div className='d-flex align-items-center gap-5 box'>
                <div>
                    <IoBookOutline className='icon' />
                </div>
                <div>
                    <h4 className='fs-2 fw-bold'>تضمین کامل ترین محتوا</h4>
                    <p className='fs-5'>بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری.</p>
                </div>
            </div>
        </div>
    )
}

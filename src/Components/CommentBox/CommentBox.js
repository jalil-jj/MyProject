import React from 'react'
import { IoPersonOutline } from "react-icons/io5";


export default function CommentBox() {
    return (
        <div className='comment-box'>
            <div className='d-flex align-items-center justify-content-between border-bottom'>
                <div className='d-flex align-items-center gap-4'>
                    <div>
                        <IoPersonOutline className='icon-title' />
                    </div>
                    <div>
                        <h3>جلیل جابری | <span>کاربر</span></h3>
                        <p className='my-3'>1403/12/02</p>
                    </div>
                </div>
                <div>
                    <button className='btn btn-success'>بستن</button>
                </div>
            </div>
            <div className='mb-5 mt-3'>
                <p>سلام استاد خسته نباشید
                    ببخشید دوره چه زمانی ویدیو ها بارگذاری می شود و تکمیل می شود ؟</p>
            </div>
            <div className='answer-comment'>
                <div className='d-flex align-items-center justify-content-between border-bottom'>
                    <div className='d-flex align-items-center gap-4'>
                        <div>
                            <IoPersonOutline className='icon-title' />
                        </div>
                        <div>
                            <h3>علی جابری | <span>مدرس</span></h3>
                            <p className='my-3'>1403/12/02</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>سلام استاد خسته نباشید
                        ببخشید دوره چه زمانی ویدیو ها بارگذاری می شود و تکمیل می شود ؟</p>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './ArticleBox.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function ArticleBox() {
  return (
    <div className='col-4'>
    <div class="card">
        <img src="./images/courses/python.png" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">چگونه یک چالش برنامه‌نویسی را با CHATGPT حل کنیم؟</h5>
            <p class="card-text">تا به حال فکر کرده‌اید که اگر مجبور نبودید به سبک کارمندی کار کنید، زندگی‌تان چه شکلی می‌شد؟ اگر پروژه‌ها و ساعت‌های کاری را</p>
            <div className='d-flex align-items-center justify-content-between border-bottom box-detaile'>
                <p>شهرام خندقی</p>
                <p>1403/12/18</p>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3 gap-3'>
                <a href="#">مطالعه مقاله</a>
                <FaArrowAltCircleLeft />
            </div>
        </div>
    </div>
</div>
  )
}

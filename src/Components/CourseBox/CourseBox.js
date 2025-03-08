import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


export default function CourseBox() {
    return (
        <div className='col-12 col-sm-6 col-lg-4'>
            <div class="card mt-3">
                <img src="./images/courses/jango.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fs-2">دوره متخصص جنگو</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center gap-2'>
                            <FaRegUser/>
                            عباس حسینی
                        </div>
                        <div>
                        <FaStar style={{ color: "green", fontSize: "24px" }} />
                        <FaStar style={{ color: "green", fontSize: "24px" }} />
                        <FaStar style={{ color: "green", fontSize: "24px" }} />
                        <FaStar style={{ color: "green", fontSize: "24px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

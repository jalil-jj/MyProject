import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";


export default function SectionTitle({title , subTitle,btn}) {
    return (
        <div>
            <div className='container'>
                <div className='d-flex flex-column flex-sm-row align-items-center  justify-content-between'>
                    <div>
                        <h2 className='title'>{title}</h2>
                        <span>{subTitle}</span>
                    </div>
                    <div>
                        <a href="#" className='btn btn-success fs-4 mt-4'>
                            {btn}
                            <FaLongArrowAltLeft className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

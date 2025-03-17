import React from 'react'

export default function GeneralDiscount() {
  return (
    <div>
         <div className='px-5 mb-5'>
                <h2 className='title w-100 my-5'>برگزاری کمپین جدید تخفیف های همگانی</h2>

                <form className="row g-5">

                    <div className="col-md-12">
                        <input type="text" id="courseName" name="courseName" className="form-control" placeholder="لطفا کد تخفیف را وارد نمایید ..." />
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-success w-100 fs-2'>ایجاد کمپین</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

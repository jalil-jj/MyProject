import React from 'react'
import Table from 'react-bootstrap/Table';


export default function Offs() {
    return (
        <div className='px-5 mb-5'>
            <div className='px-5 mb-5'>
                <h2 className='title w-50 my-5'>افزودن کد تخفیف جدید</h2>

                <form className="row g-5">

                    <div className="col-md-6">
                        <label htmlFor="courseName" className="form-label">کد تخفیف</label>
                        <input type="text" id="courseName" name="courseName" className="form-control" placeholder="لطفا کد تخفیف را وارد نمایید ..." />
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="courseInstructor" className="form-label">درصد تخفیف</label>
                        <input type="text" id="courseInstructor" name="courseInstructor" className="form-control" placeholder="لطفا درصد تخفیف  را وارد نمایید ..." />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="coursePrice" className="form-label">حد اکثر استفاده از کد تخفیف</label>
                        <input type="text" id="coursePrice" name="coursePrice" className="form-control" placeholder="لطفا  حداکثر میزان استفاده را وارد نمایید ..." />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="courseCategory" className="form-label">دسته‌بندی دوره</label>
                        <select id="courseCategory" name="courseCategory" className="form-control">
                            <option value="">لطفا دسته‌بندی را انتخاب نمایید</option>
                            <option value="react">دوره جامع React</option>
                            <option value="vue">دوره جامع Vue</option>
                            <option value="angular">دوره جامع Angular</option>
                            <option value="nodejs">دوره جامع Node.js</option>
                        </select>
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-success w-100 fs-2'>ارسال</button>
                    </div>
                </form>
            </div>

            <div className='data-table'>
                <h2 className='title mb-5'>لیست دوره ها</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>عنوان</th>
                            <th>مبلغ</th>
                            <th>وضعیت</th>
                            <th>لینک</th>
                            <th>مدرس</th>
                            <th>ویرایش</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>دوره جامع HTML</td>
                            <td>200000</td>
                            <td>درحال برگزاری</td>
                            <td>Html/hjmj</td>
                            <td>محمد امین سعیدی راد</td>
                            <td>
                                <button className='btn btn-success'>ویرایش</button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>حذف</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

import React from 'react'
import Table from 'react-bootstrap/Table';


export default function Sessions() {
    return (
        <div className='sessions px-5 mb-5'>


            <div>
                <h2 className='title w-25 my-5'>افزودن جلسه جدید</h2>

                <form className="row g-5">

                    <div className="col-md-6">
                        <label htmlFor="courseName" className="form-label">عنوان جلسه</label>
                        <input type="text" id="courseName" name="courseName" className="form-control" placeholder="لطفا عموان جلسه را وارد نمایید ..." />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="coursePrice" className="form-label">مدت زمان جلسه</label>
                        <input type="text" id="coursePrice" name="coursePrice" className="form-control" placeholder="لطفا مدت زمان را وارد نمایید ..." />
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="courseCategory" className="form-label">دوره</label>
                        <select id="courseCategory" name="courseCategory" className="form-control">
                            <option value="">لطفا دسته‌بندی را انتخاب نمایید</option>
                            <option value="react">دوره جامع React</option>
                            <option value="vue">دوره جامع Vue</option>
                            <option value="angular">دوره جامع Angular</option>
                            <option value="nodejs">دوره جامع Node.js</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="courseCategory" className="form-label">عکس جلسه</label>
                        <input type="file" id="courseCategory" name="courseCategory" className="form-control" placeholder="لطفا نحوه پشتیبانی دوره را وارد نمایید ..." />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">وضعیت دوره</label>
                        <div className="d-flex gap-3">
                            <div className="radio-group">
                                <input type="radio" id="active" name="courseStatus" value="active" />
                                <label htmlFor="active">رایگان</label>
                            </div>
                            <div className="radio-group">
                                <input type="radio" id="inactive" name="courseStatus" value="inactive" />
                                <label htmlFor="inactive">غیر رایگان</label>
                            </div>
                        </div>
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
                            <th>تایم</th>
                            <th>دوره</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>آموزش Border</td>
                            <td>10:22</td>
                            <td>دوره جامع Css</td>
                            <td>
                                <button className='btn btn-danger'>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>آموزش Border</td>
                            <td>10:22</td>
                            <td>دوره جامع Css</td>
                            <td>
                                <button className='btn btn-danger'>حذف</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>آموزش Border</td>
                            <td>10:22</td>
                            <td>دوره جامع Css</td>
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

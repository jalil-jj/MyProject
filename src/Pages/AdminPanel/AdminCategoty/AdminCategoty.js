import React from 'react'
import Table from 'react-bootstrap/Table';


export default function AdminCategoty() {
    return (
        <div className='px-5 mb-5'>
            <div className='px-5 mb-5'>
                <h2 className='title w-50 my-5'>افزودن دسته بندی جدید</h2>

                <form className="row g-5">

                    <div className="col-md-6">
                        <label htmlFor="courseName" className="form-label">عنوان</label>
                        <input type="text" id="courseName" name="courseName" className="form-control" placeholder="لطفا عنوان را وارد نمایید ..." />
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="courseInstructor" className="form-label">اسم کوتاه</label>
                        <input type="text" id="courseInstructor" name="courseInstructor" className="form-control" placeholder="لطفا اسم را وارد نمایید ..." />
                    </div>

                    <div className='col-12'>
                        <button className='btn btn-success w-100 fs-2'>افزودن</button>
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
                            <th>ویرایش</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>دوره جامع HTML</td>
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

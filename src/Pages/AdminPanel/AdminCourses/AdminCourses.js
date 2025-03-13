import React from 'react'
import Table from 'react-bootstrap/Table';
import './AdminCourses.css'

export default function AdminCourses() {
  return (
    <div className='admin-courses px-5 mb-5'>

      <div>
        <h2 className='title w-25 my-5'>افزودن دوره جدید</h2>

        <form className="row g-5">

          <div className="col-md-6">
            <label htmlFor="courseName" className="form-label">نام دوره</label>
            <input type="text" id="courseName" name="courseName" className="form-control" placeholder="لطفا نام دوره را وارد نمایید ..." />
          </div>

          <div className="col-md-6">
            <label htmlFor="coursePrice" className="form-label">توضیحات دوره</label>
            <input type="text" id="coursePrice" name="coursePrice" className="form-control" placeholder="لطفا توضیحات دوره را وارد نمایید ..." />
          </div>

          <div className="col-md-6">
            <label htmlFor="courseInstructor" className="form-label">آدرس URL</label>
            <input type="text" id="courseInstructor" name="courseInstructor" className="form-control" placeholder="لطفا آدرس  را وارد نمایید ..." />
          </div>

          <div className="col-md-6">
            <label htmlFor="courseCategory" className="form-label">قیمت دوره</label>
            <input type="text" id="courseCategory" name="courseCategory" className="form-control" placeholder="لطفا قیمت دوره را وارد نمایید ..." />
          </div>

          <div className="col-md-6">
            <label htmlFor="courseCategory" className="form-label">نحوه پشتیبانی دوره</label>
            <input type="text" id="courseCategory" name="courseCategory" className="form-control" placeholder="لطفا نحوه پشتیبانی دوره را وارد نمایید ..." />
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

          <div className="col-md-6">
            <label htmlFor="courseCategory" className="form-label">عکس دوره</label>
            <input type="file" id="courseCategory" name="courseCategory" className="form-control" placeholder="لطفا نحوه پشتیبانی دوره را وارد نمایید ..." />
          </div>

          <div className="col-md-6">
            <label className="form-label">وضعیت دوره</label>
            <div className="d-flex gap-3">
              <div className="radio-group">
                <input type="radio" id="active" name="courseStatus" value="active" />
                <label htmlFor="active">پیش فروش</label>
              </div>
              <div className="radio-group">
                <input type="radio" id="inactive" name="courseStatus" value="inactive" />
                <label htmlFor="inactive">درحال برگزاری</label>
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

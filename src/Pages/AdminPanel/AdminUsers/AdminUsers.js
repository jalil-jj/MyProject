import React from 'react'
import './AdminUsers.css'
import Table from 'react-bootstrap/Table';


export default function AdminUsers() {
    return (
        <div className='px-5 mb-5'>
            <div className='data-table'>
                <h2 className='title mb-5'>لیست کاربر ها</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>نام و نام خانوادگی</th>
                            <th>نقش</th>
                            <th>ایمیل</th>
                            <th>ویرایش</th>
                            <th>تغییر نقش</th>
                            <th>حذف</th>
                            <th>بن</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>مبین جابری</td>
                            <td>مدیر</td>
                            <td>mobin@gmail.com</td>
                            <td>
                                <button className='btn btn-success'>ویرایش</button>
                            </td>
                            <td>
                                <button className='btn btn-info'>تغییر نقش</button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>حذف</button>
                            </td>
                            <td>
                                <button className='btn btn-danger'>بن</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

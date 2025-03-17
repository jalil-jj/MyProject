import React from 'react'
import Table from 'react-bootstrap/Table';


export default function AdminContacts() {
    return (
        <div className='px-5 mb-5'>
            <div className='data-table'>
                <h2 className='title mb-5'>لیست پیغام ها</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>نام و نام خانوادگی</th>
                            <th>ایمیل</th>
                            <th>شماره تماس</th>
                            <th>مشاهده</th>
                            <th>پاسخ</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>سمانه حسین پور</td>
                            <td>samaneh@gmail.com</td>
                            <td>09123456789</td>
                            <td>
                                <button className='btn btn-info'>مشاهده</button>
                            </td>
                            <td>
                                <button className='btn btn-info'>پاسخ</button>
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

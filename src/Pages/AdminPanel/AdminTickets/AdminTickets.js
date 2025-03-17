import React from 'react'
import Table from 'react-bootstrap/Table';


export default function AdminTickets() {
    return (
        <div className='px-5 mb-5'>
            <div className='data-table'>
                <h2 className='title mb-5'>لیست تیکت ها</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>کاربر</th>
                            <th>عنوان</th>
                            <th>نوع تیکت</th>
                            <th>دوره</th>
                            <th>اولویت</th>
                            <th>مشاهده</th>
                            <th>پاسخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ستاره علوی</td>
                            <td>درخواست تخفیف</td>
                            <td>بخش مالی</td>
                            <td>--</td>
                            <td>بالا</td>
                            <td>
                                <button className='btn btn-info'>مشاهده</button>
                            </td>
                            <td>
                                <button className='btn btn-info'>پاسخ</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

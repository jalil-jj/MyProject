import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Topbar.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";


export default function Topbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md">
                <div class="container">
                    <h1 className='d-md-none'>سایت آموزشی من</h1>
                    <img src="./hat-graduation-svgrepo-com.svg" className='navbar-brand logo' alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center  justify-content-sm-between" id="navbarNav">
                        <ul class="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    دوره های آموزشی
                                </a>
                                <ul className="dropdown-menu dropdown first-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item main-menu dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle d-flex align-items-center justify-content-between"
                                            href="#"
                                            id="submenuDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                             فرانت اند
                                             <IoIosArrowRoundBack className='menu-icon'/>
                                        </a>
                                        <ul className="dropdown-menu second-menu" aria-labelledby="submenuDropdown">
                                            <li><a className="dropdown-item" href="#">دوره Html</a></li>
                                            <li><a className="dropdown-item" href="#">دوره Css</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item main-menu dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle d-flex align-items-center justify-content-between"
                                            href="#"
                                            id="submenuDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            بک اند 
                                            <IoIosArrowRoundBack className='menu-icon'/>

                                        </a>
                                        <ul className="dropdown-menu second-menu" aria-labelledby="submenuDropdown">
                                            <li><a className="dropdown-item" href="#">دوره Node Js 1</a></li>
                                            <li><a className="dropdown-item" href="#">دوره Express Js 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item main-menu dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle d-flex align-items-center justify-content-between"
                                            href="#"
                                            id="submenuDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                             پیشرفته
                                            <IoIosArrowRoundBack className='menu-icon'/>
                                        </a>
                                        <ul className="dropdown-menu second-menu" aria-labelledby="submenuDropdown">
                                            <li><a className="dropdown-item" href="#">دوره پیشرفته 1</a></li>
                                            <li><a className="dropdown-item" href="#">دوره پیشرفته 2</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">همه دوره ها</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">مقالات</a>
                            </li>
                        </ul>
                        <div className='d-flex align-items-center justify-content-center mt-2 gap-4'>
                            <div>
                                <FiSearch className='icon' />
                            </div>
                            <div>
                                <HiOutlineShoppingBag className='icon' />
                            </div>
                            <div className='button-wrapper'>
                                <a href="#"> ورود / ثبت نام</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

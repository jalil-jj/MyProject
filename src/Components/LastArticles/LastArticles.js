import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './LastArticles.css'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'

export default function LastArticles() {
    return (
        <div className='mt-5'>
            <SectionTitle
                title='جدید ترین مقاله ها'
                subTitle='سکوی پرتاب شما به سمت موفقیت'
                btn='تمامی مقاله ها'
            />

            <div className='mt-5'>
                <div className='container'>
                    <div className='row'>
                      <ArticleBox />
                      <ArticleBox />
                      <ArticleBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

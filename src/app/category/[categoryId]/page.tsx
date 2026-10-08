import NewsCard from '@/components/NewsCard';
// import React from 'react';

interface ICategoryNews {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    tags: string;
}

const CategoryNews = async ({params}: {params: {categoryId: string}}) => {
    const {categoryId} = await params;
    // console.log(categoryId);
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    // console.log(data);
    const categoryNews: ICategoryNews[] = data.data;
    // console.log(categoryNews);
    return (
        <div className='mx-[5%] md:mx-[15%] my-5'>
            <h1 className='text-2xl font-bold border-b-2 border-red-600 my-2 py-2'>{data.title}</h1>

            <div className='grid grid-cols-3 gap-3'>
                {categoryNews.map(news => <NewsCard key={news.id} news={news} />)}
            </div>

            
        </div>
    );
};

export default CategoryNews;
// import React from 'react';

interface IMostReadNews {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const news: IMostReadNews[] = data.data;
    // console.log(news);
    return (
        <div className="card bg-base-100 p-2 border border-gray-300 shadow-sm mt-5">
            <h1 className="font-bold text-red-600">সর্বাধিক পঠিত</h1>
            <div className="grid gap-2 mt-3">
                {news.map((n, i) => <div className="py-1 flex gap-2" key={n.id}>
                    <p className="font-bold text-red-600">{i+1}</p><div>{n.title}</div>
                </div>)}
            </div>
        </div>
    );
};

export default MostRead;
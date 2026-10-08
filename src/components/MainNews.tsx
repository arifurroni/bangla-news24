import Image from 'next/image';
import Link from 'next/link';
// import React from 'react';

interface INews {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MainNews = ({news}: {news: INews[]}) => {
    const [firstNews, ...otherNews] = news;
    // const firstNews = news[0];
    // const otherNews = news.slice(1);
    // console.log(otherNews);
    return (
        <div className="flex gap-2 my-5">

            <Link href={`/news/${firstNews.id}`} className="w-1/2">
                <div className="card bg-base-100  shadow-sm">
                    <figure>
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                            width={400}
                            height={300}
                        />
                    </figure>
                    <div className="card-body">
                        <h6 className="text-red-600 text-sm font-semibold">{firstNews.category}</h6>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>

                    </div>
                </div>
            </Link>

            <div className="grid gap-2">
                
                {otherNews.slice(0, 4).map(on => <div className="card bg-base-100 border border-gray-200 py-5 px-3" key={on.id}>
                    <h6 className="text-red-600 text-sm font-semibold">{on.category}</h6>
                    <div>{on.title}</div>
                </div>)}

            </div>

        </div>
    );
};

export default MainNews;
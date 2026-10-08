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

const NewsCard = ({ news }: { news: INews }) => {
    // console.log(news);
    return (
        
        <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        width={400}
                        height={300}
                        src={news.imageUrl}
                        alt={news.imageAlt}
                    />
                </figure>
                <div className="card-body">
                    <h6 className="text-red-600 text-sm font-semibold">{news.category}</h6>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.description}</p>

                </div>
            </div>
        </Link>

    );
};

export default NewsCard;
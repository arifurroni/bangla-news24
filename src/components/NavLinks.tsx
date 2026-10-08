import Link from 'next/link';
import React from 'react';

interface INavLinks {
    slug: string,
      title: string,
      topicId: string | null,
      url: string,
      scrapable: boolean
}

const NavLinks = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: INavLinks[] = data.data;
    // console.log(navs);
    const filteredNavs = navs.filter((n) => n.scrapable === true);
    return (
        <div className="flex justify-center gap-4 py-2 mx-[5%] md:mx-[15%] text-sm font-semibold">

            <Link href="/">হোম</Link>
            {filteredNavs.map((n, i) => <Link key={i} href={`/category/${n.slug}`}>{n.title}</Link>)}
            
        </div>
    );
};

export default NavLinks;
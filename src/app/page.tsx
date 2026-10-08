import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

// interface ISection {
//   curationId: string;
//   title: string;
//   articles: {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     imageUrl: string;
//     imageAlt: string;
//   }[];
// }


export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);
  // console.log(mainNews);
  // console.log(otherSections);

  return (
    <div className="text-justify">

      
      <div className="grid grid-cols-3 mx-[5%] md:mx-[15%] gap-4">
        {/* News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <div className="grid gap-3 mt-5">
            {otherSections.map(os => <div className=" py-1" key={os.curationId}>
              <h1 className="font-bold border-b-2 border-red-700">{os.title}</h1>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {
                  os.articles.map(news => <NewsCard key={news.id} news={news} />)
                }
              </div>
            </div>)}
          </div>
        </div>

        {/* Most Read Section */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>

    </div>
  );
}

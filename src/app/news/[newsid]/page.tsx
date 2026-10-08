import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = async ({
    params,
}: {
    params: Promise<{ newsid: string }>;
}) => {
    const { newsid } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/article/${newsid}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        notFound();
    }

    const data = await res.json();
    const newsDetails = data?.data;

    if (!newsDetails) {
        notFound();
    }

    const date = newsDetails.firstPublished
        ? new Date(newsDetails.firstPublished).toLocaleDateString("bn-BD", {
              dateStyle: "full",
          })
        : "";

    return (
        <div className="mx-[5%] md:mx-[15%] my-5">
            <h1 className="text-2xl font-bold my-3">
                {newsDetails.title}
            </h1>

            <Image
                className="my-3 h-auto w-full"
                src={newsDetails.imageUrl}
                alt={newsDetails.title}
                width={400}
                height={300}
            />

            <p className="my-3">{newsDetails.text}</p>

            <div className="my-3">{date}</div>

            <div>
                {newsDetails.tags?.map((tag: string) => (
                    <div
                        className="inline-block bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded-full m-2"
                        key={tag}
                    >
                        {tag.trim()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsDetails;
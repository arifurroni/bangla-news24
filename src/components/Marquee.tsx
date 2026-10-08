import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IHeadLine {
    id: string,
    title: string,
}

const Marquee = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headLines: IHeadLine[] = data.data;
    // console.log(headLines);

    return (
        <div className="bg-red-700 text-white py-1 px-2">
            <div className="flex mx-[5%] md:mx-[15%]">
                <div className="bg-red-800 px-5">সর্বশেষ</div>
                <MarqueeText direction="right" duration={10}>
                    {headLines.map((h) => <span key={h.id}>
                        <span>{h.title}</span>
                        <span className="mx-5">•</span>
                    </span>)}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;
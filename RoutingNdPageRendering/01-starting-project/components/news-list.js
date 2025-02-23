import Link from "next/link";

export default function NewsList({news}){

    return (
    <ul className="news-list">
    {news.map(newsItem =>(
        <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
                <img src={`/images/news/${newsItem.image}`} />
            </Link>
        </li>
    ))}
</ul>);
}
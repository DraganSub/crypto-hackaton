import { Card } from "antd";
import { useGetNewsQuery } from "../services";
import { news } from "../types";
import { dateFormatter } from "../utility";
import { Skeleton } from "antd";
import classNames from "classnames";

export default function NewsList({
    theme,
    limit,
}: {
    theme?: string;
    limit: string;
}) {
    const { data, isLoading, error } = useGetNewsQuery({
        theme: theme ? theme : "cryptocurrency",
        limit: limit ? limit : "6",
    });
    if (error) return <p>error</p>;
    if (isLoading) return <Skeleton />;
    if (!data || !data.value) return null;

    return (
        <>
            {data.value.map((val) => (
                <NewsCard {...val} key={val.name} />
            ))}
        </>
    );
}



const NewsCard = (props: news) => {
    const { name, image, url, description, datePublished, provider } = props;
    const formattedDate = dateFormatter(datePublished);

    const noImgClassName = classNames(
        "",
        {
            "no__img-wrap": image?.thumbnail.contentUrl == null
        }
    )
    return (
        <a href={url} >
            <Card className="crypto_news-card">
                <div className="crypto__card__title">
                    <h5>{name}</h5>
                    <div className={noImgClassName}>
                        <CryptoNewsImg url={image?.thumbnail.contentUrl} />
                    </div>
                </div>
                <p>{description!.substring(0, 150)}...</p>
                <div className="news-info">
                    <p className="news-provider">{provider[0].name}</p>
                    <p className="news-time">{formattedDate}</p>
                </div>
            </Card>
        </a>
    );
};
const CryptoNewsImg = ({ url }: { url: string }) => {
    if (!url) {
        return null;
    }
    // just example, need to make this generic
    return <img className="crypto__news__img" src={url} alt="crypto-news" />;
};

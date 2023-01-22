import { Card } from "antd";
import { useGetNewsQuery } from "../services";
import { news } from "../types";

export default function NewsList() {
    const { data, isLoading, error } = useGetNewsQuery("7");
    if (error) return <p>error</p>;
    if (isLoading) return <p>loading...</p>;
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
    const { name, image, url, description, datePublished, category, provider } =
        props;
    return (
        <Card className="crypto_news-card">
            <div className="crypto__card__title">
                <h5>{name}</h5>
                <CryptoNewsImg url={image?.thumbnail.contentUrl} />
            </div>
            <p>{description}</p>
            <div className="news-info">
                <p className="news-provider">{provider[0].name}</p>
                <p className="news-time">{datePublished}</p>
            </div>
        </Card>
    );
};
const CryptoNewsImg = ({ url }: { url: string }) => {
    // just example, need to make this generic
    return <img className="crypto__news__img" src={url} />;
};

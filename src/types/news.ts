export type news = {
    name: string;
    url: string;
    image: {
        thumbnail: {
            contentUrl: string;
        };
    };
    provider: [
        {
            name: string;
            _type: string;
        }
    ];
    description: string;
    datePublished: string;
    category: string;
};

import { useState, useEffect } from "react";
import { Select } from "antd";
import { NewsList } from "../components";
import { coins } from "../utility";

export default function News() {
    const [searcInputValue, setSearchInputValue] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onChange = (value: string) => {
        setSearchInputValue(value);
    };

    const onSearch = (value?: string) => {
        setSearchTerm(value || searcInputValue);
    };

    return (
        <section className="crypto-news">
            <div className="crypto__title-group">
                <Select
                    className="crypto__search-field"
                    showSearch
                    placeholder="Enter your crypto here..."
                    optionFilterProp="children"
                    onChange={onChange}
                    onSelect={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                    onInputKeyDown={(e) => {
                        if (e.nativeEvent.key === "Enter") onSearch();
                    }}
                    options={coins}
                />
            </div>
            <div className="crypto__grid__lg">
                {<NewsList limit="15" theme={searchTerm} />}
            </div>
        </section>
    );
}

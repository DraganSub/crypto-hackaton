import { useState, useEffect } from "react";
import { Select } from "antd";
import { NewsList } from "../components";
import { coins } from "../utility";
import classNames from "classnames";
import { useTheme } from "../hooks";

export default function News() {
    const [searcInputValue, setSearchInputValue] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { theme } = useTheme();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onChange = (value: string) => {
        setSearchInputValue(value);
    };

    const onSearch = (value?: string) => {
        setSearchTerm(value || searcInputValue);
    };

    const searchFieldClassName = classNames(
        "crypto__search-field",
        {
            "search__field--dark": theme === "dark"
        }
    )


    return (
        <section className="crypto-news bottom_margin_150">
            <div className="crypto__title-group">
                <Select
                    className={searchFieldClassName}
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

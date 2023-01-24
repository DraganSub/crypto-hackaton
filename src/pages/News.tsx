import React, { useState } from "react";
import { Select } from "antd";
import { NewsList } from "../components";
import { coins } from "../utility";

export default function News() {
  const [searchInputValue, setSearchInputValue] = useState<string>("")
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onChange = (value: string) => {
    setSearchInputValue(value);
  };

  const onSearch = (value: string) => {
    setSearchTerm(value)
  };

  return <section className="crypto-news">
    <div className="crypto__news--titles-group">
      <Select
        className="crypto__search-field"
        showSearch
        placeholder="Enter your crypto here..."
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={coins}
      />
    </div>
    <div className="crypto__grid__lg">
      {<NewsList limit="6" />}
    </div>
  </section>
}
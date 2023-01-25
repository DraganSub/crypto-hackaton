import { LoadingOutlined } from "@ant-design/icons";
import { Skeleton, Spin } from "antd";
import Card from "antd/es/card/Card";

export const CryptoDetailsPageLoader = () => {
  // dummy data for fixed 20 cards display 
  let cryptoDetailsSkeletonData = [];
  for (let i = 0; i < 20; i++) {
    cryptoDetailsSkeletonData.push(i)
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
  return (
    <div className="position--center">
      <Spin indicator={antIcon} />
    </div>
  )
}

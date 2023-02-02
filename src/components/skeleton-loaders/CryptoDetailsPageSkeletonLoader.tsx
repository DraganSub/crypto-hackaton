import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const CryptoDetailsPageLoader = () => {

  const antIcon = <LoadingOutlined style={{ fontSize: 44 }} spin />;
  return (
    <div className="position--center">
      <Spin indicator={antIcon} />
    </div>
  )
}

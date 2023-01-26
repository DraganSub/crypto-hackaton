import { Skeleton } from "antd"
import Card from "antd/es/card/Card"
import classNames from "classnames";
import { useTheme } from "../../hooks";

export const CryptoSkeletonLoader = () => {
  // dummy data for fixed 20 cards display 
  const { theme } = useTheme();

  let cryptoSkeletonData = [];
  for (let i = 0; i < 20; i++) {
    cryptoSkeletonData.push(i)
  }
  const cryptoCardClass = classNames("", {
    "card-is--dark no-border": theme === "dark"
  })

  return (
    <>
      <div className="crypto__search">
        <Skeleton.Input
          active
          size={"large"}
        />
      </div>
      <div className="crypto__grid">
        {cryptoSkeletonData.map((item) => {
          return (
            <Card key={item} title={<Skeleton.Input active={true} size={"small"} />} className={cryptoCardClass} extra={<Skeleton.Avatar active={true} size={"large"} shape={"circle"} />}>
              <div className="crypto__data">
                <div className="card__label" style={{ marginBottom: "10px" }}> <Skeleton.Input active={true} size={"small"} /> </div>
                <div className="card__label" style={{ marginBottom: "10px" }}> <Skeleton.Input active={true} size={"small"} /> </div>
                <div className="card__label" > <Skeleton.Input active={true} size={"small"} /> </div>
              </div>
            </Card>
          )
        })}
      </div>
    </>
  )
}
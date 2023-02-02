import { Skeleton } from "antd";
import Card from "antd/es/card/Card";
import classNames from "classnames";
import { useTheme } from "../../hooks";

export const NewsSkeletonLoader = () => {
  // dummy data for fixed 20 cards display 
  const { theme } = useTheme();
  let newsSkeletonData = [];
  for (let i = 0; i < 20; i++) {
    newsSkeletonData.push(i)
  }

  const cryptoCardClass = classNames("crypto_news-card", {
    "card-is--dark": theme === "dark"
  });

  return (
    <>
      {newsSkeletonData.map((item) => {
        return (
          <div key={item}>
            <Card className={cryptoCardClass}>
              <div className="crypto__card__title" style={{ padding: "10px" }}>
                <h5 ><Skeleton.Input active={true} size={"small"} /></h5>
                <div style={{ padding: "10px" }}>
                  <Skeleton.Avatar active={true} size={"large"} />
                </div>
              </div>
              <Skeleton.Input active={true} size={"small"} />
              <div className="news-info" style={{ padding: "10px" }}>
                <div className="news-provider" style={{ padding: "10px" }}><Skeleton.Input active={true} size={"small"} /></div>

                <div className="news-time" style={{ padding: "10px" }}><Skeleton.Input active={true} size={"small"} /></div>
              </div>
            </Card>
          </div>
        )
      })
      }
    </>
  )
}

import { Skeleton } from "antd";
import Card from "antd/es/card/Card";

export const NewsSkeletonLoader = () => {
  // dummy data for fixed 20 cards display 
  let newsSkeletonData = [];
  for (let i = 0; i < 20; i++) {
    newsSkeletonData.push(i)
  }

  return (
    <>
      {newsSkeletonData.map((item) => {
        return (
          <div key={item}>
            <Card className="crypto_news-card">
              <div className="crypto__card__title">
                <h5><Skeleton.Input active={true} size={"small"} /></h5>
                <div>
                  <Skeleton.Avatar active={true} size={"small"} />
                </div>
              </div>
              <Skeleton.Input active={true} size={"small"} />
              <div className="news-info">
                <div className="news-provider"><Skeleton.Input active={true} size={"small"} /></div>
                <div className="news-time"><Skeleton.Input active={true} size={"small"} /></div>
              </div>
            </Card>
          </div>
        )
      })
      }
    </>
  )
}

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ResultList({ loading, data, search }) {
  return (
    <>
      <p className="result-label">
        Search result for : <strong>{search}</strong>
      </p>
      <div className="result-list">
        {loading ? (
          <div className="result-list__loading">
            {[...Array(5)].map((_, i) => (
              <SkeletonTheme baseColor="#efefef" highlightColor="#d3d3d3">
                <Skeleton count={1} width="100%" height={125} ma />
              </SkeletonTheme>
            ))}
          </div>
        ) : (
          <ul>
            {data?.map((item, i) => (
              <div className="result-list__item" key={`result-list__item-${i}`}>
                <div className="col-left">
                  <div className="video">
                    <div className="outer-content">
                      <div className="inner-content">
                        <video
                          src={item.previewUrl}
                          autoPlay={false}
                          controls
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-right">
                  <div>
                    <p className="name">{item?.artistName}</p>
                    <p className="title">{item?.trackName}</p>
                  </div>
                  <div className="genre-price">
                    <span className="genre">{item.primaryGenreName}</span>
                    <span className="price">
                      <img src="/img/ic_usd.png" width={18} height={18} />{" "}
                      {item.trackPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

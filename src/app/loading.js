import "./animation.css";
export default function Loading() {
  return (
    <div className="loading">
      <div className="text-dark">
        <div className="loading-circle circle-size-normal">
          <div className="inner-circle inner-circle-size-normal"></div>
        </div>
      </div>
    </div>
  );
}

export function SmallLoadingExternal() {
  return (
    <div className="loading-small-circle circle-size-small">
      <div className="inner-circle inner-circle-size-small"></div>
    </div>
  );
}

export default function RoadMapSection({ roadMapPic }) {
  return (
    <div className="road__map__section">
      <img
        src={roadMapPic}
        alt="roadMapPic"
        className="road__map__section__img"
      />
      <div className="road__map__section__bottom">Road Map</div>
    </div>
  );
}

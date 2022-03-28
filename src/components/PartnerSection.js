export default function PartnerSection({
  partner1,
  partner2,
  partner4,
  partner3,
  partner5,
}) {
  return (
    <div className="partner__section">
      <div className="feature__section__heading">Our Partners</div>
      <div className="partner__section__content">
        <div className="partner__section__content__entry">
          <img src={partner1} alt="partner1" />
        </div>
        <div className="partner__section__content__entry">
          <img src={partner2} alt="partner2" />
        </div>
        <div className="partner__section__content__entry">
          <img src={partner4} alt="partner4" />
        </div>
        <div className="partner__section__content__entry">
          <img src={partner3} alt="partner3" />
        </div>
        <div className="partner__section__content__entry">
          <img src={partner5} alt="partner5" />
        </div>
      </div>
    </div>
  );
}

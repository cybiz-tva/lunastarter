export default function PartnerSection({ partners }) {
  return (
    <div className="partner__section">
      <div className="feature__section__heading">Our Partners</div>
      <div className="partner__section__content">
        {partners.map((partner) => (
          <div className="partner__section__content__entry" key={partner}>
            <img src={partner} alt="partner1" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection({ logoBig }) {
  return (
    <section id="about__section" className="about__section">
      <div className="about__section__left">
        <img
          src={logoBig}
          alt="logoBig"
          className="about__section__left__img"
        />
      </div>
      <div className="about__section__right">
        <div className="about__section__right__heading">
          What is Lunastarter?
        </div>
        <div className="about__section__right__info">
          Lunastarter is a community-driven, tier-less launchpad and incubator
          built on Terra blockchain. It has a very unique community-driven
          project selection mechanism with a fair and guaranteed allocation for
          all of the participants. Lunastarter guides entrepreneurs to find
          innovative business models to maximize their impact and develop their
          projects as financially viable investments.
        </div>
      </div>
    </section>
  );
}

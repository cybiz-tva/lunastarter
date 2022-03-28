import { Linkedin } from "react-feather";

export default function TeamCard({ image, name, designation, linkedin }) {
  return (
    <div className="team__section__content__entry">
      <img
        src={image}
        alt="teamImg"
        className="team__section__content__entry__img"
      />
      <div className="team__section__content__entry__link">
        <a
          href={linkedin}
          className="team__section__content__entry__link__entry"
        >
          <Linkedin size={20} color="currentColor" />
        </a>
      </div>
      <div className="team__section__content__entry__content__heading">
        {name}
      </div>
      <div className="team__section__content__entry__content">
        {designation}
      </div>
    </div>
  );
}

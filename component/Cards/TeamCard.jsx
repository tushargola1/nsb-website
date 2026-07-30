// component/Cards/TeamCard.jsx
import Link from "next/link";

export default function TeamCard({ member }) {
  return (
    <div className="rs-team-item">
      <div className="rs-team-shape-one">
        <img src="/assets/images/shape/three-line-shape.webp" alt="shape" />
      </div>
      <div className="rs-team-shape-two">
        <img src="/assets/images/shape/circle-shape.webp" alt="shape" />
      </div>
      <div className="rs-team-thumb">
        <Link href={`/faculty/${member.slug}`}>
          <img src={member.image} alt={member.name} />
        </Link>
      </div>
      <div className="rs-team-content-wrapper">
        <div className="rs-team-content-info">
          <h5 className="rs-team-title underline">
            <Link href={`/faculty/${member.slug}`}>{member.name}</Link>
          </h5>
          <span className="rs-team-designation">{member.designation}</span>
        </div>
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ member, urlNeeded }) {
  const content = (
    <>
      <Image
        src={member.image}
        alt={member.name}
        width={400}
        height={450}
        className="team-img"
      />
    </>
  );

  return (
    <div className="rs-team-item h-100 d-flex flex-column">
      <div className="rs-team-shape-one">
        <Image
          src="/assets/images/shape/three-line-shape.webp"
          width={100}
          height={100}
          alt="Shape"
        />
      </div>

      <div className="rs-team-shape-two">
        <Image
          src="/assets/images/shape/circle-shape.webp"
          width={100}
          height={100}
          alt="Shape"
        />
      </div>

      <div className="rs-team-thumb">
        {urlNeeded ? (
          <Link href={`/faculty/${member.slug}`}>
            {content}
          </Link>
        ) : (
          content
        )}
      </div>

      <div className="rs-team-content-wrapper flex-grow-1 d-flex align-items-center">
        <div className="rs-team-content-info w-100">
          <h5 className="rs-team-title underline">
            {urlNeeded ? (
              <Link href={`/faculty/${member.slug}`}>{member.name}</Link>
            ) : (
              member.name
            )}
          </h5>

          <span className="rs-team-designation">
            {member.designation}
          </span>
        </div>
      </div>
    </div>
  );
}
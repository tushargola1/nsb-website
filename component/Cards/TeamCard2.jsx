import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard2 = ({ data }) => {
  return (
    <div className="rs-team-four">
      <div className="rs-team-item ">
        <div className="rs-team-thumb">
          <Link href={""}>
            <Image
              src={data.image}
              width={200}
              height={50}
              alt="NSB Logo"
              priority
            />
          </Link>
        </div>
        <div className="rs-team-content-wrapper">
          <div className="rs-team-content-info">
            <h6
              className={`rs-team-title underline `}
            >
              <Link href={""}>{data.name}</Link>
            </h6>

            {data.position && (
              <span className="rs-team-designation">{data.position}</span>
            )}

            {data.position1 && (
              <span className="rs-team-designation">{data.position1}</span>
            )}
            {data.position2 ? (
              <div className="mt-10">
                <span
                  className="rs-team-designation "
                  style={{ fontSize: "14px" }}
                >
                  {data.position2}
                </span>
              </div>
            ) : (
              <></>
            )}
            {data.organization ? (
              <div className="mt-10">
                <span className="rs-team-designation blue-color">
                  {data.organization}
                </span>
              </div>
            ) : (
              <></>
            )}
            {data.about ? (
              <>
                <div className="rs-postbox-text mt-10">
                  <p>{data.about}</p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard2;

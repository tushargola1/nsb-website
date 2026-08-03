// app/faculty/[slug]/page.jsx

import facultyData from "@/component/data/facultyData";
import styles from "./faculty_detail.module.css";
import Link from "next/link";
import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
export async function generateStaticParams() {
  return facultyData.map((member) => ({ slug: member.slug }));
}

const EXCLUDED_KEYS = [
  "slug",
  "name",
  "designation",
  "category",
  "image",
  "contact",
  "summary",
  "publications",
];

function humanizeKey(key) {
  const withSpaces = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function FieldValue({ value }) {
  if (typeof value === "string" || typeof value === "number") {
    return <p style={{ marginBottom: 0 }}>{value}</p>;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    return (
      <ul className="rs-info-list">
        {value.map((item, i) => (
          <li key={i}>
            {typeof item === "string" || typeof item === "number"
              ? item
              : Object.values(item).filter(Boolean).join(" – ")}
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "object" && value !== null) {
    return (
      <>
        {Object.entries(value).map(([subKey, subValue]) => (
          <div key={subKey} style={{ marginBottom: "10px" }}>
            {subValue && (
              <>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  {humanizeKey(subKey)}
                </strong>
                <FieldValue value={subValue} />
              </>
            )}
          </div>
        ))}
      </>
    );
  }

  return null;
}

function isUrl(str) {
  return /^https?:\/\//.test(str) || /^www\./.test(str);
}

function renderPublicationValue(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) return null;
    return (
      <ul className={styles.pubList}>
        {value.map((item, i) => (
          <li className={styles.pubListItem} key={i}>
            <svg
              aria-hidden="true"
              className={styles.pubListIcon}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 12.5l2.5 2.5L16 9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.pubListText}>
              {typeof item === "string" || typeof item === "number"
                ? item
                : Object.values(item).filter(Boolean).join(" – ")}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (typeof value === "string" && value) {
    if (isUrl(value)) {
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.pubLink}
        >
          {value}
        </a>
      );
    }
    return <p className={styles.pubText}>{value}</p>;
  }

  return null;
}

function PublicationsSection({ publications }) {
  if (!publications) return null;

  const entries = Object.entries(publications).filter(
    ([, value]) =>
      value !== null &&
      value !== undefined &&
      value !== "" &&
      !(Array.isArray(value) && value.length === 0),
  );

  if (entries.length === 0) return null;

  return (
    <div className={styles.pubSection}>
      <h3 className={styles.pubMainTitle}>Publications</h3>
      {entries.map(([key, value]) => (
        <div className={styles.pubGroup} key={key}>
          <h5 className={styles.pubGroupTitle}>{humanizeKey(key)}</h5>
          {renderPublicationValue(value)}
        </div>
      ))}
    </div>
  );
}

// Groups an array into chunks of `size` (used to insert a divider after every 2 fields)
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export default async function FacultyDetailPage({ params }) {
  const { slug } = await params;
  const member = facultyData.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="container section-space">
        <h2>Faculty member not found</h2>
        <Link href="/faculty">← Back to Faculty</Link>
      </main>
    );
  }

  const dynamicFields = Object.entries(member).filter(
    ([key, value]) =>
      !EXCLUDED_KEYS.includes(key) &&
      value !== null &&
      value !== undefined &&
      value !== "",
  );

  const fieldRows = chunk(dynamicFields, 2);

  return (
    <main>
      <Breadcrump currentPage={member.name} parentPage={"Faculty Members"} />

      {/* Team details */}
      <section className="rs-team-details-details-area rs-team-details section-space-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="rs-team-details-wrapper">
                {/* Left sidebar: photo + name */}
                <div className="rs-team-details-thumb-wrapper">
                  <div className="rs-team-details-author-thumb">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      priority
                    />
                  </div>
                  <div className="rs-team-details-author-info text-center">
                    <h5 className="rs-team-details-author-name">
                      {member.name}
                    </h5>
                    <span className="rs-team-details-author-desig">
                      {member.designation}
                    </span>
                  </div>
                </div>

                {/* Right content */}
                <div className="rs-team-details-content-wrapper">
                  {member.summary && (
                    <>
                      <h3 className="rs-team-details-title">
                        About: Introduction
                      </h3>
                      <p className="rs-team-details-desc">{member.summary}</p>
                    </>
                  )}
                  {/* Dynamic fields in the two-column info grid, divided every 2 fields.
                      Inline styles override the site's default multi-column CSS on
                      rs-team-details-info (column-count), which was making the divider
                      only span partial width instead of the full row. */}
                  <div
                    className="rs-team-details-info"
                    style={{ display: "block", columnCount: 1 }}
                  >
                    {fieldRows.map((row, rowIndex) => (
                      <div key={rowIndex} style={{ width: "100%" }}>
                        <div
                          className="rs-team-details-info-row"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            columnGap: "30px",
                            width: "100%",
                          }}
                        >
                          {row.map(([key, value]) => (
                            <div
                              className="rs-team-details-info-item"
                              key={key}
                            >
                              <h5 className="rs-team-details-info-title">
                                {humanizeKey(key)}
                              </h5>
                              <FieldValue value={value} />
                            </div>
                          ))}
                        </div>
                        {rowIndex < fieldRows.length - 1 && (
                          <hr
                            style={{
                              margin: "20px 0",
                              border: "none",
                              borderTop: "1px solid #e2e2e2",
                              width: "100%",
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Contact info */}
                  {member.contact && (
                    <div className="rs-team-details-contact-info">
                      <h5 className="rs-team-details-contact-title">
                        Contact Information's
                      </h5>
                      <div className="rs-contact-wrapper">
                        {member.contact.email && (
                          <a
                            className="rs-contact-info-item"
                            href={`mailto:${member.contact.email}`}
                          >
                            {member.contact.email}
                          </a>
                        )}
                        {member.contact.phone && (
                          <a
                            className="rs-contact-info-item"
                            href={`tel:${member.contact.phone.replace(/[^0-9+]/g, "")}`}
                          >
                            {member.contact.phone}
                          </a>
                        )}
                        {member.contact.website && (
                          <a
                            className="rs-contact-info-item"
                            href={member.contact.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {member.contact.website}
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <PublicationsSection publications={member.publications} />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-xl-12 text-center"
              style={{ marginTop: "30px", paddingBottom: "60px" }}
            >
              <Link
                className="rs-btn has-icon has-theme-blue hover-yellow"
                href="/faculty"
              >
                <span className="btn-text-wrap">
                  <span className="text-default">← Back to Faculty</span>
                  <span className="text-hover">← Back to Faculty</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

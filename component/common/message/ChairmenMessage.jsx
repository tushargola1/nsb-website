import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChairmenMessage = ({ isReadMore }) => {
  const fullMessage = `Energy is an essential part of our lives. Its importance has further increased during the COVID-19 pandemic period as it is critical in providing emergency services and facilitating lifesaving equipment. This has clearly brought additional responsibility for the energy professional. To match the ever­ increasing need for energy, a specialized workforce is required which can serve the sector rationally. At NTPC School of Business, we have joined hands with the best in the field of management, IIM Ahmedabad, to bring forward a curriculum that would enhance the nation’s energy entail. NTPC Ltd has never shied away from its social responsibility. In the current scenario of global economic turmoil and climate change, our responsibility lies to make use of our natural resources more judicially. NTPC School of Business was envisaged under the NEARS education outlook program to produce energy managers for precisely this purpose. Our students are well aware of their role in the workplace and ready to devote their efforts to their organizations`;

  const shortMessage = `Energy is an essential part of our lives. Its importance has further
  increased during this period as it is critical in providing emergency
  services and facilitating lifesaving equipment. This has clearly
  brought additional responsibility for the energy professional. To
  match the ever-increasing need for energy, a specialized workforce is
  required which can serve the sector rationally...`;

  return (
    <div
      className="rs-quote-wrapper row align-items-center flex-lg-row flex-md-column flex-column gap-lg-0 gap-md-4 gap-4"
      style={{ background: "#ffdead" }}
    >
      <div className="col-md-12 col-lg-3 col-12">
        <Image
          src="/assets/images/faculty/gurdeep.png"
          width={300}
          height={400}
          alt="NSB Logo"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-md-12 col-lg-9 col-12">
        <div className="rs-quote-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
            <path d="M0 0V24L12 12V0H0Z"></path>
            <path d="M20 0V24L32 12V0H20Z"></path>
          </svg>
        </div>

        <p className="rs-quote-desc position-relative">
          {isReadMore ? shortMessage : fullMessage}

          {isReadMore && (
            <Link href="/about/message-from-cmd-desk"
              className="position-absolute text-danger cursor-pointer"
              style={{ right: 0 }}
            >
              Read More..
            </Link>
          )}
        </p>

        <h5 className="rs-quote-author">
          - Mr. GURDEEP SINGH - Chairman & Managing Director NTPC Ltd.
        </h5>
      </div>
    </div>
  );
};

export default ChairmenMessage;

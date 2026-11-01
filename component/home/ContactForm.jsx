"use client";

import { useState } from "react";
import API_BASE_URL from "@/utils/api";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nsbEmail: "",
    phone: "",
    enrollmentNo: "",
    grievance: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    success: false,
    message: "",
  });

  // Handle input changes and basic character restrictions
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "firstName" || name === "lastName") {
      updatedValue = value.replace(/[^\p{L}\s'-]/gu, "");
    }

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  // Submit grievance form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, nsbEmail, phone, enrollmentNo, grievance } =
      formData;

    // Required field validation
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !nsbEmail.trim() ||
      !phone.trim() ||
      !enrollmentNo.trim() ||
      !grievance.trim()
    ) {
      setModal({
        open: true,
        success: false,
        message: "Please fill in all the required fields.",
      });
      return;
    }

    // Name validation
    const nameRegex = /^[\p{L}\s'-]+$/u;

    if (!nameRegex.test(firstName.trim()) || !nameRegex.test(lastName.trim())) {
      setModal({
        open: true,
        success: false,
        message:
          "First name and last name should contain valid characters only.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(nsbEmail.trim())) {
      setModal({
        open: true,
        success: false,
        message: "Please enter a valid NSB email address.",
      });
      return;
    }

    // Phone validation
    if (!/^[0-9]{10}$/.test(phone)) {
      setModal({
        open: true,
        success: false,
        message: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

    // Enrollment number validation
    if (enrollmentNo.trim().length > 50) {
      setModal({
        open: true,
        success: false,
        message: "Enrollment number cannot exceed 50 characters.",
      });
      return;
    }

    // Grievance validation
    if (grievance.trim().length < 10) {
      setModal({
        open: true,
        success: false,
        message: "Please enter a grievance of at least 10 characters.",
      });
      return;
    }

    if (grievance.length > 5000) {
      setModal({
        open: true,
        success: false,
        message: "Grievance cannot exceed 5000 characters.",
      });
      return;
    }

    // Basic script / HTML injection rejection
    const scriptPattern =
      /<\s*\/?\s*(script|iframe|object|embed|svg|math)|javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|on[a-z]+\s*=/i;

    if (scriptPattern.test(grievance)) {
      setModal({
        open: true,
        success: false,
        message: "HTML tags and script code are not allowed in the grievance.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: nsbEmail.trim(),
          phone,
          subject: `Grievance Redressal - Enrollment No: ${enrollmentNo.trim()}`,
          message: `
Grievance Redressal Submission

First Name: ${firstName.trim()}
Last Name: ${lastName.trim()}
NSB Email: ${nsbEmail.trim()}
Phone: ${phone}
Enrollment Number: ${enrollmentNo.trim()}

Grievance:
${grievance.trim()}
          `,
          formType: "Grievance Form",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your grievance.");
      }

      setFormData({
        firstName: "",
        lastName: "",
        nsbEmail: "",
        phone: "",
        enrollmentNo: "",
        grievance: "",
      });

      setModal({
        open: true,
        success: true,
        message:
          "Your grievance has been submitted successfully. The concerned team will review it.",
      });
    } catch (error) {
      console.error("Grievance submission error:", error);

      setModal({
        open: true,
        success: false,
        message:
          error.message ||
          "Unable to submit your grievance. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="rs-contact-area bg-primary rs-contact-one mt-50">
        <div className="rs-contact-wrapper">
          <div
            className="rs-contact-bg-thumb include-bg"
            data-background="/assets/images/bg/contact-bg-thumb-01.webp"
          ></div>

          <div className="container">
            <div className="row align-items-end g-5">
              <div className="col-xl-12 col-lg-12">
                <div
                  className="rs-contact-form wow fadeInRight"
                  data-wow-delay=".3s"
                  data-wow-duration="1s"
                >
                  <div className="section-title-wrapper mb-30">
                    <h5 className="form-title rs-split-text-enable split-in-left mb-10">
                      Grievance Redressal
                    </h5>
                  </div>

                    <form
  id="grievance-redressal-form"
  onSubmit={handleSubmit}
  noValidate
>
                    <div className="row rs-gutter-24">
                      {/* First Name */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                              maxLength={100}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                              maxLength={100}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* NSB Email */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="nsbEmail"
                              name="nsbEmail"
                              type="email"
                              placeholder="NSB Email"
                              value={formData.nsbEmail}
                              onChange={handleChange}
                              maxLength={150}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              maxLength={10}
                              inputMode="numeric"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Enrollment No. */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              id="enrollmentNo"
                              name="enrollmentNo"
                              type="text"
                              placeholder="Enrollment No."
                              value={formData.enrollmentNo}
                              onChange={handleChange}
                              maxLength={50}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Your Grievance */}
                      <div className="col-md-12">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <textarea
                              id="grievance"
                              name="grievance"
                              placeholder="Your Grievance"
                              value={formData.grievance}
                              onChange={handleChange}
                              maxLength={5000}
                              rows={5}
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="col-md-12 d-flex align-items-center justify-content-center">
                        <div className="rs-contact-btn">
                          <button
                            type="submit"
                            className="rs-btn has-theme-yellow hover-white radius-6 w-100"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div id="form-messages"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Modal */}
      {modal.open && (
        <div
          role="presentation"
          onClick={() => setModal((prev) => ({ ...prev, open: false }))}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "20px",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="grievance-modal-title"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "450px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                color: modal.success ? "#198754" : "#dc3545",
                marginBottom: "12px",
              }}
            >
              {modal.success ? "✓" : "!"}
            </div>

            <h4 id="grievance-modal-title">
              {modal.success ? "Grievance Submitted" : "Submission Failed"}
            </h4>

            <p style={{ margin: "12px 0 20px", color: "#555" }}>
              {modal.message}
            </p>

            <button
              type="button"
              className="rs-btn has-theme-yellow hover-white radius-6"
              onClick={() => setModal((prev) => ({ ...prev, open: false }))}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

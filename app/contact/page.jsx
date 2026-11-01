
"use client";

import Breadcrump from "@/component/common/breadcrump/Breadcrump";
import Image from "next/image";
import React, { useState } from "react";
import API_BASE_URL from "@/utils/api";

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [modal, setModal] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const showModal = (type, title, message) => {
    setModal({ open: true, type, title, message });
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, open: false }));
  };

  const validateForm = (data) => {
    const errors = {};

    const name = data.name?.trim() || "";
    const email = data.email?.trim() || "";
    const phone = data.number?.trim() || "";
    const program = data.program?.trim() || "";
    const message = data.message?.trim() || "";

    // Name validation: letters and spaces only
    if (!name) {
      errors.name = "Please enter your name.";
    } else if (!/^[\p{L} ]+$/u.test(name)) {
      errors.name = "Name must contain letters and spaces only.";
    } else if (name.length < 2 || name.length > 100) {
      errors.name = "Name must be between 2 and 100 characters.";
    }

    // Email validation
    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
      email.length > 150
    ) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone validation: exactly 10 digits
    if (!phone) {
      errors.number = "Please enter your mobile number.";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      errors.number = "Mobile number must contain exactly 10 digits.";
    }

    // Program validation
    const allowedPrograms = [
      "PGDM (Energy Management)",
      "PGDM (Executive)",
      "PHD",
    ];

    if (!allowedPrograms.includes(program)) {
      errors.program = "Please select a valid program.";
    }

    // Message validation
    if (!message) {
      errors.message = "Please enter your message.";
    } else if (message.length < 10) {
      errors.message = "Message must contain at least 10 characters.";
    } else if (message.length > 3000) {
      errors.message = "Message cannot exceed 3000 characters.";
    } else if (
      /<[^>]*>|javascript\s*:|vbscript\s*:|data\s*:\s*text\/html|on[a-z]+\s*=/i.test(
        message
      )
    ) {
      errors.message =
        "HTML tags, scripts and executable code are not allowed.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      program: formData.get("program"),
      message: formData.get("message"),
    };

    const errors = validateForm(formValues);

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstInvalidField = Object.keys(errors)[0];

      showModal(
        "error",
        "Please Check Your Details",
        errors[firstInvalidField]
      );

      form.elements[firstInvalidField]?.focus();
      return;
    }

    const payload = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      phone: formValues.number.trim(),
      subject: formValues.program,
      message: formValues.message.trim(),
      formType: "Contact Form",
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      form.reset();
      setFieldErrors({});

      showModal(
        "success",
        "Enquiry Submitted Successfully!",
        "Thank you for contacting NSB. Our team has received your enquiry and will get back to you soon."
      );
    } catch (error) {
      console.error("Contact form submission error:", error);

      showModal(
        "error",
        "Submission Failed",
        error.message ||
          "We couldn't submit your enquiry. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearFieldError = (field) => {
    setFieldErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const inputErrorStyle = (field) =>
    fieldErrors[field]
      ? {
          border: "1px solid #dc3545",
          outlineColor: "#dc3545",
        }
      : {};

  const renderFieldError = (field) =>
    fieldErrors[field] ? (
      <small
        role="alert"
        style={{
          display: "block",
          color: "#dc3545",
          fontSize: "12px",
          marginTop: "5px",
        }}
      >
        {fieldErrors[field]}
      </small>
    ) : null;

  return (
    <div>
      <Breadcrump currentPage="Contact Us" parentPage={"Contact"} />

      <div className="rs-contact-area rs-contact-five section-space-top pb-30">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-12">
              <div className="rs-contact-wrapper">

                {/* Support Email */}
                <div className="rs-contact-item">
                  <div className="rs-contact-shape">
                    <Image
                      src="/assets/images/shape/three-line-shape.webp"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="rs-contact-icon">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                      >
                        <path d="M33.3359 0C29.6563 0 26.6719 2.98438 26.6719 6.66406C26.6719 10.3438 29.6563 13.3281 33.3359 13.3281C37.0156 13.3281 40 10.3438 40 6.66406C40 2.98438 37.0156 0 33.3359 0ZM37.1484 3.97656L34.6875 11.0078C34.3906 11.8516 33.1719 11.7812 32.9844 10.9062L32.2812 7.72656L29.1016 7.02344C28.2266 6.82812 28.1562 5.60938 29 5.32031L36.0234 2.85156C36.7188 2.60156 37.3984 3.27344 37.1484 3.97656ZM25 16.1016L36.1641 27.2656C35.4375 27.9922 34.4375 28.4375 33.3359 28.4375H4C2.89844 28.4375 1.89844 27.9922 1.17188 27.2656L12.3359 16.1016L15.2891 19.0547C16.1953 19.9609 17.3906 20.4531 18.6719 20.4531C19.9531 20.4531 21.1484 19.9531 22.0547 19.0547L25 16.1016ZM37.3359 12.9453V24.4453C37.3359 25.2656 37.0859 26.0312 36.6641 26.6641L25.5469 15.5547L28.6484 12.4531C29.9297 13.4922 31.5547 14.1094 33.3281 14.1094C34.8047 14.1094 36.1797 13.6797 37.3359 12.9453ZM11.7891 15.5547L0.671875 26.6641C0.25 26.0312 0 25.2656 0 24.4375V6.66406C0 5.84375 0.25 5.07812 0.671875 4.44531L11.7891 15.5547ZM28.0703 11.9297L21.5 18.5C19.9375 20.0625 17.4062 20.0625 15.8438 18.5L1.17188 3.83594C1.89844 3.10937 2.89844 2.66406 4 2.66406H27.0547C26.3125 3.82031 25.8828 5.19531 25.8828 6.66406C25.8828 8.71875 26.7188 10.5781 28.0703 11.9297Z" />
                      </svg>
                    </span>
                  </div>

                  <div className="rs-contact-content">
                    <h5 className="rs-contact-title">Support Email</h5>
                    <div className="rs-contact-links">
                      <a href="mailto:admission@nsb.ac.in">
                        admission@nsb.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Document Verification */}
                <div className="rs-contact-item">
                  <div className="rs-contact-shape">
                    <Image
                      src="/assets/images/shape/three-line-shape.webp"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="rs-contact-icon">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="29"
                        viewBox="0 0 40 29"
                      >
                        <path d="M33.3359 0C29.6563 0 26.6719 2.98438 26.6719 6.66406C26.6719 10.3438 29.6563 13.3281 33.3359 13.3281C37.0156 13.3281 40 10.3438 40 6.66406C40 2.98438 37.0156 0 33.3359 0ZM37.1484 3.97656L34.6875 11.0078C34.3906 11.8516 33.1719 11.7812 32.9844 10.9062L32.2812 7.72656L29.1016 7.02344C28.2266 6.82812 28.1562 5.60938 29 5.32031L36.0234 2.85156C36.7188 2.60156 37.3984 3.27344 37.1484 3.97656ZM25 16.1016L36.1641 27.2656C35.4375 27.9922 34.4375 28.4375 33.3359 28.4375H4C2.89844 28.4375 1.89844 27.9922 1.17188 27.2656L12.3359 16.1016L15.2891 19.0547C16.1953 19.9609 17.3906 20.4531 18.6719 20.4531C19.9531 20.4531 21.1484 19.9531 22.0547 19.0547L25 16.1016ZM37.3359 12.9453V24.4453C37.3359 25.2656 37.0859 26.0312 36.6641 26.6641L25.5469 15.5547L28.6484 12.4531C29.9297 13.4922 31.5547 14.1094 33.3281 14.1094C34.8047 14.1094 36.1797 13.6797 37.3359 12.9453ZM11.7891 15.5547L0.671875 26.6641C0.25 26.0312 0 25.2656 0 24.4375V6.66406C0 5.84375 0.25 5.07812 0.671875 4.44531L11.7891 15.5547ZM28.0703 11.9297L21.5 18.5C19.9375 20.0625 17.4062 20.0625 15.8438 18.5L1.17188 3.83594C1.89844 3.10937 2.89844 2.66406 4 2.66406H27.0547C26.3125 3.82031 25.8828 5.19531 25.8828 6.66406C25.8828 8.71875 26.7188 10.5781 28.0703 11.9297Z" />
                      </svg>
                    </span>
                  </div>

                  <div className="rs-contact-content">
                    <h5 className="rs-contact-title">Document Verification</h5>
                    <div className="rs-contact-links">
                      <a href="mailto:coe@nsb.ac.in">coe@nsb.ac.in</a>
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="rs-contact-item">
                  <div className="rs-contact-shape">
                    <Image
                      src="/assets/images/shape/three-line-shape.webp"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="rs-contact-icon">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="34"
                        viewBox="0 0 35 34"
                      >
                        <path d="M1.87389 11.9812C2.39774 12.3353 2.99607 12.564 3.62253 12.6496C4.24898 12.7353 4.88674 12.6755 5.48639 12.475L7.74264 11.7313C8.17107 11.5646 8.55284 11.2969 8.85538 10.9508C9.15793 10.6047 9.37228 10.1906 9.48014 9.74375C10.1051 7.78125 14.8864 6.31875 16.9489 6.19375H18.1301C20.1551 6.33125 24.8801 7.76875 25.5051 9.7C25.6117 10.153 25.8266 10.5734 26.1314 10.925C26.4362 11.2766 26.8218 11.549 27.2551 11.7188L29.4864 12.4563C30.0933 12.6591 30.7388 12.7196 31.3729 12.6329C32.0069 12.5462 32.6125 12.3146 33.1426 11.9562C33.9793 11.407 34.5759 10.5602 34.8114 9.5875C35.0275 8.55649 34.9891 7.48834 34.6994 6.47553C34.4097 5.46273 33.8775 4.5358 33.1489 3.775C30.9676 1.59375 21.0426 0 17.4989 0C13.9551 0 4.03014 1.59375 1.83639 3.7875C1.11058 4.54508 0.579531 5.46753 0.288862 6.47562C-0.00180662 7.48371 -0.0434054 8.54729 0.167639 9.575C0.407307 10.566 1.01802 11.4272 1.87389 11.9812Z" />
                        <path d="M4.7125 33.7501H30.2875C31.5373 33.7501 32.736 33.2536 33.6197 32.3698C34.5035 31.4861 35 30.2874 35 29.0376V28.6064C35.0027 25.4512 33.9806 22.3805 32.0875 19.8564L28.525 15.1064C28.2051 14.6835 27.7913 14.3408 27.3162 14.1054C26.8411 13.8701 26.3177 13.7484 25.7875 13.7501H25.75C25.3657 13.7507 24.9938 13.6146 24.7006 13.3662C24.4075 13.1177 24.2123 12.773 24.15 12.3939L24.05 11.7689C23.9852 11.3269 23.7812 10.9171 23.4677 10.599C23.1541 10.281 22.7472 10.0712 22.3063 10.0001C22.017 9.96062 21.723 9.98378 21.444 10.068C21.165 10.152 20.907 10.296 20.689 10.488C20.470 10.681 20.295 10.919 20.176 11.185C20.057 11.451 19.997 11.74 20 12.031V12.1314C20 12.3439 19.958 12.5544 19.877 12.7508C19.795 12.947 19.676 13.126 19.526 13.276C19.375 13.426 19.197 13.546 19.001 13.627C18.805 13.708 18.594 13.75 18.381 13.75H16.619C16.189 13.75 15.778 13.58 15.474 13.276C15.171 12.972 15 12.561 15 12.131C15.015 11.625 14.845 11.13 14.524 10.738C14.202 10.346 13.75 10.084 13.25 10C12.727 9.928 12.196 10.062 11.77 10.375C11.344 10.688 11.056 11.154 10.969 11.675L10.85 12.375C10.792 12.758 10.598 13.106 10.305 13.359C10.011 13.611 9.637 13.75 9.25 13.75H9.206C8.675 13.75 8.151 13.873 7.676 14.111C7.201 14.349 6.787 14.694 6.469 15.119L2.906 19.869C1.018 22.39 -0.002 25.456 0 28.606V29.038C0 30.287 0.496 31.486 1.38 32.37C2.264 33.254 3.463 33.75 4.713 33.75Z" />
                      </svg>
                    </span>
                  </div>

                  <div className="rs-contact-content">
                    <h5 className="rs-contact-title">Phone Number</h5>
                    <div className="rs-contact-links">
                      <a href="tel:+919319888448">(+91) 9319888448</a>
                      <br />
                      <a href="tel:+919958880671">(+91) 9958880671</a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="rs-contact-item">
                  <div className="rs-contact-shape">
                    <Image
                      src="/assets/images/shape/three-line-shape.webp"
                      alt="image"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div className="rs-contact-icon">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="36"
                        viewBox="0 0 32 36"
                      >
                        <path d="M15.8203 0C9.49465 0 4.21875 5.09555 4.21875 11.6016C4.21875 14.0767 4.96252 16.2838 6.38993 18.352L14.9325 31.6818C15.3469 32.3298 16.2946 32.3286 16.7081 31.6818L25.2878 18.3066C26.6844 16.3322 27.4219 14.0138 27.4219 11.6016C27.4219 5.20446 22.2174 0 15.8203 0ZM15.8203 16.875C12.9127 16.875 10.5469 14.5092 10.5469 11.6016C10.5469 8.69393 12.9127 6.32812 15.8203 6.32812C18.7279 6.32812 21.0938 8.69393 21.0938 11.6016C21.0938 14.5092 18.7279 16.875 15.8203 16.875Z" />
                        <path d="M24.0654 24.2363L18.7547 32.5393C17.38 34.6826 14.253 34.6756 12.8849 32.5414L7.56549 24.2385C2.8852 25.3206 0 27.3029 0 29.6718C0 33.7824 8.15119 36 15.8203 36C23.4894 36 31.6406 33.7824 31.6406 29.6718C31.6406 27.3012 28.7514 25.3179 24.0654 24.2363Z" />
                      </svg>
                    </span>
                  </div>

                  <div className="rs-contact-content">
                    <h5 className="rs-contact-title">Address</h5>
                    <div className="rs-contact-links">
                      <p>
                        Plot No. 5-14, Sector 16-A Noida (UP)
                        <br />
                        Pincode 201301
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="rs-contact-area rs-contact-four section-space-bottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12">
              <div className="rs-contact-wrapper">
                <div className="rs-contact-form">

                  <div className="section-title-wrapper mb-30">
                    <h3 className="rs-contact-form-title rs-split-text-enable split-in-left mb-10">
                      Get in Touch
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row">

                      {/* Name */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter your name"
                              required
                              minLength={2}
                              maxLength={100}
                              autoComplete="name"
                              aria-invalid={!!fieldErrors.name}
                              onChange={(e) => {
                                e.target.value = e.target.value.replace(
                                  /[^\p{L} ]/gu,
                                  ""
                                );
                                clearFieldError("name");
                              }}
                              style={inputErrorStyle("name")}
                            />
                          </div>
                          {renderFieldError("name")}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              required
                              maxLength={150}
                              autoComplete="email"
                              aria-invalid={!!fieldErrors.email}
                              onChange={() => clearFieldError("email")}
                              style={inputErrorStyle("email")}
                            />
                          </div>
                          {renderFieldError("email")}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <input
                              type="tel"
                              name="number"
                              placeholder="Enter your number"
                              required
                              inputMode="numeric"
                              autoComplete="tel-national"
                              maxLength={10}
                              aria-invalid={!!fieldErrors.number}
                              onChange={(e) => {
                                e.target.value = e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10);
                                clearFieldError("number");
                              }}
                              style={inputErrorStyle("number")}
                            />
                          </div>
                          {renderFieldError("number")}
                        </div>
                      </div>

                      {/* Program */}
                      <div className="col-md-6">
                        <div className="rs-contact-input-box w-100">
                          <div className="rs-contact-input">
                            <select
                              name="program"
                              defaultValue=""
                              required
                              aria-invalid={!!fieldErrors.program}
                              onChange={() => clearFieldError("program")}
                              style={inputErrorStyle("program")}
                            >
                              <option value="" disabled>
                                Select Program
                              </option>
                              <option value="PGDM (Energy Management)">
                                PGDM (Energy Management)
                              </option>
                              <option value="PGDM (Executive)">
                                PGDM (Executive)
                              </option>
                              <option value="PHD">PHD</option>
                            </select>
                          </div>
                          {renderFieldError("program")}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="col-md-12">
                        <div className="rs-contact-input-box">
                          <div className="rs-contact-input">
                            <textarea
                              rows={5}
                              name="message"
                              placeholder="Your Message"
                              required
                              minLength={10}
                              maxLength={3000}
                              aria-invalid={!!fieldErrors.message}
                              onChange={() => clearFieldError("message")}
                              style={inputErrorStyle("message")}
                            ></textarea>
                          </div>
                          {renderFieldError("message")}
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="col-md-12">
                        <div className="rs-contact-btn">
                          <button
                            type="submit"
                            className="rs-btn has-theme-yellow hover-white w-100"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>

                </div>

                {/* Google Map */}
                <div className="rs-map-one">
                  <div className="rs-google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.117861643152!2d77.29411468715819!3d28.5688779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4416a68cca1%3A0x53ae321ab6802aee!2sNTPC%20School%20of%20Business!5e0!3m2!1sen!2sin!4v1786050819734!5m2!1sen!2sin"
                      title="NTPC School of Business location"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Feedback Modal */}
      {modal.open && (
        <div
          role="presentation"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            aria-describedby="contact-modal-description"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "440px",
              background: "#fff",
              borderRadius: "12px",
              padding: "35px 25px",
              textAlign: "center",
              boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: "65px",
                height: "65px",
                borderRadius: "50%",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  modal.type === "success" ? "#e8f7ee" : "#fff0f0",
                color:
                  modal.type === "success" ? "#198754" : "#dc3545",
                fontSize: "32px",
                fontWeight: "700",
              }}
            >
              {modal.type === "success" ? "✓" : "!"}
            </div>

            <h4
              id="contact-modal-title"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                marginBottom: "12px",
                color: "#222",
              }}
            >
              {modal.title}
            </h4>

            <p
              id="contact-modal-description"
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#666",
                marginBottom: "25px",
              }}
            >
              {modal.message}
            </p>

            <button
              type="button"
              className="rs-btn has-theme-yellow hover-white"
              onClick={closeModal}
              style={{
                minWidth: "130px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page;

"use client";

import { useState, useEffect } from "react";
import styles from "./WhatsappChat.module.css";
import Image from "next/image";

export default function WhatsappChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  const phoneNumber = "9958880671";

  const sendMessage = () => {
    if (!message.trim()) return;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message,
        )}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message,
        )}`;

    window.open(whatsappUrl, "_blank");

    setMessage("");
  };

  return (
    <>
      {isOpen ? (
        <div className={`${styles.chatBox} ${isOpen ? styles.show : ""}`}>
          <div className={styles.headerChat}>
            <div className={styles.headHome}>
              <div className={styles.avatar}>
                <Image
                  src="/assets/images/logo/nsblogoshort.jpg"
                  alt="NSB"
                  width={40}
                  height={40}
                  className={styles.avatarImage}
                />
              </div>

              <p>
                <span className={styles.whatsappName}>NSB</span>
                <br />
                <small>Typically replies within an hour</small>
              </p>
            </div>

            <button
              className={styles.closeChat}
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.chatBody}>
            <div className={styles.message}>
              <div className={styles.author}>NSB</div>

              <div className={styles.text}>
                Hi there 👋
                <br />
                How can I help you?
              </div>

              <div className={styles.time}>{currentTime}</div>
            </div>
          </div>

          <div className={styles.messageBox}>
            <textarea
              placeholder="Write a response"
              maxLength={120}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-2 py-1"
            />

            <button onClick={sendMessage} className={styles.sendBtn}>
              <svg viewBox="0 0 448 448">
                <path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button className={styles.showChat} onClick={() => setIsOpen(true)}>
               
                                <i className="fa-brands fa-whatsapp fs-2" style={{ color: "#4caf50" }}></i>

          Chat with Us
        </button>
      )}
    </>
  );
}

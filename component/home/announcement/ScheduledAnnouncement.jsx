"use client";

import { useEffect, useState } from "react";
import Announcement1 from "./Announcement1";

const ScheduledAnnouncement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 7:15 AM, 3 November 2026, Indian Standard Time
    const targetTime = new Date("2026-11-03T07:15:00+05:30").getTime();

    const checkAnnouncement = () => {
      setIsVisible(Date.now() >= targetTime);
    };

    checkAnnouncement();

    const interval = setInterval(checkAnnouncement, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return <Announcement1 />;
};

export default ScheduledAnnouncement;
"use client";

import { useEffect, useState } from "react";

interface VideoBackgroundProps {
  desktopSrc: string;
  mobileSrc: string;
  desktopWebm?: string;
  mobileWebm?: string;
  poster?: string;
}

export function VideoBackground({
  desktopSrc,
  mobileSrc,
  desktopWebm,
  mobileWebm,
  poster,
}: VideoBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mp4Src = isMobile ? mobileSrc : desktopSrc;
  const webmSrc = isMobile ? mobileWebm : desktopWebm;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={mp4Src} type="video/mp4" />
      </video>
      <div className="video-overlay absolute inset-0" />
    </div>
  );
}

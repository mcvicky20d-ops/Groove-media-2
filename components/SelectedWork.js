"use client";

import { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import ClientMarquee from "@/components/ClientMarquee";

/**
 * Bento-style portfolio grid. Each tile is a labeled PLACEHOLDER — drop a
 * poster image into `img` and (optionally) a hover clip into `video`. When a
 * video is present it plays muted on hover and pauses on leave.
 */
const WORK = [
  { title: "Brand Film", tag: "Advertising", span: "md:col-span-2 md:row-span-2", img: "/assets/images/portfolio/work-01.svg", video: "/assets/videos/work/work-01.mp4" },
  { title: "Fashion Campaign", tag: "Retail", span: "", img: "/assets/images/portfolio/work-02.svg", video: "" },
  { title: "Hospitality", tag: "Hotels", span: "", img: "/assets/images/portfolio/work-03.svg", video: "" },
  { title: "Product Story", tag: "Commercial", span: "md:col-span-2", img: "/assets/images/portfolio/work-04.svg", video: "/assets/videos/work/work-04.mp4" },
  { title: "Digital Content", tag: "Social", span: "", img: "/assets/images/portfolio/work-05.svg", video: "" },
  { title: "Culture Film", tag: "Editorial", span: "", img: "/assets/images/portfolio/work-06.svg", video: "" },
];

function WorkTile({ item }) {
  const videoRef = useRef(null);

  const onEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };
  const onLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <RevealItem className={`group relative min-h-[260px] ${item.span}`}>
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable
        glareMaxOpacity={0.12}
        glareColor="#C9A227"
        glarePosition="all"
        glareBorderRadius="16px"
        scale={1.02}
        transitionSpeed={1200}
        tiltEnable={typeof window !== "undefined" && window.innerWidth >= 768}
        className="relative h-full min-h-[260px] overflow-hidden rounded-2xl bg-smoke [transform-style:preserve-3d]"
      >
      <div
        className="absolute inset-0"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        data-cursor="grow"
      >
        {/* Poster image (swap the SVG in /assets for a real still/frame) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-cinematic group-hover:scale-105"
          style={{ backgroundImage: `url(${item.img})` }}
        />

        {item.video && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={item.video} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            {item.tag}
          </span>
          <h3 className="mt-1 font-display text-2xl uppercase text-bone">
            {item.title}
          </h3>
        </div>
      </div>
      </Tilt>
    </RevealItem>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative bg-ink py-16 md:py-20">
      <div className="container-x">
        <RevealGroup
          stagger={0.1}
          className="grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3"
        >
          {WORK.map((item) => (
            <WorkTile key={item.title} item={item} />
          ))}
        </RevealGroup>
      </div>

      <div className="mt-24">
        <ClientMarquee />
      </div>
    </section>
  );
}

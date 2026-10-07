"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { PROCESS } from "@/lib/constants";

const EMOJIS = ["🔍", "✏️", "💻", "🚀", "🛡️"];

const BADGE_COLORS = [
  "from-violet-600 to-purple-600",
  "from-cyan-500 to-blue-500",
  "from-yellow-500 to-amber-500",
  "from-orange-500 to-rose-500",
  "from-emerald-500 to-teal-500",
];

// Each step row height in px — controls spacing between steps
const ROW_HEIGHT = 160;
// Top offset before first step
const START_Y = 20;
// Total container height
const TOTAL_H = START_Y + ROW_HEIGHT * PROCESS.length + 40;

// X positions for left-side and right-side content (as % of 800px viewBox)
const LEFT_X = 170;   // center-x of left card
const RIGHT_X = 630;  // center-x of right card
const MID_X = 400;    // center of canvas — where badge sits

/**
 * Build snake path that:
 *  - starts at MID_X, step-0 Y
 *  - for each step: drops vertical to badge Y, curves horizontally to next side, drops to next badge
 */
function buildPath(steps) {
  const pts = steps.map((_, i) => ({
    y: START_Y + i * ROW_HEIGHT + ROW_HEIGHT / 2,
    isLeft: i % 2 === 0,
  }));

  let d = `M ${MID_X} 0`;

  pts.forEach((pt, i) => {
    const prev = pts[i - 1];
    const next = pts[i + 1];

    // Vertical drop to badge level
    d += ` L ${MID_X} ${pt.y}`;

    if (next) {
      // Curve to the opposite side then back to center for next badge
      const midY = pt.y + ROW_HEIGHT / 2;
      const targetX = next.isLeft ? LEFT_X + 60 : RIGHT_X - 60;
      // curve out
      d += ` C ${MID_X} ${midY}, ${targetX} ${midY}, ${targetX} ${pt.y + ROW_HEIGHT * 0.7}`;
      // curve back
      d += ` C ${targetX} ${pt.y + ROW_HEIGHT * 0.9}, ${MID_X} ${next.y - 20}, ${MID_X} ${next.y}`;
    }
  });

  // tail
  d += ` L ${MID_X} ${TOTAL_H}`;
  return d;
}

function ZigzagPath({ inView }) {
  const pathD = buildPath(PROCESS);
  const totalLen = 2800;

  return (
    <svg
      viewBox={`0 0 800 ${TOTAL_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="snakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#ec4899" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Glow / shadow path */}
      <motion.path
        d={pathD}
        stroke="url(#snakeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.15"
        strokeDasharray={totalLen}
        initial={{ strokeDashoffset: totalLen }}
        animate={inView ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
      {/* Main path */}
      <motion.path
        d={pathD}
        stroke="url(#snakeGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray={totalLen}
        initial={{ strokeDashoffset: totalLen }}
        animate={inView ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 2.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

function StepBadge({ step, index, inView }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
        delay: 0.3 + index * 0.25,
      }}
      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${BADGE_COLORS[index]}
        flex items-center justify-center shadow-xl shadow-black/30 flex-shrink-0 z-10`}
    >
      <span className="text-white font-black text-sm leading-none">{step.step}</span>
    </motion.div>
  );
}

function StepCard({ step, index, isLeft, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.25 + index * 0.2,
      }}
      className={`flex items-start gap-3 ${isLeft ? "" : "flex-row-reverse"}`}
    >
      {/* Emoji icon */}
      <div
        className={`w-11 h-11 rounded-xl text-xl flex items-center justify-center
          flex-shrink-0 border ${step.bg}`}
        aria-hidden="true"
      >
        {EMOJIS[index]}
      </div>

      <div className={isLeft ? "text-left" : "text-right"}>
        <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${step.color}`}>
          Step {step.step}
        </p>
        <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1 leading-snug">
          {step.title}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-[210px]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 md:py-20"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-[var(--bg-secondary)]" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full bg-[var(--accent)]/4 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <StaggerContainer className="text-center mb-12">
          <StaggerItem>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
              border border-[var(--accent)]/30 bg-[var(--accent)]/8
              text-[var(--accent)] text-sm font-medium mb-4"
            >
              How We Work
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-[var(--text-primary)] mb-3"
            >
              Our{" "}
              <span className="gradient-text">Development Process</span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-xl mx-auto">
              A transparent, structured process so you always know what's happening and when.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* ── Desktop zigzag (md+) ── */}
        <div
          className="hidden md:block relative w-full"
          style={{ height: `${TOTAL_H}px` }}
        >
          {/* SVG snake path */}
          <ZigzagPath inView={inView} />

          {/* Step rows */}
          {PROCESS.map((step, index) => {
            const isLeft = index % 2 === 0;
            const badgeY = START_Y + index * ROW_HEIGHT + ROW_HEIGHT / 2;
            // As percentage of TOTAL_H for absolute positioning
            const topPct = `${(badgeY / TOTAL_H) * 100}%`;

            return (
              <div
                key={step.step}
                className="absolute w-full flex items-center"
                style={{ top: topPct, transform: "translateY(-50%)" }}
              >
                {/* Left side card */}
                <div className="w-[42%] flex justify-end pr-6">
                  {isLeft && (
                    <StepCard step={step} index={index} isLeft={true} inView={inView} />
                  )}
                </div>

                {/* Center badge — fixed at 50% */}
                <div className="w-[16%] flex justify-center relative z-10">
                  <StepBadge step={step} index={index} inView={inView} />
                </div>

                {/* Right side card */}
                <div className="w-[42%] flex justify-start pl-6">
                  {!isLeft && (
                    <StepCard step={step} index={index} isLeft={false} inView={inView} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile vertical timeline (< md) ── */}
        <div className="md:hidden relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-0.5
              bg-gradient-to-b from-violet-500/70 via-pink-500/50 to-emerald-500/40"
            aria-hidden="true"
          />

          <div className="space-y-6 pl-14">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Badge on line */}
                <div
                  className={`absolute -left-[3.6rem] top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-xl bg-gradient-to-br ${BADGE_COLORS[index]}
                    flex items-center justify-center shadow-lg`}
                  aria-hidden="true"
                >
                  <span className="text-white font-black text-sm">{step.step}</span>
                </div>

                {/* Card */}
                <div className={`p-4 rounded-2xl border ${step.bg} flex gap-3 items-start`}>
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                    {EMOJIS[index]}
                  </span>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${step.color}`}>
                      Step {step.step}
                    </p>
                    <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

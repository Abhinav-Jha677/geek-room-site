"use client";

import { useState } from "react";

type Member = {
  id: number;
  name: string;
  role: string;
  photo: string;
  github: string;
  linkedin: string;
};

const coreMembers: Member[] = [
  { id: 1, name: "Member 1", role: "President", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 2, name: "Member 2", role: "Vice President", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 3, name: "Member 3", role: "Secretary", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 4, name: "Member 4", role: "Treasurer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const headMembers: Member[] = [
  { id: 5, name: "Member 5", role: "Tech Head", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 6, name: "Member 6", role: "Design Head", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 7, name: "Member 7", role: "Publicity Head", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const techMembers: Member[] = [
  { id: 8, name: "Member 8", role: "Full Stack Dev", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 9, name: "Member 9", role: "Frontend Dev", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 10, name: "Member 10", role: "Backend Dev", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 11, name: "Member 11", role: "ML Engineer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 12, name: "Member 12", role: "DevOps", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 13, name: "Member 13", role: "App Dev", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const publicityMembers: Member[] = [
  { id: 14, name: "Member 14", role: "Social Media", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 15, name: "Member 15", role: "Content Writer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 16, name: "Member 16", role: "Photographer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 17, name: "Member 17", role: "Video Editor", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 18, name: "Member 18", role: "PR Manager", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 19, name: "Member 19", role: "Brand Strategist", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const designMembers: Member[] = [
  { id: 20, name: "Member 20", role: "UI/UX Designer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 21, name: "Member 21", role: "Graphic Designer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 22, name: "Member 22", role: "Motion Designer", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const managementMembers: Member[] = [
  { id: 23, name: "Member 23", role: "Events Manager", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 24, name: "Member 24", role: "Coordinator", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 25, name: "Member 25", role: "Logistics", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
  { id: 26, name: "Member 26", role: "Operations", photo: "", github: "https://github.com", linkedin: "https://linkedin.com" },
];

const CARD_W = 200;
const CARD_H = 290;
const GAP = 28;

function FifaCard({ member, active }: { member: Member; active: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => { if (active) setFlipped((f) => !f); }}
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        flexShrink: 0,
        cursor: active ? "pointer" : "default",
        perspective: "1000px",
        transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease, filter 0.45s ease",
        transform: active ? "scale(1.2) translateY(-12px)" : "scale(0.8)",
        opacity: active ? 1 : 0.4,
        filter: active ? "none" : "blur(1.5px)",
        zIndex: active ? 10 : 1,
      }}
    >
      <div style={{
        width: "100%", height: "100%", position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.65s cubic-bezier(0.4,0,0.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}>

        {/* FRONT */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden" as "hidden",
          borderRadius: "16px", overflow: "hidden",
          background: "linear-gradient(160deg, #0e1a0e 0%, #050505 55%, #0a0a14 100%)",
          border: active ? "1px solid rgba(0,242,255,0.4)" : "1px solid rgba(0,242,255,0.07)",
          boxShadow: active
            ? "0 0 50px rgba(0,242,255,0.12), 0 12px 40px rgba(0,0,0,0.9), inset 0 1px 0 rgba(0,242,255,0.08)"
            : "0 4px 16px rgba(0,0,0,0.5)",
        }}>
          {/* top gradient line */}
          <div style={{ height: "2px", background: "linear-gradient(90deg, #00F2FF, #FF8C00)", opacity: active ? 1 : 0.2 }} />

          {/* photo */}
          <div style={{ width: "100%", height: "175px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {member.photo ? (
              <img src={member.photo} alt={member.name} style={{
                width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover",
                border: "2px solid rgba(0,242,255,0.3)",
                boxShadow: active ? "0 0 30px rgba(0,242,255,0.2)" : "none",
              }} />
            ) : (
              <div style={{
                width: "110px", height: "110px", borderRadius: "50%",
                background: "linear-gradient(135deg, #0d2020, #0a0a14)",
                border: "2px solid rgba(0,242,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "36px", fontFamily: "'Bebas Neue', sans-serif",
                color: "rgba(0,242,255,0.5)",
                boxShadow: active ? "0 0 30px rgba(0,242,255,0.1)" : "none",
              }}>
                {member.name.charAt(0)}
              </div>
            )}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(transparent, #050505)" }} />
          </div>

          {/* name + role */}
          <div style={{ textAlign: "center", padding: "4px 12px 18px" }}>
            <div style={{
              fontSize: "16px", fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.12em", color: "#ededed", textTransform: "uppercase",
            }}>{member.name}</div>
            <div style={{
              fontSize: "10px", color: "#00F2FF",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.06em", marginTop: "5px", opacity: 0.85,
            }}>{member.role}</div>
          </div>

          {active && (
            <div style={{ position: "absolute", bottom: "8px", right: "10px", fontSize: "8px", color: "rgba(255,140,0,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>
              TAP ↻
            </div>
          )}
        </div>

        {/* BACK */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden" as "hidden",
          transform: "rotateY(180deg)",
          borderRadius: "16px", overflow: "hidden",
          background: "linear-gradient(160deg, #0a0a14 0%, #050505 55%, #0e1a0e 100%)",
          border: "1px solid rgba(255,140,0,0.3)",
          boxShadow: "0 0 40px rgba(255,140,0,0.08), 0 12px 40px rgba(0,0,0,0.9)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: "14px", padding: "20px",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #FF8C00, #00F2FF)", opacity: 0.9 }} />

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.14em", color: "#ededed" }}>{member.name}</div>
            <div style={{ fontSize: "10px", color: "#FF8C00", fontFamily: "'JetBrains Mono', monospace", marginTop: "4px" }}>{member.role}</div>
          </div>

          <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, #00F2FF, transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <a href={member.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "8px", background: "rgba(0,242,255,0.06)", border: "1px solid rgba(0,242,255,0.2)", textDecoration: "none", color: "#00F2FF", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "8px", background: "rgba(255,140,0,0.06)", border: "1px solid rgba(255,140,0,0.2)", textDecoration: "none", color: "#FF8C00", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <div style={{ position: "absolute", bottom: "8px", right: "10px", fontSize: "8px", color: "rgba(0,242,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>TAP ↺</div>
        </div>
      </div>
    </div>
  );
}

function TeamSection({ title, subtitle, members, accentColor }: {
  title: string; subtitle: string; members: Member[]; accentColor: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));
  const next = () => setActiveIdx((i) => Math.min(members.length - 1, i + 1));

  const offset = -(activeIdx * (CARD_W + GAP));

  return (
    <section style={{ marginBottom: "80px" }}>
      {/* Section header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
          <div style={{ width: "3px", height: "28px", background: accentColor, borderRadius: "2px", boxShadow: `0 0 12px ${accentColor}99` }} />
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em", color: "#ededed", margin: 0, textTransform: "uppercase" }}>{title}</h2>
        </div>
        <p style={{ fontSize: "12px", color: "rgba(237,237,237,0.4)", fontFamily: "'JetBrains Mono', monospace", marginLeft: "15px", letterSpacing: "0.04em" }}>{subtitle}</p>
      </div>

      {/* Carousel viewport */}
      <div style={{ position: "relative" }}>
        {/* fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(90deg, #050505, transparent)", zIndex: 20, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(270deg, #050505, transparent)", zIndex: 20, pointerEvents: "none" }} />

        {/* track */}
        <div style={{ overflow: "hidden", padding: `${CARD_H * 0.22}px 0` }}>
          <div style={{
            display: "flex",
            gap: `${GAP}px`,
            transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
            transform: `translateX(calc(50% - ${CARD_W / 2}px + ${offset}px))`,
          }}>
            {members.map((member, i) => (
              <FifaCard key={member.id} member={member} active={i === activeIdx} />
            ))}
          </div>
        </div>

        {/* nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "12px" }}>
          <button onClick={prev} disabled={activeIdx === 0} style={{
            background: "transparent", border: `1px solid ${accentColor}44`, color: accentColor,
            borderRadius: "8px", padding: "8px 18px", cursor: activeIdx === 0 ? "not-allowed" : "pointer",
            opacity: activeIdx === 0 ? 0.25 : 1, fontFamily: "'JetBrains Mono', monospace", fontSize: "13px",
            transition: "all 0.2s",
          }}>← PREV</button>

          {/* dots */}
          <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
            {members.map((_, i) => (
              <div key={i} onClick={() => setActiveIdx(i)} style={{
                width: i === activeIdx ? "22px" : "6px", height: "6px",
                borderRadius: "3px",
                background: i === activeIdx ? accentColor : "rgba(237,237,237,0.18)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: i === activeIdx ? `0 0 8px ${accentColor}` : "none",
              }} />
            ))}
          </div>

          <button onClick={next} disabled={activeIdx === members.length - 1} style={{
            background: "transparent", border: `1px solid ${accentColor}44`, color: accentColor,
            borderRadius: "8px", padding: "8px 18px", cursor: activeIdx === members.length - 1 ? "not-allowed" : "pointer",
            opacity: activeIdx === members.length - 1 ? 0.25 : 1, fontFamily: "'JetBrains Mono', monospace", fontSize: "13px",
            transition: "all 0.2s",
          }}>NEXT →</button>
        </div>

        <div style={{ textAlign: "center", marginTop: "10px", fontSize: "10px", color: "rgba(237,237,237,0.25)", fontFamily: "'JetBrains Mono', monospace" }}>
          {activeIdx + 1} / {members.length}
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#050505", padding: "clamp(24px, 5vw, 64px) clamp(16px, 5vw, 48px)", overflowX: "hidden" }}>

      {/* Page header */}
      <div style={{ maxWidth: "800px", marginBottom: "64px" }}>
        <div style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", color: "#00F2FF", letterSpacing: "0.2em", marginBottom: "12px", opacity: 0.65 }}>// THE PEOPLE</div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", color: "#ededed", margin: "0 0 16px", lineHeight: 1 }}>
          CORE TEAM &amp; MEMBERS
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(237,237,237,0.5)", fontFamily: "var(--font-geist-sans), system-ui, sans-serif", lineHeight: 1.65, maxWidth: "520px" }}>
          The people behind GEEKROOM — dedicated to building and growing our tech community. Click any card to flip it and connect.
        </p>
        <div style={{ height: "1px", background: "linear-gradient(90deg, #00F2FF, #FF8C00, transparent)", marginTop: "28px", opacity: 0.3 }} />
      </div>

      <TeamSection title="Core" subtitle="The founding pillars of GEEKROOM" members={coreMembers} accentColor="#00F2FF" />
      <TeamSection title="Heads" subtitle="Leading each domain with vision" members={headMembers} accentColor="#FF8C00" />
      <TeamSection title="Tech Department" subtitle="Building the digital backbone" members={techMembers} accentColor="#00F2FF" />
      <TeamSection title="Publicity Department" subtitle="Amplifying the GEEKROOM voice" members={publicityMembers} accentColor="#FF8C00" />
      <TeamSection title="Design Department" subtitle="Crafting the visual identity" members={designMembers} accentColor="#00F2FF" />
      <TeamSection title="Management Department" subtitle="Keeping everything in motion" members={managementMembers} accentColor="#FF8C00" />
    </main>
  );
}
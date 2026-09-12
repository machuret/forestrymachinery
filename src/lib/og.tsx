import fs from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Fonts are vendored rather than fetched, so a social card never depends on a
 * network call at build time.
 */
async function fonts() {
  const dir = path.join(process.cwd(), "src/assets/fonts");
  const [display, mono] = await Promise.all([
    fs.readFile(path.join(dir, "Oswald-SemiBold.ttf")),
    fs.readFile(path.join(dir, "IBMPlexMono-Medium.ttf")),
  ]);
  return [
    { name: "Oswald", data: display, weight: 600 as const, style: "normal" as const },
    { name: "PlexMono", data: mono, weight: 500 as const, style: "normal" as const },
  ];
}

interface CardProps {
  eyebrow: string;
  title: string;
  /** Small stat pairs along the bottom rail. */
  stats?: Array<[string, string]>;
}

/**
 * Social card, built to the same rules as the site: graphite ground, hazard
 * band, heavy condensed headline. Rendered at build time, one per page.
 */
export async function ogCard({ eyebrow, title, stats = [] }: CardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#08090a",
          color: "#e9e7e1",
          fontFamily: "Oswald",
          position: "relative",
        }}
      >
        {/* Hazard band */}
        <div
          style={{
            height: 14,
            width: "100%",
            display: "flex",
            backgroundImage:
              "repeating-linear-gradient(-45deg, #f5a623 0px, #f5a623 16px, #08090a 16px, #08090a 32px)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "58px 64px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 14, height: 14, backgroundColor: "#f5a623", transform: "rotate(45deg)" }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#f5a623",
                fontFamily: "PlexMono",
              }}
            >
              {eyebrow}
            </div>
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: title.length > 64 ? 68 : 86,
              lineHeight: 1.0,
              letterSpacing: -0.5,
              textTransform: "uppercase",
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom rail */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            borderTop: "1px solid #262b27",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "26px 64px",
              flex: 1,
            }}
          >
            <div style={{ fontSize: 30, letterSpacing: 1 }}>MACHINERY SPECIALIST</div>
            <div style={{ fontSize: 16, letterSpacing: 3, color: "#8b918a", marginTop: 8, fontFamily: "PlexMono" }}>
              FORESTRY ATTACHMENT GUIDE · AUSTRALIA
            </div>
          </div>

          {stats.map(([k, v]) => (
            <div
              key={k}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "26px 34px",
                borderLeft: "1px solid #262b27",
                minWidth: 190,
              }}
            >
              <div style={{ fontSize: 14, letterSpacing: 3, color: "#8b918a", textTransform: "uppercase", fontFamily: "PlexMono" }}>{k}</div>
              <div style={{ fontSize: 40, color: "#f5a623", marginTop: 6 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fonts() },
  );
}

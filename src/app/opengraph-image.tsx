import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Harsh Vishwakarma - Full Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

async function getFont(weight: string) {
    const res = await fetch(
        `https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-${weight}.ttf`
    );
    return res.arrayBuffer();
}

export default async function Image() {
    const [geistBold, geistRegular] = await Promise.all([
        getFont("Bold"),
        getFont("Regular"),
    ]);

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#000000",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 700,
                        fontFamily: "Geist",
                        color: "#ffffff",
                        marginBottom: 16,
                        display: "flex",
                    }}
                >
                    Harsh Vishwakarma
                </div>
                <div
                    style={{
                        fontSize: 36,
                        fontWeight: 400,
                        fontFamily: "Geist",
                        color: "#a3a3a3",
                        marginBottom: 40,
                        display: "flex",
                    }}
                >
                    Full Stack Developer
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: 20,
                        fontSize: 24,
                        fontFamily: "Geist",
                        color: "#d4d4d4",
                    }}
                >
                    <div style={{ display: "flex", padding: "8px 20px", border: "1px solid #404040", borderRadius: 8 }}>
                        React
                    </div>
                    <div style={{ display: "flex", padding: "8px 20px", border: "1px solid #404040", borderRadius: 8 }}>
                        Next.js
                    </div>
                    <div style={{ display: "flex", padding: "8px 20px", border: "1px solid #404040", borderRadius: 8 }}>
                        TypeScript
                    </div>
                    <div style={{ display: "flex", padding: "8px 20px", border: "1px solid #404040", borderRadius: 8 }}>
                        Node.js
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Geist",
                    data: geistBold,
                    weight: 700,
                    style: "normal",
                },
                {
                    name: "Geist",
                    data: geistRegular,
                    weight: 400,
                    style: "normal",
                },
            ],
        }
    );
}
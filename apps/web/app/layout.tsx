import "@/app/globals.css";
import "@/app/brand-tokens.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import type { PropsWithChildren } from "react";

const defaultFont = localFont({
	src: [
		{
			path: "../public/fonts/NeueMontreal-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueMontreal-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueMontreal-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
	],
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL("https://record.withsynergy.io"),
	title: "Print With Synergy — Screen recording, owned by you.",
	description:
		"Self-hosted screen recording by Print With Synergy. Automation that actually ships — record and share in seconds.",
	openGraph: {
		title: "Print With Synergy — Screen recording, owned by you.",
		description:
			"Self-hosted screen recording by Print With Synergy. Automation that actually ships — record and share in seconds.",
		type: "website",
		url: "https://record.withsynergy.io",
		images: ["https://record.withsynergy.io/og.png"],
	},
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={defaultFont.className} lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="/pws-logo.svg" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#0F172A" />
				<meta name="theme-color" content="#0F172A" />
			</head>
			<body suppressHydrationWarning>
				<Script src="/theme-script.js" strategy="beforeInteractive" />
				<main className="w-full">{children}</main>
			</body>
		</html>
	);
}

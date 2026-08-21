import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
	variable: "--font-display",
	weight: "400",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-body",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Samprad — Portfolio",
	description: "Samprad's personal portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${archivoBlack.variable} ${montserrat.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}

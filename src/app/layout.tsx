import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/configs/env";
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from "@/components/theme-provider";


const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_NAME,
};

export default function RootLayout(
    { children, }: Readonly<{ children: React.ReactNode; }>
) {
    return (
        <html
            lang="en"
            suppressHydrationWarning={true}>

            <body
                className={
                    cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable,
                        poppins.className,
                        fontSans.className
                    )
                }>

                <NextTopLoader speed={150} />

                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

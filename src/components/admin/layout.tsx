import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { APP_NAME } from "@/configs/env";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_NAME,
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={
                    cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable,
                        poppins.className,
                        fontSans.className
                    )
                }
                suppressHydrationWarning={true}>

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

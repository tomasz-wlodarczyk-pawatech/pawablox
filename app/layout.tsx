import type React from "react"
import "./globals.css"
import {Roboto} from "next/font/google"


const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
})
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={roboto.variable}>
        <body>
            <main className="flex-1 m-auto font-sans">{children}</main>
        </body>
        </html>
    )
}

export const metadata = {
    generator: 'v0.dev'
};

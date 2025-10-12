import type { Metadata } from "next"
import { Abel } from "next/font/google"
import "@/app/tailwind.css"

const abel = Abel({
    weight: ["400"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "GunnHacks 12.0",
    description: "Make, Build, Create & Learn. It's GunnHacks 12.0, Gunn's 24-hour high school hackathon!",
}

export default ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className={`${abel.className} antialiased after:fixed after:inset-x-0 after:top-0 after:h-screen after:bg-[url('/bg.svg')] after:bg-cover after:bg-center after:-z-10`}>
                {children}
            </body>
        </html>
    )
}
"use client"

import Link from "next/link"
import Image from "next/image"
import { Overpass } from "next/font/google"

import { useEffect, useState } from "react"
import { FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa6"

import { DateTime } from "luxon"
import { START, END, ITERATION_STRING } from "@/constants"

const overpass = Overpass({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"]
})

const links = [
    [FaInstagram, "https://www.instagram.com/gunn.hacks/"],
    [FaDiscord, "https://discord.gg/pyJmTpRWZJ"],
    [FaEnvelope, "mailto:ghshacks@gmail.com"]
] as const

export default function Header() {
    const [time, setTime] = useState(DateTime.now())

    useEffect(() => {
        const interval = setInterval(() => setTime(DateTime.now()), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="text-white font-semibold h-screen flex flex-col items-center justify-center p-5 pb-[20vh]">

            <div className={`${overpass.className} mb-2 relative flex flex-col items-center md:block`}>
                <span className="pt-2 text-6xl md:text-9xl tracking-wider text-center">
                    <Image
                        className="mb-2 max-w-full w-[640px]"
                        width={640}
                        height={100}
                        src="/gunnhacks12-dark.png"
                        alt="GunnHacks 11.0 Logo"
                        draggable="false"
                    />
                </span>

                <div className="ml-1 mt-[-.25rem] flex flex-col items-center md:block">
                    <p className="mb-2 text-base mt-16 md:mt-0 md:text-left gradient-text tracking-tight">
                        Make, Build, Create & Learn. It's GunnHacks {ITERATION_STRING},<br />
                        Gunn's 24-hour high school hackathon!<br />
                        {START.toFormat("MMMM d")} &ndash; {END.toFormat("MMMM d")}, {START.year} | Gunn High School Library.
                    </p>

                    <div className="flex gap-4 text-2xl">
                        {links.map(([Icon, href]) => (
                            <Link
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-10 px-16 py-4 text-2xl font-bold">
                {time < START ? (
                    <div className="flex gap-2">
                        <p>The hacking period will start {START.toRelative()}.</p>
                        <a
                            href="/register"
                            className="text-blue-200 underline"
                        >
                            Register here.
                        </a>
                    </div>
                ) : time < END ? (
                    <>
                        The hacking period has started and will end in {END.toRelative()}.
                    </>
                ) : (
                    <>
                        The hacking period has ended. View the results{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://gunnhacks12.devpost.com/"
                            aria-label="Devpost"
                            className="text-blue-500 underline"
                        >
                            here
                        </a>.
                    </>
                )}
            </div>
        </section>
    )
}
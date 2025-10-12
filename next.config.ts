import type { NextConfig } from "next"

const links = [
    ["/conduct", "https://docs.google.com/document/d/e/2PACX-1vRV7AHc6eftjfLNjDAVeSo33rkgmD9E37tj9sFDsEAnKrLxFzX-KFZY6ajFEZxbQZmO_l_3KNaR0Wm3/pub"],
    ["/devpost", "https://gunnhacks12.devpost.com"]
]

export default {
    redirects: async () => links.map(([source, destination]) => ({
        source,
        destination,
        permanent: false
    })),
    // github pages static export
    images: { unoptimized: true }
} satisfies NextConfig
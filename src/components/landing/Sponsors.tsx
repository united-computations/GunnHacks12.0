import { readdirSync } from "fs"
import { parse } from "path"

import Section from "@/components/layout/Section"
import Sponsor from "@/components/layout/Sponsor"

export default function Sponsors() {
    return (
        <Section title="Sponsors">
            <p>To sponsor our event, email us at <a href="mailto:ghshacks@gmail.com">ghshacks@gmail.com</a>.</p>
            {/* 
                no reconfiguration necessary ;;
                add new sponsors to the (root)/public/sponsors directory
                with the filename being the sponsor's domain,
                leaving the extension as is.
                ex: `$ mv logo.svg public/sponsors/example.com.svg`
            */}
            <div className="pt-8 pb-2 flex flex-wrap gap-x-5 gap-y-2 items-center justify-center">
                {readdirSync("public/sponsors")
                    .toSorted()
                    .map(parse)
                    .map(sponsor => (
                        <Sponsor
                            key={sponsor.name}
                            href={`https://${sponsor.name}`}
                            src={`/sponsors/${sponsor.base}`}
                            alt={sponsor.name}
                        />
                    ))}
            </div>
        </Section>
    )
}
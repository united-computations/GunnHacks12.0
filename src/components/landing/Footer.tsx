import { ITERATION } from '@/constants';
import Section from '../layout/Section';


export default function Footer() {
    const previousYears = Array.from({ length: ITERATION - 1 }, (_, i) => `${ITERATION - i - 1}.0`)

    return (
        <Section red>
            <div className="flex items-center text-xl gap-8">
                {/* TODO: Abel doesn't have a `font-medium` variant; is it better without bold? */}
                <h3 className="font-bold">Previous Years:</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {previousYears.map(year => (
                        <a target="_blank" rel="noopener noreferrer" href={`https://${year}.gunnhacks.com`} key={year}>
                            {year}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    )
}
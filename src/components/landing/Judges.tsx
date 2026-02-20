import Section from '../layout/Section';
import Judge from '../layout/Judge';

const judges = [
    ["Priya Ganta", "Principal Product Manager, Microsoft"],
    ["Oren Yair", "Technical Program Manager, Google"],
    ["Vincent Scheib", "Software Engineering Manager, Google Chrome"],
]

export default function Judges() {
    return (
        <Section title="Judges" id="judges">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 justify-items-center">
                {judges.map(([name, title]) => (
                    <Judge
                        key={name}
                        name={name}
                        src={`/judges/${name.replace(" ", "").toLowerCase()}.jpeg`}
                    >
                        {title}
                    </Judge>
                ))}
            </div>
        </Section >
    );
}
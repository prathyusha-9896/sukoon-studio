import { useState } from "react";

type PointItem = {
  text: string;
  imageSrc: string;
  imageAlt: string;
};

type FeelingsMatterProps = {
  overline?: string;
  title?: string;
  points?: PointItem[];
  caption?: string;
};

const defaultPoints: PointItem[] = [
  {
    text: "Overwhelmed, anxious, or unable to switch off your thoughts",
    imageSrc: "/img1.png",
    imageAlt: "Person feeling overwhelmed",
  },
  {
    text: "Emotionally drained, stuck, or unmotivated",
    imageSrc: "/img2.png",
    imageAlt: "Person feeling emotionally drained",
  },
  {
    text: "Disconnected from people around you",
    imageSrc: "/img3.png",
    imageAlt: "Person feeling disconnected",
  },
  {
    text: "Lost about what you want next in life",
    imageSrc: "/img4.png",
    imageAlt: "Person feeling lost",
  },
  {
    text: "Burdened by work, family, or expectations",
    imageSrc: "/img5.png",
    imageAlt: "Person feeling burdened by work",
  },
  {
    text: "Unsure how to help your child through emotional struggles",
    imageSrc: "/img6.png",
    imageAlt: "Child looking serious",
  },
];

export default function FeelingsMatter({
  overline = "Your Feelings Matter",
  title = "If you’ve been feeling...",
  points = defaultPoints,
  caption = "Whatever you are feeling, it’s valid — and it’s okay to ask for help.",
}: FeelingsMatterProps) {
  const [activePoint, setActivePoint] = useState<PointItem>(points[0]);
  const [hoveredPoint, setHoveredPoint] = useState<PointItem | null>(null);

  const handleSelect = (point: PointItem) => {
    setActivePoint(point);
    setHoveredPoint(point);
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-8 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <Overline text={overline} />
            <Heading text={title} />
            <PointsList
              points={points}
              hoveredPoint={hoveredPoint}
              onSelect={handleSelect}
              onMouseLeave={() => setHoveredPoint(null)}
            />
          </div>
          <div>
            <ActiveImage point={activePoint} />
            <Caption text={caption} />
          </div>
        </div>
      </div>
    </section>
  );
}


function Overline({ text }: { text: string }) {
  return (
    <div
      style={{ fontFamily: "Giphurs" }}
      className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 font-light text-[#2C3C44] text-[12px] md:text-[14px]"
    >
      {text}
    </div>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <h2
      className="mt-5 mb-7 text-left font-semibold -tracking-[0.28px] text-[32px] md:text-[42px] leading-12 md:leading-[61.6px]"
      style={{
        color: "#2C3C44",
        fontFamily: '"Fraunces", serif',
      }}
    >
      {text}
    </h2>
  );
}

type PointsListProps = {
  points: PointItem[];
  hoveredPoint: PointItem | null;
  onSelect: (point: PointItem) => void;
  onMouseLeave: () => void;
};

function PointsList({ points, hoveredPoint, onSelect, onMouseLeave }: PointsListProps) {
  return (
    <ul
      className="mt-8 space-y-2 text-[16px] leading-7"
      onMouseLeave={onMouseLeave}
    >
      {points.map((point, i) => {
        const isActive = hoveredPoint?.text === point.text;

        return (
          <li
            key={i}
            onMouseEnter={() => onSelect(point)}
            onClick={() => onSelect(point)}
            style={{ fontFamily: "Giphurs" }}
            className={`relative cursor-pointer rounded-lg pl-3 pr-2 py-1 transition-all duration-200 ease-in-out ${
              isActive
                ? "translate-x-3 bg-[#F3EFED] text-[#1F2E38]"
                : "translate-x-0 text-[#64737A]"
            }`}
          >
            <span
              className={`absolute left-2 top-3 h-1.5 w-1.5 rounded-full transition-all duration-200 ease-in-out ${
                isActive ? "opacity-100 bg-[#1F2E38]" : "opacity-0 bg-gray-300"
              }`}
            />
            {point.text}
          </li>
        );
      })}
    </ul>
  );
}

function ActiveImage({ point }: { point: PointItem }) {
  return (
    <figure className="rounded-2xl">
      <img
        src={point.imageSrc}
        alt={point.imageAlt}
        className="h-96 w-full rounded-2xl object-cover"
      />
    </figure>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <p
      className="mt-4 italic text-[#2C3C44] text-[28px] leading-9 md:text-[32px] md:leading-10"
      style={{
        fontFamily: '"Fraunces", serif',
      }}
    >
      {text}
    </p>
  );
}

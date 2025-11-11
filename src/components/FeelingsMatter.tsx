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

  return (
    <section className="w-full ">
      <div className="mx-auto max-w-7xl px-8 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            {/* ... overline and title ... */}
            <div
              style={{ fontFamily: "Giphurs" }}
              className="inline-flex md:items-center md:justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 md:text-[14px] text-[12px] font-light d text-[#2C3C44]"
            >
              {overline}
            </div>
            <h2
              className="mb-7 mt-5 md:text-[42px] text-[32px] font-semibold md:leading-[61.6px] leading-12 text-left -tracking-[0.28px]"
              style={{
                color: "var(--Colors-Text-Primary, #2C3C44)",
                fontFamily: '"Fraunces", serif',
              }}
            >
              {title}
            </h2>
            <ul
              className="mt-8 space-y-2 text-[16px] leading-7"
              
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {points.map((point, i) => {
                
                const isActive = hoveredPoint?.text === point.text;

                return (
                  <li
                    key={i}
                    className={`relative cursor-pointer transition-all duration-200 ease-in-out
                       pl-3 pr-2 py-1 rounded-lg 
                       ${
                         isActive 
                           ? "text-[#1F2E38] translate-x-3 bg-[#F3EFED]"
                           : "text-[#64737A] translate-x-0"
                       }
                      `}
                    style={{ fontFamily: "Giphurs" }}
                    
                    onMouseEnter={() => {
                      setActivePoint(point); 
                      setHoveredPoint(point); 
                    }}
                    onClick={() => {
                      setActivePoint(point); 
                      setHoveredPoint(point); 
                    }}
                  >
                    <span
                      className={`absolute left-2 top-3 h-1.5 w-1.5 rounded-full transition-all duration-200 ease-in-out
                        ${
                          isActive 
                            ? "opacity-100 bg-[#1F2E38]"
                            : "opacity-0 bg-gray-300"
                        }
                        `}
                    />
                    {point.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <figure className="rounded-2xl">
              <img
                src={activePoint.imageSrc}
                alt={activePoint.imageAlt}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </figure>

            <p
              className="mt-4 text-[28px] leading-9 md:text-[32px] md:leading-10 italic text-[#2C3C44]"
              style={{
                fontFamily: '"Fraunces", serif',
              }}
            >
              {caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
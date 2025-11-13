type Benefit = string;

type BenefitsProps = {
  overline?: string;
  title?: string;
  blurb?: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: Benefit[];
};

export default function Benefits({
  overline = "Benefits",
  title = "Healing that comes to you",
  blurb = `Online therapy at Sukoon Studio lets you begin your healing journey from the comfort of your own space. All you need is an internet connection and a willingness to talk. Our online sessions are private, flexible, and designed around your schedule so you can prioritise mental health without disrupting your life.`,
  imageSrc = "/benefits.png",
  imageAlt = "Smiling person in warm light",
  features = [
    "100% Confidential",
    "Flexible Scheduling",
    "Available Across India & Abroad",
    "Comfortable and Non-Judgmental",
  ],
}: BenefitsProps) {
  return (
    <section className="w-full py-8 md:py-16 md:px-2 lg:pr-[120px]">
      <div className="grid grid-cols-1 gap-12 md:gap-24 lg:grid-cols-2 lg:items-center">
        <Figure src={imageSrc} alt={imageAlt} className="hidden md:block" />
        <div className="max-w-xl px-6">
          <Overline text={overline} />
          <Heading text={title} />
          <Blurb text={blurb} />
          <FeatureList features={features} />
        </div>
        <Figure
          src={imageSrc}
          alt={imageAlt}
          className="block md:hidden mx-2.5 h-[444px]"
        />
      </div>
    </section>
  );
}

function Figure({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </figure>
  );
}

function Overline({ text }: { text: string }) {
  return (
    <div
      style={{ fontFamily: "Giphurs" }}
      className="inline-flex items-center justify-center rounded-2xl bg-[#F3EFED] px-3 py-1 text-[#2C3C44] font-light text-[12px] md:text-[14px]"
    >
      {text}
    </div>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <h2
      className="py-6 text-[32px] md:text-[42px] font-semibold leading-[1.4] -tracking-[0.28px]"
      style={{
        color: "#2C3C44",
        fontFamily: '"Fraunces", serif',
      }}
    >
      {text}
    </h2>
  );
}

function Blurb({ text }: { text: string }) {
  return (
    <p
      className="mb-6 text-left text-[14px] md:text-[16px] font-normal leading-[22.4px] md:leading-[25.6px] max-w-[560px]"
      style={{
        color: "#64737A",
        fontFamily: "Giphurs",
      }}
    >
      {text}
    </p>
  );
}

function FeatureList({ features }: { features: Benefit[] }) {
  return (
    <div className="mt-6">
      <div
        className="mb-3 md:mb-8 text-left font-semibold text-[14px] md:text-[16px] leading-[22.4px] md:leading-[25.6px]"
        style={{
          color: "#2C3C44",
          fontFamily: "Giphurs",
        }}
      >
        Features
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#64737A]" />
            <span
              className="text-left font-normal text-[14px] md:text-[16px] leading-[22.4px] md:leading-[25.6px]"
              style={{
                color: "#64737A",
                fontFamily: "Giphurs",
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

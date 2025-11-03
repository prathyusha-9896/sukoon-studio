import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-full rounded-t-2xl items-center justify-center flex flex-col"
      style={{
        background: `linear-gradient(180deg, rgba(44, 60, 68, 0.00) 0%, #2C3C44 95.19%), url('/Footer.png') lightgray 0px -146.516px / 100% 157.01% no-repeat`,
        minHeight: '80vh', // Ensure the section takes up the full height of the viewport
        backgroundSize: 'cover', // Ensure the background image covers the entire area
        backgroundPosition: 'center', // Center the image within the section
      }}
    >
      <div className=" items-center justify-center flex flex-col">
        <h1
          className="mb-6 md:text-[56px] text-[40px] font-semibold md:leading-[61.6px] leading-12 text-center -tracking-[0.28px]"
          style={{
            color: '#FAF9F8',
            fontFamily: '"Fraunces", serif',
          }}
        >
          You deserve peace. <br /> You deserve to be understood.
        </h1>
        <p
          className="mb-6 text-[16px] md:text-[18px] font-normal md:leading-[25.6px] leading-[22.4px] max-w-[560px] text-center"
          style={{
            color: '#F3EFED',
            fontFamily: 'Giphurs, ui-sans-serif, system-ui',
          }}
        >
          If you've been waiting for the right time to start therapy, maybe
          this is it. Take one small step. We'll walk with you the rest of the
          way.
        </p>
        <button
          className="rounded-full px-5 py-3 text-[14px] md:text-[16px] font-medium"
          style={{
            background: '#A8CFA1',
            color: '#2C3C44',
            fontFamily: 'Giphurs, ui-sans-serif, system-ui',
          }}
        >
          Book a Session
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

import { useMemo } from "react";

export const COLORS = {
  primary: "#826BFB",
  ctaBg: "#A894FF",
  ctaText: "#E4F1FE",
  body: "#6B6A70",
  bannerText: "#F0EFF1",
};
const ICONS = {
  individual: "/therapy.png",
  couples: "/couple.png",
  child: "/bonds.png",
  career: "/job-interview.png",
  workplace: "/computer-worker.png",
};

export const FEATURES = [
  {
    title: "Individual Therapy",
    subtitle: "For when you need space to talk, feel, and find clarity again.",
    iconSrc: ICONS.individual,
  },
  {
    title: "Couples Therapy",
    subtitle: "For when love feels distant, and you wish to reconnect.",
    iconSrc: ICONS.couples,
  },
  {
    title: "Child & Teen Therapy",
    subtitle: "For young minds learning to understand big emotions.",
    iconSrc: ICONS.child,
  },
  {
    title: "Career Counselling",
    subtitle: "For when you feel stuck or unsure of your direction.",
    iconSrc: ICONS.career,
  },
  {
    title: "Workplace & Stress Support",
    subtitle: "For when work starts to weigh too heavy.",
    iconSrc: ICONS.workplace,
  },
];

export function useLearnGerman() {
  const items = useMemo(() => FEATURES, []);
  return { COLORS, items };
}

export default useLearnGerman;

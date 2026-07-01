import { HeroSlide } from "../../core/models";

interface ProjectCopy {
  title: { en: string; ar: string };
}

const PROJECTS = {
  kapsarc: {
    title: {
      en: "King Abdullah Petroleum Studies and Research Center",
      ar: "مركز الملك عبدالله للدراسات والبحوث البترولية",
    },
  },
  kingSalmanPark: {
    title: { en: "King Salman Park", ar: "حديقة الملك سلمان" },
  },
  sindalah: {
    title: { en: "Sindalah Island", ar: "جزيرة سندالة" },
  },
  sportsBlvd: {
    title: { en: "Sports Boulevard", ar: "المسار الرياضي" },
  },
  jabalMountain: {
    title: { en: "Jabal Al-Diriyah Al-Qurain", ar: " جبل الدرعيه القرين" },
  },
} satisfies Record<string, ProjectCopy>;

const slide = (imagePath: string, project: ProjectCopy): HeroSlide => ({
  image: `assets/images/home-page/${imagePath}`,
  title: project.title,
});

export const HOME_HERO_SLIDES: HeroSlide[] = [
  slide("sindalla/sindalla-1.webp", PROJECTS.sindalah),
  slide("sindalla/sindalla-2.webp", PROJECTS.sindalah),
  slide("king-abdullah-petroleum/king-abdullah-petroleum-1.webp", PROJECTS.kapsarc),
  slide("king-abdullah-petroleum/king-abdullah-petroleum-2.webp", PROJECTS.kapsarc),
  slide("king-salman-park/king-salman-park-1.webp", PROJECTS.kingSalmanPark),
  slide("king-salman-park/king-salman-park-2.webp", PROJECTS.kingSalmanPark),
  slide("sports-blvd/sport-blvd-1.webp", PROJECTS.sportsBlvd),
  slide("sports-blvd/sport-blvd-2.webp", PROJECTS.sportsBlvd),
  slide("jabal-mountain/jabal-mountain-1.webp", PROJECTS.jabalMountain),
  slide("jabal-mountain/jabal-mountain-2.webp", PROJECTS.jabalMountain),
];

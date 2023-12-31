//Import Images
import athlete from "./img/athlete.jpg";
import goodtimes from "./img/goodtimes.jpg";
import racer from "./img/racer.jpg";
import athlete2 from "./img/athlete2.jpg";
import goodtimes2 from "./img/goodtimes2.jpg";
import racer2 from "./img/racer2.jpg";

export interface MovieStateProps {
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  awards: AwardProp[];
}

export interface AwardProp {
  title: string;
  description: string;
}

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: racer,
      url: "/work/the-racer",
      secondaryImg: racer2,
      awards: [
        {
          title: "Nepotism Sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "F1 drivers need a psych eval.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Cars go brrr.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
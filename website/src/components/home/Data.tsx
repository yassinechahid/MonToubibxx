import { StaticImageData } from "next/image";

import img0 from "@/public/home/img0.png";
import img1 from "@/public/home/img1.png";
import img2 from "@/public/home/img2.png";
import img3 from "@/public/home/img3.png";
import img4 from "@/public/home/img4.png";
import img5 from "@/public/home/img5.png";
import img6 from "@/public/home/img6.png";
import img7 from "@/public/home/img7.png";
export interface Eco {
  src: StaticImageData;
  nameKey: string;
  descriptionKey: string;
}

export const ecosystems: Eco[] = [
  {
    src: img0,
    nameKey: "ecosystems.dpsp.name",
    descriptionKey: "ecosystems.dpsp.description",
  },
  {
    src: img1,
    nameKey: "ecosystems.fci.name",
    descriptionKey: "ecosystems.fci.description",
  },
  {
    src: img2,
    nameKey: "ecosystems.csp.name",
    descriptionKey: "ecosystems.csp.description",
  },
  {
    src: img3,
    nameKey: "ecosystems.dispo.name",
    descriptionKey: "ecosystems.dispo.description",
  },
  {
    src: img4,
    nameKey: "ecosystems.ia.name",
    descriptionKey: "ecosystems.ia.description",
  },
  {
    src: img5,
    nameKey: "ecosystems.mrss.name",
    descriptionKey: "ecosystems.mrss.description",
  },
  {
    src: img6,
    nameKey: "ecosystems.cmc.name",
    descriptionKey: "ecosystems.cmc.description",
  },
  {
    src: img7,
    nameKey: "ecosystems.mts.name",
    descriptionKey: "ecosystems.mts.description",
  }
];

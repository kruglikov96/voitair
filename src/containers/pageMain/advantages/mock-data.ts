import SpecificationIcon from "../../../asseets/mainPage/advantages/SpecificationIcon.png";
import KeyIcon from "../../../asseets/mainPage/advantages/KeyIcon.png";
import CrownIcon from "../../../asseets/mainPage/advantages/CrownIcon.png";
import FireIcon from "../../../asseets/mainPage/advantages/FireIcon.png";

interface IAdvantages {
  icon: string;
  title: string;
  description: string;
}

export const ADVANTAGES: IAdvantages[] = [
  {
    icon: SpecificationIcon,
    title: "Спецификация",
    description:
      "Компания прошла сертификацию бизнес ароматов для помещений производства VoitAir и получила Российский сертификат соответствия.",
  },
  {
    icon: KeyIcon,
    title: "Множество решений",
    description:
      "- Парковки  - Автобусы  - Дома престарелых  - Больницы  - Офисы   - Частные дома и т.д.",
  },
  {
    icon: CrownIcon,
    title: "Уникальность",
    description: "Мы создаем прекрасные Настроения, Моменты и Воспоминания.",
  },
  {
    icon: FireIcon,
    title: "Качество ароматов",
    description: "100% натуральный аромат, не содержит спирт и воду.",
  },
];

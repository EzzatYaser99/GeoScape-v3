import { Injectable } from "@angular/core";
import { Product } from "../types/product.type";

@Injectable({
  providedIn: "root",
})
export class GreenhouseService {
  private readonly greenhouseProduct: Product[] = [
    {
      id: 1,
      nameEN: "ES Multi-Span Film Greenhouse",
      nameAR: "الصوبة الزراعية متعددة الامتدادات",
      descriptionEN:
        "An economical and durable multi-span greenhouse designed with a focus on cost-effectiveness. Its sturdy film material provides excellent crop protection, making it ideal for budget-conscious commercial growers",
      descriptionAR:
        "صوبة زراعية اقتصادية ومتينة متعددة الامتدادات مصممة مع التركيز على الفعالية من حيث التكلفة. توفر مادة الفيلم القوية حماية ممتازة للمحاصيل، مما يجعلها مثالية للمزارعين التجاريين المهتمين بالميزانية.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-1.webp",
          alt: "ES-multispan-film-greenhouse-1",
        },
        {
          id: 2,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-2.webp",
          alt: "ES-multispan-film-greenhouse-2",
        },
        {
          id: 3,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-3.webp",
          alt: "ES-multispan-film-greenhouse-3",
        },
        {
          id: 4,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-4.webp",
          alt: "ES-multispan-film-greenhouse-4",
        },
        {
          id: 5,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-5.webp",
          alt: "ES-multispan-film-greenhouse-5",
        },
        {
          id: 6,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-6.webp",
          alt: "ES-multispan-film-greenhouse-6",
        },
        {
          id: 7,
          imageSrc:
            "ES-multispan-film-greenhouse/ES-multispan-film-greenhouse-7.webp",
          alt: "ES-multispan-film-greenhouse-7",
        },
      ],
    },
    {
      id: 2,
      nameEN: "EU Multi-Span Film Greenhouse",
      nameAR: "الصوبة الزراعية متعددة الامتدادات",
      descriptionEN:
        "A high-quality, European-standard multi-span greenhouse with film covering, offering superior crop protection and energy efficiency. Perfect for large-scale farming in varying climates.",
      descriptionAR:
        "صوبة زراعية عالية الجودة ومتعددة الامتدادات وفقًا للمعايير الأوروبية مع غطاء فيلمي، توفر حماية فائقة للمحاصيل وكفاءة في استخدام الطاقة. مثالية للزراعة على نطاق واسع في مناخات مختلفة.",

      subImages: [
        {
          id: 1,
          imageSrc:
            "EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-5.webp",
          alt: "EU-multispan-film-greenhouse-5",
        },
        {
          id: 2,
          imageSrc:
            "EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-6.webp",
          alt: "EU-multispan-film-greenhouse-6",
        },
        {
          id: 3,
          imageSrc:
            "EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-7.webp",
          alt: "EU-multispan-film-greenhouse-7",
        },
        {
          id: 4,
          imageSrc:
            "EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-8.webp",
          alt: "EU-multispan-film-greenhouse-8",
        },
        {
          id: 5,
          imageSrc:
            "EU-multispan-film-greenhouse/EU-multispan-film-greenhouse-9.webp",
          alt: "EU-multispan-film-greenhouse-9",
        },
      ],
    },
    {
      id: 3,
      nameEN: "Glass-Greenhouse",
      nameAR: "الصوبة الزجاجية",
      descriptionEN:
        "A premium greenhouse solution featuring tempered glass panels for maximum light transmission and excellent insulation. Designed for long-term durability, it is perfect for high-value crops and year-round cultivation.",
      descriptionAR:
        "صوبة زراعية ممتازة تتميز بألواح زجاجية مقواة لأقصى قدر من انتقال الضوء وعزل ممتاز. مصممة لتكون متينة على المدى الطويل، فهي مثالية للمحاصيل عالية القيمة والزراعة على مدار العام.",

      subImages: [
        {
          id: 1,
          imageSrc: "Glass-Greenhouse/Glass-Greenhouse-5.webp",
          alt: "Glass Greenhouse",
        },
        {
          id: 2,
          imageSrc: "Glass-Greenhouse/Glass-Greenhouse-6.webp",
          alt: "Glass Greenhouse",
        },
        {
          id: 3,
          imageSrc: "Glass-Greenhouse/Glass-Greenhouse-7.webp",
          alt: "Glass Greenhouse",
        },
        {
          id: 4,
          imageSrc: "Glass-Greenhouse/Glass-Greenhouse-8.webp",
          alt: "Glass Greenhouse",
        },
        {
          id: 5,
          imageSrc: "Glass-Greenhouse/Glass-Greenhouse-9.webp",
          alt: "Glass Greenhouse",
        },
      ],
    },
    {
      id: 4,
      nameEN: "Polycarbonate Greenhouse",
      nameAR: "الصوبة البوليكربونية",
      descriptionEN:
        "Engineered for durability and insulation, this greenhouse features polycarbonate panels that ensure excellent light diffusion and UV protection. Ideal for creating optimal growing conditions for a wide range of crops.",
      descriptionAR:
        "تم تصميم هذه الصوبة لتكون متينة ومعزولة، وتتميز بألواح من البولي كربونات تضمن انتشارًا ممتازًا للضوء وحماية من الأشعة فوق البنفسجية. مثالية لخلق ظروف نمو مثالية لمجموعة واسعة من المحاصيل.",

      subImages: [
        {
          id: 1,
          imageSrc: "Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-6.webp",
          alt: "Polycarbonate-Greenhouse-6",
        },
        {
          id: 2,
          imageSrc: "Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-7.webp",
          alt: "Polycarbonate-Greenhouse-7",
        },
        {
          id: 3,
          imageSrc: "Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-8.webp",
          alt: "Polycarbonate-Greenhouse-8",
        },
        {
          id: 4,
          imageSrc: "Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-9.webp",
          alt: "Polycarbonate-Greenhouse-9",
        },
        {
          id: 5,
          imageSrc: "Polycarbonate-Greenhouse/Polycarbonate-Greenhouse-10.webp",
          alt: "Polycarbonate-Greenhouse-10",
        },
      ],
    },
    {
      id: 5,
      nameEN: "Shade House",
      nameAR: "الصوبة الظلية",
      descriptionEN:
        "High-quality shade netting designed to protect plants from excessive sunlight, ideal for temperature-sensitive crops or areas with intense sunlight exposure.",
      descriptionAR:
        "شبكة تظليل عالية الجودة مصممة لحماية النباتات من أشعة الشمس المفرطة، مثالية للمحاصيل الحساسة للحرارة أو المناطق ذات التعرض الشديد لأشعة الشمس.",

      subImages: [
        {
          id: 1,
          imageSrc: "Shade-Net-House/Shade-Net-House-5.webp",
          alt: "Shade-Net-House-5",
        },
        {
          id: 2,
          imageSrc: "Shade-Net-House/Shade-Net-House-6.webp",
          alt: "Shade-Net-House-6",
        },
        {
          id: 3,
          imageSrc: "Shade-Net-House/Shade-Net-House-7.webp",
          alt: "Shade-Net-House-7",
        },
        {
          id: 4,
          imageSrc: "Shade-Net-House/Shade-Net-House-8.webp",
          alt: "Shade-Net-House-8",
        },
        {
          id: 5,
          imageSrc: "Shade-Net-House/Shade-Net-House-9.webp",
          alt: "Shade-Net-House-9",
        },
      ],
    },
  ];

  getGreenhouseProducts() {
    return this.greenhouseProduct;
  }
}

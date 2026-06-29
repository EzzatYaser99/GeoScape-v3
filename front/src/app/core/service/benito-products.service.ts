import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BenitoProductsService {
  benitoProducts = [
    {
      id: 1,
      nameEN: "Urban Furniture",
      nameAR: "الأثاث الحضري ",
      imageSrc: "",
      descriptionEN:
        "Elegant and durable furniture solutions for both public and private" +
        " settings.",
      descriptionAR: "حلول أثاث أنيقة ومتينة للاماكن العامة والخاصة.",
      subImages: [
        { id: 1, imageSrc: "Urban-Furniture/Urban-Furniture-1.webp" },
        { id: 2, imageSrc: "Urban-Furniture/Urban-Furniture-2.webp" },
        { id: 3, imageSrc: "Urban-Furniture/Urban-Furniture-3.webp" },
        { id: 4, imageSrc: "Urban-Furniture/Urban-Furniture-4.webp" },
      ],
    },
    {
      id: 2,
      nameEN: "Play Equipment",
      nameAR: "معدات اللعب",
      imageSrc: "",
      descriptionEN:
        "Safe and captivating play structures suitable for children of all ages.",
      descriptionAR: "العاب آمنة وجذابة مناسبة للأطفال من جميع الأعمار.",
      subImages: [
        { id: 1, imageSrc: "Play-Equipment/Play-Equipment-1.webp" },
        { id: 2, imageSrc: "Play-Equipment/Play-Equipment-2.webp" },
        { id: 3, imageSrc: "Play-Equipment/Play-Equipment-3.webp" },
        { id: 4, imageSrc: "Play-Equipment/Play-Equipment-4.webp" },
      ],
    },
    {
      id: 3,
      nameEN: "Sports and Fitness Equipment",
      nameAR: "معدات الرياضة واللياقة البدنية",
      imageSrc: "",
      descriptionEN:
        "Premium quality gear designed to encourage physical" +
        " activity and well-being.",
      descriptionAR: "معدات عالية الجودة مصممة لتشجيع النشاط البدني والرفاهية.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-1.webp",
        },
        {
          id: 2,
          imageSrc:
            "Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp",
        },
        {
          id: 3,
          imageSrc:
            "Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.webp",
        },
        {
          id: 4,
          imageSrc:
            "Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-3.webp",
        },
      ],
    },
    {
      id: 4,
      nameEN: "Wood Plastic Composites",
      nameAR: "المركبات الخشبية البلاستيكية",
      imageSrc: "",
      descriptionEN:
        "Eco-friendly and versatile materials ideal for numerous" +
        " applications.",
      descriptionAR:
        "مواد صديقة للبيئة ومتعددة الاستخدامات مثالية للعديد من التطبيقات.",
      subImages: [
        {
          id: 1,
          imageSrc: "Wood-Plastic-Composites/Wood-Plastic-Composites-1.webp",
        },
        {
          id: 2,
          imageSrc: "Wood-Plastic-Composites/Wood-Plastic-Composites-2.webp",
        },
        {
          id: 3,
          imageSrc: "Wood-Plastic-Composites/Wood-Plastic-Composites-3.webp",
        },
        {
          id: 4,
          imageSrc: "Wood-Plastic-Composites/Wood-Plastic-Composites-4.webp",
        },
      ],
    },
    {
      id: 5,
      nameEN: "Street Lighting",
      nameAR: "إنارة الشوارع",
      imageSrc: "",
      descriptionEN:
        "Innovative and efficient street lighting solutions for safer and" +
        " brighter public spaces.",
      descriptionAR:
        "حلول مبتكرة وفعالة لإضاءة الشوارع من أجل أماكن عامة أكثر أمانًا وإشراقًا.",
      subImages: [
        { id: 1, imageSrc: "Street-Lighting/Street-Lighting-1.webp" },
        { id: 2, imageSrc: "Street-Lighting/Street-Lighting-2.webp" },
        { id: 3, imageSrc: "Street-Lighting/Street-Lighting-3.webp" },
        { id: 4, imageSrc: "Street-Lighting/Street-Lighting-4.webp" },
      ],
    },
    {
      id: 6,
      nameEN: "Street Furniture",
      nameAR: "أثاث الشوارع",
      imageSrc: "",
      descriptionEN:
        "Durable and stylish street furniture to improve the comfort and" +
        " functionality of outdoor areas.",
      descriptionAR:
        "أثاث شوارع متين وأنيق لتحسين الراحة والوظائف في المناطق الخارجية.",
      subImages: [
        { id: 1, imageSrc: "Street-Furniture/Street-Furniture-1.webp" },
        { id: 2, imageSrc: "Street-Furniture/Street-Furniture-2.webp" },
        { id: 3, imageSrc: "Street-Furniture/Street-Furniture-3.webp" },
        { id: 4, imageSrc: "Street-Furniture/Street-Furniture-4.webp" },
      ],
    },
    {
      id: 7,
      nameEN: "Mobility",
      nameAR: "التنقل",
      imageSrc: "",
      descriptionEN:
        "Solutions designed to facilitate urban mobility and accessibility.",
      descriptionAR: "حلول مصممة لتسهيل التنقل الحضري والوصول.",
      subImages: [
        { id: 1, imageSrc: "Mobility/Mobility-1.webp" },
        { id: 2, imageSrc: "Mobility/Mobility-2.webp" },
        { id: 3, imageSrc: "Mobility/Mobility-3.webp" },
        { id: 4, imageSrc: "Mobility/Mobility-4.webp" },
      ],
    },
    {
      id: 8,
      nameEN: "Playground Sports Equipment",
      nameAR: "معدات الملاعب الرياضية",
      imageSrc: "",
      descriptionEN:
        "Safe and engaging equipment for playgrounds and sports" +
        " areas, suitable for all ages.",
      descriptionAR:
        "معدات آمنة وجذابة لأماكن اللعب والمناطق الرياضية، مناسبة لجميع الأعمار.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "Playground-Sports-Equipment/Playground-Sports-Equipment-1.webp",
        },
        {
          id: 2,
          imageSrc:
            "Playground-Sports-Equipment/Playground-Sports-Equipment-2.webp",
        },
        {
          id: 3,
          imageSrc:
            "Playground-Sports-Equipment/Playground-Sports-Equipment-3.webp",
        },
        {
          id: 4,
          imageSrc:
            "Playground-Sports-Equipment/Playground-Sports-Equipment-4.webp",
        },
      ],
    },
    {
      id: 9,
      nameEN: "Sports Equipment",
      nameAR: "معدات رياضية",
      imageSrc: "",
      descriptionEN:
        "High-quality sports equipment to promote physical activity and" +
        " well-being.",
      descriptionAR:
        "معدات رياضية عالية الجودة لتعزيز النشاط البدني والرفاهية.",
      subImages: [
        { id: 1, imageSrc: "Sports-Equipment/Sports-Equipment-1.webp" },
        { id: 2, imageSrc: "Sports-Equipment/Sports-Equipment-2.webp" },
        { id: 3, imageSrc: "Sports-Equipment/Sports-Equipment-3.webp" },
        { id: 4, imageSrc: "Sports-Equipment/Sports-Equipment-4.webp" },
      ],
    },
    {
      id: 10,
      nameEN: "Covers and Grates",
      nameAR: "الأغطية والشبكات",
      imageSrc: "",
      descriptionEN:
        "Robust and reliable covers and grates for various urban infrastructure" +
        " needs.",
      descriptionAR:
        "أغطية وشبكات قوية وموثوقة لتلبية احتياجات البنية التحتية الحضرية المختلفة.",
      subImages: [
        { id: 1, imageSrc: "Covers-and-Grates/Covers-and-Grates-1.webp" },
        { id: 2, imageSrc: "Covers-and-Grates/Covers-and-Grates-2.webp" },
        { id: 3, imageSrc: "Covers-and-Grates/Covers-and-Grates-3.webp" },
        { id: 4, imageSrc: "Covers-and-Grates/Covers-and-Grates-4.webp" },
      ],
    },
    {
      id: 11,
      nameEN: "(Benches - Chairs) RIGA",
      nameAR: "(مقاعد - كراسي)RIGA ",
      imageSrc: "",
      descriptionEN:
        "Innovative solutions for urban development and beautification.",
      descriptionAR: "حلول مبتكرة للتنمية الحضرية والتجميل.",
      subImages: [
        { id: 4, imageSrc: "Riga/Riga-1.webp" },
        { id: 2, imageSrc: "Riga/Riga-2.webp" },
        { id: 3, imageSrc: "Riga/Riga-3.webp" },
        { id: 4, imageSrc: "Riga/Riga-4.webp" },
      ],
    },
    {
      id: 12,
      nameEN: "(Benches - Chairs) ARKO",
      nameAR: "(مقاعد - كراسي)ARKO ",
      imageSrc: "",
      descriptionEN: "Durable and stylish urban furniture and accessories.",
      descriptionAR: "أثاث وإكسسوارات حضرية متينة وأنيقة.",
      subImages: [
        { id: 1, imageSrc: "Arko/Arko-1.webp" },
        { id: 2, imageSrc: "Arko/Arko-2.webp" },
        { id: 3, imageSrc: "Arko/Arko-3.webp" },
        { id: 4, imageSrc: "Arko/Arko-4.webp" },
      ],
    },
    {
      id: 13,
      nameEN: "(Benches - Chairs) ARKA",
      nameAR: "(مقاعد - كراسي)ARKA ",
      imageSrc: "",
      descriptionEN: "High-quality, modern street furniture for public spaces.",
      descriptionAR: "أثاث شوارع حديث وعالي الجودة للمساحات العامة. ",
      subImages: [
        { id: 1, imageSrc: "Arka/Arka-1.webp" },
        { id: 2, imageSrc: "Arka/Arka-2.webp" },
        { id: 3, imageSrc: "Arka/Arka-3.webp" },
        { id: 4, imageSrc: "Arka/Arka-4.webp" },
      ],
    },
    {
      id: 14,
      nameEN: "Chair ARNE",
      nameAR: "كرسي ARNE",
      imageSrc: "",
      descriptionEN:
        "Functional and aesthetically pleasing urban design elements.",
      descriptionAR: "عناصر التصميم الحضري الوظيفية والجمالية.",
      subImages: [
        { id: 1, imageSrc: "Arne/Arne-1.webp" },
        { id: 2, imageSrc: "Arne/Arne-2.webp" },
        { id: 3, imageSrc: "Arne/Arne-3.webp" },
      ],
    },
    {
      id: 15,
      nameEN: "(Benches - Chairs) ARTE",
      nameAR: "(مقاعد - كراسي)ARTE ",

      imageSrc: "",
      descriptionEN: "Creative and artistic urban design solutions.",
      descriptionAR: "حلول تصميم حضري إبداعية وفنية.",
      subImages: [
        { id: 1, imageSrc: "Arte/Arte-1.webp" },
        { id: 2, imageSrc: "Arte/Arte-2.webp" },
        { id: 3, imageSrc: "Arte/Arte-3.webp" },
        { id: 4, imageSrc: "Arte/Arte-4.webp" },
      ],
    },
    {
      id: 16,
      nameEN: " (Benches - Chairs - Luminaire) Citizen",
      nameAR: "(مقاعد - كراسي - مصابيح) للمواطن",
      imageSrc: "",
      descriptionEN: "Stylish and functional urban furniture for public areas.",
      descriptionAR: "أثاث حضري أنيق ووظيفي للمناطق العامة.",
      subImages: [
        { id: 1, imageSrc: "Citizen/Citizen-1.webp" },
        { id: 2, imageSrc: "Citizen/Citizen-2.webp" },
        { id: 3, imageSrc: "Citizen/Citizen-3.webp" },
        { id: 4, imageSrc: "Citizen/Citizen-4.webp" },
      ],
    },
    {
      id: 17,
      nameEN: "(Benches - Chairs) CORO METAL",
      nameAR: "(مقاعد - كراسي)CORO METAL ",

      imageSrc: "",
      descriptionEN: "Elegant and durable urban furniture solutions.",
      descriptionAR: "حلول أثاث حضري أنيق ودائم.",
      subImages: [
        { id: 1, imageSrc: "Coro/Coro-1.webp" },
        { id: 2, imageSrc: "Coro/Coro-2.webp" },
        { id: 3, imageSrc: "Coro/Coro-3.webp" },
        { id: 4, imageSrc: "Coro/Coro-4.webp" },
      ],
    },
    {
      id: 18,
      nameEN: "(Benches - Chairs -bins) Minsk",
      nameAR: " (مقاعد - كراسي - صناديق قمامة)Minsk",
      imageSrc: "",
      descriptionEN: "High-quality urban design products for public spaces.",
      descriptionAR: "منتجات تصميم حضري عالية الجودة للمساحات العامة.",
      subImages: [
        { id: 1, imageSrc: "Minsk/Minsk-1.webp" },
        { id: 2, imageSrc: "Minsk/Minsk-2.webp" },
        { id: 3, imageSrc: "Minsk/Minsk-3.webp" },
        { id: 4, imageSrc: "Minsk/Minsk-4.webp" },
      ],
    },
    {
      id: 19,
      nameEN: " Lounger PIRO",
      nameAR: "كرسي استرخاء PIRO",
      imageSrc: "",
      descriptionEN: "Functional and stylish urban furniture.",
      descriptionAR: "أثاث حضري عملي وأنيق.",
      subImages: [
        { id: 1, imageSrc: "Piro/Piro-1.webp" },
        { id: 2, imageSrc: "Piro/Piro-2.webp" },
        { id: 3, imageSrc: "Piro/Piro-3.webp" },
        { id: 4, imageSrc: "Piro/Piro-4.webp" },
      ],
    },
    {
      id: 20,
      nameEN: "Lounger ARES",
      nameAR: "كرسي استرخاء ARES",
      imageSrc: "",
      descriptionEN: "Durable and modern urban design elements.",
      descriptionAR: "عناصر تصميم حضري متين وعصري.",
      subImages: [
        { id: 1, imageSrc: "Ares/Ares-1.webp" },
        { id: 2, imageSrc: "Ares/Ares-2.webp" },
        { id: 3, imageSrc: "Ares/Ares-3.webp" },
      ],
    },
    {
      id: 21,
      nameEN: "(Benches - Chairs) Quatro",
      nameAR: " (مقاعد - كراسي)Quatro",
      imageSrc: "",
      descriptionEN: "Innovative urban furniture solutions for public spaces.",
      descriptionAR: "حلول مبتكرة للأثاث الحضري للمساحات العامة.",
      subImages: [
        { id: 1, imageSrc: "Quatro/Quatro-1.webp" },
        { id: 2, imageSrc: "Quatro/Quatro-2.webp" },
        { id: 3, imageSrc: "Quatro/Quatro-3.webp" },
      ],
    },
    {
      id: 22,
      nameEN: "(Benches - Chairs) Leman",
      nameAR: "(مقاعد - كراسي)Leman ",
      imageSrc: "",
      descriptionEN:
        "Elegant and durable urban furniture for various applications.",
      descriptionAR: "أثاث حضري أنيق ومتين لمختلف الاستخدامات.",
      subImages: [
        { id: 1, imageSrc: "Leman/Leman-1.webp" },
        { id: 2, imageSrc: "Leman/Leman-2.webp" },
        { id: 3, imageSrc: "Leman/Leman-3.webp" },
        { id: 4, imageSrc: "Leman/Leman-4.webp" },
      ],
    },
    {
      id: 23,
      nameEN: "Side table POLKA",
      nameAR: "طاولة جانبية POLKA",
      imageSrc: "",
      descriptionEN: "Stylish and functional urban design products.",
      descriptionAR: "منتجات تصميم حضري أنيقة وعملية.",
      subImages: [
        { id: 1, imageSrc: "Polka/Polka-1.webp" },
        { id: 2, imageSrc: "Polka/Polka-2.webp" },
        { id: 3, imageSrc: "Polka/Polka-3.webp" },
      ],
    },
    {
      id: 24,
      nameEN: "(Benches - Chairs) Gavarres",
      nameAR: "(مقاعد - كراسي)Gavarres ",

      imageSrc: "",
      descriptionEN: "Creative and artistic urban furniture solutions.",
      descriptionAR: "حلول أثاث حضري إبداعية وفنية.",
      subImages: [
        { id: 1, imageSrc: "Gavarras/Gavarras-1.webp" },
        { id: 2, imageSrc: "Gavarras/Gavarras-2.webp" },
        { id: 3, imageSrc: "Gavarras/Gavarras-3.webp" },
        { id: 4, imageSrc: "Gavarras/Gavarras-4.webp" },
      ],
    },
    {
      id: 25,
      nameEN: "(Benches - Chairs) Petrus",
      nameAR: "(مقاعد - كراسي)Petrus",
      imageSrc: "",
      descriptionEN: "High-quality, durable urban design elements.",
      descriptionAR: "عناصر تصميم حضري عالية الجودة ودائمة.",
      subImages: [
        { id: 1, imageSrc: "Petrus/Petrus-1.webp" },
        { id: 2, imageSrc: "Petrus/Petrus-2.webp" },
        { id: 3, imageSrc: "Petrus/Petrus-3.webp" },
        { id: 4, imageSrc: "Petrus/Petrus-4.webp" },
      ],
    },
    {
      id: 26,
      nameEN: "Litter bin OKTO",
      nameAR: "سلة المهملات OKTO",
      imageSrc: "",
      descriptionEN: "Modern and stylish urban furniture for public areas.",
      descriptionAR: "أثاث حضري حديث وأنيق للمناطق العامة.",
      subImages: [
        { id: 1, imageSrc: "Okto/Okto-1.webp" },
        { id: 2, imageSrc: "Okto/Okto-2.webp" },
        { id: 3, imageSrc: "Okto/Okto-3.webp" },
        { id: 4, imageSrc: "Okto/Okto-4.webp" },
      ],
    },
    {
      id: 27,
      nameEN: "Litter bin FLO",
      nameAR: "سلة المهملات FLO",
      imageSrc: "",
      descriptionEN: "Elegant and functional urban design products.",
      descriptionAR: "منتجات تصميم حضري أنيقة وعملية.",
      subImages: [
        { id: 1, imageSrc: "Flo/Flo-1.webp" },
        { id: 2, imageSrc: "Flo/Flo-2.webp" },
        { id: 3, imageSrc: "Flo/Flo-3.webp" },
        { id: 4, imageSrc: "Flo/Flo-4.webp" },
      ],
    },
    {
      id: 28,
      nameEN: "Litter bin Mielek",
      nameAR: "سلة المهملات Mielek",
      imageSrc: "",
      descriptionEN: "Durable and stylish urban furniture solutions.",
      descriptionAR: "حلول أثاث حضري متينة وأنيقة.",
      subImages: [
        { id: 1, imageSrc: "Mielek/Mielek-1.webp" },
        { id: 2, imageSrc: "Mielek/Mielek-2.webp" },
        { id: 3, imageSrc: "Mielek/Mielek-3.webp" },
        { id: 4, imageSrc: "Mielek/Mielek-4.webp" },
      ],
    },
    {
      id: 29,
      nameEN: "Bus shelter TRAX",
      nameAR: "محطة الحافلات TRAX",
      imageSrc: "",
      descriptionEN: "Innovative and modern urban design elements.",
      descriptionAR: "عناصر تصميم حضري مبتكرة وعصرية.",
      subImages: [
        { id: 1, imageSrc: "Trax/Trax-1.webp" },
        { id: 2, imageSrc: "Trax/Trax-2.webp" },
        { id: 3, imageSrc: "Trax/Trax-3.webp" },
      ],
    },
  ];

  getBenitoProducts() {
    return this.benitoProducts;
  }
}

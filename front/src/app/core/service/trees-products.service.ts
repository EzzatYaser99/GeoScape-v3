import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TreesProductsService {
  trees = [
    {
      id: 1,
      categoryEN: "Trees",
      categoryAR: "الأشجار",
      nameEN: "CERATONIA SILIQUA (Carob Tree)",
      nameAR: "شجرة الخروب",
      imageSrc: "trees/CERATONIA-SILIQUA.webp",
      alt: "Carob Tree Image",
      descriptionEN:
        "CERATONIA SILIQUA, commonly known as the Carob Tree, is suitable for transplantation with proper timing. It is a robust tree ideal for various landscape projects.",
      descriptionAR:
        "الخرنوب، المعروف أيضًا بشجرة الخروب، مناسب للزراعة بالنقل في الوقت المناسب. إنها شجرة قوية مثالية لمشاريع المناظر الطبيعية المختلفة.",
    },
    {
      id: 2,
      categoryEN: "Trees",
      categoryAR: "الأشجار",
      nameEN: "Pithecellobium dulce (Madras Thorn)",
      nameAR: "لوز هندي( شوك مدراس )",
      imageSrc: "trees/Pithecellobium-dulce.webp",
      alt: "Madras Thorn Image",
      descriptionEN:
        "Pithecellobium dulce, also known as Madras Thorn, serves as an alternative to the Carob Tree. It is available for transplantation in October.",
      descriptionAR:
        "بيثيللوبيا دولسي، المعروف أيضًا بشجرة الشوك المدراسية، يُعتبر بديلاً لشجرة الخروب. يتوفر للزراعة في أكتوبر.",
    },
    {
      id: 3,
      categoryEN: "Trees",
      categoryAR: "الأشجار",
      nameEN: "Melia Azedarach (Chinaberry Tree)",
      nameAR: "الزنزلخت ( شجرة التوت الصيني )",
      imageSrc: "trees/Melia-Azedarach.webp",
      alt: "Chinaberry Tree Image",
      descriptionEN:
        "Melia Azedarach, or Chinaberry Tree, is another alternative to the Carob Tree. It is suitable for transplantation in October.",
      descriptionAR:
        "الزنزلخت شجرة التوت الصيني، هي بديل آخر لشجرة الخروب. إنه مناسب للزراعة في أكتوبر.",
    },
    {
      id: 4,
      categoryEN: "Shrubs",
      categoryAR: "الشجيرات",
      nameEN: "General Shrubs",
      nameAR: "الشجيرات الشائعه",
      imageSrc: "trees/General-Shrubs.webp",
      alt: "General Shrubs Image",
      descriptionEN:
        "Various shrubs that should be placed against walls to avoid strong winds. These shrubs are ideal for creating sheltered garden spaces.",
      descriptionAR:
        "الشجيرات متنوعة يجب وضعها بجانب الجدران لتجنب الرياح القوية. هذه الشجيرات مثالية لإنشاء مساحات حدائق محمية.",
    },
    {
      id: 5,
      categoryEN: "Herbaceous Plants",
      categoryAR: "النباتات العشبية",
      nameEN: "SALVIA AEGYPTIACA (Egyptian Sage)",
      nameAR: " قصعين مصري أو شجرة الغزال",
      imageSrc: "trees/SALVIA-AEGYPTIACA.webp",
      alt: "Egyptian Sage Image",
      descriptionEN:
        "SALVIA AEGYPTIACA, or Egyptian Sage, is available for transplantation in October. It is a versatile herbaceous plant perfect for adding texture to gardens.",
      descriptionAR:
        "المريمية المصرية، متاحة للزراعة في أكتوبر. إنها نبتة عشبية متعددة الاستخدامات مثالية لإضافة الملمس إلى الحدائق.",
    },
    {
      id: 6,
      categoryEN: "Herbaceous Plants",
      categoryAR: "النباتات العشبية",
      nameEN: "SALVIA OFFICINALIS (Common Sage)",
      nameAR: "المريمية الطبية (المريمية الشائعة)",
      imageSrc: "trees/SALVIA-OFFICINALIS.webp",
      alt: "Common Sage Image",
      descriptionEN:
        "SALVIA OFFICINALIS, also known as Common Sage, serves as an alternative to Egyptian Sage. It is known for its aromatic leaves and medicinal properties.",
      descriptionAR:
        " المريمية الطبية المعروف أيضًا باسم الميرمية الشائعة، يُستخدم كبديل للمرمية المصرية. يشتهر بأوراقه العطرية وخصائصه" +
        " الطبية.",
    },
    {
      id: 7,
      categoryEN: "Herbaceous Plants",
      categoryAR: "النباتات العشبية",
      nameEN: "Mentha longifolia (Wild Mint)",
      nameAR: "نعناع طويل الأوراق (نعناع بري)",
      imageSrc: "trees/Mentha-longifolia.webp",
      alt: "Wild Mint Image",
      descriptionEN:
        "Mentha longifolia, or Wild Mint, is another alternative to Egyptian Sage. It is characterized by its fragrant foliage and is suitable for various garden settings.",
      descriptionAR:
        "النعناع الطويل الأوراق، أو النعناع البري، هو بديل آخر للمرمرية المصرية. يتميز بأوراقه العطرية وهو مناسب لمختلف إعدادات الحدائق.",
    },
    {
      id: 8,
      categoryEN: "Succulents Plants",
      categoryAR: "النباتات عصارية",
      nameEN: "General Succulents",
      nameAR: "النباتات العصارية الشائعه",
      imageSrc: "trees/General-Succulents.webp",
      alt: "General Succulents Image",
      descriptionEN:
        "A variety of succulents suitable for the landscape, known for their drought resistance and unique forms. They are perfect for low-maintenance gardens.",
      descriptionAR:
        "مجموعة متنوعة من النباتات العصارية المناسبة للمناظر الطبيعية، والمعروفة بمقاومتها للجفاف وأشكالها الفريدة. إنها مثالية للحدائق ذات الصيانة المنخفضة.",
    },
    {
      id: 9,
      categoryEN: "Climbers",
      categoryAR: "نباتات متسلقة",
      nameEN: "General Climbers",
      nameAR: "نباتات متسلقة الشائعه",
      imageSrc: "trees/General-Climbers.webp",
      alt: "General Climbers Image",
      descriptionEN:
        "Climbing plants ideal for vertical gardens, adding green coverage to walls and trellises. They are excellent for creating living walls and enhancing vertical spaces.",
      descriptionAR:
        "النباتات المتسلقة مثالية للحدائق العمودية، تضيف تغطية خضراء للجدران والشبكات. إنها ممتازة لإنشاء الجدران الحية وتعزيز المساحات الرأسية.",
    },
    {
      id: 10,
      categoryEN: "Grass (Lawn)",
      categoryAR: "عشب (حشيش)",
      nameEN: "Dasylirion Longifolium",
      nameAR: "نولينة طويلة الأوراق",
      imageSrc: "trees/Dasylirion-Longifolium.webp",
      alt: "Dasylirion Longifolium Image",
      descriptionEN:
        "Suitable grass species for lawn areas, providing lush green coverage that is ideal for recreational and aesthetic purposes.",
      descriptionAR:
        "أنواع عشب المناسبة للحديقة، توفر تغطية خضراء كثيفة مثالية للأغراض الترفيهية والجمالية.",
    },
  ];

  getTrees() {
    return this.trees;
  }
}

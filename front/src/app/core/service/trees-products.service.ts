import { Injectable } from "@angular/core";
import { Product } from "../types/product.type";

@Injectable({
  providedIn: "root",
})
export class TreesProductsService {
  trees: Product[] = [
    {
      id: 1,
      categoryEN: "Trees",
      categoryAR: "الأشجار",
      nameEN: "CERATONIA SILIQUA (Carob Tree)",
      nameAR: "شجرة الخروب",
      imageSrc: "trees/CERATONIA-SILIQUA.webp",
      alt: "Carob Tree Image",
      descriptionEN:
        "CERATONIA SILIQUA, commonly known as the Carob Tree, is suitable for transplantation with proper timing. This robust tree is ideal for various landscape projects, offering durability and aesthetic appeal.",
      descriptionAR:
        "الخرنوب، المعروف أيضًا بشجرة الخروب، مناسب للزراعة بالنقل في الوقت المناسب. هذه الشجرة القوية مثالية لمشاريع المناظر الطبيعية المختلفة، حيث توفر المتانة والجاذبية الجمالية.",
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
        "Pithecellobium dulce, also known as Madras Thorn, serves as an excellent alternative to the Carob Tree. It is available for transplantation in October and adapts well to various soil conditions.",
      descriptionAR:
        "بيثيللوبيا دولسي، المعروف أيضًا بشجرة الشوك المدراسية، يُعتبر بديلاً ممتازًا لشجرة الخروب. يتوفر للزراعة في أكتوبر ويتكيف جيدًا مع مختلف أنواع التربة.",
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
        "Melia Azedarach, or Chinaberry Tree, is another viable alternative to the Carob Tree. It is suitable for transplantation in October and features attractive foliage.",
      descriptionAR:
        "الزنزلخت شجرة التوت الصيني، هو بديل آخر قابل للتطبيق لشجرة الخروب. إنه مناسب للزراعة في أكتوبر ويتميز بأوراقه الجذابة.",
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
        "A diverse selection of shrubs ideally positioned against walls to provide protection from strong winds. These shrubs are perfect for creating sheltered garden spaces and adding vertical interest.",
      descriptionAR:
        "مجموعة متنوعة من الشجيرات تُوضع بشكل مثالي بجانب الجدران لتوفير الحماية من الرياح القوية. هذه الشجيرات مثالية لإنشاء مساحات حدائق محمية وإضافة اهتمام عمودي.",
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
        "SALVIA AEGYPTIACA, or Egyptian Sage, is available for transplantation in October. This versatile herbaceous plant is perfect for adding texture and aromatic appeal to gardens.",
      descriptionAR:
        "المريمية المصرية، متاحة للزراعة في أكتوبر. هذه النبتة العشبية متعددة الاستخدامات مثالية لإضافة الملمس والجاذبية العطرية إلى الحدائق.",
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
        "SALVIA OFFICINALIS, also known as Common Sage, serves as an excellent alternative to Egyptian Sage. It is renowned for its aromatic leaves and valuable medicinal properties.",
      descriptionAR:
        "المريمية الطبية، المعروفة أيضًا باسم الميرمية الشائعة، تُستخدم كبديل ممتاز للمرمية المصرية. تشتهر بأوراقها العطرية وخصائصها الطبية القيمة.",
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
        "Mentha longifolia, or Wild Mint, is another alternative to Egyptian Sage. It is characterized by its fragrant foliage and is suitable for various garden settings, including herb gardens and borders.",
      descriptionAR:
        "النعناع الطويل الأوراق، أو النعناع البري، هو بديل آخر للمريمية المصرية. يتميز بأوراقه العطرية وهو مناسب لمختلف إعدادات الحدائق، بما في ذلك حدائق الأعشاب والحدود.",
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
        "A diverse variety of succulents suitable for landscaping, known for their exceptional drought resistance and unique architectural forms. They are perfect for creating low-maintenance, water-wise gardens.",
      descriptionAR:
        "مجموعة متنوعة من النباتات العصارية المناسبة لتنسيق الحدائق، والمعروفة بمقاومتها الاستثنائية للجفاف وأشكالها المعمارية الفريدة. إنها مثالية لإنشاء حدائق ذات صيانة منخفضة واقتصادية في استهلاك المياه.",
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
        "Climbing plants ideal for vertical gardens, adding lush green coverage to walls and trellises. They are excellent for creating living walls and enhancing vertical spaces with natural beauty.",
      descriptionAR:
        "النباتات المتسلقة مثالية للحدائق العمودية، تضيف تغطية خضراء خصبة للجدران والشبكات. إنها ممتازة لإنشاء الجدران الحية وتعزيز المساحات الرأسية بالجمال الطبيعي.",
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
        "Suitable grass species for lawn areas, providing lush green coverage that is ideal for both recreational and aesthetic purposes. This variety creates a beautiful, durable lawn surface.",
      descriptionAR:
        "أنواع عشب مناسبة لمناطق العشب، توفر تغطية خضراء كثيفة مثالية للأغراض الترفيهية والجمالية. هذا التنوع يخلق سطح عشب جميل ومتين.",
    },
  ];

  getTrees() {
    return this.trees;
  }
}

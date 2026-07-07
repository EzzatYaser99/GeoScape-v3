import { Injectable } from "@angular/core";
import { Product } from "../types/product.type";

@Injectable({
  providedIn: "root",
})
export class PlantsProductsService {
  plants: Product[] = [
    {
      id: 1,
      nameEN: "Stipagrostis Plumosa",
      nameAR: "ثيغام",
      imageSrc: "Stipagrostis-Plumosa.webp",
      descriptionEN:
        "An attractive ornamental grass that thrives in arid environments, making it ideal for xeriscaping and water-efficient landscaping projects.",
      descriptionAR:
        "عشب زينة جذاب يزدهر في البيئات القاحلة، مما يجعله مثاليًا لتنسيق الحدائق الجافة ومشاريع تنسيق الحدائق الاقتصادية في استهلاك المياه.",

      alt: "Stipagrostis Plumosa",
    },
    {
      id: 2,
      nameEN: "Pennisetum Setaceum",
      nameAR: "ثيوم شائك او سبط",
      imageSrc: "Pennisetum-Setaceum.webp",
      descriptionEN:
        "A popular ornamental grass known for its graceful, feathery plumes that add movement and elegance to landscape designs.",
      descriptionAR: "عشب زينة شائع معروف بريشه الجميل والرائع الذي يضيف الحركة والأناقة لتصاميم المناظر الطبيعية.",
      alt: "Pennisetum Setaceum",
    },
    {
      id: 3,
      nameEN: "Sesuvium Portulacastrum",
      nameAR: "سيزيفيوم",
      imageSrc: "Sesuvium-Portulacastrum.webp",
      descriptionEN:
        "A hardy ground cover with succulent leaves, perfect for coastal areas and salt-tolerant landscaping applications.",
      descriptionAR: "غطاء أرضي قوي بأوراق عصارية، مثالي للمناطق الساحلية وتطبيقات تنسيق الحدائق المقاومة للملوحة.",
      alt: "Sesuvium Portulacastrum",
    },
    {
      id: 4,
      nameEN: "Carissa Macrocarpa",
      nameAR: "كاريس كبير الثمار",
      imageSrc: "Carissa-Macrocarpa.webp",
      descriptionEN:
        "A versatile shrub with glossy leaves and fragrant flowers, suitable for hedges, borders, and decorative landscaping features.",
      descriptionAR:
        "شجيرة متعددة الاستخدامات بأوراق لامعة وأزهار عطرة، مناسبة للتحوطات والحدود وميزات تنسيق الحدائق الزخرفية.",

      alt: "Carissa Macrocarpa",
    },
    {
      id: 5,
      nameEN: "Agave Angustifolia",
      nameAR: "أجاف رفيع الأوراق",
      imageSrc: "Agave-Angustifolia.webp",
      descriptionEN:
        "A striking succulent with narrow leaves, well-suited for desert landscapes and contemporary xeriscape designs.",
      descriptionAR:
        "نبات عصاري لافت للنظر بأوراق ضيقة، مناسب تمامًا للمناظر الصحراوية وتصاميم تنسيق الحدائق الجافة العصرية.",

      alt: "Agave Angustifolia",
    },
    {
      id: 6,
      nameEN: "Agave Sisalana",
      nameAR: "صبار السيسال",
      imageSrc: "Agave-Sisalana.webp",
      descriptionEN:
        "Known for its long, sturdy leaves, commonly used in fiber production and as an ornamental plant for architectural landscaping.",
      descriptionAR:
        "معروفة بأوراقها الطويلة والمتينة، وتستخدم عادة في إنتاج الألياف وكنبات زينة لتنسيق الحدائق المعمارية.",

      alt: "Agave Sisalana",
    },
    {
      id: 7,
      nameEN: "Aloe Arborescensa",
      nameAR: "ألوي اربورسنس",
      imageSrc: "Aloe-Arborescensa.webp",
      descriptionEN:
        "A hardy aloe species with medicinal properties, excellent for rock gardens, borders, and drought-tolerant landscapes.",
      descriptionAR:
        "نوع صبار قوي ذو خصائص طبية، ممتاز للحدائق الصخرية والحدود والمناظر الطبيعية المقاومة للجفاف.",

      alt: "Aloe Arborescensa",
    },
    {
      id: 8,
      nameEN: "Dasylirion Longifolium",
      nameAR: "\n" + "نولينة طويلة الأوراق",
      imageSrc: "Dasylirion-Longifolium.webp",
      descriptionEN:
        "A dramatic, spiky plant that adds architectural interest and sculptural beauty to any garden setting.",
      descriptionAR: "نبات درامي ذو أشواك يضيف اهتمامًا معماريًا وجمالًا نحتيًا لأي إعداد حديقة.",

      alt: "Dasylirion Longifolium",
    },
  ];

  getPlants() {
    return this.plants;
  }
}

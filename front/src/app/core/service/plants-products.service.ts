import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlantsProductsService {
  plants = [
    {
      id: 1,
      nameEN: "Stipagrostis Plumosa",
      nameAR: "ثيغام",
      imageSrc: "Stipagrostis-Plumosa.webp",
      descriptionEN:
        "An attractive grass that thrives in arid environments, ideal for xeriscaping.",
      descriptionAR:
        "عشب جذاب يزدهر في البيئات القاحلة، مثالي لتنسيق الحدائق الجاف.",

      alt: "Stipagrostis Plumosa",
    },
    {
      id: 2,
      nameEN: "Pennisetum Setaceum",
      nameAR: "ثيوم شائك او سبط",
      imageSrc: "Pennisetum-Setaceum.webp",
      descriptionEN:
        "A popular ornamental grass known for its graceful, feathery plumes.",
      descriptionAR: "عشب زينة شائع معروف بريشه الجميل والرائع.",
      alt: "Pennisetum Setaceum",
    },
    {
      id: 3,
      nameEN: "Sesuvium Portulacastrum",
      nameAR: "سيزيفيوم",
      imageSrc: "Sesuvium-Portulacastrum.webp",
      descriptionEN:
        "A hardy ground cover with succulent leaves, perfect for coastal areas.",
      descriptionAR: "غطاء أرضي قوي بأوراق نضرة، مثالي للمناطق الساحلية.",
      alt: "Sesuvium Portulacastrum",
    },
    {
      id: 4,
      nameEN: "Carissa Macrocarpa",
      nameAR: "كاريس كبير الثمار",
      imageSrc: "Carissa-Macrocarpa.webp",
      descriptionEN:
        "A versatile shrub with glossy leaves and fragrant flowers, suitable for hedges and borders.",
      descriptionAR:
        "شجيرة متعددة الاستخدامات بأوراق لامعة وأزهار عطرة، مناسبة للتحوطات والحدود.",

      alt: "Carissa Macrocarpa",
    },
    {
      id: 5,
      nameEN: "Agave Angustifolia",
      nameAR: "أجاف رفيع الأوراق",
      imageSrc: "Agave-Angustifolia.webp",
      descriptionEN:
        "A striking succulent with narrow leaves, well-suited for desert landscapes.",
      descriptionAR:
        "نبات عصاري لافت للنظر بأوراق ضيقة، مناسب تمامًا للمناظر الصحراوية.",

      alt: "Agave Angustifolia",
    },
    {
      id: 6,
      nameEN: "Agave Sisalana",
      nameAR: "صبار السيسال",
      imageSrc: "Agave-Sisalana.webp",
      descriptionEN:
        "Known for its long, sturdy leaves, commonly used in fiber production and as an ornamental plant.",
      descriptionAR:
        "معروفة بأوراقها الطويلة والمتينة، وتستخدم عادة في إنتاج الألياف وكزرع زينة.",

      alt: "Agave Sisalana",
    },
    {
      id: 7,
      nameEN: "Aloe Arborescensa",
      nameAR: "ألوي اربورسنس",
      imageSrc: "Aloe-Arborescensa.webp",
      descriptionEN:
        "A hardy aloe species with medicinal properties, great for rock gardens and borders.",
      descriptionAR:
        "نوع صبار قوي ذو خصائص طبية، ممتاز للحدائق الصخرية والحدود.",

      alt: "Aloe Arborescensa",
    },
    {
      id: 8,
      nameEN: "Dasylirion Longifolium",
      nameAR: "\n" + "نولينة طويلة الأوراق",
      imageSrc: "Dasylirion-Longifolium.webp",
      descriptionEN:
        "A dramatic, spiky plant that adds architectural interest to any garden.",
      descriptionAR: "نبات درامي ذو أشواك يضيف اهتمامًا معماريًا لأي حديقة.",

      alt: "Dasylirion Longifolium",
    },
  ];

  getPlants() {
    return this.plants;
  }
}

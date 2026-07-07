import { Injectable } from "@angular/core";
import { Product } from "../types/product.type";

@Injectable({
  providedIn: "root",
})
export class SeedlingProductsService {
  seedlingProduct: Product[] = [
    {
      id: 1,
      nameEN: "Ebb and Flow Bench",
      nameAR: "طاولة المد والجزر",
      descriptionEN:
        "A water-efficient bench system that utilizes bottom-up irrigation for uniform watering and nutrient delivery. Ideal for various plant types, it reduces water usage and enhances growth rates.",
      descriptionAR:
        "نظام طاولة موفر للمياه يستخدم الري من الأسفل إلى الأعلى لضمان الري المنتظم وتوصيل المغذيات. مثالي لأنواع مختلفة من النباتات، فهو يقلل من استخدام المياه ويعزز معدلات النمو.",
      subImages: [
        {
          id: 1,
          imageSrc: "ebb-and-flow bench/Ebb-and-flow-bench-1.webp",
          alt: "Ebb and Flow Bench Image 1",
        },
        {
          id: 2,
          imageSrc: "ebb-and-flow bench/Ebb-and-flow-bench-2.webp",
          alt: "Ebb and Flow Bench Image 2",
        },
        {
          id: 3,
          imageSrc: "ebb-and-flow bench/Ebb-and-flow-bench-3.webp",
          alt: "Ebb and Flow Bench Image 3",
        },
        {
          id: 4,
          imageSrc: "ebb-and-flow bench/Ebb-and-flow-bench-4.webp",
          alt: "Ebb and Flow Bench Image 4",
        },
        {
          id: 5,
          imageSrc: "ebb-and-flow bench/Ebb-and-flow-bench-5.webp",
          alt: "Ebb and Flow Bench Image 5",
        },
      ],
    },
    {
      id: 2,
      nameEN: "Multi-Layer Seeding System",
      nameAR: "نظام زراعة البذور متعدد الطبقات",
      descriptionEN:
        "A versatile system designed for efficient space utilization in seedling cultivation. With multiple tiers, it maximizes planting capacity while providing uniform watering and light exposure for healthy seedling growth.",
      descriptionAR:
        "نظام متعدد الاستخدامات مصمم لاستغلال المساحة بكفاءة في زراعة الشتلات. بفضل الطبقات المتعددة، فإنه يزيد من سعة الزراعة مع توفير الري المنتظم والتعرض للضوء لنمو الشتلات الصحية.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "multilayer Seeding-trolley/Multilayer-Seeding-trolley-2.webp",
          alt: "Multi-Layer Seeding System Image 1",
        },
        {
          id: 2,
          imageSrc:
            "multilayer Seeding-trolley/Multilayer-Seeding-trolley-3.webp",
          alt: "Multi-Layer Seeding System Image 2",
        },
        {
          id: 3,
          imageSrc:
            "multilayer Seeding-trolley/Multilayer-Seeding-trolley-4.webp",
          alt: "Multi-Layer Seeding System Image 3",
        },
        {
          id: 4,
          imageSrc:
            "multilayer Seeding-trolley/Multilayer-Seeding-trolley-5.webp",
          alt: "Multi-Layer Seeding System Image 4",
        },
        {
          id: 5,
          imageSrc:
            "multilayer Seeding-trolley/Multilayer-Seeding-trolley-6.webp",
          alt: "Multi-Layer Seeding System Image 5",
        },
      ],
    },
    {
      id: 3,
      nameEN: "T-Rail Bench",
      nameAR: "طاولة T-Rail",
      descriptionEN:
        "A flexible bench system allowing easy tray movement, reducing aisle space, and increasing planting density. Its efficient" +
        " design improves crop handling and optimizes greenhouse productivity.",
      descriptionAR:
        "نظام طاولة مرن يسمح بسهولة تحريك الصينية، مما يقلل من مساحة الممر ويزيد من كثافة الزراعة. يعمل تصميمه الفعال على تحسين التعامل مع المحاصيل وتحسين إنتاجية الصوبة.",
      subImages: [
        {
          id: 1,
          imageSrc: "t-rail-bench/t-rail-benches-5.webp",
          alt: "T-Rail Bench Image 1",
        },
        {
          id: 2,
          imageSrc: "t-rail-bench/t-rail-benches-6.webp",
          alt: "T-Rail Bench Image 2",
        },
        {
          id: 3,
          imageSrc: "t-rail-bench/t-rail-benches-7.webp",
          alt: "T-Rail Bench Image 3",
        },
        {
          id: 4,
          imageSrc: "t-rail-bench/t-rail-benches-8.webp",
          alt: "T-Rail Bench Image 4",
        },
        {
          id: 5,
          imageSrc: "t-rail-bench/t-rail-benches-9.webp",
          alt: "T-Rail Bench Image 5",
        },
      ],
    },
    {
      id: 4,
      nameEN: "Wire Bottom Seeding Bench",
      nameAR: "طاولة زراعة بقاعدة سلكية",
      descriptionEN:
        "A durable and breathable bench with a wire mesh base that ensures optimal drainage and aeration for seedlings. Its sturdy construction is ideal for both small-scale and commercial greenhouse operations.",
      descriptionAR:
        "طاولة متينة وقابلة للتنفس بقاعدة من شبكة سلكية تضمن تصريفًا وتهوية مثاليين للشتلات. بنيته المتينة مثالية لكل من العمليات الزراعية الصغيرة والتجارية في البيوت المحمية.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "wire-bottom seedling-bench/Wire-bottom-seedling-bench-5.webp",
          alt: "Wire Bottom Seeding Bench Image 1",
        },
        {
          id: 2,
          imageSrc:
            "wire-bottom seedling-bench/Wire-bottom-seedling-bench-6.webp",
          alt: "Wire Bottom Seeding Bench Image 2",
        },
        {
          id: 3,
          imageSrc:
            "wire-bottom seedling-bench/Wire-bottom-seedling-bench-7.webp",
          alt: "Wire Bottom Seeding Bench Image 3",
        },
        {
          id: 4,
          imageSrc:
            "wire-bottom seedling-bench/Wire-bottom-seedling-bench-8.webp",
          alt: "Wire Bottom Seeding Bench Image 4",
        },
        {
          id: 5,
          imageSrc:
            "wire-bottom seedling-bench/Wire-bottom-seedling-bench-9.webp",
          alt: "Wire Bottom Seeding Bench Image 5",
        },
      ],
    },
  ];

  getSeedlingProducts() {
    return this.seedlingProduct;
  }
}

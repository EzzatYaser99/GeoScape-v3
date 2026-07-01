import { Injectable } from "@angular/core";
import { Product } from "../types/product.type";

@Injectable({
  providedIn: "root",
})
export class CultivationProductsService {
  cultivationProduct: Product[] = [
    {
      id: 1,
      nameEN: "NFT Hydroponic for Leafy Vegetables",
      nameAR: "نظام الزراعة المائية NFT للخضروات الورقية",
      descriptionEN:
        "A hydroponic system that employs the Nutrient Film Technique, providing a steady flow of nutrients to the roots. Designed for leafy vegetables, it ensures faster growth and better resource efficiency.",
      descriptionAR:
        "نظام الزراعة المائية الذي يستخدم تقنية الفيلم المغذي، يوفر تدفقًا ثابتًا من العناصر الغذائية للجذور. مصمم للخضروات الورقية، ويضمن نموًا أسرع وكفاءة أفضل للموارد.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-6.webp",
          alt: "NFT hydroponic system ",
        },
        {
          id: 2,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-7.webp",
          alt: "NFT hydroponic system ",
        },
        {
          id: 3,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-8.webp",
          alt: "NFT hydroponic system ",
        },
        {
          id: 4,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-9.webp",
          alt: "NFT hydroponic system ",
        },
        {
          id: 5,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-10.webp",
          alt: "NFT hydroponic system ",
        },
        {
          id: 6,
          imageSrc:
            "Cultivation-NFT-hydroponic-for-leafy-vegetable/NFT-hydroponic-system-11.webp",
          alt: "NFT hydroponic system ",
        },
      ],
    },
    {
      id: 2,
      nameEN: "Vine Crop Gutter Planting System",
      nameAR: "نظام زراعة المحاصيل الكرومية في قنوات الصرف",
      descriptionEN:
        "A specialized planting system designed for vine crops like tomatoes and cucumbers. It uses gutters for precise irrigation and drainage, ensuring healthy root systems and higher yields.",
      descriptionAR:
        "نظام زراعة متخصص مصمم لمحاصيل الكروم مثل الطماطم والخيار. يستخدم نظام قنوات للري والصرف الدقيق، مما يضمن أنظمة جذرية صحية وإنتاجية أعلى.",
      subImages: [
        {
          id: 1,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-7.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 2,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-8.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 3,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-9.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 4,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-10.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 5,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-11.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 6,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-12.webp",
          alt: "vine crop gutter planting ",
        },
        {
          id: 7,
          imageSrc:
            "Cultivation-Substrate-growing-system/vine-crop-gutter-planting-13.webp",
          alt: "vine crop gutter planting ",
        },
      ],
    },
    {
      id: 3,
      nameEN: "Vertical A-Frame System",
      nameAR: "نظام الإطار العمودي على شكل حرف A",
      descriptionEN:
        "An innovative vertical cultivation system with an A-frame design. Perfect for maximizing space in greenhouses, it supports multiple layers of crops while ensuring efficient nutrient delivery.",
      descriptionAR:
        "نظام زراعة عمودي مبتكر بتصميم على شكل إطار حرف A. مثالي لتعظيم المساحة في البيوت المحمية، يدعم عدة طبقات من المحاصيل مع ضمان توصيل فعال للعناصر الغذائية.",
      subImages: [
        {
          id: 1,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-8.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 2,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-9.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 3,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-10.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 4,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-11.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 5,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-12.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 6,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-13.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 7,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-14.webp",
          alt: "Vertical A-frame ",
        },
        {
          id: 8,
          imageSrc: "Cultivation-Vertical-A-frame/Vertical-A-frame-15.webp",
          alt: "Vertical A-frame ",
        },
      ],
    },
  ];

  getCultivationProductProducts() {
    return this.cultivationProduct;
  }
}

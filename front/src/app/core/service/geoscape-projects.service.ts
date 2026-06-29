import { Injectable } from "@angular/core";
import { Project } from "../types/project.type";

@Injectable({
  providedIn: "root",
})
export class GeoscapeProjectsService {
  neomProjects: Project[] = [
    {
      id: 1,
      nameEN: "NEOM Residential Community 1 (NRC 1)",
      nameAR: "مجتمع نيوم السكني 1 (NRC 1)",
      scopeOfWorkAR: "المناظر الطبيعية، المناظر الصلبة، ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "يشمل هذا المشروع تنسيق الحدائق والري الشامل لمجتمع سكني. يشمل تصميم وتنفيذ عناصر تنسيق الحدائق مثل العشب والأشجار والشجيرات، بالإضافة إلى ميزات التجميل الصلبة مثل الممرات والفناءات والهياكل الأخرى. يضمن نظام الري إدارة مستدامة للمياه.",
      image: "neom-projects/NRC1/nrc-1.webp",
      alt: "NEOM Residential Community 1 (NRC 1) image",
      scopeOfWorkEN: " Softscape, Hardscape, and Irrigation system",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project involves the comprehensive landscaping and irrigation of a residential" +
        " community. It includes designing and implementing softscaping elements like grass, trees," +
        " and shrubs, as well as hardscaping features such as pathways, patios, and other structures." +
        " The irrigation system ensures sustainable water management.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/NRC1/nrc-1.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 2,
          image: "neom-projects/NRC1/nrc-2.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 3,
          image: "neom-projects/NRC1/nrc-3.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 4,
          image: "neom-projects/NRC1/nrc-4.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 5,
          image: "neom-projects/NRC1/nrc-5.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 6,
          image: "neom-projects/NRC1/nrc-6.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 7,
          image: "neom-projects/NRC1/nrc-7.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
        {
          id: 8,
          image: "neom-projects/NRC1/nrc-8.webp",
          alt: "NEOM Residential Community 1 (NRC 1) image",
        },
      ],
    },
    {
      id: 2,
      nameEN: "NEOM Residential Community 2 (NRC 2)",
      nameAR: "مجتمع نيوم السكني 2 (NRC 2)",
      scopeOfWorkAR: "المناظر الطبيعية، المناظر الصلبة، ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "على غرار مشروع NRC 1، يركز هذا المشروع على تحسين المناظر الطبيعية والبنية التحتية للري في مجتمع سكني آخر. فريقنا يقوم بإنشاء مساحات خارجية جميلة وظيفياً وجمالياً تساهم في الرفاهية العامة للسكان.",
      image: "neom-projects/NRC2/nrc-5.webp",
      alt: "NEOM Residential Community 2 (NRC 2) image",
      scopeOfWorkEN: " Softscape, Hardscape, and Irrigation system",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "Similar to NRC 1, this project focuses on enhancing the landscape and irrigation" +
        " infrastructure of another residential community. Our team is creating aesthetically" +
        " pleasing and functional outdoor spaces that contribute to the overall well-being of the residents.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/NRC2/nrc-1.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 2,
          image: "neom-projects/NRC2/nrc-2.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 3,
          image: "neom-projects/NRC2/nrc-3.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 4,
          image: "neom-projects/NRC2/nrc-4.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 5,
          image: "neom-projects/NRC2/nrc-5.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 6,
          image: "neom-projects/NRC2/nrc-6.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 7,
          image: "neom-projects/NRC2/nrc-7.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 8,
          image: "neom-projects/NRC2/nrc-8.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
        {
          id: 9,
          image: "neom-projects/NRC2/nrc-9.webp",
          alt: "NEOM Residential Community 2 (NRC 2) image",
        },
      ],
    },
    {
      id: 3,
      nameEN: "Infrastructure Package for Staff Accommodation (4200000151/001)",
      nameAR: "حزمة البنية التحتية لسكن الموظفين (4200000151/001)",
      scopeOfWorkAR: "المناظر الطبيعية، المناظر الصلبة، ونظام الري",
      mainContractorAR: "PCC",
      consultantAR: "AECOM",
      statusAR: "مكتمل",
      descriptionAR:
        "يهدف هذا المشروع إلى تحسين ظروف المعيشة للموظفين من خلال حلول متقدمة في تنسيق الحدائق والري. يشمل إنشاء مساحات خضراء ومناطق ترفيهية وأنظمة ري فعالة لدعم بيئة معيشية مريحة.",
      image:
        "neom-projects/infrastructure-package/infrastructure-package-8.webp",
      alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
      scopeOfWorkEN: " Softscape, Hardscape, and Irrigation system",
      mainContractorEN: "PCC",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project is aimed at improving the living conditions for staff through advanced " +
        "landscaping and irrigation solutions. It includes the creation of green spaces, " +
        "recreational areas, and efficient irrigation systems to support a comfortable living environment",
      subImages: [
        {
          id: 1,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-1.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 2,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-2.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 3,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-3.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 4,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-4.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 5,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-5.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 6,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-6.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 7,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-7.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
        {
          id: 8,
          image:
            "neom-projects/infrastructure-package/infrastructure-package-8.webp",
          alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
        },
      ],
    },
    {
      id: 4,
      nameEN: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49)",
      nameAR:
        "منطقة أوكساغون إلى حزمة الطرق للأعمال المبكرة في الصحراء الحمراء 1 (WO#49)",
      scopeOfWorkAR: "زراعة الأشجار",
      mainContractorAR: "سبك",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "شمل هذا المشروع زراعة الأشجار المحلية كجزء من الأعمال الأولية لإنشاء الطرق. كان الهدف هو الحفاظ على النباتات المحلية مع تسهيل تطوير البنية التحتية الجديدة.",
      image: "neom-projects/wo49/wo49-7.webp",
      alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "SAPAC",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project involved the transplanting of native trees as part of the early works for " +
        "road construction. The aim was to preserve the local flora while facilitating the development" +
        " of new infrastructure.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/wo49/wo49-1.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 1",
        },
        {
          id: 2,
          image: "neom-projects/wo49/wo49-2.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 2",
        },
        {
          id: 3,
          image: "neom-projects/wo49/wo49-3.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 3",
        },
        {
          id: 4,
          image: "neom-projects/wo49/wo49-4.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 4",
        },
        {
          id: 5,
          image: "neom-projects/wo49/wo49-5.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 5",
        },
        {
          id: 6,
          image: "neom-projects/wo49/wo49-6.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 6",
        },
        {
          id: 7,
          image: "neom-projects/wo49/wo49-7.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 7",
        },
        {
          id: 8,
          image: "neom-projects/wo49/wo49-8.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 8",
        },
        {
          id: 9,
          image: "neom-projects/wo49/wo49-9.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 9",
        },
        {
          id: 10,
          image: "neom-projects/wo49/wo49-10.webp",
          alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image 10",
        },
      ],
    },
    {
      id: 5,
      nameEN:
        "Oxagon to Red Desert Early Works Construction of Access Roads Package 2 (WO#50)",
      nameAR:
        "أوكساغون إلى الصحراء الحمراء الأعمال المبكرة لبناء طرق الوصول الحزمة 2 (WO#50)",
      scopeOfWorkAR: "زراعة الأشجار",
      mainContractorAR: "سبك",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "بعد نجاح الحزمة الأولى، واصل هذا المشروع الجهود لزرع الأشجار المحلية أثناء بناء طرق الوصول. كان التركيز على تقليل الأثر البيئي مع تمكين تطوير البنية التحتية الأساسية.",
      image: "neom-projects/wo50/wo50-8.webp",
      alt: "(WO#50) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "SAPAC",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        " Following the success of Package 1, this project continued the effort to transplant" +
        " native trees during the construction of access roads. The focus was on minimizing environmental " +
        "impact while enabling essential infrastructure development.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/wo50/wo50-1.webp",
          alt: "(WO#50) image 1",
        },
        {
          id: 2,
          image: "neom-projects/wo50/wo50-2.webp",
          alt: "(WO#50) image 2",
        },
        {
          id: 3,
          image: "neom-projects/wo50/wo50-3.webp",
          alt: "(WO#50) image 3",
        },
        {
          id: 4,
          image: "neom-projects/wo50/wo50-4.webp",
          alt: "(WO#50) image 4",
        },
        {
          id: 5,
          image: "neom-projects/wo50/wo50-5.webp",
          alt: "(WO#50) image 5",
        },
        {
          id: 6,
          image: "neom-projects/wo50/wo50-6.webp",
          alt: "(WO#50) image 6",
        },
        {
          id: 7,
          image: "neom-projects/wo50/wo50-7.webp",
          alt: "(WO#50) image 7",
        },
        {
          id: 8,
          image: "neom-projects/wo50/wo50-8.webp",
          alt: "(WO#50) image 8",
        },
        {
          id: 9,
          image: "neom-projects/wo50/wo50-9.webp",
          alt: "(WO#50) image 9",
        },
        {
          id: 10,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 10",
        },
        {
          id: 11,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 11",
        },
        {
          id: 12,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 12",
        },
        {
          id: 13,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 13",
        },
        {
          id: 14,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 14",
        },
        {
          id: 15,
          image: "neom-projects/wo50/wo50-10.webp",
          alt: "(WO#50) image 15",
        },
      ],
    },
    {
      id: 6,
      nameEN: "Advanced Enabling Works (Phase 1) (WO#53)",
      nameAR: "الأعمال التمكينية المتقدمة (المرحلة 1) (WO#53)",
      scopeOfWorkAR: "زراعة الأشجار",
      mainContractorAR: "AECOM",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "تضمن هذا المشروع أعمال تمكين متقدمة تتطلب الزراعة الدقيقة للأشجار المحلية. تأكد فريقنا من نقل الأشجار وإعادة زراعتها" +
        " بطريقة تحافظ على صحتها وتدعم الأهداف البيئية العامة للمشروع.",
      image: "neom-projects/wo53/wo53-1.webp",
      alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "AECOM",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",

      descriptionEN:
        "This project involved advanced enabling works that required the careful " +
        "transplantation of native trees. Our team ensured that the trees were moved and replanted " +
        "in a manner that preserved their health and supported the overall environmental goals of the project.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/wo53/wo53-1.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
        {
          id: 2,
          image: "neom-projects/wo53/wo53-2.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
        {
          id: 3,
          image: "neom-projects/wo53/wo53-3.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
        {
          id: 4,
          image: "neom-projects/wo53/wo53-4.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
        {
          id: 5,
          image: "neom-projects/wo53/wo53-5.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
        {
          id: 6,
          image: "neom-projects/wo53/wo53-6.webp",
          alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
        },
      ],
    },

    {
      id: 7,
      nameEN:
        "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147)",
      nameAR: "جزيرة سندالة – ممشى المارينا وشبكة المرافق (000001020/147)",
      scopeOfWorkAR: "  المناظر الطبيعية ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "AECOM",
      statusAR: "مكتمل",
      descriptionAR:
        "هذا المشروع يركز على تطوير ممشى المارينا. يشمل ذلك تنسيقًا واسع النطاق للحدائق وتركيب نظام ري متقدم لضمان الحفاظ على المناظر الطبيعية الخضراء المورقة.",
      image: "neom-projects/sindalah-island/sindalah-island-1.webp",
      alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
      scopeOfWorkEN: "Softscape and Irrigation system",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project is focused on developing the marina promenade. It includes " +
        "extensive softscaping and the installation of an advanced irrigation system to ensure the maintenance of lush, green landscapes.",
      subImages: [
        {
          id: 1,
          image: "neom-projects/sindalah-island/sindalah-island-1.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 2,
          image: "neom-projects/sindalah-island/sindalah-island-2.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 3,
          image: "neom-projects/sindalah-island/sindalah-island-3.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 4,
          image: "neom-projects/sindalah-island/sindalah-island-4.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 5,
          image: "neom-projects/sindalah-island/sindalah-island-5.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 6,
          image: "neom-projects/sindalah-island/sindalah-island-6.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 7,
          image: "neom-projects/sindalah-island/sindalah-island-7.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
        {
          id: 8,
          image: "neom-projects/sindalah-island/sindalah-island-8.webp",
          alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
        },
      ],
    },

    {
      id: 8,
      nameEN: "Sindalah Island – Cluster 1",
      nameAR: "جزيرة سندالة – المجموعة 1",
      scopeOfWorkAR: "توريد النباتات",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "AECOM",
      statusAR: "مكتمل",
      descriptionAR:
        "تتولى شركة چيوسكيب مسؤولية توفير مجموعة متنوعة من النباتات للمجموعة الأولى في جزيرة سندال. ويهدف هذا المشروع إلى تعزيز الجمال الطبيعي للجزيرة ودعم التنوع البيولوجي من خلال إدخال أنواع مختلفة من النباتات",

      image:
        "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-1.webp",
      alt: "Sindalah Island – Cluster 1 image",
      scopeOfWorkEN: "Supply of Plants",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "Geoscape is responsible for supplying a diverse range of plants for Cluster 1 on Sindalah" +
        " Island. This project aims to enhance the island's natural beauty and support biodiversity through" +
        " the introduction of various plant species",
      subImages: [
        {
          id: 1,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-1.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 2,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-2.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 3,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-3.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 4,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-4.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 5,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-5.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 6,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-6.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 7,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-7.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 8,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-8.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 9,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-9.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 10,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-10.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 11,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-11.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
        {
          id: 12,
          image:
            "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-12.webp",
          alt: "Sindalah Island – Cluster 1 image",
        },
      ],
    },

    {
      id: 9,
      nameEN: "NEOM Company – The LINE (WO 4200000127-02)",
      nameAR: "شركة نيوم – الخط (WO 4200000127-02)",
      image: "neom-projects/wo42/wo42-8.webp",
      alt: "NEOM Company – The LINE (WO 4200000127-02) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      scopeOfWorkAR: "زراعة الأشجار",
      mainContractorEN: "FMSCO",
      mainContractorAR: "FMSCO",
      consultantEN: "Bechtel",
      consultantAR: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      statusAR: "مكتمل",
      descriptionEN:
        "As part of the ambitious NEOM project, The LINE required the transplantation" +
        " of native trees to preserve the natural landscape. Geoscape successfully" +
        " completed this task, ensuring that the environmental integrity of the area was maintained.",
      descriptionAR:
        "كجزء من مشروع نيوم الطموح، تطلب مشروع ذا لاين زراعة الأشجار المحلية للحفاظ على المنظر الطبيعي. نجحت چيوسكيب في إتمام" +
        " هذه المهمة، مما ضمن الحفاظ على النزاهة البيئية للمنطقة.",

      subImages: [
        {
          id: 1,
          image: "neom-projects/wo42/wo42-1.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 2,
          image: "neom-projects/wo42/wo42-2.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 3,
          image: "neom-projects/wo42/wo42-3.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 4,
          image: "neom-projects/wo42/wo42-4.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 5,
          image: "neom-projects/wo42/wo42-5.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 6,
          image: "neom-projects/wo42/wo42-6.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 7,
          image: "neom-projects/wo42/wo42-7.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
        {
          id: 8,
          image: "neom-projects/wo42/wo42-8.webp",
          alt: "NEOM Company – The LINE (WO 4200000127-02) image",
        },
      ],
    },
  ];

  riyadhProjects: Project[] = [
    {
      id: 10,
      nameEN:
        "Infrastructure and Public Buildings on Prince Mohammad Bin Salman Road – Phase 1 Section 2 " +
        "(Package 2B) of the Sports Boulevard Project in Riyadh City (Cycle Bridge)",
      nameAR:
        "البنية التحتية والمباني العامة على طريق الأمير محمد بن سلمان – المرحلة الأولى القسم الثاني (الحزمة 2B) من مشروع بوليفارد الرياض (جسر الدراجات الهوائية)",
      image: "riyadh-projects/cycle-bridge/cycle-bridge-1.webp",
      scopeOfWorkEN: " Softscape and Irrigation system",
      scopeOfWorkAR: "  المناظر الطبيعية ونظام الري",
      mainContractorEN: "Freyssinet",
      mainContractorAR: "فريسينه",
      consultantEN: "IDOM",
      consultantAR: "IDOM",
      progress: "100",
      statusEN: "Completed",
      statusAR: "مكتمل",
      descriptionEN:
        "This project involves the comprehensive landscaping and irrigation of a residential" +
        " community. It includes designing and implementing softscaping elements like grass, trees," +
        " and shrubs, as well as hardscaping features such as pathways, patios, and other structures." +
        " The irrigation system ensures sustainable water management.",
      descriptionAR:
        "يتضمن هذا المشروع تنسيق الحدائق الشامل والري لمجتمع سكني. يشمل تصميم وتنفيذ عناصر تنسيق الحدائق الناعمة مثل العشب والأشجار والشجيرات، بالإضافة إلى ميزات تنسيق الحدائق الصلبة مثل الممرات والفناءات والهياكل الأخرى. يضمن نظام الري إدارة مستدامة للمياه.",

      subImages: [
        { id: 1, image: "riyadh-projects/cycle-bridge/cycle-bridge-1.webp" },
        { id: 2, image: "riyadh-projects/cycle-bridge/cycle-bridge-2.webp" },
        { id: 3, image: "riyadh-projects/cycle-bridge/cycle-bridge-3.webp" },
        { id: 4, image: "riyadh-projects/cycle-bridge/cycle-bridge-4.webp" },
        { id: 5, image: "riyadh-projects/cycle-bridge/cycle-bridge-5.webp" },
        { id: 6, image: "riyadh-projects/cycle-bridge/cycle-bridge-6.webp" },
        { id: 7, image: "riyadh-projects/cycle-bridge/cycle-bridge-7.webp" },
        { id: 8, image: "riyadh-projects/cycle-bridge/cycle-bridge-8.webp" },
      ],
    },
    {
      id: 11,
      nameEN:
        "Roads, Infrastructure and Public Buildings on Zones 3, 4 & 5 of the Arts District (F3) -" +
        " Works executed in Wadi Hanifah areas as part of POD18 of the Sports Boulevard Project in " +
        "Riyadh City",
      nameAR:
        "الطرق والبنية التحتية والمباني العامة في المناطق الثالثه والرابعه والخامسه من منطقة الفنون (F3) - الأعمال المنفذة في مناطق" +
        " وادي" +
        " حنيفة" +
        " كجزء من POD18 من مشروع بوليفارد الرياض في مدينة الرياض",
      image: "riyadh-projects/wadi-hanifa/wadi-hanifa-7.webp",
      scopeOfWorkEN: " Softscape and Irrigation system",
      scopeOfWorkAR: "  المناظر الطبيعية ونظام الري",
      mainContractorEN: "Freyssinet",
      mainContractorAR: "فريسينه",
      consultantEN: "IDOM",
      consultantAR: "IDOM",
      progress: "100",
      statusEN: "Completed",
      statusAR: "مكتمل",
      descriptionEN:
        " This project focuses on enhancing the landscape in the Arts District of Riyadh, specifically within the Wadi Hanifah" +
        " areas. Our work includes the softscaping of green areas and the implementation of efficient irrigation systems to support the" +
        " city's environmental and aesthetic goals",
      descriptionAR:
        "يركز هذا المشروع على تحسين المناظر الطبيعية في منطقة الفنون بالرياض، وبالتحديد في مناطق وادي حنيفة. يشمل عملنا تنسيق المساحات الخضراء وتنفيذ أنظمة ري فعالة لدعم الأهداف البيئية والجمالية للمدينة.",

      subImages: [
        { id: 1, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-1.webp" },
        { id: 2, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-2.webp" },
        { id: 3, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-3.webp" },
        { id: 4, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-4.webp" },
        { id: 5, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-5.webp" },
        { id: 6, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-6.webp" },
        { id: 7, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-7.webp" },
        { id: 8, image: "riyadh-projects/wadi-hanifa/wadi-hanifa-8.webp" },
      ],
    },
    {
      id: 12,
      nameEN: "Ministry of Finance",
      nameAR: "وزارة المالية",
      image: "riyadh-projects/ministry-of-finance/ministry-of-finance-1.webp",
      scopeOfWorkEN: "Softscape and Irrigation system",
      scopeOfWorkAR: "  المناظر الطبيعية ونظام الري",
      mainContractorEN: "Ministry of Finance",
      mainContractorAR: "وزارة المالية",
      consultantEN: "Ministry of Finance",
      consultantAR: "وزارة المالية",
      progress: "35",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN:
        "Geoscape is tasked with the landscaping and irrigation work for the " +
        "Ministry of Finance's premises. This project aims to create a serene " +
        "and well-maintained environment that reflects the prestige of the ministry" +
        " while ensuring sustainable water usage through advanced irrigation techniques.",
      descriptionAR:
        "تم تكليف چيوسكيب بأعمال تنسيق الحدائق والري لمقر وزارة المالية. يهدف هذا المشروع إلى خلق بيئة هادئة ومُحافظة تعكس" +
        " هيبة الوزارة مع ضمان استخدام مستدام للمياه من خلال تقنيات الري المتقدمة.",

      subImages: [
        {
          id: 1,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-1.webp",
        },
        {
          id: 2,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-2.webp",
        },
        {
          id: 3,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-3.webp",
        },
        {
          id: 4,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-4.webp",
        },
        {
          id: 5,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-5.webp",
        },
        {
          id: 6,
          image:
            "riyadh-projects/ministry-of-finance/ministry-of-finance-6.webp",
        },
      ],
    },
    {
      id: 13,
      nameEN:
        "Comprehensive Corridor Plan for Prince Meshal Bin Abdulaziz Road - Al Taif Road",
      nameAR: "مخطط الممر الشامل لطريق الأمير مشعل بن عبدالعزيز - طريق الطائف",
      image: "riyadh-projects/prince-meshal-road/prince-meshal-road-1.webp",
      scopeOfWorkEN: "Softscape, Hardscape and Irrigation System",
      scopeOfWorkAR: "أعمال الزراعة، الأعمال الصلبة، ونظام الري",
      mainContractorEN: "SAPAC",
      mainContractorAR: "سبك",
      consultantEN: "WSP",
      consultantAR: "دبليو إس بي",
      progress: "75",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        {
          id: 1,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-1.webp",
        },
        {
          id: 2,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-2.webp",
        },
        {
          id: 3,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-3.webp",
        },
        {
          id: 4,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-4.webp",
        },
        {
          id: 5,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-5.webp",
        },
        {
          id: 6,
          image: "riyadh-projects/prince-meshal-road/prince-meshal-road-6.webp",
        },
      ],
    },

    {
      id: 14,
      nameEN: "[KSP - Phase II - CP-10] King Salman Park",
      nameAR: "مشروع حديقة الملك سلمان - المرحلة الثانية CP-10",
      image:
        "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-1.webp",
      scopeOfWorkEN: "Softscape and Irrigation System",
      scopeOfWorkAR: "أعمال الزراعة ونظام الري",
      mainContractorEN: "Freyssinet",
      mainContractorAR: "فريسينه",
      consultantEN: "Parsons",
      consultantAR: "Parsons",
      progress: "30",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        {
          id: 1,
          image:
            "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-1.webp",
        },
        {
          id: 2,
          image:
            "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-2.webp",
        },
        {
          id: 3,
          image:
            "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-3.webp",
        },
        {
          id: 4,
          image:
            "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-4.webp",
        },
        {
          id: 5,
          image:
            "riyadh-projects/king-salman-park-cp10/king-salman-park-cp10-5.webp",
        },
      ],
    },

    {
      id: 15,
      nameEN: "06002 - Justice Palace Project - Khazan Street (Imam Faisal)",
      nameAR: "مشروع قصر العدل 06002 - شارع الخزان (الإمام فيصل)",
      image: "riyadh-projects/justice-palace/justice-palace-1.webp",
      scopeOfWorkEN: "Softscape and Irrigation System",
      scopeOfWorkAR: "أعمال الزراعة ونظام الري",
      mainContractorEN: "Freyssinet",
      mainContractorAR: "فريسينيه",
      consultantEN: "Parsons",
      consultantAR: "Parsons",
      progress: "75",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        {
          id: 1,
          image: "riyadh-projects/justice-palace/justice-palace-1.webp",
        },
        {
          id: 1,
          image: "riyadh-projects/justice-palace/justice-palace-1.webp",
        },
      ],
    },

    {
      id: 16,
      nameEN: "King Abdullah Petroleum Studies and Research Center",
      nameAR: "مركز الملك عبدالله للدراسات والبحوث البترولية",
      image: "riyadh-projects/kapsarc/kapsarc-1.webp",
      scopeOfWorkEN: "Softscape, Hardscape and Secondary Irrigation Works",
      scopeOfWorkAR: "أعمال الزراعة، الأعمال الصلبة وأعمال الري الثانوية",
      mainContractorEN: "Nesma & Partners",
      mainContractorAR: "نسما وشركاؤهم",
      consultantEN: "DAR",
      consultantAR: "دار الهندسة",
      progress: "40",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        { id: 1, image: "riyadh-projects/kapsarc/kapsarc-1.webp" },
        { id: 2, image: "riyadh-projects/kapsarc/kapsarc-2.webp" },
        { id: 3, image: "riyadh-projects/kapsarc/kapsarc-3.webp" },
        { id: 4, image: "riyadh-projects/kapsarc/kapsarc-4.webp" },
        { id: 5, image: "riyadh-projects/kapsarc/kapsarc-5.webp" },
        { id: 6, image: "riyadh-projects/kapsarc/kapsarc-6.webp" },
        { id: 7, image: "riyadh-projects/kapsarc/kapsarc-7.webp" },
        { id: 8, image: "riyadh-projects/kapsarc/kapsarc-8.webp" },
        { id: 9, image: "riyadh-projects/kapsarc/kapsarc-9.webp" },
        { id: 10, image: "riyadh-projects/kapsarc/kapsarc-10.webp" },
      ],
    },

    {
      id: 17,
      nameEN: "CP04 – Royal Arts Complex (RAC)",
      nameAR: "مجمع الفنون الملكي (RAC) - CP04",
      image: "riyadh-projects/royal-arts-complex/royal-arts-complex-1.webp",
      scopeOfWorkEN: "Hardscape",
      scopeOfWorkAR: "الأعمال الصلبة",
      mainContractorEN: "Modern Building Leaders (MBL)",
      mainContractorAR: "رواد البناء الحديث",
      consultantEN: "WSP",
      consultantAR: "WSP",
      progress: "65",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        {
          id: 1,
          image: "riyadh-projects/royal-arts-complex/royal-arts-complex-1.webp",
        },
        {
          id: 1,
          image: "riyadh-projects/royal-arts-complex/royal-arts-complex-1.webp",
        },
      ],
    },

    {
      id: 18,
      nameEN: "Qurain Cultural District (QCD) Project",
      nameAR: "مشروع حي القرين الثقافي",
      image:
        "riyadh-projects/qurain-cultural-district/qurain-cultural-district-1.webp",
      scopeOfWorkEN: "Irrigation System",
      scopeOfWorkAR: "نظام الري",
      mainContractorEN: "Nesma & Partners",
      mainContractorAR: "نسما وشركاؤهم",
      consultantEN: "mirage",
      consultantAR: "mirage",
      progress: "5",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN: "",
      descriptionAR: "",
      subImages: [
        {
          id: 1,
          image:
            "riyadh-projects/qurain-cultural-district/qurain-cultural-district-1.webp",
        },
        {
          id: 2,
          image:
            "riyadh-projects/qurain-cultural-district/qurain-cultural-district-1.webp",
        },
      ],
    },
  ];
  allGeoscapeProjects: any;

  getNeomProjects() {
    return this.neomProjects;
  }

  getRiyadhProjects() {
    return this.riyadhProjects;
  }

  getAllProjects() {
    this.allGeoscapeProjects = [...this.neomProjects, ...this.riyadhProjects];
    return this.allGeoscapeProjects;
  }

  getProjectsById(id: number) {
    this.allGeoscapeProjects = [...this.neomProjects, ...this.riyadhProjects];
    return this.allGeoscapeProjects.find((project: any) => project.id === id);
  }
}

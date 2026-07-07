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
      scopeOfWorkAR: "تنسيق الحدائق، الأعمال الصلبة، ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "يشمل هذا المشروع تنسيق الحدائق الشامل ونظام الري لمجتمع سكني متكامل. نقدم تصميمًا وتنفيذًا احترافيًا لعناصر تنسيق الحدائق الناعمة مثل العشب والأشجار والشجيرات، بالإضافة إلى الأعمال الصلبة التي تشمل الممرات والفناءات والهياكل المعمارية. يضمن نظام الري المتقدم إدارة مستدامة وفعالة للمياه.",
      image: "neom-projects/NRC1/nrc-1.webp",
      alt: "NEOM Residential Community 1 (NRC 1) image",
      scopeOfWorkEN: "Softscape, Hardscape, and Irrigation System",
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
      scopeOfWorkAR: "تنسيق الحدائق، الأعمال الصلبة، ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "بالتوازي مع مشروع NRC 1، يركز هذا المشروع على تطوير المناظر الطبيعية والبنية التحتية للري في مجتمع سكني آخر. يقوم فريقنا بإنشاء مساحات خارجية تجمع بين الجمالية والوظيفية، مما يساهم في تعزيز جودة الحياة والرفاهية العامة للسكان.",
      image: "neom-projects/NRC2/nrc-5.webp",
      alt: "NEOM Residential Community 2 (NRC 2) image",
      scopeOfWorkEN: "Softscape, Hardscape, and Irrigation System",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "Building on the success of NRC 1, this project focuses on enhancing the landscape and irrigation " +
        "infrastructure of another residential community. Our team creates outdoor spaces that blend aesthetics " +
        "with functionality, contributing to the overall quality of life and well-being of residents.",
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
      scopeOfWorkAR: "تنسيق الحدائق، الأعمال الصلبة، ونظام الري",
      mainContractorAR: "PCC",
      consultantAR: "AECOM",
      statusAR: "مكتمل",
      descriptionAR:
        "يهدف هذا المشروع إلى تحسين بيئة المعيشة للموظفين من خلال حلول متقدمة في تنسيق الحدائق والري. يشمل العمل إنشاء مساحات خضراء واسعة ومناطق ترفيهية متكاملة، بالإضافة إلى أنظمة ري فعالة لدعم بيئة معيشية مريحة ومستدامة.",
      image:
        "neom-projects/infrastructure-package/infrastructure-package-8.webp",
      alt: "Infrastructure Package for Staff Accommodation (4200000151/001) image",
      scopeOfWorkEN: "Softscape, Hardscape, and Irrigation System",
      mainContractorEN: "PCC",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project aims to enhance the living environment for staff through advanced landscaping " +
        "and irrigation solutions. It includes creating extensive green spaces, integrated recreational areas, " +
        "and efficient irrigation systems to support a comfortable and sustainable living environment.",
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
      scopeOfWorkAR: "نقل وزراعة الأشجار المحلية",
      mainContractorAR: "سبك",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "شمل هذا المشروع نقل وزراعة الأشجار المحلية كجزء من الأعمال التمهيدية لإنشاء الطرق. كان الهدف الأساسي الحفاظ على الغطاء النباتي المحلي مع تسهيل تطوير البنية التحتية الجديدة بشكل مستدام.",
      image: "neom-projects/wo49/wo49-7.webp",
      alt: "Oxagon to Red Desert Early Works Roads Package 1 (WO#49) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "SAPAC",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project involved transplanting native trees as part of preliminary works for road construction. " +
        "The primary objective was to preserve local flora while facilitating sustainable development of new infrastructure.",
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
      scopeOfWorkAR: "نقل وزراعة الأشجار المحلية",
      mainContractorAR: "سبك",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "بناءً على نجاح الحزمة الأولى، واصل هذا المشروع جهود نقل وزراعة الأشجار المحلية أثناء بناء طرق الوصول. ركز العمل على تقليل التأثير البيئي مع تمكين تطوير البنية التحتية الأساسية بشكل متوازن.",
      image: "neom-projects/wo50/wo50-8.webp",
      alt: "(WO#50) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "SAPAC",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "Building on the success of Package 1, this project continued transplanting native trees during " +
        "access road construction. The focus was on minimizing environmental impact while enabling essential " +
        "infrastructure development in a balanced manner.",
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
      scopeOfWorkAR: "نقل وزراعة الأشجار المحلية",
      mainContractorAR: "AECOM",
      consultantAR: "Bechtel",
      statusAR: "مكتمل",
      descriptionAR:
        "تضمن هذا المشروع أعمال تمكين متقدمة تتطلب نقلًا دقيقًا للأشجار المحلية. تأكد فريقنا من نقل الأشجار وإعادة زراعتها" +
        " بطريقة تحافظ على صحتها وتدعم الأهداف البيئية الشاملة للمشروع.",
      image: "neom-projects/wo53/wo53-1.webp",
      alt: "Advanced Enabling Works (Phase 1) (WO#53) image",
      scopeOfWorkEN: "Native Tree Transplanting",
      mainContractorEN: "AECOM",
      consultantEN: "Bechtel",
      progress: "100",
      statusEN: "Completed",

      descriptionEN:
        "This project involved advanced enabling works requiring precise transplantation of native trees. " +
        "Our team ensured trees were moved and replanted in a manner that preserved their health and supported " +
        "the comprehensive environmental goals of the project.",
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
      scopeOfWorkAR: "تنسيق الحدائق ونظام الري",
      mainContractorAR: "نسما وشركاهم",
      consultantAR: "AECOM",
      statusAR: "مكتمل",
      descriptionAR:
        "يركز هذا المشروع على تطوير ممشى المارينا بشكل متكامل. يشمل العمل تنسيق حدائق واسع النطاق وتركيب نظام ري متقدم لضمان الحفاظ على المناظر الطبيعية الخضراء المورقة على مدار السنة.",
      image: "neom-projects/sindalah-island/sindalah-island-1.webp",
      alt: "Sindalah Island – Marina Promenade & Utility Backbone (000001020/147) image",
      scopeOfWorkEN: "Softscape and Irrigation System",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "This project focuses on comprehensive development of the marina promenade. It includes extensive " +
        "softscaping and installation of an advanced irrigation system to ensure maintenance of lush, green landscapes year-round.",
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
        "تتولى شركة جيوسكيب مسؤولية توفير مجموعة متنوعة من النباتات للمجموعة الأولى في جزيرة سندالة. يهدف هذا المشروع إلى تعزيز الجمال الطبيعي للجزيرة ودعم التنوع البيولوجي من خلال إدخال أنواع نباتية متنوعة.",

      image:
        "neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-1.webp",
      alt: "Sindalah Island – Cluster 1 image",
      scopeOfWorkEN: "Supply of Plants",
      mainContractorEN: "Nesma & Partners",
      consultantEN: "AECOM",
      progress: "100",
      statusEN: "Completed",
      descriptionEN:
        "Geoscape is responsible for supplying a diverse range of plants for Cluster 1 on Sindalah Island. " +
        "This project aims to enhance the island's natural beauty and support biodiversity through the introduction " +
        "of various plant species.",
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
      scopeOfWorkAR: "نقل وزراعة الأشجار المحلية",
      mainContractorEN: "FMSCO",
      mainContractorAR: "FMSCO",
      consultantEN: "Bechtel",
      consultantAR: "Bechtel",
      progress: "100",
      statusEN: "Completed",
      statusAR: "مكتمل",
      descriptionEN:
        "As part of the ambitious NEOM project, The LINE required transplantation of native trees to preserve " +
        "the natural landscape. Geoscape successfully completed this task, ensuring the environmental integrity " +
        "of the area was maintained.",
      descriptionAR:
        "كجزء من مشروع نيوم الطموح، تطلب مشروع ذا لاين نقل وزراعة الأشجار المحلية للحفاظ على المنظر الطبيعي. نجحت شركة جيوسكيب في إتمام" +
        " هذه المهمة بنجاح، مما ضمن الحفاظ على التوازن البيئي للمنطقة.",

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
      scopeOfWorkEN: "Softscape and Irrigation System",
      scopeOfWorkAR: "تنسيق الحدائق ونظام الري",
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
        "يتضمن هذا المشروع تنسيق الحدائق الشامل ونظام الري لجسر الدراجات الهوائية في بوليفارد الرياض. يشمل تصميم وتنفيذ عناصر تنسيق الحدائق الناعمة مثل العشب والأشجار والشجيرات، بالإضافة إلى الأعمال الصلبة مثل الممرات والهياكل المعمارية. يضمن نظام الري إدارة مستدامة للمياه.",

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
      scopeOfWorkEN: "Softscape and Irrigation System",
      scopeOfWorkAR: "تنسيق الحدائق ونظام الري",
      mainContractorEN: "Freyssinet",
      mainContractorAR: "فريسينه",
      consultantEN: "IDOM",
      consultantAR: "IDOM",
      progress: "100",
      statusEN: "Completed",
      statusAR: "مكتمل",
      descriptionEN:
        "This project focuses on enhancing the landscape in the Arts District of Riyadh, specifically within the Wadi Hanifah " +
        "areas. Our work includes softscaping green areas and implementing efficient irrigation systems to support the " +
        "city's environmental and aesthetic goals.",
      descriptionAR:
        "يركز هذا المشروع على تطوير المناظر الطبيعية في منطقة الفنون بالرياض، وتحديدًا في مناطق وادي حنيفة. يشمل عملنا تنسيق المساحات الخضراء وتنفيذ أنظمة ري فعالة لدعم الأهداف البيئية والجمالية للمدينة.",

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
      scopeOfWorkEN: "Softscape and Irrigation System",
      scopeOfWorkAR: "تنسيق الحدائق ونظام الري",
      mainContractorEN: "Ministry of Finance",
      mainContractorAR: "وزارة المالية",
      consultantEN: "Ministry of Finance",
      consultantAR: "وزارة المالية",
      progress: "35",
      statusEN: "Ongoing",
      statusAR: "مستمر",
      descriptionEN:
        "Geoscape is responsible for the landscaping and irrigation work at the Ministry of Finance premises. " +
        "This project aims to create a serene and well-maintained environment that reflects the ministry's prestige " +
        "while ensuring sustainable water usage through advanced irrigation techniques.",
      descriptionAR:
        "تتولى شركة جيوسكيب أعمال تنسيق الحدائق والري لمقر وزارة المالية. يهدف هذا المشروع إلى خلق بيئة هادئة ومحافظة تعكس" +
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
  allGeoscapeProjects: Project[] = [];

  getNeomProjects(): Project[] {
    return this.neomProjects;
  }

  getRiyadhProjects(): Project[] {
    return this.riyadhProjects;
  }

  getAllProjects(): Project[] {
    this.allGeoscapeProjects = [...this.neomProjects, ...this.riyadhProjects];
    return this.allGeoscapeProjects;
  }

  getProjectsById(id: number): Project | undefined {
    this.allGeoscapeProjects = [...this.neomProjects, ...this.riyadhProjects];
    return this.allGeoscapeProjects.find((project: Project) => project.id === id);
  }
}

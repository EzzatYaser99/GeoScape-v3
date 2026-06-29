import { Injectable } from "@angular/core";
import { GeoscapeService } from "../types/service.type";

@Injectable({
  providedIn: "root",
})
export class GeoscapeServicesService {
  geoscapeServices: GeoscapeService[] = [
    {
      id: 1,
      nameEN: "Landscape Design",
      nameAR: "تصميم المناظر الطبيعية",
      image: "Landscape-Design.webp",
      descriptionEN:
        "Expertly crafted 2D and 3D designs tailored to your vision, " +
        "combining aesthetics and functionality for stunning outdoor spaces.",
      descriptionAR:
        "تصاميم ثنائية وثلاثية الأبعاد مصممة باحتراف لتناسب رؤيتك، تجمع بين الجمالية والوظائف لخلق مساحات خارجية مذهلة.",
      subImages: [
        { id: 1, image: "design-landscape/design-landscape-4.webp" },
        { id: 2, image: "design-landscape/design-landscape-2.webp" },
        { id: 3, image: "design-landscape/design-landscape-3.webp" },
        { id: 4, image: "design-landscape/design-landscape-1.webp" },
        { id: 5, image: "design-landscape/design-landscape-5.webp" },
        { id: 6, image: "design-landscape/design-landscape-6.webp" },
      ],
      whatWeDoEN:
        "We create detailed 2D and 3D landscape designs tailored to your vision," +
        " ensuring a perfect blend of aesthetics and functionality. Our team collaborates" +
        " with you to bring your dream outdoor space to life. We incorporate innovative " +
        "design elements and the latest trends to maximize the beauty and usability of" +
        " your landscape. Our design process begins with a comprehensive consultation " +
        "to understand your preferences and requirements. We then develop a conceptual design," +
        " which we refine based on your feedback. Our final designs include detailed plans " +
        "for plantings, hardscape elements, lighting, and irrigation. We also provide 3D " +
        "visualizations to help you envision the finished project. Our goal is to create " +
        "a harmonious and inviting outdoor environment that reflects your style and enhances" +
        " your property’s value. We stay up-to-date with the latest landscaping technologies" +
        " and materials to ensure our designs are both beautiful and sustainable. " +
        "Whether you’re looking for a modern, minimalist garden or a lush, traditional " +
        "landscape, we have the expertise to make your vision a reality.",
      whatWeDoAR:
        "نحن نصمم تخطيطات مناظر طبيعية ثنائية وثلاثية الأبعاد مفصلة تتناسب مع رؤيتك، مع ضمان مزيج مثالي من الجماليات والوظائف. فريقنا يتعاون معك لتحقيق حلمك في تحويل المساحة الخارجية إلى واقع. نحن ندمج العناصر التصميمية المبتكرة وأحدث الاتجاهات لتعظيم جمال واستخدام مساحة المناظر الطبيعية الخاصة بك. تبدأ عملية التصميم لدينا باستشارة شاملة لفهم تفضيلاتك ومتطلباتك. ثم نقوم بتطوير تصميم مفاهيمي، والذي نقوم بتحسينه بناءً على ملاحظاتك. تصاميمنا النهائية تشمل خططًا مفصلة للزراعة، عناصر التجميل الصلبة، الإضاءة، والري. نحن نقدم أيضًا تصورات ثلاثية الأبعاد لمساعدتك في تصور المشروع النهائي. هدفنا هو إنشاء بيئة خارجية متناغمة وجذابة تعكس أسلوبك وتعزز قيمة ممتلكاتك. نحن نتابع أحدث تقنيات وتكنولوجيا تنسيق الحدائق والمواد لضمان أن تكون تصاميمنا جميلة ومستدامة. سواء كنت تبحث عن حديقة حديثة وبسيطة أو منظر طبيعي غني وتقليدي، لدينا الخبرة لتحقيق رؤيتك.",
    },
    {
      id: 2,
      nameEN: "SoftScape",
      nameAR: "المناظر الطبيعية الناعمة",
      image: "Soft-Landscape.webp",
      descriptionEN:
        "Transform your outdoor area with lush plants, trees, and shrubs, " +
        "creating sustainable and beautiful softscape solutions.",
      descriptionAR:
        "حوّل منطقتك الخارجية بالنباتات والأشجار والشجيرات الكثيفة، وابتكر حلول تنسيق حدائق مستدامة وجميلة.",

      subImages: [
        { id: 1, image: "soft-landscape/soft-landscape-1.webp" },
        { id: 2, image: "soft-landscape/soft-landscape-2.webp" },
        { id: 3, image: "soft-landscape/soft-landscape-3.webp" },
        { id: 4, image: "soft-landscape/soft-landscape-4.webp" },
        { id: 5, image: "soft-landscape/soft-landscape-5.webp" },
      ],
      whatWeDoEN:
        "We enhance your outdoor area with carefully selected plants, " +
        "trees, and shrubs. Our experts design sustainable softscape solutions" +
        " that not only beautify your space but also promote ecological balance." +
        " We focus on using native and drought-tolerant species to create a low-maintenance" +
        " and environmentally friendly landscape. Our softscape services include soil " +
        "preparation, plant selection, installation, and ongoing care. We ensure that each " +
        "plant is suited to its location and will thrive in your specific climate and" +
        " soil conditions. By incorporating a variety of plant species, we create diverse" +
        " and dynamic landscapes that change with the seasons. Our designs also consider" +
        " factors such as color, texture, and form to create visually appealing compositions." +
        " In addition to aesthetic considerations, we prioritize the health and" +
        " sustainability of your landscape. We use organic fertilizers and pest control" +
        " methods to maintain the health of your plants and minimize environmental impact. " +
        "Our softscape solutions are designed to provide long-term beauty and enjoyment" +
        " with minimal maintenance.",
      whatWeDoAR:
        "نحن نعمل على تحسين منطقتك الخارجية بالنباتات والأشجار والشجيرات المختارة بعناية. يصمم خبراؤنا حلولًا مستدامة للمناظر الطبيعية الناعمة التي لا تعمل فقط على تجميل مساحتك بل وتعزز أيضًا التوازن البيئي. نركز على استخدام الأنواع المحلية والمتحملة للجفاف لإنشاء منظر طبيعي منخفض الصيانة وصديق للبيئة. تشمل خدمات المناظر الطبيعية الناعمة لدينا تحضير التربة واختيار النباتات وتركيبها والعناية المستمرة. نحن نضمن أن كل نبات مناسب لموقعه وسيزدهر في مناخك وظروف التربة الخاصة بك. من خلال دمج مجموعة متنوعة من أنواع النباتات، ننشئ مناظر طبيعية متنوعة وديناميكية تتغير مع الفصول. تأخذ تصميماتنا أيضًا في الاعتبار عوامل مثل اللون والملمس والشكل لإنشاء تركيبات جذابة بصريًا. بالإضافة إلى الاعتبارات الجمالية، نعطي الأولوية لصحة واستدامة منظرك الطبيعي. نستخدم الأسمدة العضوية وطرق مكافحة الآفات للحفاظ على صحة نباتاتك وتقليل التأثير البيئي" +
        "تم تصميم حلول المناظر الطبيعية لدينا لتوفير الجمال والمتعة على المدى الطويل مع الحد الأدنى من الصيانة.",
    },
    {
      id: 3,
      nameEN: "Nursery",
      nameAR: "المشتل",
      image: "Nursery.webp",
      descriptionEN:
        " A wide selection of high-quality plants and garden products with expert " +
        "advice to help you choose the best options for your landscape.",
      descriptionAR:
        "مجموعة واسعة من النباتات ومنتجات الحدائق عالية الجودة مع نصائح الخبراء لمساعدتك في اختيار أفضل الخيارات لمناظر طبيعية لديك",

      subImages: [
        { id: 1, image: "nursery/nursery-landscape-1.webp" },
        { id: 2, image: "nursery/nursery-landscape-2.webp" },
        { id: 3, image: "nursery/nursery-landscape-3.webp" },
        { id: 4, image: "nursery/nursery-landscape-4.webp" },
        { id: 5, image: "nursery/nursery-landscape-5.webp" },
        { id: 6, image: "nursery/nursery-landscape-6.webp" },
      ],
      whatWeDoEN:
        "Our nursery provides a diverse selection of high-quality plants and garden" +
        " products. We offer expert guidance to help you select the best plants for your" +
        " specific landscape needs and conditions. Our nursery staff are knowledgeable " +
        "about plant care and can assist with any horticultural questions you may have. " +
        "We carry a wide range of plants, including annuals, perennials, shrubs, trees," +
        " and succulents. Our plants are sourced from reputable growers to ensure they " +
        "are healthy and well-established. In addition to plants, we offer a variety of" +
        " gardening supplies such as soil, mulch, fertilizers, and pots. We also provide" +
        " custom potting services to help you create beautiful container gardens. Whether" +
        " you’re looking for a specific plant or need advice on creating a garden from" +
        " scratch, our nursery team is here to help. We offer delivery and planting " +
        "services to make your gardening experience as convenient as possible. Visit " +
        "our nursery to explore our selection and get inspired for your next gardening" +
        " project",
      whatWeDoAR:
        "توفر مشتلنا مجموعة متنوعة من النباتات عالية الجودة ومنتجات الحدائق. نقدم إرشادات الخبراء لمساعدتك في اختيار أفضل النباتات لاحتياجات وظروف المناظر الطبيعية الخاصة بك. يتمتع موظفو مشتلنا بخبرة في رعاية النباتات ويمكنهم المساعدة في أي أسئلة بستانية قد تكون لديك.\n" +
        "لدينا مجموعة واسعة من النباتات، بما في ذلك النباتات السنوية والمعمرة والشجيرات والأشجار والنباتات العصارية. يتم الحصول على نباتاتنا من مزارعين ذوي سمعة طيبة لضمان أنها صحية وراسخة. بالإضافة إلى النباتات، نقدم مجموعة متنوعة من مستلزمات البستنة مثل التربة والغطاء العضوي والأسمدة والأواني. كما نقدم خدمات زراعة الأصص المخصصة لمساعدتك في إنشاء حدائق حاويات جميلة. سواء كنت تبحث عن نبات معين أو تحتاج إلى نصيحة حول إنشاء حديقة من الصفر، فإن فريق مشتلنا هنا للمساعدة. نحن نقدم خدمات التوصيل والزراعة لجعل تجربة البستنة الخاصة بك مريحة قدر الإمكان. قم بزيارة مشتلنا لاستكشاف مجموعتنا واستلهام أفكار لمشروع البستنة القادم الخاص بك،",
    },
    {
      id: 4,
      nameEN: "Irrigation",
      nameAR: "الري",

      image: "Irrigation.webp",
      descriptionEN:
        "Efficient systems designed to conserve water and ensure your landscape thrives," +
        " with customized installation and maintenance services.",
      descriptionAR:
        "أنظمة فعالة مصممة للحفاظ على المياه وضمان ازدهار المناظر الطبيعية الخاصة بك، مع خدمات التركيب والصيانة المخصصة.",

      subImages: [
        { id: 1, image: "irrigation/irrigation-landscape-1.webp" },
        { id: 2, image: "irrigation/irrigation-landscape-2.webp" },
        { id: 3, image: "irrigation/irrigation-landscape-3.webp" },
        { id: 4, image: "irrigation/irrigation-landscape-4.webp" },
        { id: 5, image: "irrigation/irrigation-landscape-5.webp" },
        { id: 6, image: "irrigation/irrigation-landscape-6.webp" },
      ],
      whatWeDoEN:
        "We design and install efficient irrigation systems that conserve water " +
        "while ensuring your plants receive the hydration they need. Our systems are" +
        " customized to fit your landscape’s unique requirements. We begin with a " +
        "thorough assessment of your property to determine the best irrigation solution." +
        " Our systems include drip irrigation, sprinklers, and smart controllers that" +
        " adjust watering schedules based on weather conditions. We use high-quality " +
        "components to ensure reliability and longevity. Our installation process is " +
        "meticulous, minimizing disruption to your existing landscape. Once installed," +
        " we provide training on how to use and maintain your system. Regular maintenance" +
        " is crucial to keep your irrigation system functioning optimally, and we offer " +
        "comprehensive maintenance services to address any issues that arise. By ensuring" +
        " your plants receive the right amount of water, our irrigation systems promote " +
        "healthy growth and reduce water waste. Whether you need a new system installed" +
        " or an existing one upgraded, our team has the expertise to deliver efficient " +
        "and effective irrigation solutions.",
      whatWeDoAR:
        "نقوم بتصميم وتركيب أنظمة ري فعّالة تحافظ على المياه\n" +
        "مع ضمان حصول نباتاتك على الترطيب الذي تحتاجه. أنظمتنا مصممة لتناسب متطلبات المناظر الطبيعية الفريدة الخاصة بك. نبدأ بتقييم شامل لممتلكاتك لتحديد أفضل حل للري.\n" +
        "تتضمن أنظمتنا الري بالتنقيط والرشاشات وأجهزة التحكم الذكية التي\n" +
        "تضبط جداول الري بناءً على الظروف الجوية. نستخدم مكونات عالية الجودة لضمان الموثوقية وطول العمر. عملية التثبيت لدينا دقيقة، مما يقلل من الاضطراب في المناظر الطبيعية الحالية لديك. بمجرد التثبيت،\n" +
        "نقدم تدريبًا حول كيفية استخدام نظامك وصيانته. الصيانة المنتظمة\n" +
        "أمر بالغ الأهمية للحفاظ على عمل نظام الري الخاص بك على النحو الأمثل، ونحن نقدم\n" +
        "خدمات صيانة شاملة لمعالجة أي مشكلات قد تنشأ. من خلال ضمان\n" +
        "حصول نباتاتك على الكمية المناسبة من المياه، تعمل أنظمة الري لدينا على تعزيز\n" +
        "النمو الصحي وتقليل هدر المياه. سواء كنت بحاجة إلى تثبيت نظام جديد\n" +
        "أو ترقية نظام موجود، فإن فريقنا لديه الخبرة لتقديم حلول ري فعّالة وكفؤة.",
    },
    {
      id: 5,
      nameEN: "Water Features",
      nameAR: "ميزات مائية",

      image: "Water-Features.webp",
      descriptionEN:
        "Elegant features like fountains and ponds that add tranquility " +
        "and sophistication to your outdoor space, creating captivating aquatic elements.",
      descriptionAR:
        "ميزات أنيقة مثل النوافير والبرك التي تضيف الهدوء والأناقة إلى مساحتك الخارجية، مما يخلق عناصر مائية ساحرة.",

      subImages: [
        { id: 1, image: "water-features/water-features-1.webp" },
        { id: 2, image: "water-features/water-features-2.webp" },
        { id: 3, image: "water-features/water-features-3.webp" },
        { id: 4, image: "water-features/water-features-4.webp" },
        { id: 5, image: "water-features/water-features-5.webp" },
        { id: 6, image: "water-features/water-features-6.webp" },
      ],
      whatWeDoEN:
        "We design and install elegant water features such as fountains, " +
        "ponds, and waterfalls. These features add a touch of tranquility and sophistication" +
        " to your outdoor space, creating a serene environment. Our design process begins " +
        "with a consultation to understand your vision and the characteristics of your space." +
        " We then create a custom design that complements your landscape and meets" +
        " your aesthetic preferences. Our water features are constructed using high-quality " +
        "materials and components to ensure durability and low maintenance. We incorporate" +
        " elements such as lighting and landscaping to enhance the overall effect and " +
        "create a cohesive look. Our team handles every aspect of the installation, " +
        "from excavation to plumbing to finishing touches. After installation, " +
        "we provide maintenance services to keep your water feature looking its best. " +
        "Regular cleaning and upkeep are essential to prevent algae buildup and ensure" +
        " the water remains clear and beautiful. Whether you want a simple bubbling" +
        " fountain or a complex multi-tiered waterfall, we have the skills and experience" +
        " to create the perfect water feature for your landscape.",
      whatWeDoAR:
        "نقوم بتنفيذ أنظمة مياه وصرف موثوقة لمنع تجمع المياه وإدارة الجريان السطحي. تضمن حلولنا تدفق المياه بشكل صحيح وصحة التربة، مما يحمي مناظرنا الطبيعية من التلف. نبدأ بتقييم شامل للموقع لتحديد المشكلات المحتملة في الصرف وتصميم حل فعال. تشمل أنظمتنا المصارف الفرنسية، والمصارف القنوية، والآبار الجافة، ومضخات الطرد، المصممة خصيصًا لتلبية الاحتياجات الخاصة لعقارك. التثبيت الصحيح أمر بالغ الأهمية لأداء أنظمة الصرف، وفريقنا يضمن وضع كل مكون بشكل صحيح وربطه. بالإضافة إلى التركيب، نقدم خدمات الصيانة للحفاظ على كفاءة نظام الصرف الصحي الخاص بك. الفحوصات والتنظيف المنتظمين ضروريان لمنع الانسدادات والمشاكل الأخرى. من خلال إدارة المياه بشكل فعال، تحمي حلول الصرف لدينا المناظر الطبيعية الخاصة بك من التآكل والأضرار الناتجة عن المياه. نحن نقدم أيضًا حلولًا لجمع مياه الأمطار، مما يتيح لك جمع وإعادة استخدام مياه الأمطار للري والأغراض الأخرى. هدفنا هو إنشاء منظر طبيعي مستدام وقادر على الصمود في وجه الأمطار الغزيرة والتحديات البيئية الأخرى.",
    },
    {
      id: 6,
      nameEN: "Water & Drainage Systems",
      nameAR: "أنظمة المياه والصرف الصحي",

      image: "Water-Systems.webp",
      descriptionEN:
        "Reliable systems to prevent waterlogging and manage runoff," +
        " ensuring proper water flow and soil health in your landscape.",
      descriptionAR:
        "أنظمة موثوقة لمنع تجمع المياه وإدارة الجريان السطحي، لضمان تدفق المياه السليم وصحة التربة في المناظر الطبيعية الخاصة بك.",

      subImages: [
        {
          id: 1,
          image: "water-drainage-systems/water-drainage-systems-1.webp",
        },
        {
          id: 2,
          image: "water-drainage-systems/water-drainage-systems-2.webp",
        },
        {
          id: 3,
          image: "water-drainage-systems/water-drainage-systems-3.webp",
        },
        {
          id: 4,
          image: "water-drainage-systems/water-drainage-systems-4.webp",
        },
        {
          id: 5,
          image: "water-drainage-systems/water-drainage-systems-5.webp",
        },
        {
          id: 6,
          image: "water-drainage-systems/water-drainage-systems-6.webp",
        },
      ],
      whatWeDoEN:
        "We implement reliable water and drainage systems to prevent waterlogging and manage runoff. " +
        "Our solutions ensure" +
        " proper water flow and soil health, protecting your landscape from damage." +
        " We start with a detailed site assessment to identify potential drainage issues " +
        "and design an effective solution. Our systems include French drains, channel drains," +
        " dry wells, and sump pumps, tailored to the specific needs of your property." +
        " Proper installation is critical to the performance of drainage systems," +
        " and our team ensures each component is correctly placed and connected." +
        " In addition to installation, we offer maintenance services to keep your " +
        "drainage system functioning efficiently. Regular inspections and cleaning are" +
        " essential to prevent clogs and other issues. By managing water effectively, " +
        "our drainage solutions protect your landscape from erosion and water damage. " +
        "We also offer solutions for rainwater harvesting, allowing you to capture and" +
        " reuse rainwater for irrigation and other purposes. Our goal is to create a " +
        "sustainable and resilient landscape that can withstand heavy rainfall and other " +
        "environmental challenges.",
      whatWeDoAR:
        "نقوم بتنفيذ أنظمة مياه وصرف موثوقة لمنع تجمع المياه وإدارة الجريان السطحي. تضمن حلولنا تدفق المياه بشكل صحيح وصحة التربة، مما يحمي مناظرنا الطبيعية من التلف. نبدأ بتقييم شامل للموقع لتحديد المشكلات المحتملة في الصرف وتصميم حل فعال. تشمل أنظمتنا المصارف الفرنسية، والمصارف القنوية، والآبار الجافة، ومضخات الطرد، المصممة خصيصًا لتلبية الاحتياجات الخاصة لعقارك. التثبيت الصحيح أمر بالغ الأهمية لأداء أنظمة الصرف، وفريقنا يضمن وضع كل مكون بشكل صحيح وربطه. بالإضافة إلى التركيب، نقدم خدمات الصيانة للحفاظ على كفاءة نظام الصرف الصحي الخاص بك. الفحوصات والتنظيف المنتظمين ضروريان لمنع الانسدادات والمشاكل الأخرى. من خلال إدارة المياه بشكل فعال، تحمي حلول الصرف لدينا المناظر الطبيعية الخاصة بك من التآكل والأضرار الناتجة عن المياه. نحن نقدم أيضًا حلولًا لجمع مياه الأمطار، مما يتيح لك جمع وإعادة استخدام مياه الأمطار للري والأغراض الأخرى. هدفنا هو إنشاء منظر طبيعي مستدام وقادر على الصمود في وجه الأمطار الغزيرة والتحديات البيئية الأخرى.",
    },
    {
      id: 7,
      nameEN: "HardScape",
      nameAR: "المناظر الصلبة",

      image: "Hard-Landscape.webp",
      descriptionEN:
        "Durable and stylish elements including patios, walkways, " +
        "and retaining walls that complement and enhance your landscape design.",
      descriptionAR:
        "عناصر متينة وأنيقة تشمل الفناءات والممرات والجدران الاستنادية التي تكمل وتعزز تصميم المناظر الطبيعية الخاصة بك.",

      subImages: [
        { id: 1, image: "hard-landscape/hard-landscape-1.webp" },
        { id: 2, image: "hard-landscape/hard-landscape-2.webp" },
        { id: 3, image: "hard-landscape/hard-landscape-3.webp" },
        { id: 4, image: "hard-landscape/hard-landscape-4.webp" },
        { id: 5, image: "hard-landscape/hard-landscape-5.webp" },
        { id: 6, image: "hard-landscape/hard-landscape-6.webp" },
      ],
      whatWeDoEN:
        "We construct durable and aesthetically pleasing hardscape elements like patios," +
        " walkways, and retaining walls. These features provide structure and functionality, " +
        "enhancing your overall landscape design. Our hardscape services begin with a design " +
        "consultation to understand your needs and preferences. We then create detailed plans " +
        "and select high-quality materials that complement your existing landscape. Our skilled " +
        "craftsmen handle every aspect of the construction process, ensuring precision and attention " +
        "to detail. We use durable materials such as stone, brick, and concrete to create hardscapes" +
        " that are built to last. In addition to construction, we offer repair and maintenance services" +
        " to keep your hardscape elements in top condition. Proper maintenance is essential to prevent" +
        " issues such as cracking and shifting. Our hardscape solutions are designed to enhance the " +
        "usability and beauty of your outdoor space, providing areas for relaxation, entertainment," +
        " and enjoyment. Whether you’re looking to add a new patio, walkway, or retaining wall, " +
        "our team has the expertise to deliver exceptional results.",
      whatWeDoAR:
        "نقوم بإنشاء عناصر صلبة دائمة وجميلة مثل الفناءات والممرات والجدران الاستنادية. توفر هذه العناصر الهيكلية والوظيفية، مما يعزز تصميم المناظر الطبيعية بشكل عام. تبدأ خدماتنا في الأعمال الصلبة باستشارة تصميم لفهم احتياجاتك وتفضيلاتك. ثم نقوم بإنشاء خطط مفصلة واختيار مواد عالية الجودة تكمل المنظر الطبيعي القائم لديك. يعتني حرفيونا المهرة بكل جانب من جوانب عملية البناء، مما يضمن الدقة والانتباه للتفاصيل. نستخدم موادًا متينة مثل الحجر والطوب والخرسانة لإنشاء هياكل صلبة مصممة لتدوم طويلاً. بالإضافة إلى البناء، نقدم خدمات الإصلاح والصيانة للحفاظ على عناصر الهاردسكيب الخاصة بك في أفضل حالة. الصيانة المناسبة ضرورية لمنع مشاكل مثل التشققات والانزلاقات. تم تصميم حلولنا للمناظر الصلبة لتعزيز قابلية الاستخدام وجمال مساحتك الخارجية، مما يوفر مناطق للاسترخاء والترفيه والاستمتاع. سواء كنت تبحث عن إضافة فناء جديد، ممر، أو جدار استنادي، فإن فريقنا لديه الخبرة لتقديم نتائج استثنائية.",
    },
    {
      id: 8,
      nameEN: "Maintenance",
      nameAR: "الصيانة",

      image: "Landscape-Maintenance.webp",
      descriptionEN:
        "Comprehensive plans to keep your landscape pristine year-round," +
        " covering everything from pruning to seasonal clean-ups.",
      descriptionAR:
        "خطط شاملة للحفاظ على منظر حديقتك في حالة ممتازة على مدار السنة، تشمل كل شيء من التقليم إلى التنظيف الموسمي.",

      subImages: [
        { id: 1, image: "maintenance-landscape/maintenance-landscape-1.webp" },
        { id: 2, image: "maintenance-landscape/maintenance-landscape-2.webp" },
        { id: 3, image: "maintenance-landscape/maintenance-landscape-3.webp" },
        { id: 4, image: "maintenance-landscape/maintenance-landscape-4.webp" },
        { id: 5, image: "maintenance-landscape/maintenance-landscape-5.webp" },
        { id: 6, image: "maintenance-landscape/maintenance-landscape-6.webp" },
      ],
      whatWeDoEN:
        "We offer comprehensive maintenance plans to keep your landscape looking its best year-round." +
        " Our services include pruning, mowing, fertilization, pest control," +
        " and seasonal clean-ups. Our maintenance plans are tailored to meet the specific needs of your" +
        " landscape, ensuring your plants and lawn remain healthy and vibrant. We use professional-grade" +
        " equipment and environmentally friendly practices to provide the highest level of care. Our team " +
        "is trained to identify and address issues such as disease, pests, and nutrient deficiencies before" +
        " they become serious problems. Regular maintenance visits ensure your landscape remains neat " +
        "and well-groomed, enhancing its overall appearance and value. In addition to routine maintenance," +
        " we offer specialized services such as aeration, overseeding, and soil testing to promote healthy" +
        " growth. Our goal is to create a beautiful and thriving landscape that you can enjoy year-round " +
        "without the hassle of upkeep. Whether you need a one-time clean-up or ongoing maintenance, " +
        "our team is here to provide expert care and attention to your landscape.",
      whatWeDoAR:
        "نحن نقدم خطط صيانة شاملة للحفاظ على مظهر المناظر الطبيعية الخاصة بك في أفضل حالاتها على مدار العام. تشمل خدماتنا التقليم، القص، التسميد، مكافحة الآفات، والتنظيفات الموسمية. خطط الصيانة لدينا مصممة لتلبية الاحتياجات الخاصة لمشهدك الطبيعي، مما يضمن بقاء نباتاتك وعشبك صحيين ومزدهرين. نستخدم معدات ذات جودة احترافية وممارسات صديقة للبيئة لتقديم أعلى مستوى من الرعاية. فريقنا مدرب على تحديد ومعالجة المشكلات مثل الأمراض والآفات ونقص العناصر الغذائية قبل أن تصبح مشاكل خطيرة. تضمن زيارات الصيانة المنتظمة أن تظل منطقتك الخارجية مرتبة ومهندمة، مما يعزز مظهرها العام وقيمتها. بالإضافة إلى الصيانة الروتينية، نقدم خدمات متخصصة مثل التهوية، وزراعة البذور الإضافية، واختبار التربة لتعزيز النمو الصحي. هدفنا هو إنشاء منظر طبيعي جميل ومزدهر يمكنك الاستمتاع به على مدار السنة دون عناء الصيانة. سواء كنت بحاجة إلى تنظيف لمرة واحدة أو صيانة مستمرة، فإن فريقنا هنا لتقديم الرعاية والاهتمام الخبيريين لمنظركم الطبيعي.",
    },
    {
      id: 9,
      nameEN: "Street Lighting",
      nameAR: "إضاءة الشوارع",
      image: "Street-Lighting.webp",
      descriptionEN:
        "High-quality solutions for safety and aesthetic appeal, with energy-efficient " +
        "installations for both public and private spaces.",
      descriptionAR:
        "حلول عالية الجودة للسلامة والجاذبية الجمالية، مع تركيبات موفرة للطاقة للمساحات العامة والخاصة.",

      subImages: [
        { id: 1, image: "street-lighting/street-lighting-1.webp" },
        { id: 2, image: "street-lighting/street-lighting-2.webp" },
        { id: 3, image: "street-lighting/street-lighting-3.webp" },
        { id: 4, image: "street-lighting/street-lighting-4.webp" },
        { id: 5, image: "street-lighting/street-lighting-5.webp" },
        { id: 6, image: "street-lighting/street-lighting-6.webp" },
      ],
      whatWeDoEN:
        "We install and maintain high-quality street lighting solutions that enhance safety" +
        " and aesthetic appeal. Our energy-efficient lighting systems are suitable for both public " +
        "and private spaces. We offer a range of lighting styles and technologies, including LED lights," +
        " solar-powered lights, and smart lighting systems. Our design process includes a thorough assessment" +
        " of your lighting needs and the characteristics of your space. We then create a custom lighting plan" +
        " that maximizes visibility and enhances the overall aesthetic of the area. Our installation " +
        "team ensures each light is correctly placed and securely installed for optimal performance. " +
        "In addition to installation, we provide maintenance services to keep your lighting system " +
        "functioning efficiently. Regular inspections and cleaning are essential to ensure the lights" +
        " remain bright and reliable. Our energy-efficient solutions help reduce energy consumption" +
        " and lower utility costs. Whether you need lighting for a residential community, commercial" +
        " property, or public space, our team has the expertise to deliver effective and attractive " +
        "lighting solutions.",
      whatWeDoAR:
        "نقوم بتركيب وصيانة حلول إضاءة الشوارع عالية الجودة التي تعزز السلامة والجاذبية الجمالية. أنظمة الإضاءة الموفرة للطاقة لدينا مناسبة لكل من الأماكن العامة والخاصة. نقدم مجموعة من أنماط وتقنيات الإضاءة، بما في ذلك الأضواء LED، والأضواء التي تعمل بالطاقة الشمسية، وأنظمة الإضاءة الذكية. تشمل عملية التصميم لدينا تقييمًا شاملاً لاحتياجات الإضاءة الخاصة بك وخصائص مساحتك. ثم نقوم بإنشاء خطة إضاءة مخصصة تعزز الرؤية وتحسن الجمالية العامة للمنطقة. يضمن فريق التركيب لدينا أن يتم وضع كل ضوء بشكل صحيح وتثبيته securely لتحقيق الأداء الأمثل. بالإضافة إلى التركيب، نقدم خدمات الصيانة للحفاظ على نظام الإضاءة الخاص بك يعمل بكفاءة. الفحوصات والتنظيف المنتظمين ضروريان لضمان بقاء الأضواء مشرقة وموثوقة. تساعد حلولنا الموفرة للطاقة في تقليل استهلاك الطاقة وخفض تكاليف المرافق. سواء كنت بحاجة إلى إضاءة لمجتمع سكني أو عقار تجاري أو مساحة عامة، فإن فريقنا لديه الخبرة لتقديم حلول إضاءة فعالة وجذابة.",
    },
    {
      id: 10,
      nameEN: "Street Furniture",
      nameAR: "أثاث الشوارع",

      image: "Street-Furniture.webp",
      descriptionEN:
        "Functional and stylish furnishings that enhance urban spaces, including benches, bins, and other outdoor furniture.",
      descriptionAR:
        "أثاث وظيفي وأنيق يعزز المساحات الحضرية، بما في ذلك المقاعد، والصناديق، والأثاث الخارجي الآخر.",

      subImages: [
        { id: 1, image: "street-furniture/street-furniture-1.webp" },
        { id: 2, image: "street-furniture/street-furniture-2.webp" },
        { id: 3, image: "street-furniture/street-furniture-3.webp" },
        { id: 4, image: "street-furniture/street-furniture-4.webp" },
        { id: 5, image: "street-furniture/street-furniture-5.webp" },
        { id: 6, image: "street-furniture/street-furniture-6.webp" },
      ],
      whatWeDoEN:
        "We provide functional and stylish street furniture, including benches, bins," +
        " and bike racks. Our products are designed to enhance the usability and" +
        " aesthetic of urban and community spaces. We work with durable," +
        " weather-resistant materials to ensure longevity and minimal maintenance." +
        " Our design process includes a thorough assessment of the space and its intended use" +
        " to create custom furniture solutions that meet your specific needs. Our installation " +
        "team ensures each piece of furniture is securely and correctly installed for safety and usability." +
        " In addition to standard products, we offer custom design services to create unique " +
        "pieces that reflect the character and style of your space. Our street furniture solutions " +
        "are designed to create inviting and functional outdoor environments that encourage " +
        "community interaction and enjoyment. Whether you need benches for a park, bins for" +
        " a commercial area, or bike racks for a residential community, our team has the " +
        "expertise to deliver high-quality and attractive street furniture.",
      whatWeDoAR:
        "نحن نقدم أثاثًا حضريًا وظيفيًا وأنيقًا، بما في ذلك المقاعد، والصناديق، وحوامل الدراجات. تم تصميم منتجاتنا لتعزيز قابلية الاستخدام والجمالية للمساحات الحضرية والمجتمعية. نحن نعمل مع مواد متينة ومقاومة للعوامل الجوية لضمان طول العمر وصيانة منخفضة. تشمل عملية التصميم لدينا تقييمًا شاملاً للمساحة واستخدامها المقصود لإنشاء حلول أثاث مخصصة تلبي احتياجاتك الخاصة. يضمن فريق التركيب لدينا تثبيت كل قطعة أثاث بشكل آمن وصحيح لضمان السلامة وسهولة الاستخدام. بالإضافة إلى المنتجات القياسية، نقدم خدمات التصميم المخصص لإنشاء قطع فريدة تعكس طابع وأسلوب مساحتك. تم تصميم حلول أثاث الشوارع لدينا لإنشاء بيئات خارجية جذابة وعملية تشجع على التفاعل المجتمعي والاستمتاع. سواء كنت بحاجة إلى مقاعد لحديقة، أو صناديق لمنطقة تجارية، أو حوامل دراجات لمجتمع سكني، فإن فريقنا لديه الخبرة لتقديم أثاث شوارع عالي الجودة وجذاب.",
    },
    {
      id: 11,
      nameEN: "Playground Equipment",
      nameAR: "معدات الملعب",

      image: "Playground-Equipment.webp",
      descriptionEN:
        "Safe and fun installations for children of all ages, designed for durability and enjoyment in various settings.",
      descriptionAR:
        "تركيبات آمنة وممتعة للأطفال من جميع الأعمار، مصممة لتكون متينة وممتعة في مختلف البيئات.",
      subImages: [
        { id: 1, image: "playground-equipment/playground-equipment-1.webp" },
        { id: 2, image: "playground-equipment/playground-equipment-2.webp" },
        { id: 3, image: "playground-equipment/playground-equipment-3.webp" },
        { id: 4, image: "playground-equipment/playground-equipment-4.webp" },
      ],
      whatWeDoEN:
        " We design and install safe, durable, and engaging playground equipment " +
        "for children of all ages. Our installations meet the highest safety standards and" +
        " provide enjoyable play experiences. We begin by assessing your space and understanding" +
        " the needs of the children who will use the playground. Our designs incorporate a variety " +
        "of play elements, including swings, slides, climbing structures, and interactive features." +
        " We use high-quality, weather-resistant materials to ensure the equipment remains safe " +
        "and attractive for years. Our installation team ensures that all components are securely " +
        "anchored and meet all relevant safety regulations. In addition to installation," +
        " we offer regular maintenance and safety inspections to keep the playground in excellent condition. " +
        "Our goal is to create a fun, stimulating, and safe environment where children can play, " +
        "learn, and grow. Whether you need equipment for a school, park, or residential area," +
        " our team has the expertise to create the perfect playground for your needs.",
      whatWeDoAR:
        "نحن نصمم ونركب معدات ملاعب آمنة، متينة، وجذابة للأطفال من جميع الأعمار. تفي تركيباتنا بأعلى معايير السلامة وتوفر تجارب لعب ممتعة. نبدأ بتقييم مساحتك وفهم احتياجات الأطفال الذين سيستخدمون الملعب. تصاميمنا تتضمن مجموعة متنوعة من عناصر اللعب، بما في ذلك الأراجيح، والزحاليق، وهياكل التسلق، والميزات التفاعلية. نستخدم مواد عالية الجودة ومقاومة للعوامل الجوية لضمان بقاء المعدات آمنة وجذابة لسنوات. يضمن فريق التركيب لدينا أن جميع المكونات مثبتة بشكل آمن وتفي بجميع لوائح السلامة ذات الصلة. بالإضافة إلى التركيب، نقدم صيانة دورية وفحوصات سلامة للحفاظ على الملعب في حالة ممتازة. هدفنا هو خلق بيئة ممتعة ومحفزة وآمنة حيث يمكن للأطفال اللعب والتعلم والنمو. سواء كنت بحاجة إلى معدات لمدرسة أو حديقة أو منطقة سكنية، فإن فريقنا لديه الخبرة لإنشاء الملعب المثالي لاحتياجاتك.",
    },
    {
      id: 12,
      nameEN: "Covers and Grates",
      nameAR: "الأغطية والشبكات",

      image: "covers-and-grates.webp",
      descriptionEN:
        "Sturdy solutions ensuring safety and proper drainage, blending seamlessly with your landscape design.",
      descriptionAR:
        "حلول متينة تضمن السلامة والصرف السليم، وتندمج بسلاسة مع تصميم المناظر الطبيعية الخاص بك",

      subImages: [
        { id: 1, image: "covers-and-grates/covers-and-grates-1.webp" },
        { id: 2, image: "covers-and-grates/covers-and-grates-2.webp" },
        { id: 3, image: "covers-and-grates/covers-and-grates-3.webp" },
        { id: 4, image: "covers-and-grates/covers-and-grates-4.webp" },
        { id: 5, image: "covers-and-grates/covers-and-grates-5.webp" },
        { id: 6, image: "covers-and-grates/covers-and-grates-6.webp" },
      ],
      whatWeDoEN:
        "We supply and install robust covers and grates that ensure safety and efficient drainage in your landscape." +
        " Our solutions are designed to blend seamlessly with your " +
        "outdoor design while providing essential functionality. We start with a thorough site" +
        " assessment to identify areas that require drainage solutions. " +
        "Our covers and grates are made from high-quality materials that are durable and resistant to wear and tear. We offer" +
        " a variety of styles and finishes to match your landscape aesthetic. " +
        "Our installation process ensures that each cover and grate is properly positioned and securely fixed to prevent " +
        "movement and potential hazards. Regular maintenance services are available to ensure the" +
        " drainage systems remain clear and functional. Our solutions help prevent water" +
        " accumulation and protect your landscape from erosion and damage. Whether you need covers" +
        " and grates for a residential garden, commercial property, or public space, our team is dedicated " +
        "to providing reliable and visually appealing drainage solutions.",
      whatWeDoAR:
        "نحن نوفر ونركب أغطية وشبكات قوية تضمن السلامة والصرف الفعال في المناظر الطبيعية الخاصة بك. تم تصميم حلولنا لتندمج بسلاسة مع تصميمك الخارجي مع توفير الوظائف الأساسية. نبدأ بتقييم شامل للموقع لتحديد المناطق التي تحتاج إلى حلول تصريف. أغطيتنا وشبكاتنا مصنوعة من مواد عالية الجودة تتميز بالمتانة ومقاومة التآكل. نقدم مجموعة متنوعة من الأنماط والتشطيبات لتتناسب مع جمالية المناظر الطبيعية الخاصة بك. تضمن عملية التركيب لدينا أن كل غطاء وشبكة يتم وضعهما بشكل صحيح وتثبيتهما بإحكام لمنع الحركة والمخاطر المحتملة. تتوفر خدمات الصيانة الدورية لضمان بقاء أنظمة الصرف صحيحة وعاملة. تساعد حلولنا في منع تراكم المياه وحماية المناظر الطبيعية الخاصة بك من التآكل والأضرار. سواء كنت بحاجة إلى أغطية وشبكات لحديقة سكنية أو عقار تجاري أو مساحة عامة، فإن فريقنا مكرس لتقديم حلول تصريف موثوقة وجذابة بصريًا.",
    },
  ];

  getGeoscapeServices() {
    return this.geoscapeServices;
  }
}

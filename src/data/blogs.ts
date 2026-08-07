import Blog1 from "../assets/blog/medical.jpeg";
import Blog2 from "../assets/blog/2.webp";
import Blog3 from "../assets/blog/3.jpeg";
import Blog4 from "../assets/blog/5.jpeg";

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  cover_image: string;
  created_at: string;
  updated_at: string;
  language: string;
}

export const blogs: Blog[] = [
  {
    id: 5,
    title: "Understanding Medical Tourism",
    content:
      "Medical tourism has become one of the fastest-growing sectors in global healthcare, allowing patients to receive high-quality medical treatment in countries known for advanced healthcare facilities at a significantly lower cost. Patients travel abroad for procedures such as cardiac surgery, orthopedic treatments, cosmetic procedures, fertility treatments, organ transplants, and cancer care. In addition to affordability, medical tourism offers shorter waiting times, access to internationally accredited hospitals, experienced specialists, and modern medical technology. Countries like India have become preferred destinations because they combine world-class healthcare with experienced doctors, English-speaking medical staff, and comprehensive patient support services. Before traveling, patients should carefully research hospitals, verify doctor credentials, understand treatment plans, estimate recovery time, and ensure proper travel and accommodation arrangements. Choosing a trusted medical tourism partner helps coordinate appointments, airport transfers, visa assistance, interpreters, and post-treatment follow-up. With proper planning and reliable healthcare providers, medical tourism offers patients an opportunity to receive excellent medical care while saving significantly on treatment costs.",
    author: "Aaqil Shaikh",
    cover_image: Blog1,
    created_at: "2026-07-29",
    updated_at: "2026-07-29",
    language: "en",
  },
  {
    id: 4,
    title: "Top 5 Cardiac Procedures",
    content:
      "Heart disease continues to be one of the leading causes of mortality worldwide, but advances in cardiac care have dramatically improved treatment outcomes. Some of the most common procedures include Coronary Artery Bypass Grafting (CABG), Angioplasty with Stent Placement, Heart Valve Repair or Replacement, Pacemaker Implantation, and Heart Transplantation. Each procedure is designed to address specific heart conditions ranging from blocked arteries to irregular heart rhythms and damaged valves. Modern hospitals utilize minimally invasive techniques whenever possible, resulting in shorter hospital stays, reduced pain, and faster recovery. Patients considering cardiac treatment should consult experienced cardiologists, undergo comprehensive diagnostic testing, and follow personalized treatment recommendations. Lifestyle modifications such as maintaining a healthy diet, exercising regularly, and taking prescribed medications remain essential for long-term heart health after any procedure.",
    author: "Aaqil Shaikh",
    cover_image: Blog2,
    created_at: "2026-07-28",
    updated_at: "2026-07-28",
    language: "en",
  },
  {
    id: 3,
    title: "Robotic Surgery Benefits",
    content:
      "Robotic-assisted surgery has transformed modern healthcare by enabling surgeons to perform highly complex procedures with exceptional precision and control. Unlike traditional open surgery, robotic systems use tiny instruments inserted through small incisions, reducing tissue damage and minimizing blood loss. Patients often experience less pain, lower risk of infection, shorter hospital stays, and faster recovery. Robotic surgery is widely used in urology, gynecology, cardiology, oncology, orthopedics, and general surgery. The surgeon remains in complete control of the robotic system throughout the procedure while benefiting from enhanced visualization through high-definition 3D imaging and improved instrument flexibility. Although robotic surgery may not be suitable for every patient, it has become an excellent option for many minimally invasive procedures and continues to improve surgical outcomes across various medical specialties.",
    author: "Aaqil Shaikh",
    cover_image: Blog3,
    created_at: "2026-07-27",
    updated_at: "2026-07-27",
    language: "en",
  },
  {
    id: 2,
    title: "Preparing for Medical Journey",
    content:
      "Traveling abroad for medical treatment requires careful planning to ensure a smooth and stress-free experience. Before departure, patients should gather all medical records, diagnostic reports, prescriptions, and imaging results to share with their healthcare provider. It is important to confirm treatment schedules, arrange accommodation near the hospital, secure medical visas if required, and purchase appropriate travel insurance. Patients should also discuss expected recovery timelines, dietary recommendations, and post-operative care with their doctors. Packing essential medications, comfortable clothing, and important documents helps avoid unnecessary complications during travel. Working with an experienced medical tourism facilitator can simplify the entire process by assisting with hospital appointments, airport transfers, language interpretation, accommodation, and follow-up consultations. Proper preparation allows patients to focus on recovery while receiving high-quality medical care in a safe and supportive environment.",
    author: "Aaqil Shaikh",
    cover_image: Blog4,
    created_at: "2026-07-26",
    updated_at: "2026-07-26",
    language: "en",
  },
  {
    id: 8,
    title: "الاستعداد للرحلة العلاجية",
    content:
      "يتطلب السفر إلى الخارج لتلقي العلاج الطبي تخطيطًا دقيقًا لضمان تجربة سلسة وخالية من التوتر. قبل السفر، يجب على المرضى تجهيز جميع السجلات الطبية والتقارير التشخيصية والوصفات الطبية ونتائج الفحوصات والصور الطبية لمشاركتها مع مقدم الرعاية الصحية. من المهم تأكيد مواعيد العلاج، وترتيب الإقامة بالقرب من المستشفى، والحصول على التأشيرة الطبية إذا كانت مطلوبة، وشراء تأمين سفر مناسب. كما ينبغي للمرضى مناقشة المدة المتوقعة للتعافي، والتوصيات الغذائية، والرعاية اللازمة بعد العملية مع أطبائهم. يساعد تجهيز الأدوية الأساسية والملابس المريحة والمستندات المهمة على تجنب أي مضاعفات أو مشكلات غير ضرورية أثناء السفر. ويمكن أن يؤدي التعاون مع جهة متخصصة وذات خبرة في مجال السياحة العلاجية إلى تسهيل العملية بالكامل من خلال المساعدة في حجز مواعيد المستشفى، وترتيب خدمات النقل من وإلى المطار، وتوفير خدمات الترجمة، وترتيب الإقامة، وتنظيم الاستشارات والمتابعات الطبية. يتيح الاستعداد الجيد للمرضى التركيز على التعافي والاستفادة من رعاية طبية عالية الجودة في بيئة آمنة وداعمة.",
    author: "عقيل شيخ",
    cover_image: Blog4,
    created_at: "2026-07-26",
    updated_at: "2026-07-26",
    language: "ar",
  },
];

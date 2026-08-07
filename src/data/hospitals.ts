import Fortis from "../assets/hospitals/FortisMemorial.jpg";
import Manipal from "../assets/hospitals/ManipalHospitalDwarka.jpg";
import Max from "../assets/hospitals/MaxNoida.jpg";
import Amrita from "../assets/hospitals/FortisMemorial.jpg";
import Rahul from "../assets/DR/dr1.jpeg";
import PRocedure from "../assets/PRocedure/PRocedure.png";

export interface Facility {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface Specialization {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface Doctor {
  id: number;
  name_en: string;
  name_ar: string;
  specialist_en: string;
  specialist_ar: string;
  image: string;
}

export interface Procedure {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
}

export interface Hospital {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  location_en: string;
  location_ar: string;
  specializations: Specialization[];
  facilities: Facility[];
  doctors: Doctor[];
  procedures: Procedure[];

  created_at: string;
  updated_at: string;
}
export const hospitals: Hospital[] = [
  {
    id: 1,
    name_en: "Fortis Hospital Gurgaon",
    name_ar: "مستشفى فورتيس جورجاون",
    description_en:
      "Fortis Hospital Gurgaon is one of India's leading multi-specialty hospitals, providing world-class healthcare services with advanced technology, experienced specialists, and comprehensive patient care across various medical disciplines.",
    description_ar:
      "يُعد مستشفى فورتيس جورجاون من أبرز المستشفيات متعددة التخصصات في الهند، ويقدم خدمات رعاية صحية عالمية المستوى باستخدام أحدث التقنيات وفريق طبي متخصص ورعاية شاملة للمرضى.",
    image: Fortis,
    location_en: "Gurgaon, Haryana, India",
    location_ar: "جورجاون، هاريانا، الهند",

    specializations: [
      {
        id: 1,
        name_en: "Cardiology",
        name_ar: "أمراض القلب",
      },
      {
        id: 2,
        name_en: "Neurology",
        name_ar: "طب الأعصاب",
      },
      {
        id: 3,
        name_en: "Orthopedics",
        name_ar: "جراحة العظام",
      },
      {
        id: 4,
        name_en: "Oncology",
        name_ar: "الأورام",
      },
      {
        id: 5,
        name_en: "Gastroenterology",
        name_ar: "أمراض الجهاز الهضمي",
      },
    ],

    facilities: [
      {
        id: 1,
        name_en: "24/7 Emergency",
        name_ar: "طوارئ على مدار الساعة",
      },
      {
        id: 2,
        name_en: "Advanced ICU",
        name_ar: "وحدة عناية مركزة متطورة",
      },
      {
        id: 3,
        name_en: "MRI & CT Scan",
        name_ar: "أجهزة الرنين المغناطيسي والأشعة المقطعية",
      },
      {
        id: 4,
        name_en: "International Patient Desk",
        name_ar: "مكتب المرضى الدوليين",
      },
      {
        id: 5,
        name_en: "Pharmacy",
        name_ar: "الصيدلية",
      },
    ],

    doctors: [
      {
        id: 1,
        name_en: "Dr. Rajesh Sharma",
        name_ar: "د. راجيش شارما",
        specialist_en: "Cardiologist",
        specialist_ar: "استشاري أمراض القلب",
        image: Rahul,
      },
      {
        id: 2,
        name_en: "Dr. Priya Mehta",
        name_ar: "د. بريا ميهتا",
        specialist_en: "Neurologist",
        specialist_ar: "استشارية طب الأعصاب",
        image: Rahul,
      },
      {
        id: 3,
        name_en: "Dr. Amit Verma",
        name_ar: "د. أميت فيرما",
        specialist_en: "Orthopedic Surgeon",
        specialist_ar: "استشاري جراحة العظام",
        image: Rahul,
      },
      {
        id: 4,
        name_en: "Dr. Neha Kapoor",
        name_ar: "د. نيها كابور",
        specialist_en: "Oncologist",
        specialist_ar: "استشارية الأورام",
        image: Rahul,
      },
      {
        id: 5,
        name_en: "Dr. Vikram Singh",
        name_ar: "د. فيكرام سينغ",
        specialist_en: "Gastroenterologist",
        specialist_ar: "استشاري الجهاز الهضمي",
        image: Rahul,
      },
      {
        id: 5,
        name_en: "Dr. Vikram Singh",
        name_ar: "د. فيكرام سينغ",
        specialist_en: "Gastroenterologist",
        specialist_ar: "استشاري الجهاز الهضمي",
        image: Rahul,
      },
    ],

    procedures: [
      {
        id: 1,
        name_en: "Heart Bypass Surgery",
        name_ar: "جراحة تحويل مسار القلب",
        description_en: "Advanced coronary artery bypass graft (CABG) surgery.",
        description_ar: "جراحة متقدمة لتحويل مسار الشريان التاجي.",
        image: PRocedure,
      },
      {
        id: 2,
        name_en: "Knee Replacement",
        name_ar: "استبدال الركبة",
        description_en: "Complete knee replacement using modern implants.",
        description_ar: "استبدال كامل للركبة باستخدام أحدث التقنيات.",
        image: PRocedure,
      },
      {
        id: 3,
        name_en: "Spine Surgery",
        name_ar: "جراحة العمود الفقري",
        description_en: "Minimally invasive spine surgery for faster recovery.",
        description_ar: "جراحة العمود الفقري طفيفة التوغل لسرعة التعافي.",
        image: PRocedure,
      },
      {
        id: 4,
        name_en: "Liver Transplant",
        name_ar: "زراعة الكبد",
        description_en:
          "Comprehensive liver transplant program with expert surgeons.",
        description_ar: "برنامج متكامل لزراعة الكبد بإشراف نخبة من الجراحين.",
        image: PRocedure,
      },

      {
        id: 5,
        name_en: "Robotic Cancer Surgery",
        name_ar: "جراحة الأورام بالروبوت",
        description_en: "Precision robotic-assisted cancer surgery.",
        description_ar: "جراحة أورام دقيقة بمساعدة الروبوت.",
        image: PRocedure,
      },
      {
        id: 6,
        name_en: "Robotic Cancer Surgery",
        name_ar: "جراحة الأورام بالروبوت",
        description_en: "Precision robotic-assisted cancer surgery.",
        description_ar: "جراحة أورام دقيقة بمساعدة الروبوت.",
        image: PRocedure,
      },
    ],

    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 2,
    name_en: "Amrita Hospital",
    name_ar: "مستشفى أمريتا",
    description_en:
      "Amrita Hospital is one of India's leading multi-specialty hospitals offering world-class healthcare with advanced medical technologies.",
    description_ar:
      "يعد مستشفى أمريتا من أبرز المستشفيات متعددة التخصصات في الهند، ويقدم رعاية صحية متقدمة باستخدام أحدث التقنيات الطبية.",
    image: Amrita,
    location_en: "Faridabad, Haryana, India",
    location_ar: "فريد آباد، هاريانا، الهند",
    specializations: [
      { id: 1, name_en: "Cardiology", name_ar: "أمراض القلب" },
      { id: 2, name_en: "Neurology", name_ar: "طب الأعصاب" },
      { id: 3, name_en: "Orthopedics", name_ar: "جراحة العظام" },
    ],
    facilities: [
      { id: 1, name_en: "24x7 Emergency", name_ar: "طوارئ 24 ساعة" },
      { id: 2, name_en: "ICU", name_ar: "العناية المركزة" },
      { id: 3, name_en: "Pharmacy", name_ar: "صيدلية" },
    ],
    doctors: [
      {
        id: 21,
        name_en: "Dr. Rahul Mehta",
        name_ar: "د. راهول ميهتا",
        specialist_en: "Cardiologist",
        specialist_ar: "طبيب قلب",
        image: "http://localhost:8000/media/doctors/doctor1.jpg",
      },
      {
        id: 22,
        name_en: "Dr. Anjali Sharma",
        name_ar: "د. أنجالي شارما",
        specialist_en: "Neurologist",
        specialist_ar: "طبيبة أعصاب",
        image: "http://localhost:8000/media/doctors/doctor2.jpg",
      },
    ],
    procedures: [
      {
        id: 21,
        name_en: "Heart Bypass Surgery",
        name_ar: "جراحة تحويل مسار القلب",
        description_en: "Advanced CABG procedure.",
        description_ar: "عملية متقدمة لتحويل مسار القلب.",
        image: "http://localhost:8000/media/procedures/heart.jpg",
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 3,
    name_en: "Max Super Speciality Hospital",
    name_ar: "مستشفى ماكس التخصصي",
    description_en:
      "Max Hospital provides comprehensive healthcare with internationally trained doctors and cutting-edge technology.",
    description_ar:
      "يقدم مستشفى ماكس خدمات صحية متكاملة بأطباء ذوي خبرة عالمية وتقنيات حديثة.",
    image: Max,
    location_en: "Noida, Uttar Pradesh, India",
    location_ar: "نويدا، أوتار براديش، الهند",
    specializations: [
      { id: 4, name_en: "Oncology", name_ar: "الأورام" },
      { id: 5, name_en: "Urology", name_ar: "المسالك البولية" },
    ],
    facilities: [
      { id: 4, name_en: "MRI Scan", name_ar: "التصوير بالرنين المغناطيسي" },
      { id: 5, name_en: "Blood Bank", name_ar: "بنك الدم" },
      { id: 6, name_en: "ICU", name_ar: "العناية المركزة" },
    ],
    doctors: [
      {
        id: 31,
        name_en: "Dr. Vivek Kapoor",
        name_ar: "د. فيفيك كابور",
        specialist_en: "Oncologist",
        specialist_ar: "طبيب أورام",
        image: "http://localhost:8000/media/doctors/doctor3.jpg",
      },
    ],
    procedures: [
      {
        id: 31,
        name_en: "Chemotherapy",
        name_ar: "العلاج الكيميائي",
        description_en: "Comprehensive cancer treatment.",
        description_ar: "علاج شامل لمرضى السرطان.",
        image: "http://localhost:8000/media/procedures/chemo.jpg",
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 4,
    name_en: "Manipal Hospital",
    name_ar: "مستشفى مانيبال",
    description_en:
      "Manipal Hospital offers tertiary healthcare services with experienced specialists and modern facilities.",
    description_ar:
      "يوفر مستشفى مانيبال خدمات رعاية صحية متقدمة مع نخبة من الأطباء المتخصصين.",
    image: Manipal,
    location_en: "Noida, Uttar Pradesh, India",
    location_ar: "نويدا، أوتار براديش، الهند",
    specializations: [
      { id: 6, name_en: "Gastroenterology", name_ar: "الجهاز الهضمي" },
      { id: 7, name_en: "Nephrology", name_ar: "الكلى" },
    ],
    facilities: [
      { id: 7, name_en: "Dialysis Unit", name_ar: "وحدة غسيل الكلى" },
      { id: 8, name_en: "Laboratory", name_ar: "مختبر" },
    ],
    doctors: [
      {
        id: 41,
        name_en: "Dr. Priya Nair",
        name_ar: "د. بريا ناير",
        specialist_en: "Nephrologist",
        specialist_ar: "طبيب كلى",
        image: "http://localhost:8000/media/doctors/doctor4.jpg",
      },
    ],
    procedures: [
      {
        id: 41,
        name_en: "Kidney Transplant",
        name_ar: "زراعة الكلى",
        description_en: "Comprehensive kidney transplant program.",
        description_ar: "برنامج متكامل لزراعة الكلى.",
        image: "http://localhost:8000/media/procedures/kidney.jpg",
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 5,
    name_en: "Apollo Hospital",
    name_ar: "مستشفى أبولو",
    description_en:
      "Apollo Hospitals is a leading healthcare provider with advanced diagnostic and treatment facilities.",
    description_ar:
      "تعد مستشفيات أبولو من أبرز مقدمي الرعاية الصحية مع أحدث مرافق التشخيص والعلاج.",
    image: Fortis,
    location_en: "Dwarka, New Delhi, India",
    location_ar: "دواركا، نيودلهي، الهند",
    specializations: [
      { id: 8, name_en: "Pulmonology", name_ar: "أمراض الرئة" },
      { id: 9, name_en: "ENT", name_ar: "الأنف والأذن والحنجرة" },
    ],
    facilities: [
      { id: 9, name_en: "CT Scan", name_ar: "الأشعة المقطعية" },
      { id: 10, name_en: "Ambulance", name_ar: "سيارة إسعاف" },
    ],
    doctors: [
      {
        id: 51,
        name_en: "Dr. Arjun Rao",
        name_ar: "د. أرجون راو",
        specialist_en: "Pulmonologist",
        specialist_ar: "طبيب رئة",
        image: Rahul,
      },
    ],
    procedures: [
      {
        id: 51,
        name_en: "Lung Surgery",
        name_ar: "جراحة الرئة",
        description_en: "Minimally invasive lung surgery.",
        description_ar: "جراحة رئة طفيفة التوغل.",
        image: PRocedure,
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 6,
    name_en: "Medanta Hospital",
    name_ar: "مستشفى ميدانتا",
    description_en:
      "Medanta is a renowned multi-specialty hospital providing advanced surgical and medical care.",
    description_ar:
      "يعد مستشفى ميدانتا من المستشفيات الرائدة متعددة التخصصات ويقدم رعاية طبية وجراحية متقدمة.",
    image: Max,
    location_en: "Dwarka, New Delhi, India",
    location_ar: "دواركا، نيودلهي، الهند",
    specializations: [
      { id: 10, name_en: "Cardiac Surgery", name_ar: "جراحة القلب" },
      { id: 11, name_en: "Plastic Surgery", name_ar: "جراحة التجميل" },
    ],
    facilities: [
      { id: 11, name_en: "NICU", name_ar: "العناية المركزة لحديثي الولادة" },
      { id: 12, name_en: "Emergency", name_ar: "الطوارئ" },
    ],
    doctors: [
      {
        id: 61,
        name_en: "Dr. Amit Verma",
        name_ar: "د. أميت فيرما",
        specialist_en: "Cardiac Surgeon",
        specialist_ar: "جراح قلب",
        image: "http://localhost:8000/media/doctors/doctor6.jpg",
      },
    ],
    procedures: [
      {
        id: 61,
        name_en: "Heart Valve Replacement",
        name_ar: "استبدال صمام القلب",
        description_en: "Advanced valve replacement surgery.",
        description_ar: "جراحة متقدمة لاستبدال صمام القلب.",
        image: "http://localhost:8000/media/procedures/valve.jpg",
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
];

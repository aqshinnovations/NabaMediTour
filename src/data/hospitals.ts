import Fortis from "../assets/hospitals/FortisMemorial.jpg";
import Amrita from "../assets/hospitals/AmritaHospital.jpg";
import MAx from "../assets/hospitals/MaxNoida.jpg";
import MAnipal from "../assets/hospitals/ManipalHospitalDwarka.jpg";

export interface Facility {
  id: number;
  name_en: string;
  name_ar: string;
}
export interface Hospital {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  facilities: Facility[];
  created_at: string;
  updated_at: string;
}

export const hospitals: Hospital[] = [
  {
    id: 9,
    name_en: "Fortis Hospital",
    name_ar: "مستشفي فورتس1",
    description_en:
      "Fortis Healthcare Limited (fortis hospital) is a prominent private healthcare provider in India, headquartered in Gurgaon. Established in 1996, it operates a network of 36 hospitals across 11 states, including facilities in Delhi NCR, Bengaluru, Mumbai, and Punjab. The company is known for its multidisciplinary approach, offering comprehensive medical services through hospitals, diagnostics, and day care specialty centers. (Fortis Healthcare",
    description_ar:
      "تُعَد فورتيس للرعاية الصحية المحدودة (Fortis Healthcare Limited) من أكبر مقدمي الرعاية الصحية الخاصة في الهند، ويقع مقرها الرئيسي في مدينة جورجاون. تأسست عام 1996 وتدير شبكة من 36 مستشفى في 11 ولاية، تشمل دلهي NCR، بنغالور، مومباي، والبنجاب. تشتهر فورتيس بنهجها المتعدد التخصصات وتقديم خدمات طبية شاملة تشمل المستشفيات، مراكز التشخيص، ومراكز الرعاية النهارية.",
    image: Fortis,
    facilities: [
      {
        id: 4,
        name_en: "Cardiac Care 5",
        name_ar: "رعاية القلب",
      },

      {
        id: 8,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
    ],
    created_at: "2026-07-29 17:39:35",
    updated_at: "2026-07-29 17:39:35",
  },
  {
    id: 8,
    name_en: "Amrita Hospital",
    name_ar: "مستشفي فورتس1",
    description_en:
      "Amrita Hospital Faridabad, inaugurated on August 24, 2022, by Prime Minister Narendra Modi, stands as Asia's largest private multi-specialty hospital. Spread over 130 acres, the hospital boasts a capacity of 2,600 beds and offers 81 specialized departments. Affiliated with Amrita Vishwa Vidyapeetham, it integrates cutting-edge medical technology with compassionate care",
    description_ar:
      "تُعَد فورتيس للرعاية الصحية المحدودة (Fortis Healthcare Limited) من أكبر مقدمي الرعاية الصحية الخاصة في الهند، ويقع مقرها الرئيسي في مدينة جورجاون. تأسست عام 1996 وتدير شبكة من 36 مستشفى في 11 ولاية، تشمل دلهي NCR، بنغالور، مومباي، والبنجاب. تشتهر فورتيس بنهجها المتعدد التخصصات وتقديم خدمات طبية شاملة تشمل المستشفيات، مراكز التشخيص، ومراكز الرعاية النهارية.",
    image: Amrita,
    facilities: [
      {
        id: 8,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
    ],
    created_at: "2026-07-29 17:39:29",
    updated_at: "2026-07-29 17:39:29",
  },
  {
    id: 6,
    name_en: "Max Hospitals",
    name_ar: "مستشفي فورتس1",
    description_en:
      "Max Healthcare is a premier private healthcare group in India, headquartered in New Delhi. It operates a network of super-speciality and multi-speciality hospitals with modern infrastructure, a large number of beds, and a wide pool of specialist doctors. Its mission is to deliver high quality, accessible, and patient-centric healthcare across specialties, using advanced medical technologies and globally benchmarked care standards.",
    description_ar:
      "تُعَد فورتيس للرعاية الصحية المحدودة (Fortis Healthcare Limited) من أكبر مقدمي الرعاية الصحية الخاصة في الهند، ويقع مقرها الرئيسي في مدينة جورجاون. تأسست عام 1996 وتدير شبكة من 36 مستشفى في 11 ولاية، تشمل دلهي NCR، بنغالور، مومباي، والبنجاب. تشتهر فورتيس بنهجها المتعدد التخصصات وتقديم خدمات طبية شاملة تشمل المستشفيات، مراكز التشخيص، ومراكز الرعاية النهارية.",
    image: MAx,
    facilities: [
      {
        id: 4,
        name_en: "Cardiac Care 5",
        name_ar: "رعاية القلب",
      },
      {
        id: 5,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
      {
        id: 6,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
    ],
    created_at: "2026-07-29 17:39:03",
    updated_at: "2026-07-29 17:39:03",
  },
  {
    id: 7,
    name_en: "Manipal Hospitals",
    name_ar: "مستشفي فورتس1",
    description_en:
      "Manipal Hospitals is one of India’s leading private healthcare chains, renowned for delivering high-quality, patient-centric care across multiple specialties. Established with a vision to provide accessible, world-class medical services, Manipal Hospitals has a presence in multiple cities across India and overseas. With modern infrastructure, advanced medical technologies, and a large pool of experienced specialists, it offers comprehensive care for complex medical conditions.",
    description_ar:
      "تُعَد فورتيس للرعاية الصحية المحدودة (Fortis Healthcare Limited) من أكبر مقدمي الرعاية الصحية الخاصة في الهند، ويقع مقرها الرئيسي في مدينة جورجاون. تأسست عام 1996 وتدير شبكة من 36 مستشفى في 11 ولاية، تشمل دلهي NCR، بنغالور، مومباي، والبنجاب. تشتهر فورتيس بنهجها المتعدد التخصصات وتقديم خدمات طبية شاملة تشمل المستشفيات، مراكز التشخيص، ومراكز الرعاية النهارية.",
    image: MAnipal,
    facilities: [
      {
        id: 4,
        name_en: "Cardiac Care 5",
        name_ar: "رعاية القلب",
      },
      {
        id: 5,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
      {
        id: 6,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
      {
        id: 7,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
      {
        id: 8,
        name_en: "Cardiac Care 4",
        name_ar: "رعاية القلب",
      },
    ],
    created_at: "2026-07-29 17:39:03",
    updated_at: "2026-07-29 17:39:03",
  },
];

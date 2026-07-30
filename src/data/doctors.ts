import DoctorImage from "../assets/dr.jpeg";

export interface DoctorCategory {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface Doctor {
  id: number;
  category: DoctorCategory;
  name_en: string;
  name_ar: string;
  about_en: string;
  about_ar: string;
  experience_en: string;
  experience_ar: string;
  qualification_en: string;
  qualification_ar: string;
  specialist_en: string;
  specialist_ar: string;
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: 14,
    category: {
      id: 2,
      name_en: "Cardiac Care",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "rahul",
    about_en:
      "Dr. Rajneesh Malhotra is one of India’s most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery",
    about_ar: "i am dr",
    experience_en: "30 +",
    experience_ar: "31",
    qualification_en: "MBBS – King George’s Medical College, Lucknow",
    qualification_ar: "MBBS – King George's Medical College, Lucknow",
    specialist_en: "ASD Closures: 350+",
    specialist_ar: "CABG (Coronary Artery Bypass Graft): 4000+",
    image: DoctorImage,
  },
  {
    id: 12,
    category: {
      id: 2,
      name_en: "Cardiac Care",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Bhaba Nanda Das",
    name_ar: "rahul",
    about_en:
      "Dr. Bhaba Nanda Das is a pioneering cardiothoracic surgeon with over 35 years of surgical excellence. He has performed thousands of complex cardiac operations including CABG, valve surgeries, and congenital repairs. Dr. Das is widely respected for his dedication to advancing cardiac care in India through surgery, education, and innovation",
    about_ar: "i am dr",
    experience_en: "28",
    experience_ar: "28",
    qualification_en: "MBBS – Cuttack Medical College",
    qualification_ar: "MBBS – King George's Medical College, Lucknow",
    specialist_en: "Robotic Cardiac Surgeries",
    specialist_ar: "Heart Transplant",
    image: DoctorImage,
  },
  {
    id: 11,
    category: {
      id: 2,
      name_en: "Cardiac Care",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Shyam Sunder Bansal",
    name_ar: "rahul",
    about_en:
      "Dr. Shyam Sunder Bansal is a renowned interventional cardiologist with over 30 years of dedicated experience in managing heart diseases. Dr. Bansal is widely recognized for introducing several pioneering cardiology procedures in North India and has served as a visionary leader in cardiovascular healthcare",
    about_ar: "i am dr",
    experience_en: "24",
    experience_ar: "24",
    qualification_en: "MBBS",
    qualification_ar: "MBBS",
    specialist_en: "Robotic Cardiac Surgery",
    specialist_ar: "Robotic Cardiac Surgery",
    image: DoctorImage,
  },
  {
    id: 10,
    category: {
      id: 2,
      name_en: "Cardiac Care",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Z.S. Meharwal",
    name_ar: "rahul u",
    about_en:
      "Dr. Z.S. Meharwal is a renowned cardiothoracic and vascular surgeon with over 30 years of experience. As a founding member of Fortis Escorts Heart Institute, he has performed over 30,000 cardiac surgeries including heart transplants and LVAD implantation",
    about_ar: "i am dr u",
    experience_en: "8",
    experience_ar: "8",
    qualification_en: "MBBS",
    qualification_ar: "MBBS",
    specialist_en: "Cardiology",
    specialist_ar: "Cardiology",
    image: DoctorImage,
  },
];

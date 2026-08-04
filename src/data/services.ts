import ServiceImage from "../assets/services/services.jpg";

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Airport Pickup & Drop",
    description:
      "Complete guidance and support for obtaining a medical visa, including documentation, Comfortable airport pickup and drop-off services to ensure a smooth and hassle-free journey from arrival to your accommodation or hospital.",
    image: ServiceImage,
    path: "/services/airport-pickup-drop",
  },
  {
    id: 2,
    title: "Medical Visa Assistance",
    description:
      "Complete guidance and support for obtaining a medical visa, including documentation, application assistance, and travel planning.",
    image: ServiceImage,
    path: "/services/medical-visa-assistance",
  },
  {
    id: 3,
    title: "Interpreter Services",
    description:
      "Professional interpreters are available to help you communicate effectively with doctors, hospital staff, and local service providers.",
    image: ServiceImage,
    path: "/services/interpreter",
  },
  {
    id: 4,
    title: "Doctor Appointment Arrangement",
    description:
      "We schedule appointments with experienced specialists and coordinate your consultations to ensure timely medical care.",
    image: ServiceImage,
    path: "/services/doctor-appointment",
  },
  {
    id: 5,
    title: "Pre-Travel Video Consultation",
    description:
      "Connect with leading doctors through secure video consultations before your trip to discuss your medical condition and treatment options.",
    image: ServiceImage,
    path: "/services/pre-travel-video-consultation",
  },
  {
    id: 6,
    title: "Budget Accommodation",
    description:
      "Affordable and comfortable accommodation options near hospitals, carefully selected to match your budget and preferences.",
    image: ServiceImage,
    path: "/services/budget-accommodation",
  },
  {
    id: 7,
    title: "Second Opinion",
    description:
      "Receive expert second opinions from renowned specialists to help you make informed decisions about your diagnosis and treatment plan.",
    image: ServiceImage,
    path: "/services/second-opinion",
  },
  {
    id: 8,
    title: "Financial Services",
    description:
      "Assistance with treatment cost estimates, payment planning, insurance guidance, and financial support throughout your medical journey.",
    image: ServiceImage,
    path: "/services/financial-services",
  },
]; // import Cardiology from "../assets/dr.jpeg";
// import Orthopedics from "../assets/dr.jpeg";
// import Oncology from "../assets/dr.jpeg";

// export interface Service {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   path: string;
// }

// export const services: Service[] = [
//   {
//     id: 1,
//     title: "Cardiology",
//     description:
//       "Comprehensive cardiac care including coronary artery bypass grafting (CABG), angioplasty, heart valve surgery, treatment of arrhythmias, heart failure management, and preventive cardiology.",
//     image: Cardiology,
//     path: "/services/cardiology",
//   },
//   {
//     id: 2,
//     title: "Orthopedics",
//     description:
//       "Joint replacement surgery, sports medicine, spine surgery, arthroscopy, trauma care, arthritis treatment, fracture management, and rehabilitation.",
//     image: Orthopedics,
//     path: "/services/orthopedics",
//   },
//   {
//     id: 3,
//     title: "Oncology",
//     description:
//       "Advanced cancer treatment including chemotherapy, immunotherapy, targeted therapy, radiation therapy, surgical oncology, and personalized cancer care.",
//     image: Oncology,
//     path: "/services/oncology",
//   },
// ];

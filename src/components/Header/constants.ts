import type { TFunction } from "i18next";
import type {
  DropdownOption,
  LanguageOption,
  MenuKey,
  NavLinkItem,
} from "./types";

// Top level nav links. Ones with a MenuKey open a flyout/collapse instead of navigating directly.
export const navLinks: (NavLinkItem & { menuKey?: MenuKey })[] = [
  {
    label: "navbar.home",
    path: "/",
  },

  {
    label: "navbar.doctors",
    path: "/Doctors",
    // menuKey: "doctors",
  },
  {
    label: "navbar.hospitals",
    path: "/Hospitals",
    // menuKey: "hospitals",
  },
  {
    label: "navbar.blogs",
    path: "/Blogs",
  },
];

export const getLanguageOptions = (t: TFunction): LanguageOption[] => [
  { label: t("language.english"), value: "en" },
  { label: t("language.arabic"), value: "ar" },
];

export const getTreatmentOptions = (t: TFunction): DropdownOption[] => [
  {
    label: t("navbar.CardiacTreatmentsAndSurgeries"),
    path: "/CardiacTreatmentsAndSurgeries",
  },
  {
    label: t("navbar.PediatricCardiacTreatmentAndSurgeries"),
    path: "/PediatricCardiacTreatmentAndSurgeries",
  },
  {
    label: t("navbar.TreatmentsAndSurgeriesByOrthopaedists"),
    path: "/TreatmentsAndSurgeriesByOrthopaedists",
  },
  {
    label: t("navbar.PediatricOrthoTreatmentAndSurgeries"),
    path: "/PediatricOrthoTreatmentAndSurgeries",
  },
  {
    label: t("navbar.BoneTumors"),
    path: "/BoneTumors",
  },
];

export const getDoctorOptions = (t: TFunction): DropdownOption[] => [
  {
    label: t("navbar.cardiacSurgeons"),
    path: "/Doctors/CardiacSurgeons",
  },
  {
    label: t("navbar.cardiologist"),
    path: "/Doctors/Cardiologist",
  },
  {
    label: t("navbar.boneOrtho"),
    path: "/Doctors/BoneAndOrtho",
  },
];

export const getTransplantOptions = (t: TFunction): DropdownOption[] => [
  {
    label: t("transplants_replacements.liver_transplant"),
    path: "/procedures/Livertransplant",
  },
  {
    label: t("transplants_replacements.kidney_transplant"),
    path: "/procedures/KidneyTransplant",
  },
  {
    label: t("transplants_replacements.heart_transplant_implant"),
    path: "/procedures/HeartTransplantAndImplant",
  },
];

export const getHospitalOptions = (t: TFunction): DropdownOption[] => [
  {
    label: t("hospitals.fortis"),
    path: "/hospitals/Fortis",
  },
  {
    label: t("hospitals.medanta"),
    path: "/hospitals/Medanta",
  },
  {
    label: t("hospitals.apollo"),
    path: "/hospitals/Apollo",
  },
  {
    label: t("hospitals.max"),
    path: "/hospitals/Max",
  },
  {
    label: t("hospitals.artems"),
    path: "/hospitals/Artemis",
  },
  {
    label: t("hospitals.amrita"),
    path: "/hospitals/Amrita",
  },
  {
    label: t("hospitals.manipal"),
    path: "/hospitals/Manipal",
  },
];

// Central lookup so the component can grab the right option list for any MenuKey
// without a chain of if/else blocks.
export const getMenuOptions = (
  t: TFunction,
): Record<MenuKey, DropdownOption[]> => ({
  treatments: getTreatmentOptions(t),
  transplants: getTransplantOptions(t),
  doctors: getDoctorOptions(t),
  hospitals: getHospitalOptions(t),
});

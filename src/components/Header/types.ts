import type { Dispatch, SetStateAction } from "react";

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface DropdownOption {
  label: string;
  path: string;
}

export interface LanguageOption {
  label: string;
  value: string;
}

// The four flyout menus on desktop / collapsible sections on mobile.
export type MenuKey = "treatments" | "transplants" | "doctors" | "hospitals";

export type AnchorMap = Record<MenuKey, HTMLElement | null>;
export type OpenMap = Record<MenuKey, boolean>;

export type SetAnchorMap = Dispatch<SetStateAction<AnchorMap>>;
export type SetOpenMap = Dispatch<SetStateAction<OpenMap>>;

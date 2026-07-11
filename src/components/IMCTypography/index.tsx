import React from "react";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { colors } from "../../styles/colors";
import { fontFamily } from "../../styles/fontFamily";

type Variant = "h1" | "h2" | "h3" | "subtitle" | "body" | "caption" | "label";

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  color?: string;
  weight?: string | number;
  size?: string;
  style?: React.CSSProperties;
  component?: React.ElementType; // override HTML element if needed
}

const variantMapping: Record<Variant, React.CSSProperties> = {
  h1: { fontSize: fontSizes.xxl, fontWeight: fontWeights.extraBold },
  h2: { fontSize: fontSizes.xl, fontWeight: fontWeights.bold },
  h3: { fontSize: fontSizes.lg, fontWeight: fontWeights.medium },
  subtitle: { fontSize: fontSizes.md, fontWeight: fontWeights.medium },
  body: { fontSize: fontSizes.base, fontWeight: fontWeights.regular },
  caption: { fontSize: fontSizes.sm, fontWeight: fontWeights.light },
  label: { fontSize: fontSizes.xs, fontWeight: fontWeights.medium },
};

// Mapping variant to HTML element
const variantElementMapping: Record<Variant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "h4",
  body: "p",
  caption: "span",
  label: "label",
};

const IMCTypography: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  color = colors.black,
  weight,
  size,
  style = {},
  component,
}) => {
  const baseStyle = variantMapping[variant];
  // ✅ Ensure TypeScript knows this is an ElementType
  const Element: React.ElementType = component || variantElementMapping[variant];

  const mergedStyle: React.CSSProperties = {
    fontSize: size || baseStyle.fontSize,
    fontWeight: weight || baseStyle.fontWeight,
    fontFamily: fontFamily.times,
    color,
    margin: 0,
    ...style,
  };

  return <Element style={mergedStyle}>{children}</Element>;
};

export default IMCTypography;
// import React from "react";
// import { fontSizes } from "../../styles/fontSizes";
// import { fontWeights } from "../../styles/fontWeights";
// import { colors } from "../../styles/colors";
// import { fontFamily } from "../../styles/fontFamily";

// type Variant = "h1" | "h2" | "h3" | "subtitle" | "body" | "caption" | "label";

// interface TypographyProps {
//   variant?: Variant;
//   children: React.ReactNode;
//   color?: string;
//   weight?: string | number; 
//   size?: string;
//   style?: React.CSSProperties;
// }

// const variantMapping: Record<Variant, React.CSSProperties> = {
//   h1: { fontSize: fontSizes.xxl, fontWeight: fontWeights.extraBold },
//   h2: { fontSize: fontSizes.xl, fontWeight: fontWeights.bold },
//   h3: { fontSize: fontSizes.lg, fontWeight: fontWeights.medium },
//   subtitle: { fontSize: fontSizes.md, fontWeight: fontWeights.medium },
//   body: { fontSize: fontSizes.base, fontWeight: fontWeights.regular },
//   caption: { fontSize: fontSizes.sm, fontWeight: fontWeights.light },
//   label: { fontSize: fontSizes.xs, fontWeight: fontWeights.medium },
// };

// const IMCTypography: React.FC<TypographyProps> = ({
//   variant = "body",
//   children,
//   color = colors.black,
//   weight,
//   size,
//   style = {},
// }) => {
//   const baseStyle = variantMapping[variant];

//   const mergedStyle: React.CSSProperties = {
//     fontSize: size || baseStyle.fontSize,
//     fontWeight: weight || baseStyle.fontWeight,
//     fontFamily: fontFamily.times,
//     color,
//     ...style,
//   };

//   return <p style={mergedStyle}>{children}</p>;
// };

// export default IMCTypography;

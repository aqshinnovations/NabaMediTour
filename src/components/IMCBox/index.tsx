import React from "react";
import type { CSSProperties, ReactNode } from "react";
import { colors } from "../../styles/colors";
import { spacing } from "../../styles/spacing";
import { shadows } from "../../styles/shadows";
import { borders } from "../../styles/borders";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  style?: CSSProperties;
}

const IMCBox: React.FC<BoxProps> = ({
  children,
  padding = spacing.none,
  backgroundColor = colors.transparent,
  borderRadius = borders.none,
  boxShadow = shadows.none,
  margin = spacing.xs,

  style = {},
  ...rest
}) => {
  return (
    <div
      style={{
        padding,
        backgroundColor,
        borderRadius,
        boxShadow,
        margin,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default IMCBox;
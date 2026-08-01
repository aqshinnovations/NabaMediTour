import heroBg from "../../../../assets/images/hero_Bg.avif";
import { borderRadius } from "../../../../styles/borders";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { shadows } from "../../../../styles/shadows";
import { sizes } from "../../../../styles/sizes";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  hero: {
    width: "100%",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(0,0,0,.72) 0%,
        rgba(0,0,0,.58) 35%,
        rgba(0,0,0,.40) 70%,
        rgba(0,0,0,.28) 100%
      ),
      url(${heroBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${spacing.xxxl}`,
  },

  content: {
    maxWidth: "650px",
    display: "flex",
    flexDirection: "column" as const,
    gap: spacing.lg,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    width: "fit-content",
    padding: `${spacing.sm} ${spacing.base}`,
    borderRadius: "999px",
    background: "rgba(22,185,165,.15)",
    border: `1px solid ${colors.mintGreen}`,
    color: colors.white,
    boxShadow: shadows.light,
  },

  heading: {
    lineHeight: 1,
  },

  headingHighlight: {
    color: colors.mintGreen,
  },

  description: {
    opacity: 0.9,
    lineHeight: 1.5,
    maxWidth: "620px",
  },

  buttonContainer: {
    display: "flex",
    gap: spacing.md,
    marginTop: spacing.sm,
  },

  primaryButton: {
    background: colors.msBlue,
    color: colors.white,
    border: "none",
    borderRadius: borderRadius.lg,
    padding: spacing.buttonLg,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    cursor: "pointer",
    minHeight: sizes.height.lg,
  },

  secondaryButton: {
    background: "rgba(255,255,255,.12)",
    color: colors.white,
    border: `1px solid rgba(255,255,255,.2)`,
    borderRadius: borderRadius.lg,
    padding: spacing.buttonLg,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    cursor: "pointer",
    minHeight: sizes.height.lg,
  },
};

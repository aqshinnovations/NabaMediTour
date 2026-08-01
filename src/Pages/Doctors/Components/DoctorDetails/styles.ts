import { borderRadius } from "../../../../styles/borders";
import { colors } from "../../../../styles/colors";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  hero: {
    width: "100%",
    backgroundColor: colors.secondaryTeal,
    padding: `${spacing.xl} 0 ${spacing.xxxl}`,
  },

  heroContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${spacing.base}`,
  },

  backButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,
    color: colors.white,
    cursor: "pointer",
    marginBottom: spacing.xl,
  },

  backText: {
    opacity: 0.9,
  },

  doctorHeader: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxl,
    flexWrap: "wrap" as const,
  },

  doctorImage: {
    width: "170px",
    height: "170px",
    borderRadius: borderRadius.full,
    objectFit: "cover" as const,
    border: "6px solid rgba(255,255,255,.2)",
  },

  speciality: {
    marginTop: spacing.sm,
  },

  experience: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.sm,
  },

  body: {
    maxWidth: "1200px",
    margin: `${spacing.xxxl} auto`,
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: spacing.xxxl,
    padding: `0 ${spacing.base}`,
  },

  sectionTitle: {
    marginBottom: spacing.base,
  },

  about: {
    lineHeight: 1.9,
    marginBottom: spacing.xxxl,
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: spacing.xxxl,
    marginTop: spacing.xl,
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
};

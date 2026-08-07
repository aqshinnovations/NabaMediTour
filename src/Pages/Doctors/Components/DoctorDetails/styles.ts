import type { CSSProperties } from "@mui/material";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { spacing } from "../../../../styles/spacing";

export const styles = {
  statusContainer: {
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    backgroundColor: colors.primary,
  },

  heroContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: spacing.lg,
  },

  backButton: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: "pointer",
    width: "fit-content",
    marginBottom: spacing.lg,
  },

  backIcon: {
    fontSize: fontSizes.md,
    color: colors.white,
  },

  backText: {
    cursor: "pointer",
  },

  doctorHeader: {
    display: "flex",
    alignItems: "center",
    gap: spacing.lg,
  },

  doctorImage: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "50%",
  } satisfies CSSProperties,
  speciality: {
    marginTop: spacing.sm,
  },

  experience: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  lightIcon: {
    color: colors.light,
  },

  body: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: spacing.xl,
  },

  sectionTitle: {
    marginBottom: spacing.md,
  },

  about: {
    marginBottom: spacing.xl,
    lineHeight: 1.8,
  },

  infoTitle: {
    marginBottom: spacing.md,
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },

  primaryIcon: {
    color: colors.primary,
  },

  gallery: {
    backgroundColor: colors.iceBlue,
    padding: spacing.md,
    margin: 0,
  },

  galleryTitle: {
    marginBottom: spacing.lg,
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: spacing.md,

    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },

    "@media (max-width: 600px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },

  galleryItem: {
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },

  galleryImage: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",

    ":hover": {
      transform: "scale(1.05)",
    },
  } satisfies CSSProperties,
};

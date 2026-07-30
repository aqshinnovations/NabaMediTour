export const styles = {
  section: {
    background: "linear-gradient(180deg, #0F999C 0%, #0E8C97 100%)",
    py: {
      xs: 8,
      md: 10,
    },
    textAlign: "center",
  },

  stars: {
    color: "#FFC107",
    display: "flex",
    justifyContent: "center",
    gap: 0.5,
    mb: 3,
  },

  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },
    mb: 2,
  },

  subtitle: {
    color: "rgba(255,255,255,0.95)",
    fontSize: {
      xs: "1rem",
      md: "1.35rem",
    },
    maxWidth: 850,
    mx: "auto",
    mb: 5,
    lineHeight: 1.6,
  },

  button: {
    backgroundColor: "#fff",
    color: "#007C80",
    borderRadius: "14px",
    px: 5,
    py: 2,
    fontSize: "1.15rem",
    fontWeight: 600,
    textTransform: "none",
    minWidth: 310,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    transition: "0.3s",

    "&:hover": {
      backgroundColor: "#F5F5F5",
      transform: "translateY(-3px)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
    },
  },

  arrow: {
    ml: 1,
    fontSize: 24,
  },
};

export const styles = {
  hospitalCard: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #ececec",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
      transform: "translateY(-4px)",
    },
  },

  hospitalImage: {
    width: "100%",
    height: {
      xs: 220,
      sm: 230,
      md: 240,
    },
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
  },

  hospitalContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    p: {
      xs: 2,
      sm: 2.5,
      md: 3,
    },
  },

  hospitalTitle: {
    m: 0,
    fontWeight: 700,
    color: "#0f172a",
    fontSize: {
      xs: "1.2rem",
      sm: "1.3rem",
      md: "1.4rem",
    },
    lineHeight: 1.3,

    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  hospitalDescription: {
    color: "#475569",
    fontSize: "0.875rem",
    lineHeight: 1.5,
    margin: 0,
    mt: 1.5,

    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  hospitalLocation: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
    color: "#64748b",
    mt: 1.25,

    "& svg": {
      flexShrink: 0,
    },

    "& .MuiTypography-root": {
      fontSize: "0.875rem",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
  },

  hospitalTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    mt: 2,
  },

  tag: {
    backgroundColor: "#ecfdf5",
    color: "#0f766e",
    px: 1.75,
    py: 0.75,
    borderRadius: "50px",
    fontSize: "0.8rem",
    fontWeight: 500,
  },

  count: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
  },

  govtLogos: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 1,
    mt: 2,
  },

  govtLogo: {
    width: 45,
    height: 45,
    objectFit: "contain",
  },
};

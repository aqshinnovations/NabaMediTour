// style.ts

export const styles = {
  hospitalCard: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "stretch",
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #ececec",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    transition: "all .3s",
    minHeight: 220,

    "&:hover": {
      boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
      transform: "translateY(-4px)",
    },
  },

  hospitalImage: {
    width: 300,
    flexShrink: 0,

    img: {
      width: 250,
      height: 200,
      objectFit: "cover",
    },

    "@media (max-width:768px)": {
      width: "100%",
      height: 240,
    },
  },

  hospitalContent: {
    flex: 1,
    p: {
      xs: 2,
      sm: 3,
      md: 3.5,
    },
  },

  hospitalTitle: {
    m: 0,
    fontWeight: 700,
    color: "#0f172a",
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.5rem",
    },
  },

  hospitalDescription: {
    color: "#475569",
    fontSize: 10,
    lineHeight: 1.7,
    marginBottom: 3,

    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  hospitalLocation: {
    display: "flex",
    alignItems: "center",
    gap: 0.75,
    color: "#64748b",
    my: 1.5,
    fontSize: 14,
  },

  hospitalTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1.25,
  },

  tag: {
    backgroundColor: "#ecfdf5",
    color: "#0f766e",
    px: 2.25,
    py: 1,
    borderRadius: "50px",
    fontSize: 10,
    fontWeight: 500,
  },

  count: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
  },

  hospitalArrow: {
    width: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 26,
    color: "#94a3b8",
    borderLeft: "1px solid #f1f5f9",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#f8fafc",
      color: "#0f172a",
    },

    "@media (max-width:768px)": {
      width: "100%",
      height: 60,
      borderLeft: "none",
      borderTop: "1px solid #eee",
    },
  },
};

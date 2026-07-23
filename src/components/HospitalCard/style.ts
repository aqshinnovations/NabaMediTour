// style.ts

export const styles = {
  hospitalCard: {
    width: "90%",
    maxWidth: 860,
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "#ffffff",

    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #ececec",
    boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    height: 200,

    "&:hover": {
      boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
      transform: "translateY(-4px)",
    },

    "@media (max-width:768px)": {
      flexDirection: "column",
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
    p: 3.5,

    h2: {
      margin: 0,
      fontSize: 24,
      fontWeight: 700,
      color: "#0f172a",

      "@media (max-width:768px)": {
        fontSize: 26,
      },
    },

    p: {
      color: "#475569",
      fontSize: 10,
      lineHeight: 1.7,
      marginBottom: 3,

      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
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

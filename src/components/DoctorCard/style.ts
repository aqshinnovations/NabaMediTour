export const styles = {
  card: {
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #E8EEF3",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
    transition: "0.3s",
    cursor: "pointer",
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 10px 25px rgba(0,0,0,0.12)",
    },
  },

  image: {
    height: 320,
    objectFit: "cover",
  },

  content: {
    p: 3,
  },

  name: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#0F172A",
    mb: 0.5,
  },

  specialization: {
    color: "#009688",
    fontSize: "1rem",
    fontWeight: 500,
    mb: 2,
  },

  experienceContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "#6B7280",
    mb: 3,
  },

  icon: {
    fontSize: 20,
  },

  experience: {
    fontSize: "0.95rem",
  },
  about: {
    fontSize: "0.8rem",
  },

  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.5,
    color: "#009688",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",

    "&:hover": {
      color: "#00796B",
    },
  },
};

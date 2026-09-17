export const styles = {
  card: {
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #E8EEF3",
    boxShadow: "0px 4px 15px rgba(0,0,0,0.06)",
    transition: "0.3s",
    cursor: "pointer",
    width: "200px",
    mb: "20px",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 10px 25px rgba(0,0,0,0.12)",
    },
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  },

  content: {
    p: 1,
  },

  name: {
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#0F172A",
    mb: 0.5,
  },

  specialization: {
    color: "#009688",
    fontSize: "0.6rem",
    fontWeight: 500,
  },

  experienceContainer: {
    display: "flex",
    alignItems: "center",
    color: "#6B7280",
    my: 0.5,
  },

  icon: {
    fontSize: "0.6rem",
    fontWeight: "800",
  },

  experience: {
    fontSize: "0.6rem",
    fontWeight: "800",
  },
  about: {
    fontSize: "0.56rem",
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

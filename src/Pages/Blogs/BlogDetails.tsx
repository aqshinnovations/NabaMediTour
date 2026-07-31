import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import IMCBox from "../../components/IMCBox";
import IMCTypography from "../../components/IMCTypography";

import { blogs } from "../../data/blogs";
import { colors } from "../../styles/colors";
import { fontWeights } from "../../styles/fontWeights";
import { fontSizes } from "../../styles/fontSizes";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <IMCBox style={{ padding: 40 }}>
        <IMCTypography>Blog not found.</IMCTypography>
      </IMCBox>
    );
  }

  return (
    <IMCBox
      style={{
        maxWidth: 900,
        margin: "60px auto",
        padding: "0 20px",
      }}
    >
      {/* Back */}

      <IMCBox
        onClick={() => navigate("/blogs")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
          color: colors.primary,
          marginBottom: 30,
        }}
      >
        <ArrowBackIcon fontSize="small" />

        <IMCTypography weight={fontWeights.medium} color={colors.primary}>
          Back to Blogs
        </IMCTypography>
      </IMCBox>

      {/* Image */}

      <img
        src={blog.cover_image}
        alt={blog.title}
        style={{
          width: "100%",
          height: 450,
          objectFit: "cover",
          borderRadius: 18,
        }}
      />

      {/* Author */}

      <IMCBox
        style={{
          display: "flex",
          gap: 25,
          marginTop: 25,
          color: "#6B7280",
        }}
      >
        <IMCBox
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <PersonOutlineIcon fontSize="small" />
          <IMCTypography>{blog.author}</IMCTypography>
        </IMCBox>

        <IMCBox
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <CalendarTodayOutlinedIcon fontSize="small" />
          <IMCTypography>{blog.created_at}</IMCTypography>
        </IMCBox>
      </IMCBox>

      {/* Title */}

      <IMCTypography
        variant="h3"
        size={fontSizes.xxl}
        weight={fontWeights.bold}
        style={{
          marginTop: 25,
          marginBottom: 20,
        }}
      >
        {blog.title}
      </IMCTypography>

      {/* Content */}

      <IMCTypography
        style={{
          lineHeight: 1.9,
          color: "#555",
          fontSize: 18,
        }}
      >
        {blog.content}
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        tincidunt ipsum. Integer vel turpis sed tortor suscipit fermentum.
        Curabitur tincidunt, nisl non aliquet egestas, risus lacus luctus augue,
        quis malesuada lorem velit sit amet nibh.
        <br />
        <br />
        Donec ultrices, elit sed hendrerit pellentesque, arcu purus scelerisque
        augue, sed suscipit lacus sapien sed erat. Suspendisse potenti. Aliquam
        erat volutpat.
      </IMCTypography>
    </IMCBox>
  );
};

export default BlogDetails;

import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";

import { blogs } from "../../../../data/blogs";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { styles } from "./styles";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <IMCBox style={styles.notFound}>
        <IMCTypography>Blog not found.</IMCTypography>
      </IMCBox>
    );
  }

  return (
    <IMCBox style={styles.container}>
      {/* Back */}
      <IMCBox onClick={() => navigate("/blogs")} style={styles.backButton}>
        <ArrowBackIcon fontSize="small" />

        <IMCTypography weight={fontWeights.medium} color={colors.primary}>
          Back to Blogs
        </IMCTypography>
      </IMCBox>

      {/* Cover Image */}
      <img src={blog.cover_image} alt={blog.title} style={styles.image} />

      {/* Meta */}
      <IMCBox style={styles.metaContainer}>
        <IMCBox style={styles.metaItem}>
          <PersonOutlineIcon fontSize="small" />

          <IMCTypography color={colors.textSecondary}>
            {blog.author}
          </IMCTypography>
        </IMCBox>

        <IMCBox style={styles.metaItem}>
          <CalendarTodayOutlinedIcon fontSize="small" />

          <IMCTypography color={colors.textSecondary}>
            {blog.created_at}
          </IMCTypography>
        </IMCBox>
      </IMCBox>

      {/* Title */}
      <IMCTypography
        variant="h3"
        size={fontSizes.xxl}
        weight={fontWeights.bold}
        style={styles.title}
      >
        {blog.title}
      </IMCTypography>

      {/* Content */}
      <IMCTypography style={styles.content}>{blog.content}</IMCTypography>
    </IMCBox>
  );
};

export default BlogDetails;

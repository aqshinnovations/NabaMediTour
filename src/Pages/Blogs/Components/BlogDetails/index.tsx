import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useTranslation } from "react-i18next";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";

import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import apiCallUnsecureGet, { apiUrl } from "../../../../utils/api";
import i18n from "../../../../i18n";
interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  cover_image: string;
  created_at: string;
  language: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    apiCallUnsecureGet<Blog>(
      `${apiUrl.blogDetails}?id=${id}`,
      (res) => {
        console.log("Blog Details API Response:", res);

        if (res.list) {
          setBlog(res.list);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Blog Details API Error:", error);
        setLoading(false);
      },
    );
  }, [id]);
  if (loading) {
    return (
      <IMCBox style={styles.container}>
        {" "}
        <IMCTypography> {t("common.loading")} </IMCTypography>{" "}
      </IMCBox>
    );
  }
  if (!blog) {
    return (
      <IMCBox style={styles.container}>
        {" "}
        <IMCTypography> {t("blogDetails.blogNotFound")} </IMCTypography>{" "}
      </IMCBox>
    );
  }

  // Use the blog's language field
  const isArabic = blog.language === "ar";
  const isAppArabic = i18n.language === "ar";
  return (
    <IMCBox
      style={{
        ...styles.container,
        flexDirection: isAppArabic ? "row" : "row-reverse",
        alignSelf: isAppArabic ? " flex-end" : "flex-end",
      }}
    >
      {/* Back */}
      <IMCBox
        onClick={() => navigate("/blogs")}
        style={{
          ...styles.backButton,
          flexDirection: isArabic ? "row-reverse" : "row",
        }}
      >
        {isAppArabic ? (
          <ArrowForwardIcon fontSize="small" sx={{ color: colors.primary }} />
        ) : (
          <ArrowBackIcon fontSize="small" sx={{ color: colors.primary }} />
        )}

        <IMCTypography color={colors.primary}>
          {t("blogDetails.backToBlogs")}
        </IMCTypography>
      </IMCBox>

      {/* Cover Image */}
      <img src={blog.cover_image} alt={blog.title} style={styles.image} />

      {/* Meta */}
      <IMCBox
        style={{
          ...styles.metaContainer,
          flexDirection: isArabic ? "row-reverse" : "row",
        }}
      >
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
        style={{
          ...styles.title,
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {blog.title}
      </IMCTypography>

      {/* Content */}
      <IMCTypography
        style={{
          ...styles.content,
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {blog.content}
      </IMCTypography>
    </IMCBox>
  );
};

export default BlogDetails;

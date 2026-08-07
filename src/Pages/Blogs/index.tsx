import { Grid } from "@mui/material";

import IMCBox from "../../components/IMCBox";
import BlogCard from "../../components/BlogCard";
import PageHero from "../../components/PageHero";

import { blogs } from "../../data/blogs";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { i18n, t } = useTranslation();

  return (
    <>
      <PageHero title={t("blogs.title")} description={t("blogs.description")} />

      <IMCBox style={styles.section}>
        <Grid container spacing={4} sx={styles.grid}>
          {blogs.map((blog) => (
            <Grid key={blog.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <BlogCard
                id={blog.id}
                image={blog.cover_image}
                title={blog.title}
                content={blog.content}
                author={blog.author}
                created_at={blog.created_at}
              />
            </Grid>
          ))}
        </Grid>
      </IMCBox>
    </>
  );
};

export default Blogs;

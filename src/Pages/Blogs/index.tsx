import { Grid } from "@mui/material";

import IMCBox from "../../components/IMCBox";
import BlogCard from "../../components/BlogCard";
import PageHero from "../../components/PageHero";

import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiCallUnsecureGet, { apiUrl } from "../../utils/api";

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  cover_image: string;
  created_at: string;
  language: string;
}

const Blogs = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    apiCallUnsecureGet<Blog[]>(
      apiUrl.blogList,
      (res) => {
        console.log("Blogs API Response:", res);
        console.log("Blogs Data:", res.data);

        setBlogs(res.list ?? []);
      },
      (error) => {
        console.error("Blogs API Error:", error);
      },
    );
  }, []);
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
                created_at={blog.created_at.split(" ")[0]}
                direction={blog.language === "ar" ? "ltr" : "rtl"}
                readMore={
                  blog.language === "ar"
                    ? t("blogs.readMore", { lng: "ar" })
                    : t("blogs.readMore", { lng: "en" })
                }
              />
            </Grid>
          ))}
        </Grid>
      </IMCBox>
    </>
  );
};

export default Blogs;

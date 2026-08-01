import { Grid } from "@mui/material";

import IMCBox from "../../components/IMCBox";
import BlogCard from "../../components/BlogCard";
import PageHero from "../../components/PageHero";

import { blogs } from "../../data/blogs";
import { styles } from "./styles";

const Blogs = () => {
  return (
    <>
      <PageHero
        title="Our Blogs"
        description="Stay updated with the latest healthcare insights, medical news, and wellness tips from our experts."
      />

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

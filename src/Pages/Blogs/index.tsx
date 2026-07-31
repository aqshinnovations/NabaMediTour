import { Grid } from "@mui/material";
import IMCBox from "../../components/IMCBox";
import BlogCard from "../../components/BlogCard";
import { blogs } from "../../data/blogs";
import PageHero from "../../components/PageHero";

const Blogs = () => {
  return (
    <>
      {/* Banner */}

      <PageHero
        title="Our Blogs"
        description="Stay updated with the latest healthcare insights, medical news, and wellness tips from our experts."
      />

      {/* Blog List */}

      <IMCBox
        style={{
          maxWidth: "1280px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
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

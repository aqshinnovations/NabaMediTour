// import IMCBox from "../../components/IMCBox";
// import { spacing } from "../../styles/spacing";
// import IMCTypography from "../../components/IMCTypography";
// import { fontSizes } from "../../styles/fontSizes";
// import { fontWeights } from "../../styles/fontWeights";
// import { colors } from "../../styles/colors";

// const Blogs = () => {
//   return (
//     <>
//       <IMCBox
//         margin={spacing.none}
//         style={{
//           width: "100%",
//           height: "300px",
//           padding: "30px",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <IMCTypography
//           variant="h3"
//           size={fontSizes.xxl}
//           weight={fontWeights.semiBold}
//           color={colors.primary}
//           style={{ textAlign: "center" }}
//         >
//           Blogs
//         </IMCTypography>
//       </IMCBox>
//     </>
//   );
// };

// export default Blogs;
import { Grid } from "@mui/material";
import IMCBox from "../../components/IMCBox";
import IMCTypography from "../../components/IMCTypography";
import BlogCard from "../../components/BlogCard";

import { blogs } from "../../data/blogs";

import { spacing } from "../../styles/spacing";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { colors } from "../../styles/colors";

const Blogs = () => {
  return (
    <>
      {/* Banner */}

      <IMCBox
        margin={spacing.none}
        style={{
          width: "100%",
          height: "300px",
          background: "#0f8793",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <IMCTypography
          variant="h3"
          size={fontSizes.xxl}
          weight={fontWeights.bold}
          color={colors.white}
        >
          Health Insights Blog
        </IMCTypography>

        <IMCTypography
          color={colors.white}
          style={{
            marginTop: 15,
            textAlign: "center",
            maxWidth: 650,
          }}
        >
          Expert articles on medical treatments, technology and patient care
          from our specialists.
        </IMCTypography>
      </IMCBox>

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

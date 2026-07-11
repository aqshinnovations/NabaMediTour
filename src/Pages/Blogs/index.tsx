import IMCBox from "../../components/IMCBox";
import { spacing } from "../../styles/spacing";
import IMCTypography from "../../components/IMCTypography";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { colors } from "../../styles/colors";

const Blogs = () => {
  return (
    <>
      <IMCBox
        margin={spacing.none}
        style={{
          width: "100%",
          height: "300px",
          padding: "30px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IMCTypography
          variant="h3"
          size={fontSizes.xxl}
          weight={fontWeights.semiBold}
          color={colors.primary}
          style={{ textAlign: "center" }}
        >
          Blogs
        </IMCTypography>
      </IMCBox>
    </>
  );
};

export default Blogs;

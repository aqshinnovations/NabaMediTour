import IMCBox from "../../components/IMCBox";
import IMCTypography from "../../components/IMCTypography";
import { colors } from "../../styles/colors";
import { fontWeights } from "../../styles/fontWeights";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const qualifications = [
  "MD - Cardiology",
  "DM - Cardiology",
  "FACC",
  "Interventional Cardiology Fellowship",
];
const specializations = [
  "Coronary Angioplasty",
  "Structural Heart Disease",
  "Heart Failure",
  "Preventive Cardiology",
];

const DoctorsDetails = () => {
  return (
    <>
      {/* Hero Section */}
      <IMCBox
        style={{
          width: "100%",
          background: "#0f8793",
          padding: "60px 0",
        }}
      >
        <IMCBox
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            padding: "0 20px",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400"
            alt="doctor"
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid rgba(255,255,255,.2)",
            }}
          />

          <IMCBox>
            <IMCTypography
              variant="h2"
              size="42"
              weight={fontWeights.bold}
              color="#fff"
            >
              Dr. Rajesh Kumar
            </IMCTypography>

            <IMCTypography
              variant="h3"
              size="26"
              color={colors.light}
              style={{ marginTop: 8 }}
            >
              Cardiologist
            </IMCTypography>

            <IMCBox
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 10,
              }}
            >
              <AccessTimeIcon sx={{ color: colors.light }} />

              <IMCTypography variant="body" size="26" color={colors.light}>
                22 years experience
              </IMCTypography>
            </IMCBox>
          </IMCBox>
        </IMCBox>
      </IMCBox>

      {/* Body */}
      <IMCBox
        style={{
          maxWidth: "1200px",
          margin: "60px auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "50px",
          padding: "0 20px",
        }}
      >
        {/* Left */}
        <IMCBox>
          <IMCTypography
            variant="h3"
            weight={fontWeights.bold}
            size="30"
            style={{ marginBottom: 20 }}
          >
            About
          </IMCTypography>

          <IMCTypography
            variant="body"
            size="18"
            color={colors.textSecondary}
            style={{
              lineHeight: 1.9,
              marginBottom: 50,
            }}
          >
            Dr. Rajesh Kumar is a renowned interventional cardiologist with over
            22 years of experience. He has performed over 10,000 angioplasties
            and specializes in complex coronary interventions and structural
            heart disease.
          </IMCTypography>

          {/* Specializations */}
          <IMCBox
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              marginTop: "40px",
            }}
          >
            {/* Qualifications */}
            <IMCBox>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                Qualifications
              </IMCTypography>

              {qualifications.map((item) => (
                <IMCBox
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 15,
                    marginBottom: 18,
                  }}
                >
                  <SchoolOutlinedIcon sx={{ color: colors.primary }} />

                  <IMCTypography variant="body" size="20">
                    {item}
                  </IMCTypography>
                </IMCBox>
              ))}
            </IMCBox>

            {/* Specializations */}
            <IMCBox>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                Specializations
              </IMCTypography>

              {specializations.map((item) => (
                <IMCBox
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 15,
                    marginBottom: 18,
                  }}
                >
                  <BookmarkBorderIcon sx={{ color: colors.primary }} />

                  <IMCTypography variant="body" size="20">
                    {item}
                  </IMCTypography>
                </IMCBox>
              ))}
            </IMCBox>
          </IMCBox>
        </IMCBox>

        {/* Right Card */}
      </IMCBox>
    </>
  );
};

export default DoctorsDetails;

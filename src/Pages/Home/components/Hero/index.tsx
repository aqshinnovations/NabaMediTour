import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";

import heroBg from "../../../../assets/images/hero_Bg.avif";

import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";

const Hero = () => {
  return (
    <IMCBox
      margin={spacing.none}
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(0,0,0,.72) 0%,
            rgba(0,0,0,.58) 35%,
            rgba(0,0,0,.40) 70%,
            rgba(0,0,0,.28) 100%
          ),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <IMCBox
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        <IMCBox
          style={{
            maxWidth: "650px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Badge */}

          <IMCBox
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "rgba(22,185,165,.15)",
              border: "1px solid rgba(22,185,165,.4)",
              color: colors.white,
            }}
          >
            ❤️ Trusted by 50,000+ patients globally
          </IMCBox>

          {/* Heading */}

          <IMCTypography
            variant="h1"
            size={fontSizes.xxxxl}
            weight={fontWeights.bold}
            color={colors.white}
            style={{
              lineHeight: 1,
            }}
          >
            World-Class Healthcare,
            <br />
            <span style={{ color: colors.mintGreen }}>
              Anywhere in the World
            </span>
          </IMCTypography>

          {/* Description */}

          <IMCTypography
            variant="body"
            size={fontSizes.lg}
            color={colors.white}
            weight={fontWeights.regular}
            style={{
              opacity: 0.9,
              lineHeight: 1.0,
              maxWidth: "620px",
            }}
          >
            Connect with internationally accredited hospitals and renowned
            specialists. We handle every detail of your medical journey—from
            consultation to recovery.
          </IMCTypography>

          {/* Buttons */}

          <IMCBox
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <button
              style={{
                background: colors.msBlue,
                color: colors.white,
                border: "none",
                borderRadius: "12px",
                padding: "18px 34px",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Get Free Consultation →
            </button>

            <button
              style={{
                background: "rgba(255,255,255,.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "12px",
                padding: "18px 34px",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Explore Treatments
            </button>
          </IMCBox>
        </IMCBox>
      </IMCBox>
    </IMCBox>
  );
};

export default Hero;

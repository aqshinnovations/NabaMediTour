import { useState, useRef } from "react";
import IMCTypography from "../IMCTypography";
import IMCInput from "../IMCInput";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";
import { spacing } from "../../styles/spacing";
import IMCBox from "../IMCBox";
import { colors } from "../../styles/colors";
import IMCButton from "../IMCButton";
import { borderRadius } from "../../styles/borderRadius";
import { shadows } from "../../styles/shadows";
import { apiCallPostFormData, apiUrl } from "../../utils/api";
import { showSuccess, showError } from "../../utils/toast";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    health: "",
    report: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    const { name, email, phone, health, report } = formData;

    if (!name && !phone) {
      showError("Name and phone number are required.");
      return;
    } else if (!name) {
      showError("Name is required.");
      return;
    } else if (!phone) {
      showError("Phone number is required.");
      return;
    } 

    const formDetails = new FormData();
    formDetails.append("name", name);
    formDetails.append("email", email);
    formDetails.append("mobile", phone);
    formDetails.append("aboutHealth", health);
    if (report) {
      formDetails.append("report", report);
    }

    const formDataURl = `${apiUrl.contactUs}`;
    console.log("formDataURl", formDataURl);
    apiCallPostFormData(
      formDataURl,
      formDetails,
      (res) => {
        console.log("Success:", res);
        showSuccess("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          health: "",
          report: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
      (err) => {
        console.error("Error:", err);
        showError("Something went wrong.Please try again!");
      }
    );
  };

  return (
    <IMCBox
      backgroundColor={colors.iceBlue}
      borderRadius={borderRadius.md}
      boxShadow={shadows.heavy}
      style={{
        margin: spacing.md,
        padding: spacing.lg,
      }}
    >
      <IMCTypography
        variant="subtitle"
        size={fontSizes.lg}
        weight={fontWeights.semiBold}
        color={colors.primaryDarkBlue}
      >
        {t("ContactUs.title")}
      </IMCTypography>
      <IMCTypography
        variant="caption"
        size={fontSizes.md}
        weight={fontWeights.regular}
      >
        {t("ContactUs.substitle")}
      </IMCTypography>
      <IMCInput
        label={t("ContactUs.patientName")}
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t("ContactUs.patientNamePlaceholder")}
        required
      />

      <IMCInput
        label={t("ContactUs.email")}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t("ContactUs.emailPlaceholder")}
        // required
      />

      <IMCInput
        type="number"
        label={t("ContactUs.phone")}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={t("ContactUs.phonePlaceholder")}
        required
      />

      <IMCInput
        label={t("ContactUs.health")}
        name="health"
        multiline
        value={formData.health}
        onChange={handleChange}
        placeholder={t("ContactUs.healthPlaceholder")}
        rows={3}
        // required
      />

      {/* <IMCBox>
        <label>{t("ContactUs.report")}</label>

        <input
          type="file"
          id="report"
          name="report"
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: "none" }}
          required
        />

        <IMCButton
          variant="outlined"
          fontSize={fontSizes.xs}
          text={t("ContactUs.report")}
          bgColor={colors.primaryDarkBlue}
          textColor={colors.white}
          onClick={handleUploadClick}
        />
      </IMCBox> */}
      <IMCBox>
        <label>{t("ContactUs.report")}</label>

        <input
          type="file"
          id="report"
          name="report"
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: "none" }}
        />

        {formData.report ? (
          <IMCBox
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing.sm,
              marginTop: spacing.sm,
            }}
          >
            <IMCTypography
              variant="caption"
              size={fontSizes.sm}
              weight={fontWeights.medium}
              color={colors.primaryDarkBlue}
            >
              {formData.report.name}
            </IMCTypography>

            <IMCButton
              variant="outlined"
              fontSize={fontSizes.xs}
              text="✖"
              bgColor={colors.danger}
              textColor={colors.white}
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  report: null,
                }))
              }
            />
          </IMCBox>
        ) : (
          <IMCButton
            variant="outlined"
            fontSize={fontSizes.xs}
            text={t("ContactUs.report")}
            bgColor={colors.primaryDarkBlue}
            textColor={colors.white}
            onClick={handleUploadClick}
          />
        )}
      </IMCBox>

      <IMCBox
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IMCButton
          bgColor={colors.primaryDarkBlue}
          fontWeight={fontWeights.bold}
          fontSize={fontSizes.sm}
          textColor={colors.white}
          text={t("ContactUs.submit")}
          onClick={handleSubmit}
        />
      </IMCBox>
    </IMCBox>
  );
};

export default ContactUs;

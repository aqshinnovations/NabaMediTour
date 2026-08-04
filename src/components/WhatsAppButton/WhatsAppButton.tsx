import React from "react";
import { Icons } from "../../styles/icons";
import { colors } from "../../styles/colors";
import { borderRadius } from "../../styles/borders";
import { shadows } from "../../styles/shadows";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";
import { useTranslation } from "react-i18next";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "9198915 67245",
  message = "Hello, I want to get in touch with you!",
}) => {
  const { t } = useTranslation();

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Icons.WhatsAppIcon style={iconStyle} />
      <span style={textStyle}>{t("navbar.title")}</span>
    </a>
  );
};

const buttonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "20px",
  left: "20px",
  padding: "10px 16px",
  backgroundColor: colors.WhatsApp,
  color: colors.white,
  borderRadius: borderRadius.lg,
  boxShadow: shadows.heavy,
  zIndex: 1000,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "transform 0.2s ease",
};

const iconStyle: React.CSSProperties = {
  fontSize: fontSizes.xl,
};

const textStyle: React.CSSProperties = {
  fontSize: fontSizes.md,
  fontWeight: fontWeights.extraBold,
};

export default WhatsAppButton;

import React from "react";
import { Icons } from "../../styles/icons";
import { colors } from "../../styles/colors";
import { borderRadius } from "../../styles/borders";
import { shadows } from "../../styles/shadows";
import { fontSizes } from "../../styles/fontSizes";
import { fontWeights } from "../../styles/fontWeights";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "919211924515",
  message = "Hello, I want to get in touch with you!",
}) => {
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
      <span style={textStyle}>Contact Us/ اتصلوابنا</span>
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

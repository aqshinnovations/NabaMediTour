import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { apiCallPostWithForm, apiUrl } from "../../utils/api";
import { infoCards } from "./const";
import { showError, showSuccess } from "../../utils/toast";
import { styles } from "./style";
import PageHero from "../../components/PageHero";

interface ContactForm {
  name: string;
  mobile: string;
  email: string;
  aboutHealth: string;
}

export default function ContactUs() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    mobile: "",
    email: "",
    aboutHealth: "",
  });

  const [report, setReport] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setReport(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = new FormData();

    form.append("name", formData.name);
    form.append("mobile", formData.mobile);
    form.append("email", formData.email);
    form.append("aboutHealth", formData.aboutHealth);

    if (report) {
      form.append("report", report);
    }

    setLoading(true);

    apiCallPostWithForm(
      apiUrl.contactUs,
      form,
      (response) => {
        console.log("Contact API Response:", response);

        setLoading(false);

        setFormData({
          name: "",
          mobile: "",
          email: "",
          aboutHealth: "",
        });

        setReport(null);

        showSuccess(response.msg ?? t("requestSent"));
      },
      (error) => {
        console.error("Contact API Error:", error);

        setLoading(false);

        showError(t("somethingWentWrong"));
      },
    );
  };

  return (
    <>
      <PageHero
        title={t("contact.heroTitle")}
        description={t("contact.description")}
      />
      <Box sx={styles.section}>
        <Container>
          <Grid container spacing={4}>
            {/* Information Cards */}
            <Grid size={{ xs: 12, md: 4 }}>
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} sx={styles.infoCard}>
                    <Box sx={styles.iconBox}>
                      <Icon />
                    </Box>

                    <Typography sx={styles.cardTitle}>
                      {t(item.title)}
                    </Typography>

                    <Typography>{t(item.line1)}</Typography>

                    <Typography sx={styles.cardSubtitle}>
                      {t(item.line2)}
                    </Typography>
                  </Card>
                );
              })}
            </Grid>

            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card
                component="form"
                onSubmit={handleSubmit}
                sx={styles.formCard}
              >
                <Typography sx={styles.formTitle}>
                  {t("contact.title")}
                </Typography>

                <Typography sx={styles.formDescription}>
                  {t("contact.requiredNote")}
                </Typography>

                <Grid container spacing={3}>
                  {/* Name */}
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      label={t("contact.fullName")}
                      placeholder={t("contact.fullNamePlaceholder")}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      label={t("contact.emailLabel")}
                      placeholder={t("contact.emailPlaceholder")}
                    />
                  </Grid>

                  {/* Mobile */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      label={t("contact.mobile")}
                      placeholder={t("contact.mobilePlaceholder")}
                    />
                  </Grid>

                  {/* Health */}
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={6}
                      name="aboutHealth"
                      value={formData.aboutHealth}
                      onChange={handleChange}
                      label={t("contact.health")}
                      placeholder={t("contact.healthPlaceholder")}
                    />
                  </Grid>

                  {/* Medical Reports */}
                  <Grid size={12}>
                    <Typography sx={styles.uploadTitle}>
                      {t("contact.medicalReports")}
                    </Typography>

                    <Box component="label" sx={styles.uploadBox}>
                      <CloudUploadOutlinedIcon color="action" />

                      <Typography sx={styles.uploadText}>
                        {report ? report.name : t("contact.uploadReports")}
                      </Typography>

                      <input
                        hidden
                        type="file"
                        accept=".pdf,image/*"
                        onChange={handleFileChange}
                      />
                    </Box>
                  </Grid>

                  {/* Submit */}
                  <Grid size={12}>
                    <Button
                      fullWidth
                      type="submit"
                      size="large"
                      variant="contained"
                      disabled={loading}
                      sx={styles.submitButton}
                    >
                      {loading ? t("contact.submitting") : t("contact.submit")}
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

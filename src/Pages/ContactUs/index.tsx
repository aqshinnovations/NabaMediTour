import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import PageHero from "../../components/PageHero";
import { colors } from "../../styles/colors";

const infoCards = [
  {
    icon: <PhoneOutlinedIcon />,
    title: "Call Us",
    line1: "+91 98915 67245",
    line2: "Mon - Fri, 9am - 6pm EST",
  },
  {
    icon: <MailOutlineOutlinedIcon />,
    title: "Email Us",
    line1: "nabameditour@gmail.com",
    line2: "We reply within 24 hours",
  },
  {
    icon: <LocationOnOutlinedIcon />,
    title: "Visit Us",
    line1: "New Delhi",
    line2: "India,  10025",
  },
];

export default function ContactUs() {
  return (
    <>
      <PageHero
        title="Get a Free Consultation"
        description="Share your health concerns with our medical experts and receive personalized guidance within 24 hours."
      />

      <Box
        sx={{
          background: "#F7F9FC",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left */}
            <Grid size={{ xs: 12, md: 4 }}>
              {infoCards.map((item) => (
                <Card
                  key={item.title}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    mb: 3,
                    boxShadow: "0 6px 20px rgba(0,0,0,.05)",
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      background: "#EAF8F8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.msBlue,
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography fontWeight={700} fontSize={16} mb={1}>
                    {item.title}
                  </Typography>

                  <Typography>{item.line1}</Typography>

                  <Typography color="text.secondary" mt={1}>
                    {item.line2}
                  </Typography>
                </Card>
              ))}
            </Grid>

            {/* Right */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Card
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  boxShadow: "0 6px 20px rgba(0,0,0,.05)",
                }}
              >
                <Typography fontSize={24} fontWeight={700}>
                  Tell Us About Your Health
                </Typography>

                <Typography color="text.secondary" mb={4}>
                  All fields marked with * are required.
                </Typography>

                <Grid container spacing={3}>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Full Name *"
                      placeholder="John Doe"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Email *"
                      placeholder="john@example.com"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      label="Mobile *"
                      placeholder="+1 (555) 000-0000"
                    />
                  </Grid>

                  <Grid size={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      label="About Your Health *"
                      placeholder="Describe your condition, symptoms, and what treatment you're seeking..."
                    />
                  </Grid>

                  <Grid size={12}>
                    <Typography fontWeight={600} mb={1}>
                      Medical Reports (Optional)
                    </Typography>

                    <Box
                      component="label"
                      sx={{
                        border: "2px dashed #D8DEE8",
                        borderRadius: 2,
                        py: 2.5,
                        px: 3,
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        cursor: "pointer",
                      }}
                    >
                      <CloudUploadOutlinedIcon color="action" />

                      <Typography color="text.secondary">
                        Click to upload medical reports (PDF, images)
                      </Typography>

                      <input hidden type="file" multiple />
                    </Box>
                  </Grid>

                  <Grid size={12}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      endIcon={<SendOutlinedIcon />}
                      sx={{
                        mt: 1,
                        py: 2,
                        borderRadius: 2,
                        background: colors.msBlue,
                        textTransform: "none",
                        fontSize: 18,
                        "&:hover": {
                          background: colors.msBlue,
                        },
                      }}
                    >
                      Submit Inquiry
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

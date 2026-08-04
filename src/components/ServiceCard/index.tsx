import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  // Button,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface ServiceCardProps {
  // id: number;
  title: string;
  description: string;
  image: string;
  // path?: string;
}

const ServiceCard = ({
  // id,
  title,
  description,
  image,
  // path,
}: ServiceCardProps) => {
  // const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid #E8EDF3",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all .3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        },
      }}
      // onClick={() => path && navigate(path)}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 220,
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#0B1F3A",
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#5E6E82",
            lineHeight: 1.8,
            mb: 3,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 7,
            WebkitBoxOrient: "vertical",
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

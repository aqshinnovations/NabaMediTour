import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ProcedureCardProps {
  image: string;
  name: string;
  description: string;
}

const ProcedureCard = ({ image, name, description }: ProcedureCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 1,
        height: "100%",
        maxWidth: 180,
        mx: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        height="100"
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ p: 1.5 }}>
        <Typography
          variant="body2"
          fontWeight={700}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 0.5,
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProcedureCard;

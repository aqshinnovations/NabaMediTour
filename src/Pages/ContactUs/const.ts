import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import type { SvgIconComponent } from "@mui/icons-material";

export interface InfoCard {
  icon: SvgIconComponent;
  title: string;
  line1: string;
  line2: string;
}

export const infoCards: InfoCard[] = [
  {
    icon: PhoneOutlinedIcon,
    title: "contact.callUs",
    line1: "contact.phone",
    line2: "contact.workingHours",
  },
  {
    icon: MailOutlineOutlinedIcon,
    title: "contact.emailUs",
    line1: "contact.email",
    line2: "contact.emailResponse",
  },
  {
    icon: LocationOnOutlinedIcon,
    title: "contact.visitUs",
    line1: "contact.city",
    line2: "contact.country",
  },
];

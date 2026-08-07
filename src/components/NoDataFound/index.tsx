import IMCBox from "../IMCBox";
import IMCTypography from "../IMCTypography";
import { commonStyles } from "../../constants/commonStyles";

interface NoDataFoundProps {
  message: string;
}

const NoDataFound = ({ message }: NoDataFoundProps) => {
  return (
    <IMCBox style={commonStyles.noData}>
      <IMCTypography variant="body">{message}</IMCTypography>
    </IMCBox>
  );
};

export default NoDataFound;

import { Grid } from "@mui/material";
import RenderedIntroItems from "./RenderedIntroItems";
import { MdPhoneInTalk } from "react-icons/md";

const IntroContainer = () => {
  return (
    <Grid container justifyContent="space-between" alignItems="baseline">
      <RenderedIntroItems
        title="لطفا با ما تماس بگیرید"
        titleVariant="subtitle2"
        content="+98 912 123 4567"
        logo={
          <MdPhoneInTalk
            size="40px"
            color="#502A0F"
            style={{ height: "100% !important" }}
          />
        }
      />
      <RenderedIntroItems
        title="همگو"
        titleVariant="h3"
        content="موسسه حقوقی و وکالت"
        logo={
          <div
            style={{
              padding: "50px",
              borderRadius: "50%",
              background: "brown",
            }}
          >
            Logo
          </div>
        }
      />
    </Grid>
  );
};

export default IntroContainer;

import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

const styles = {
  root: {
    marginTop: "10px",
    boxSizing: "border-box",
    height: "35px",
    width: "290px",
    padding: "0 20px",
  },
  thumb: {
    backgroundColor: "#acadae",
    height: "45px",
    width: "45px",
    marginLeft: "-25px",
    marginTop: "-6px",
    boxShadow:
      "-3px -3px 6px rgba(255, 255, 255, 0.7), 3px 3px 6px rgba(0, 0, 0, 0.3)!important",
  },

  rail: {
    width: "330px",
    height: "35px",
    marginLeft: "-40px",
    backgroundColor: "transparent",
    borderRadius: "20px",
    boxShadow:
      "inset -4px -4px 8px rgba(255, 255, 255, 1), inset 8px 8px 16px rgba(0, 0, 0, 0.8)",
  },
  track: {
    height: "45px",
    backgroundColor: "transparent",
  },
};

export default withStyles(styles)(Slider);

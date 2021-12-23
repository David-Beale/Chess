import { Tooltip } from "@material-ui/core";

const map = {
  0: "Well-trained monkey",
  1: "Beginner",
  2: "Intermediate",
  3: "Advanced",
  4: "Experienced",
};
const valueLabelFormat = (value) => {
  return map[value];
};
export default function Label({ children, open, value }) {
  const title = valueLabelFormat(value);
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={title}>
      {children}
    </Tooltip>
  );
}

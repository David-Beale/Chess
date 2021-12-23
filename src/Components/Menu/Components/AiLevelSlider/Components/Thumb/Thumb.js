import { forwardRef } from "react";
import { Bar } from "./ThumbStyle";

export default forwardRef(function Thumb(props, ref) {
  return (
    <span {...props}>
      <Bar />
      <Bar />
      <Bar />
    </span>
  );
});

import { btnStyle } from "../../style/Tetris";
import { ButtonWrapper } from "./Style";

export const Buttons = ({
  toggleRunning,
  running,
  clearAll,
}: {
  toggleRunning: () => void;
  running: boolean;
  clearAll: () => void;
}) => {
  return (
    <ButtonWrapper>
      <button
        className="btn btn-primary"
        onClick={toggleRunning}
        style={btnStyle}
      >
        {running ? "Stop" : "Start"}
      </button>
      <button className="btn btn-primary" onClick={clearAll} style={btnStyle}>
        Clear
      </button>
    </ButtonWrapper>
  );
};

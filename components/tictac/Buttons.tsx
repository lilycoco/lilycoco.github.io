import { ButtonsConfig } from "../../models/Tictac";
import { TimeTraveler } from "./TimeTraveler";
import { ButtonWrapper } from "./Style";
import { judgeGameStatus } from "../../lib/tictac";

export const Buttons = (props: ButtonsConfig) => (
  <ButtonWrapper>
    <h4>{judgeGameStatus(props)}</h4>
    <button onClick={props.onClick} style={{ margin: "10px 0px" }}>
      Sort order
    </button>
    <TimeTraveler {...props} onClick={(step: number) => props.jump(step)} />
  </ButtonWrapper>
);

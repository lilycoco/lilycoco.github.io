import { StepButton } from "./Style";
import { TimeTravelersConfig } from "../../models/Tictac";

export const TimeTraveler = ({
  onClick,
  histories,
  asc,
  stepNumber,
}: TimeTravelersConfig) => {
  const key = [...histories.keys()];
  return (
    <ol>
      {key.map((step: number) => {
        !asc && (step = histories.length - step - 1);
        const desc = step ? "Go to move #" + step : "Go to game start";
        return (
          <li key={step}>
            <StepButton
              onClick={() => onClick(step)}
              stepNumber={stepNumber}
              step={step}
            >
              {desc}
            </StepButton>
          </li>
        );
      })}
    </ol>
  );
};

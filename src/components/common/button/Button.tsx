import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: "round" | "square";
  buttonState?: "confirm" | "cancel";
  isMove?: boolean;
}

const Button = ({
  type = "button",
  children,
  buttonStyle = "round",
  buttonState = "confirm",
  isMove = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      $buttonStyle={buttonStyle}
      $buttonState={buttonState}
      $isMove={isMove}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;

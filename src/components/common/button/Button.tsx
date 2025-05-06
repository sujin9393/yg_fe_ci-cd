import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: "round" | "square";
  buttonState?: "confirm" | "cancel";
}

const Button = ({
  type = "button",
  children,
  buttonStyle = "round",
  buttonState = "confirm",
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      type={type}
      $buttonStyle={buttonStyle}
      $buttonState={buttonState}
      {...props}
    >
      {children}
    </S.Button>
  );
};

export default Button;

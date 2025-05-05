import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: "round" | "square";
}

const Button = ({
  type = "button",
  children,
  buttonStyle = "round",
  ...props
}: ButtonProps) => {
  return (
    <S.Button type={type} $buttonStyle={buttonStyle} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;

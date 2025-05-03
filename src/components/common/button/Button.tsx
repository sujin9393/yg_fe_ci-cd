import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: "round" | "square"; // ✅ 커스텀 prop은 명시 필요
}

const Button = ({
  type = "button",
  children,
  buttonStyle,
  ...props
}: ButtonProps) => {
  return (
    <S.Button type={type} $buttonStyle={buttonStyle} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;

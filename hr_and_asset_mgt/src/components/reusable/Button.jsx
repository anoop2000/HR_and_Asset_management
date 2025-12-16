import { Button as RBButton } from "react-bootstrap";
import "../../style/layout.css";

const variantClass = {
  primary: "btn-primary-custom",
  success: "btn-success btn-success-custom",
  danger: "btn-danger btn-danger-custom",
};

export default function Button({ variant = "primary", children, className = "", ...props }) {
  const mapped = variantClass[variant] ?? variantClass.primary;
  return (
    <RBButton className={`${mapped} ${className}`.trim()} {...props}>
      {children}
    </RBButton>
  );
}


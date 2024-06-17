export default interface ButtonProps {
  label: string;
  variant: "support" | "share";
  className?: string;
  // onClick?: () => void;
  tabIndex?: number;
}

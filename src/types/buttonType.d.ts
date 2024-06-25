export default interface ButtonProps {
  label: string;
  variant: "support" | "share" | "copyLink";
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  id?: string;
}

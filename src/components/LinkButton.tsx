import { Link } from "react-router";

export const LinkButton = ({
  children,
  type = "default",
  inApp = false,
  link,
  className,
}: {
  children?: React.ReactNode;
  type?: "default" | "outline" | "primary";
  inApp?: boolean;
  link: string;
  className?: "string";
}) => {
  const baseClasses =
    "relative overflow-hidden px-6 py-3 w-full text-base rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-300";

  const typeClasses = {
    default: "bg-white text-primary hover:text-white hover:bg-primary",
    outline:
      "bg-transparent border border-primary/90 text-primary/90 hover:border-white hover:text-white",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  const classes = `${baseClasses} ${typeClasses[type]} ${className}`;
  return (
    <Link to={link} target={inApp ? "_parent" : "_blank"} className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
};

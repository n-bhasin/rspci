import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  label: string;
  to: string;
  offset?: number;
  isExternalLink?: boolean; // New prop to determine if it's an external page
  onClick?: () => void;
}
const CustomLink = ({ label, to, isExternalLink, onClick }: Props) => {
  const location = useLocation();
  useEffect(() => {
    // If there is a hash in the URL, scroll to the corresponding section
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); // Remove the # from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <RouterLink to={isExternalLink ? to : `/#${to}`} className="navlinks">
      <span onClick={onClick}>{label}</span>
    </RouterLink>
  );
};

export default CustomLink;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

export default function PageTransition({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition">
      {children}
    </div>
  );
}
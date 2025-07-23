import React, { useEffect, useState } from "react";

export default function LogoLoader() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLogo) {
    return null;
  }

  return (
    <div className="logo-container">
      <img src="Desktop Images/svg image/Logo RealEstate.svg" alt="Logo" className="blink"/>
    </div>
  );
}

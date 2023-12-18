import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function ButtonFixed() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <Button className="fixed-button" onClick={handleButtonClick}>
      &#8593;
    </Button>
  ) : null;
}

export default ButtonFixed;

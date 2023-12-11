import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const footer = document.getElementById("footer");

    function atBottom() {
      return window.innerHeight + window.scrollY >= document.body.offsetHeight;
    }

    function toggleFooter() {
      if (atBottom()) {
        footer.style.bottom = "0";
      } else {
        footer.style.bottom = "-50px";
      }
    }

    window.addEventListener("scroll", toggleFooter);

    return () => {
      window.removeEventListener("scroll", toggleFooter);
    };
  }, []);

  return (
    <div className="footer-container" id="footer">
      <div className="footer-wrapper">
        <div className="footer-links">
          <p>2950 AVE PROVO, UT</p>
          <p>(801)-888-2950</p>
          <p>&copy;2950 WORLDWIDE</p>
        </div>
      </div>
    </div>
  );
}

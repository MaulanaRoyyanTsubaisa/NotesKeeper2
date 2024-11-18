import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-sm mt-auto text-white text-center">
      <p>Copyright ⓒ {year} Maualana Royyan Tsubaisa</p>
    </footer>
  );
}

export default Footer;

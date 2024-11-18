import CreateIcon from "@mui/icons-material/Create";
import React from "react";

function Header() {
  return (
    <header className="shadow-2xl text-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold font-mclaren">
        <CreateIcon /> Notes Keeper
      </h1>
    </header>
  );
}

export default Header;

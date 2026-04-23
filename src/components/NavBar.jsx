// import { Moon } from "lucide-react";
import React from "react";
import useDarkMode from "../useDarkMode";
import { Sun, Moon } from "lucide-react";

const NavBar = () => {
  const { isDark, toggle } = useDarkMode();
  return (
    <div className="shrink-0 w-full h-18 bg-custom-bg-nav flex items-center gap-6 pr-6 lg:flex-col lg:h-full lg:w-18 lg:pr-0 lg:pb-6 sticky lg:left-0 lg:top-0 lg:rounded-r-xl">
      <div className="h-full aspect-square rounded-r-xl bg-custom-accent mr-auto lg:w-full lg:h-auto"></div>

      <button onClick={toggle}>
        {isDark ? (
          <Sun size={20} className="lg:mt-auto" />
        ) : (
          <Moon size={20} className="lg:mt-auto" />
        )}
      </button>

      <div className="w-1 h-full border-l border-custom-border lg:hidden"></div>
      <hr className=" shrink-0 w-full border border-custom-border hidden lg:block" />

      <figure className="w-8 h-8 rounded-full overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src="https://i.pinimg.com/736x/27/3d/3d/273d3dfd0aa5a9af24c635e469e67636.jpg"
          alt=""
        />
      </figure>
    </div>
  );
};

export default NavBar;

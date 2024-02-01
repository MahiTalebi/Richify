import { useEffect, useState } from "react";

function DarkSwitcher() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <nav className="h-fit w-fit relative">
      <button
        onClick={handle}
        className="bg-black-750 opacity-65 p-2 rounded-full flex gap-2 absolute bottom-full left-6 "
      >
        <i class="bx bxs-sun text-slate-100 dark:text-slate-950 "></i>
        <i class="bx bxs-moon dark:text-slate-100"></i>
      </button>
    </nav>
  );
}

export default DarkSwitcher;

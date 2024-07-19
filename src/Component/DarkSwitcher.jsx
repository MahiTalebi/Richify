import useTheme from "../hook/useTheme";
function DarkSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className="h-fit bg-cover bg-center w-fit">
      <button
        onClick={toggleTheme}
        className="bg-black-750 opacity-65 p-2 rounded-full flex gap-2 translate-x-6 translate-y-2 "
      >
        <i className="bx bxs-sun text-slate-100 dark:text-slate-950 "></i>
        <i className="bx bxs-moon dark:text-slate-100"></i>
      </button>
    </nav>
  );
}

export default DarkSwitcher;

import homeHero from "../../assets/homeHero.png";
import darkModeHero from "../../assets/darkmodehomehero.png";
import useTheme from "../../context/Theme/themeContext";
import BlueBtn from "../common/BlueBtn";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex min-h-screen flex-col items-center dark:bg-[#070d17] transition-all duration-1000">
        <div className="max-w-7xl pt-8">
          <img
            src={theme === "dark" ? darkModeHero : homeHero}
            alt="Home hero"
            className="w-full max-w-3xl rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-8 items-center text-gray-600 px-4 py-8 dark:text-white">
          <h1 className="font-semibold text-3xl">Invest in everything</h1>
          <p className="text-xl text-center">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <BlueBtn tag="Sign up for free" />
        </div>
      </div>
    </>
  );
}

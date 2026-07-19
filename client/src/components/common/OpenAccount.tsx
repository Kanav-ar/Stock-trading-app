import BlueBtn from "./BlueBtn";

export default function OpenAccount() {
  return (
    <div className="flex flex-col items-center gap-12 ">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl font-semibold">Open a Zerodha Account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
      </div>
      <BlueBtn tag="Sign up for free" />
    </div>
  );
}

import ArrowLink from "../common/ArrowLink";
import pricing0 from "../../assets/pricing0.svg";
import pricing1 from "../../assets/other-trades.svg";

export default function Pricing() {
  return (
    <>
      <div className="px-4 my-4 flex dark:text-white">
        <div className="">
          <h1 className="text-3xl font-semibold">Unbeatable Pricing</h1>{" "}
          <p>
            {" "}
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
            <ArrowLink tag="See Pricing" link="" />
          </p>
        </div>

        <div className="flex space-between">
          <span className="flex items-center text-2">
            <img src={pricing0} alt="pricing image" className="h-20" />
            <p>Free account opening</p>
          </span>
          <span className="flex items-center text-2">
            <img src={pricing0} alt="pricing image" className="h-20" />
            <p>Free equity delivery and direct mutual funds</p>
          </span>
          <span className="flex items-center text-2">
            <img src={pricing1} alt="pricing image" className="h-20" />
            <p> Intraday and F&O</p>
          </span>
        </div>
      </div>
    </>
  );
}

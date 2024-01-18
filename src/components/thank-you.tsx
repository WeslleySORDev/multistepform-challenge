import ThankYouIcon from "/assets/images/icon-thank-you.svg";

export function ThankYou() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img className="h-14 w-14" src={ThankYouIcon} alt="" />
      <h1 className="text-2xl font-bold text-primary-MarineBlue">Thank You</h1>
      <h2 className="text-center text-neutral-CoolGray">
        Thanks for confirming your subscription!
        <br />
        We Hope you have fun using our plataform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </h2>
    </div>
  );
}

import ThankYouIcon from "/assets/images/icon-thank-you.svg";

export function ThankYou() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <img className="w-14 h-14" src={ThankYouIcon} alt="" />
        <h1 className="text-primary-MarineBlue font-bold text-2xl">
          Thank You
        </h1>
        <h2 className="text-neutral-CoolGray text-center">
          Thanks for confirming your subscription!
          <br />
          We Hope you have fun using our plataform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </h2>
      </div>
    </>
  );
}

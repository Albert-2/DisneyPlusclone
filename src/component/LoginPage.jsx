import React from "react";
import LoginLogoOne from "../assets/loginImages/cta-logo-one.svg";
import LoginLogoTwo from "../assets/loginImages/cta-logo-two.png";
const LoginPage = () => {
  return (
    <div className="h-[90vh] w-[100vw] bg-[url('./assets/loginImages/login-background.jpg')] bg-cover bg-no-repeat bg-center -z-10 flex flex-col items-center justify-center md:px-20 px-4 ">
      <div className="flex flex-col  justify-stretch gap-6 h-fit sm:min-w-[200px] min-w-full   ">
        <img src={LoginLogoOne} alt="logo" />
        <div className="flex flex-col gap-3 justify-center text-center text-white text-sm tracking-widest">
          <button className="rounded-md text-base font-bold w-full py-4 bg-[#0000FF] hover:bg-[#007FFF]">
            GET ALL THREE
          </button>
          <p className="md:block hidden">
            Get Premium Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription.
          </p>
          <p className="md:block hidden">
            As a 12/06/2023, the price of Disney+ ans The Disney Bundle will
            increase by 1$
          </p>
          <p className="block md:hidden">
            Get Premium Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As a 12/06/2023, the price of Disney+
            ans The Disney Bundle will increase by 1$
          </p>
        </div>
        <img src={LoginLogoTwo} alt="logo" />
      </div>
    </div>
  );
};

export default LoginPage;

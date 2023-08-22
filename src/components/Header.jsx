import React from "react";
import image_profile_mobile from "../assets/me.png";
import image_profile_tablet from "../assets/image-profile-tablet.webp";
import image_profile_desktop from "../assets/image-profile-desktop.webp";
import cubes_logo from "../assets/cubes.svg";

function Header() {
  return (
    <div>
      {/* -------------------------------NAV BAR --------------------------------------------------------------------------------------------- */}
      <nav className="flex flex-row justify-between mt-4 md:pt-6">
        <img className="" src={cubes_logo} alt="cubes_logo" />
        <div className="flex flex-row justify-end items-center w-40 z-10 md:mx-0 md:right-4 lg:right-12">
          {/* -------------------------------GITHUB---------------------------------------- */}
          <a type="button" href="https://github.com/Csabooo" className="pl-5">
            <svg
              className="z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24">
              <path
                fill="#151515"
                fillRule="evenodd"
                d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
              />
            </svg>
          </a>
          {/* -------------------------------FRONTENDMENTOR---------------------------------------- */}
          <a type="button" href="https://www.frontendmentor.io/profile/Csabooo" className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="23"
              className="z-10">
              <path
                fill="#151515"
                d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z"
              />
            </svg>
          </a>

          {/* -------------------------------LINKEDIN---------------------------------------- */}
          <a type="button" href="https://www.linkedin.com/in/csaba-m%C3%BCller-83574a115/" className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              className="z-10">
              <path
                fill="#151515"
                fillRule="evenodd"
                d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
              />
            </svg>
          </a>

          {/* -------------------------------TWITTER---------------------------------------- */}
          <a type="button" href="https://twitter.com/" className="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              className="z-10">
              <path
                fill="#151515"
                d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z"
              />
            </svg>
          </a>
        </div>
      </nav>


      {/* --------------------------------------------------- MOBILE  -------------------------------------------------------------
 */}
      <div className="md:hidden">
        <div className="">
          <img
            className="flex mx-auto max-w-[60%] md:hidden"
            src={image_profile_mobile}
            alt="profile-mobile"
          />
        </div>
        <h1 className="font-bold pt-9">Nice to meet you!</h1>
        <h1 className="pt-5">
          I’m{" "}
          <span className="text-red font-windson pt-14 text-7xl pb-0">
            Csaba Müller
          </span>
        </h1>
        <p className="text-dark_grey">
          Based in the Hungary.<br /> Junior front-end developer,
          who is looking for the first job as frontend developer.<br />
          <br />
          I have some live projects. <br />
          Please have a look at these in the portfolio section below.
          <br /><br />
          I would be very glad you to give me an opportunity for a personal or remote introduction.
        </p>

        <div className="pb-20">
          <a
            href="#contact"
            className="inline tracking-[1.29px] text-black decoration_underline">
            CONTACT ME
          </a>
        </div>
      </div>

      {/* --------------------------------------------------- NOT Mobile -------------------------------------------------------------
 */}
      <div className="hidden md:flex md:flex-row justify-between">
        <div className="order-1 hidden md:flex flex-col md:pt-0 text-left">
          <div className="md:max-w-[550px] lg:max-w-[800px]">
            <h1 className="pt-9 md:z-40 lg:inline-block ">
              Nice to <br className="lg:hidden" />
              meet you! <br className="md:hidden lg:inline-block" />
              I’m <br className="md:flex lg:hidden" />
              <span className="text-red font-windson pt-14 text-8xl lg:text-9xl">
                Csaba Müller
              </span>
            </h1>

            <p className="text-black md:z-40">
              Based in the Hungary. Junior front-end developer,
              who is looking for the first job as frontend developer.<br />
              <br />
              I have some live projects.
              Please have a look at these in the portfolio section below.
              <br /><br />
              I would be very glad you to give me an opportunity for a personal or remote introduction.
            </p>

            <div className="pt-16 pb-16 md:pt-12 md:pb-16">
              <a
                href="#contact"
                className="inline tracking-[2.29px] text-black decoration_underline text-heading_M">
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
        <div className="hidden order-2 md:block md:max-w-[45%] md:pl-4 lg:max-w-[40%]">
          <img
            src={image_profile_mobile}
            alt="profile-desktop"
          />
        </div>
      </div>

      <hr className="pb-8 md:pb-4" />

    </div>
  );
}

export default Header;

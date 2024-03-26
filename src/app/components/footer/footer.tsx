import Link from "next/link";
import React from "react";
import { FooterLogoIcon } from "../icons/footerLogo";

const Footer = () => {
  const footerData = {
    footerLinks: [
      {
        heading: "PRODUCTS",
        links: [
          {
            label: "Cloud Mediqm",
            href: "/software/cloudMediQM",
          },
          {
            label: "Mediqm Mobility",
            href: "/software/mediqmMobility",
          },
          {
            label: "Mediqm Platform",
            href: "/software/mediqmPlatform",
          },
          {
            label: "Mediqm Solution",
            href: "/software/mediqmSolution",
          },
        ],
      },
      {
        heading: "SERVICE",
        links: [
          {
            label: "Hospital Quality Consulting",
            href: "/service/hospitalQuality",
          },
          {
            label: "Quality Management Education & Training",
            href: "/service/qualityManagement",
          },
          {
            label: "Hospital Safety Consulting",
            href: "/service/hospitalSafety",
          },
        ],
      },
    ],
    address: {
      heading: "ADDRESS",
      logo: "/images/logo.svg",
      email: "info@Mediqlogix.com",
      address: "  15, Downing Town, Pa 12345 USA",
      phone: "Phone : +1 123 456 7891",
      website: "http://www.mediqlogix.com",
    },
    copyRight: {
      copyrightLinks: [
        {
          label: "Home",
          href: "/",
        },

        {
          label: "Services",
          href: "/service",
        },
        {
          label: "Contact",
          href: "/mediQM/contact",
        },
      ],
      copyrightText: "Privacy © 2024 - Mediqlogix.com",
    },
  };

  return (
    <>
      <div className=" relative z-50 bg-primary-black px-5 lg:px-36 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4">
          <div className=" lg:col-span-3 lg:w-9/12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
              {footerData.footerLinks.map((links, index) => {
                return (
                  <div key={index}>
                    <h3 className="mb-7 text-sm text-white ">
                      {links.heading}
                    </h3>
                    <ul className="flex flex-col gap-3 text-xs">
                      {links.links.map((link, index) => {
                        return (
                          <Link
                            className={`text-white w-max border-[#707070] ${
                              index != 2
                                ? " border-b border-[#707070]  p-1"
                                : "ps-1"
                            } `}
                            key={index}
                            href={link.href}
                          >
                            {" "}
                            <div>
                              <li className=" w-auto">{link.label}</li>
                            </div>
                          </Link>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1">
            <h5 className="mb-5 text-white">{footerData.address.heading}</h5>
            <div className="text-white flex flex-col gap-3 text-xs">
              <FooterLogoIcon />
              <p className="border-b border-[#707070]  p-1">
                {footerData.address.address}
              </p>
              <p className="border-b border-[#707070]  p-1">
                {footerData.address.phone}
              </p>
              <p className="border-b border-[#707070]  p-1">
                Email : {footerData.address.email}
              </p>
              <p className="ps-1">Website : {footerData.address.website}</p>
            </div>
            <div className="flex mt-10 gap-2">
              <a target="_blank" href="https://www.facebook.com/">
                <img src="/images/Facebook.svg"></img>
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <img src="/images/Linkdine.svg"></img>
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <img src="/images/Youtube.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-green py-2 px-2 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="lg:col-span-3 flex-wrap justify-center sm:justify-start items-center flex gap-7">
            {footerData.copyRight.copyrightLinks.map((link, index) => {
              return (
                <Link
                  className={`font-semibold   text-xs text-white ${
                    index != 2 ? "border-e-2 pe-7 " : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:col-span-1 text-center sm:text-start mt-2 sm:mt-0 text-white text-xs sm:flex sm:justify-end lg:justify-start">
            {footerData.copyRight.copyrightText}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const Modal = ({ handleClose, openIndex }: any) => {
  console.log("Open", openIndex);
  const teamMembers = [
    {
      name: "Naveen Pola",
      role: "MS, Managing Director",
      imageSrc: "/images/teamOne.jpg",
    },
    {
      name: "Joey Smith",
      role: " Vice President – Product Development",
      imageSrc: "/images/teamtwo.jpg",
    },
    {
      name: "Reena Saxsena",
      role: " Vice President – Product Development",
      imageSrc: "/images/teamthree.jpg",
    },
    {
      name: "Mathew smith",
      role: "Vice President – Clinical Management",
      imageSrc: "/images/teamFour.jpg",
    },
    {
      name: "Reena Saxsena",
      role: " Vice President - Sales",
      imageSrc: "/images/teamFive.jpg",
    },
    {
      name: "Mary Hudson",
      role: "Chief Technical Officer",
      imageSrc: "/images/teamSix.jpg",
    },
  ];

  return (
    <div className="fixed inset-0 z-[80] min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
      {/* <!-- overlay --> */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full  backdrop-blur-xl cursor-pointer"
      ></div>

      {/* <!-- Modal --> */}
      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="w-full  bg-[#111111] cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-3xl lg:rounded-[50px] mx-auto max-w-xl lg:max-w-6xl px-10  lg:px-16 py-16">
          <button
            type="button"
            className="absolute top-4 right-4 lg:top-8 lg:right-8 rtl:right-auto rtl:left-2"
          >
            <svg
              className="h-10 p-2 w-10 bg-gray-600 rounded-full cursor-pointer text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              onClick={handleClose}
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-11 xl:gap-16 ">
            <div className=" lg:w-4/12">
              <img
                className="w-full border rounded-lg border-[#707070] h-full flex justify-center items-end"
                src={teamMembers[openIndex]?.imageSrc}
              />
            </div>
            <div className="text-white lg:w-8/12">
              <div className="pb-5">
                <h3 className="text-primary-green HelveticaNeue-Regular">
                  {teamMembers[openIndex]?.name}
                </h3>
                <p>{teamMembers[openIndex]?.role}</p>
              </div>
              <div
                id="meetTeam"
                className="h-[407px] flex flex-col gap-5 overflow-y-scroll pe-10 HelveticaNeue-Regular"
              >
                <p className="HelveticaNeue-Regular">
                  Mr. Navin worked in the information technology industry - NEC,
                  Bay Networks, Nortel, Com21 and Lucent Technologies in
                  software/product development, marketing and management
                  leadership. Currently Mr. Pola is responsible operations and
                  managing their software development operations in India.
                </p>
                <p>
                  Since 2001, Mr. Navin, has been involved in starting up US
                  companies in India - Time2Market (Chip design company, parent
                  company based out of California, USA), MIC Electronics (LED,
                  Embedded Systems Company based out of Hyderabad, India) ,
                  BayNest (IT Consulting), MicroNet (ISP), and iCST. During the
                  start up phase for “Time2Market”, India, Mr. Navin was
                  involved in strategic decisions of company on new product
                  development and product marketing planning for Indian Market.{" "}
                </p>
                <p>
                  Mr. Pola’s expertise includes working with the Indian
                  government in establishing technology development centers,
                  operations of companies and managing Indian operations from
                  scratch. In his capacity as a director for “Time2Market” Mr.
                  Pola has significant experience in setting up the operations,
                  participated in the merger of “Time2Market” with InfoTech,
                  Hyderabad, India. Mr. Pola has also successfully completed
                  assignments for MicroNet co-founder and iCSt (India) in the
                  capacity of Director. He was instrumental in convincing the
                  management of iCST (USA) and successfully launching part of
                  operations in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
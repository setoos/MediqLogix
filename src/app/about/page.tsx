import AboutUs from "@/app/components/about/about";
import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import AboutContent from "../components/about/aboutContent/aboutContent";

const About = () => {
  const tabs = {
    heading: "About us",
    tabs: [
      { id: 1, label: "Company Profile", href: "/about/companyProfile" },
      { id: 2, label: "Vision and Mission", href: "/about/visionMission" },
      { id: 3, label: "Our Team", href: "/about/ourTeam" },
      {
        id: 4,
        label: "Corporate Governance",
        href: "/about/corporateGovernance",
      },
    ],
  };
  return (
    <div className="">
      <TabLayout {...tabs}>
        <AboutContent />
      </TabLayout>
    </div>
  );
};

export default About;

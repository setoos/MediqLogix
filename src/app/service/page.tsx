import React from "react";
import Services from "../components/service/service";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TabLayout from "../components/tabLayout/tabLayout";
import ServiceContent from "../components/service/serviceContent/serviceContent";

const Service = () => {
  const tabs = {
    heading: "Service",
    tabs: [
      {
        id: 1,
        label: "Hospital Quality Consulting",
        href: "/service/hospitalQuality",
      },
      {
        id: 2,
        label: "Quality Management Education & Training",
        href: "/service/qualityManagement",
      },
      {
        id: 3,
        label: "Hospital Safety Consulting",
        href: "/service/hospitalSafety",
      },
    ],
  };
  return (
    <div>
      <TabLayout {...tabs}>
        <ServiceContent />
      </TabLayout>
    </div>
  );
};

export default Service;

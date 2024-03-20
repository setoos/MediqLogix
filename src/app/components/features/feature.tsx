import React from "react";
import { QualityIcon } from "../icons/quality";
import { FinancialIcon } from "../icons/financial";
import { DataIcon } from "../icons/data";
import { CloudIcon } from "../icons/cloud";
import Link from "next/link";

const Features = () => {
  const FeatureData = [
    {
      heading: "Healthcare Quality",
      description:
        "At MediQlogix, we believe that information and data tools play a critical role in improving the quality and safety.",
      icon: "quality",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "Financial Benefit",
      description:
        "MediQlogix’s team believes that for a hospital to be financially successful, the organization needs to excel in quality & patient safetyt",
      icon: "financial",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "Data Analytics",
      description:
        "MediQlogix provides Big data and data analytics to improve Health Safety, Profit Margin and Customer Satisfaction",
      icon: "data",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "Cloud Technology",
      description:
        "MediQlogix provides Cloud solutions to the Hospital and Healthcare organizations.",
      icon: "cloud",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
  ];

  const FeatureIcons: any = {
    quality: QualityIcon,
    financial: FinancialIcon,
    data: DataIcon,
    cloud: CloudIcon,
    // Add more social media icons as needed
  };

  const FeatureLink = ({ icon }: any) => {
    const IconComponent = FeatureIcons[icon];

    return <IconComponent />;
  };
  return (
    <div className="px-10 lg:px-36 py-14">
      <h4 className="  text-tertiary-heading text-center mb-8 font-semibold">
        Benefits of MediQM
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {FeatureData.map((feature, index) => {
          return (
            <div
              key={index}
              className="border rounded-lg hover:border-primary-green p-5"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div>
                  <FeatureLink {...feature} />
                </div>
                <div>
                  <h2 className=" text-tertiary-heading text-primary-green font-semibold">
                    {feature.heading}
                  </h2>
                  <p className="text-[14.5px]">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
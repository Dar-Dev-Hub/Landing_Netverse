"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-0 lg:py-30 xl:py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Algorithmes des Profits des Packs",
              subtitle: "",
              description: ``,
             
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="flex justify-center items-center mx-auto max-w-c-1415 px-2 md:px-8 xl:px-0">
            <div className="mt-12 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
            </div>

        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;

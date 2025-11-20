"use client";

import React, { useState, useMemo } from "react";
import Hero from "@/components/events/Hero";
import { getBox1Data, getBox2Data } from "@/app/events/data/boxData";
import Navbar from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import TeamCategoryBox from "@/components/events/TeamCategoryBox";

function EventsPage() {
  const box1 = getBox1Data();
  const box2 = getBox2Data();

  // Track selected categories for each day
  const [selectedDay1Category, setSelectedDay1Category] = useState<string>(box1.categories[0]);
  const [selectedDay2Category, setSelectedDay2Category] = useState<string>(box2.categories[0]);

  // Compute the teams that match currently selected categories
  const currentTeams = useMemo(() => {
    const day1Teams = box1.teams.filter(t => t.category === selectedDay1Category);
    const day2Teams = box2.teams.filter(t => t.category === selectedDay2Category);
    return [...day1Teams, ...day2Teams];
  }, [selectedDay1Category, selectedDay2Category, box1.teams, box2.teams]);

  return (
    <div className="min-h-screen bg-[rgba(15,0,25,1)] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url(/events/hero-background.png)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 10%, rgba(15,0,25,1) 80%)",
          }}
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />

        {/* HERO SECTION */}
        <Hero
          title="CS EXPO"
          description="A two-day event showcasing student projects to a group of panelists composed of faculty members and industry professionals. Current tech trends will be discussed by industry leaders."
          variant="expo"
          teams={currentTeams.map((team) => ({
            logo_url: team.logo,
            group_name: team.name,
          }))}
        />

        {/* ---------- DAY 1 SECTION ---------- */}
        <section className="pt-0 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30 lg:items-center">
            {/* LEFT: Info */}
            <div className="space-y-6 order-1">
              <p
                className="font-avolta text-4xl md:text-[48px] text-white leading-[40px] tracking-[0.1em] mb-1"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.8))",
                }}
              >
                CS Expo Day 1
              </p>

              <p
                className="font-dreamer text-[#FF00DC] text-sm md:text-[20px] leading-[20px] tracking-[0.1em]"
                style={{
                  filter: "drop-shadow(0px 0px 4.4px rgba(255,0,220,0.8))",
                }}
              >
                November 13, 2025 | 9:00 AM - 5:00 PM
              </p>

              <p className="font-helvetica text-white text-sm md:text-[16px] leading-[20px] tracking-normal">
                Explore projects in Computer Vision, Education, Environment, and Agriculture.
              </p>

              {/* Keynote Talk */}
              <div className="space-y-4 text-right">
                <p
                  className="font-avolta text-4xl md:text-[36px] text-white leading-[40px] mb-1"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.8))",
                  }}
                >
                  Keynote Talk
                </p>
                <p
                  className="font-dreamer text-[#FF00DC] text-sm md:text-[20px] leading-[20px] tracking-[0.1em]"
                  style={{
                    filter: "drop-shadow(0px 0px 4.4px rgba(255,0,220,0.8))",
                  }}
                >
                  Digital Transformation in the Philippines
                </p>
                <p className="font-helvetica text-white text-sm md:text-[16px] leading-[20px] tracking-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue felis sapien,
                  eu finibus ante pretium eget.
                </p>
              </div>
            </div>

            {/* RIGHT: Teams */}
            <div className="w-full order-3 lg:order-2">
              <TeamCategoryBox
                categories={box2.categories}
                teams={box2.teams}
                onCategorySelect={setSelectedDay2Category}
              />
            </div>
          </div>
        </section>

        {/* ---------- DAY 2 SECTION ---------- */}
        <section className="pt-0 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30 lg:items-center">
            {/* LEFT: Teams (reversed layout) */}
            <div className="w-full order-3 lg:order-1">
              <TeamCategoryBox
                categories={box1.categories}
                teams={box1.teams}
                onCategorySelect={setSelectedDay1Category}
              />
            </div>

            {/* RIGHT: Info */}
            <div className="space-y-6 order-1 lg:order-2">
              <p
                className="font-avolta text-4xl md:text-[48px] text-white leading-[40px] tracking-[0.1em] mb-1"
                style={{
                  filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.8))",
                }}
              >
                CS Expo Day 2
              </p>

              <p
                className="font-dreamer text-[#FF00DC] text-sm md:text-[20px] leading-[20px] tracking-[0.1em]"
                style={{
                  filter: "drop-shadow(0px 0px 4.4px rgba(255,0,220,0.8))",
                }}
              >
                November 14, 2025 | 9:00 AM - 5:00 PM
              </p>

              <p className="font-helvetica text-white text-sm md:text-[16px] leading-[20px] tracking-normal">
                Join us on the first day of CS Expo as bright fourth-year students present their innovative theses on Medicine & Health and Natural Language Processing.
              </p>

              <div className="space-y-4 text-right">
                <p
                  className="font-avolta text-4xl md:text-[36px] text-white leading-[40px] mb-1"
                  style={{
                    filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.8))",
                  }}
                >
                  Keynote Talk
                </p>
                <p
                  className="font-dreamer text-[#FF00DC] text-sm md:text-[20px] leading-[20px] tracking-[0.1em]"
                  style={{
                    filter: "drop-shadow(0px 0px 4.4px rgba(255,0,220,0.8))",
                  }}
                >
                  Ethics in Emerging Technologies: Where Should We Draw the Line?
                </p>
                <p className="font-helvetica text-white text-sm md:text-[16px] leading-[20px] tracking-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis
                  quis massa sit amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default EventsPage;

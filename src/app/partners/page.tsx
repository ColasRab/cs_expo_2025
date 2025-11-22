"use client";

import { useState } from 'react';
import Navbar from '@/components/global/nav-bar';
import Footer from '@/components/global/footer';
import Hero from '@/components/partners/Hero';
import PartnerTierFilters from '@/components/partners/PartnerTierFilters';
import PartnersGrid from '@/components/partners/PartnersGrid';
import { allPartners } from './data/partnersData';
import { ProjectsHero } from "@/app/hall-of-fame/ui/ProjectsHero";

function PartnersPage() {
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

    return(
        <main className="bg-[#0D0D0D]">
            <Navbar />
            
            {/* Hero Component */}
            <ProjectsHero
                pageTitle="OUR PARTNERS"
                pageDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim neque, lobortis quis massa sit amet, convallis tincidunt enim."
            />

            <div className="bg-gradient-to-b from-[#0D0D0D] from-[2%] to-[#0F0019] to-[12%] pb-16">
                {/* Partner Tier Filters */}
                <PartnerTierFilters onFilterChange={setSelectedTier} />
                
                {/* Divider Line */}
                <div className="w-full max-w-6xl mx-auto border-t border-white mb-8"></div>
                
                {/* Partners Grid */}
                <PartnersGrid partners={allPartners} selectedTier={selectedTier} />
            </div>

            <Footer />
        </main>
    )
}

export default PartnersPage;
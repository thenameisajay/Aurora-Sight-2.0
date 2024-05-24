'use client';

import React from 'react';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import Footer from '@/components/footer/Footer';
import Switcher from '@/components/switcher/Switcher';
import { navConfig } from '@/data/navbar/data';

const title = 'Graphs';

const description = `Geomagnetic activity index, updated every 3 minutes, measures disturbances in the Earth's magnetic field, recorded in nanotesla (nT). The data is visualized through activity plots, magnetograms, and stackplots, showing variations in magnetic field components over time.`;

const { graphLinks } = navConfig;

export default function Page() {
    return (
        <>
            <div className="flex  h-dvh  w-full flex-col items-center justify-center">
                <HeadBanner title={title} description={description} />
                <div className=" h-10  md:h-20"></div>

                <Switcher switcherData={graphLinks} />
            </div>
            <Footer />
        </>
    );
}

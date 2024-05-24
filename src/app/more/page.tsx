'use client';

import React from 'react';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import Footer from '@/components/footer/Footer';
import Switcher from '@/components/switcher/Switcher';
import { navConfig } from '@/data/navbar/data';

const { moreNav: switcherNav } = navConfig;

const heading = 'More';

const description = 'Explore additional resources listed below.';

export default function Page() {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <HeadBanner title={heading} description={description} />
            <div className=" h-10  md:h-20"></div>{' '}
            {/*
            Just a spacer  rather than using margin-top or top */}
            <Switcher switcherData={switcherNav} />
            <Footer />
        </div>
    );
}

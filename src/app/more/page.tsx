'use client';

import React from 'react';

import HeadBanner from '@/components/banners/head-banner/HeadBanner';
import Switcher from '@/components/switcher/Switcher';
import { navConfig } from '@/data/navbar/data';

const { switcherNav } = navConfig;

const heading = 'More';

const description =
    'This is where the API status , Acknowledgments etc ... will be';

export default function Page() {
    return (
        <div>
            <HeadBanner heading={heading} description={description} />
            <Switcher switcherData={switcherNav} />
        </div>
    );
}

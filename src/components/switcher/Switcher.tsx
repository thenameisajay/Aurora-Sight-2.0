'use client';

import React from 'react';

import { navConfig } from '@/data/navbar/data';

const { switcherNav } = navConfig;

export default function Switcher() {
    return (
        <p>
            {switcherNav.map((item, index) => (
                <a key={index} href={item.href}>
                    {item.icon && item.icon}
                    {item.title}
                </a>
            ))}
        </p>
    );
}

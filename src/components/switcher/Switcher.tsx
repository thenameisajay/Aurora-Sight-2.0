import React from 'react';

import type { MainNavItem } from '@/types/interfaces/nav';

export default function Switcher({
    switcherData,
}: {
    switcherData: MainNavItem[];
}) {
    return (
        <p>
            {switcherData.map((item, index) => (
                <a key={index} href={item.href}>
                    {item.icon && item.icon}
                    {item.title}
                </a>
            ))}
        </p>
    );
}

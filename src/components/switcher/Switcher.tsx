import React from 'react';

import Link from 'next/link';

import type { MainNavItem } from '@/types/interfaces/nav';

export default function Switcher({
    switcherData,
}: {
    switcherData: MainNavItem[];
}) {
    return (
        <div className=" w-dvh  flex flex-col md:flex-row">
            {switcherData.map((item) => (
                <div
                    key={item.href}
                    className=" w-52  items-center justify-center rounded-sm bg-slate-50  md:flex md:h-40 lg:w-80 "
                >
                    <Link href={item.href}>
                        <div className="  mx-2 my-5 flex h-32  flex-col items-center  justify-center  rounded-md   hover:bg-slate-200    md:w-48">
                            {item.icon && item.icon}
                            <div className="h-2"></div>
                            {/* Spacer */}
                            <span className="  text-center text-sm md:text-lg ">
                                {item.title}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

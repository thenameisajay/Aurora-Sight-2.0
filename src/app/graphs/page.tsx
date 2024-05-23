'use client';

import React from 'react';

import Link from 'next/link';

export default function Page() {
    return (
        <div className=" h-dvh w-full">
            <h1>Hello This is the Area of Graphs</h1>
            <Link href="/graphs/activity-plot" className=" text-blue-500 ">
                Activity Plot
            </Link>
        </div>
    );
}

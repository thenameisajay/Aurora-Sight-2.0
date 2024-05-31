'use client';

import Link from 'next/link';

import { Barricade } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

/**
 * Renders the Under-Construction  page.
 *
 * The component is centered both vertically and horizontally .
 *
 * @returns {JSX.Element}
 */

/* !Issue : The component actually overflows because the Layout is being used here (navbar and demo Banner) this is a issue that is not fixed yet. (https://github.com/vercel/next.js/discussions/50034)
 *  !Issue (Contd.) : It's not a bug, it's a feature.
 */

export default function Page() {
    return (
        <div className="absolute flex h-dvh w-full flex-col items-center justify-center  ">
            <div className="  space-y-2 text-center">
                <Barricade
                    size={100}
                    weight="duotone"
                    className="inline-block"
                />

                <div className="h-1"></div>
                <div className="mx-2 text-center">
                    <p className="font-medium/relaxed mx-auto max-w-[600px]   text-black dark:text-gray-400 md:text-3xl md:font-semibold">
                        This feature is under construction. Please check back
                        soon!
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <Link href="/">
                    <Button
                        variant="outline"
                        className="text-base font-semibold"
                    >
                        Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

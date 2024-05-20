'use client';

import Link from 'next/link';

import { SmileyXEyes } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';

/**
 * Renders the 404 (Not Found) page.
 *
 * The component is centered both vertically and horizontally .
 *
 * @returns {JSX.Element} The rendered 404 (Not Found) page.
 */

/* !Issue : The component actually overflows because the Layout is being used here (navbar and demo Banner) this is a issue that is not fixed yet. (https://github.com/vercel/next.js/discussions/50034)
 *  !Issue (Contd.) : It's not a bug, it's a feature.
 */

export default function NotFoundComponent() {
    return (
        <div className="absolute flex h-dvh w-full flex-col items-center justify-center  ">
            <div className="  space-y-2 text-center">
                <SmileyXEyes
                    size={90}
                    className="inline-block  "
                    weight="fill"
                />

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Not Found
                    </h1>
                    <p className="mx-auto max-w-[600px] text-black dark:text-gray-400 md:text-xl/relaxed">
                        The page you were looking for is gone, and no one knows
                        where it is.
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

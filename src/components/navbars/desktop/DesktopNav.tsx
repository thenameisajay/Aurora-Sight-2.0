'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navConfig } from '@/data/navbar/data';
import { cn } from '@/lib/utils';

const { mainNav } = navConfig;

export default function DesktopNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();

    const path = pathname.split('/')[1];

    return (
        <nav
            className={cn(
                'hidden w-full flex-wrap  items-center  justify-center space-x-4 border-b border-slate-800 py-2 md:flex  lg:space-x-6',
                className,
            )}
            {...props}
        >
            {mainNav.map(
                (item) =>
                    item.href && (
                        <Link
                            href={item.href}
                            key={item.href}
                            className={
                                `  items-center justify-center rounded-full p-2 text-sm font-medium text-muted-foreground  transition-colors  hover:bg-slate-50 hover:text-primary dark:hover:bg-slate-800 ` +
                                (path === item.href.split('/')[1]
                                    ? 'bg-slate-100 text-primary'
                                    : '')
                            }
                        >
                            <div className="flex  w-full flex-row  space-x-1">
                                <div>{item.icon && item.icon}</div>{' '}
                                <div>{item.title}</div>{' '}
                            </div>
                        </Link>
                    ),
            )}
        </nav>
    );
}

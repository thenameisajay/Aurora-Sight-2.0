import {
    DotsThreeCircle,
    House,
    Info,
    PresentationChart,
} from '@phosphor-icons/react';

import type { MainNavItem } from '@/types/interfaces/nav';

interface navConfig {
    mainNav: MainNavItem[];
    // mobileNav: SidebarNavItem[];
}

export const navConfig: navConfig = {
    mainNav: [
        {
            icon: <House size={20} />,
            title: 'Home',
            href: '/',
        },
        {
            icon: <Info size={20} />,
            title: 'Status Description',
            href: '/status-description',
        },
        {
            icon: <PresentationChart size={20} />,
            title: 'Graphs',
            href: '/graphs', // More graphs (Activity-plot, ...) will be added here
        },

        {
            icon: <DotsThreeCircle size={20} />,
            title: 'More',
            href: '/more', // This is where the API status , Acknowledgments etc ... will be
        },
    ],
    // mobileNav: [
    //     {
    //         title: 'Home',
    //         href: '/',
    //         icon: <House size={10} />,
    //     },
    //     {
    //         title: 'Status Description',
    //         href: '/status-description',
    //         icon: <Info size={10} />,
    //     },
    //     {
    //         title: 'graphs',
    //         href: '/graphs',
    //         icon: <PresentationChart size={10} />,
    //     },
    //     {
    //         title: 'More',
    //         href: '/more',
    //         icon: <DotsThreeCircle size={10} />,
    //         items: [
    //             {
    //                 title: 'API Status',
    //                 href: '/api-status',
    //                 icon: 'Server',
    //             },
    //             {
    //                 title: 'Acknowledgments',
    //                 href: '/acknowledgments',
    //                 icon: 'Heart',
    //             },
    //         ],
    //     },
    // ],
};

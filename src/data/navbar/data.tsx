import {
    ChartBar,
    ChartLine,
    ChartLineUp,
    DotsThreeCircle,
    HandsPraying,
    House,
    Info,
    PresentationChart,
    Question,
    Signpost,
} from '@phosphor-icons/react';

import type { MainNavItem } from '@/types/interfaces/nav';

interface navConfig {
    mainNav: MainNavItem[];
    // mobileNav: SidebarNavItem[];
    moreNav: MainNavItem[];
    graphLinks: MainNavItem[];
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
    moreNav: [
        {
            title: 'API Status',
            href: '/api-status',
            icon: <Signpost size={50} />,
        },
        {
            title: 'Acknowledgements',
            href: '/acknowledgements',
            icon: <HandsPraying size={50} />,
        },
        {
            title: "FAQ's",
            href: '/faqs',
            icon: <Question size={50} />,
        },
    ],
    graphLinks: [
        {
            title: 'Activity Plot',
            icon: <ChartBar size={50} />,
            href: '/graphs/activity-plot',
        },
        {
            title: 'Magnetogram',
            icon: <ChartLineUp size={50} />,
            href: '/graphs/magnetogram',
        },
        {
            title: 'Stackplot',
            icon: <ChartLine size={50} />,
            href: '/graphs/stackplot',
        },
    ],
};

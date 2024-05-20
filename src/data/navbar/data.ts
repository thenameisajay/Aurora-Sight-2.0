import type { MainNavItem, SidebarNavItem } from '@/types/interfaces/nav';

interface navConfig {
    desktopNav: MainNavItem[];
    mobileNav: SidebarNavItem[];
}

export const navConfig: navConfig = {
    desktopNav: [
        {
            icon: 'House',
            title: 'Home',
            href: '/',
        },
        {
            icon: 'Info',
            title: 'Status Description',
            href: '/status-description',
        },
        {
            icon: 'PresentationChart',
            title: 'graphs',
            href: '/graphs', // More graphs (Activity-plot, ...) will be added here
        },

        {
            icon: 'DotsThreeCircle',
            title: 'More',
            href: '/more', // This is where the API status , Acknowledgments etc ... will be
        },
    ],
    mobileNav: [
        {
            title: 'Home',
            href: '/',
            icon: 'House',
        },
        {
            title: 'Status Description',
            href: '/status-description',
            icon: 'Info',
        },
        {
            title: 'graphs',
            href: '/graphs',
            icon: 'PresentationChart',
        },
        {
            title: 'More',
            href: '/more',
            icon: 'DotsThreeCircle',
            items: [
                {
                    title: 'API Status',
                    href: '/api-status',
                    icon: 'Server',
                },
                {
                    title: 'Acknowledgments',
                    href: '/acknowledgments',
                    icon: 'Heart',
                },
            ],
        },
    ],
};

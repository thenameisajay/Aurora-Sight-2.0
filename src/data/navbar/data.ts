import type { NavItem } from '@/types/interfaces/nav';

interface navConfig {
    homeNav: NavItem[];
}

export const navConfig: navConfig = {
    homeNav: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Status Description',
            href: '/status-description',
        },
        {
            title: 'Activity Plot',
            href: '/activity-plot',
        },
    ],
};

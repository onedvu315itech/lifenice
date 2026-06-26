export interface AppHeaderNavItem {
    labelKey: string
    href: string
}

export const APP_HEADER_NAV_ITEMS: AppHeaderNavItem[] = [
    {
        labelKey: "nav.about",
        href: "/about",
    },
    {
        labelKey: "nav.team",
        href: "/team",
    },
    {
        labelKey: "nav.fixtures",
        href: "/fixtures",
    },
    {
        labelKey: "nav.news",
        href: "/news",
    },
    {
        labelKey: "nav.gallery",
        href: "/gallery",
    },
    {
        labelKey: "nav.contact",
        href: "/contact",
    },
]

export const AUTH_SIGN_IN_PATH = "/sign-in"

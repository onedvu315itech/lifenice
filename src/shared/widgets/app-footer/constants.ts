import type { IconType } from "react-icons"

import {
    FaFacebookF,
} from "react-icons/fa6"

export type FooterLink = {
    labelKey: string
    href: string
}

export type FooterGroup = {
    titleKey: string
    links: FooterLink[]
}

export type Sponsor = {
    name: string
    logo: string
    href?: string
}

export type SocialLink = {
    label: string
    href: string
    icon: IconType
}

export const APP_FOOTER_GROUPS: FooterGroup[] = [
    {
        titleKey: "club",
        links: [
            { labelKey: "aboutUs", href: "/about" },
            { labelKey: "history", href: "/history" },
            { labelKey: "news", href: "/news" },
            { labelKey: "contact", href: "/contact" },
        ],
    },
    {
        titleKey: "football",
        links: [
            { labelKey: "firstTeam", href: "/football/first-team" },
            { labelKey: "matches", href: "/matches" },
            { labelKey: "players", href: "/players" },
            { labelKey: "academy", href: "/academy" },
        ],
    },
    {
        titleKey: "fans",
        links: [
            { labelKey: "tickets", href: "/tickets" },
            { labelKey: "membership", href: "/membership" },
            { labelKey: "store", href: "/shop" },
            { labelKey: "fanZone", href: "/fans" },
        ],
    },
    {
        titleKey: "support",
        links: [
            { labelKey: "helpCenter", href: "/help" },
            { labelKey: "privacyPolicy", href: "/privacy-policy" },
            { labelKey: "termsOfUse", href: "/terms" },
            { labelKey: "cookiePolicy", href: "/cookie-policy" },
        ],
    },
]

export const APP_FOOTER_SPONSORS: Sponsor[] = [
    {
        name: "Emirates",
        logo: "/sponsor/emirates.svg",
        href: "https://www.emirates.com/us/english",
    },
    {
        name: "Adidas",
        logo: "/sponsor/adidas.svg",
        href: "https://www.adidas.co.uk/football",
    },
]

export const APP_FOOTER_SOCIAL_LINKS: SocialLink[] = [
    {
        label: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebookF,
    },
]

export const APP_FOOTER_LEGAL_LINKS: FooterLink[] = [
    { labelKey: "privacyPolicy", href: "/privacy-policy" },
    { labelKey: "termsOfUse", href: "/terms" },
    { labelKey: "cookies", href: "/cookies" },
    { labelKey: "accessibility", href: "/accessibility" },
]

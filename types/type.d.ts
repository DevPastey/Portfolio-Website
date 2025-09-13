export type MagicButtonProp = {
    title: string
    icon: React.ReactNode
    position: string
    handleClick?: () => void
    otherClasses?: string
}

export type NavItemProp = {
    name: string
    link: string
    icon?: React.ReactNode
}
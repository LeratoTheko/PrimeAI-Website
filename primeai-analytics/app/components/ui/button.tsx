'use client'
import React from 'react'
import Link from 'next/link'

type ButtonProps = {
    href?: string
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    target?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    disabled?: boolean
    variant?: 'primary' | 'secondary'   // << NEW
}

export default function Button({
    href,
    children,
    className,
    style,
    target,
    onClick,
    disabled,
    variant = 'primary',                 // << default variant
}: ButtonProps) {

    const baseClasses =
        'px-5 py-2 font-semibold text-white rounded-md shadow-md transition-all duration-300 hover:shadow-[#23bec8]/60 hover:shadow-lg hover:-translate-y-[1px]'
    const disabledClasses = disabled ? 'opacity-50 pointer-events-none' : ''
    const combinedClassName = [baseClasses, disabledClasses, className].filter(Boolean).join(' ')

    // 🎨 Define your gradient themes
    const gradientStyles: Record<string, string> = {
        primary: 'linear-gradient(135deg, #23bec8, #47e1dc)',        // turquoise
        secondary: 'linear-gradient(20deg, #23bec8, #ffffff)',      // orange → pink
    }

    const defaultStyle: React.CSSProperties = {
        background: gradientStyles[variant],
    }

    const mergedStyle = { ...defaultStyle, ...(style || {}) }

    if (href) {
        return (
            <Link href={href} className={combinedClassName} style={mergedStyle} target={target} onClick={onClick as any}>
                {children}
            </Link>
        )
    }

    return (
        <button className={combinedClassName} style={mergedStyle} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

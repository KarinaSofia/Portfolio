'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '../../../i18n.config'

export default function LocaleSwitcher() {
    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    const currentLocale = () => {
        if (!pathName) return '/'
        return pathName.split('/')[1]
    }

    return (
        <ul className='flex gap-x-3' style={
            {
                listStyleType: 'none',
            }
        }>
            {i18n.locales.map(locale => {
                return (locale !== currentLocale() &&
                    <li key={locale}>
                        <Link
                            href={redirectedPathName(locale)}
                            className='p-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 w-40 rounded hover:-translate-y-1 transition-transform duration-300'
                        >
                            {locale.toLocaleUpperCase()}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
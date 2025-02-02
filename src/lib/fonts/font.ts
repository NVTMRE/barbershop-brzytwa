import localFont from "next/font/local";

export const CMUNFont = localFont({
    src: [
        {
            path: './cmunrm.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './cmunti.woff',
            weight: '400',
            style: 'italic',
        },
        {
            path: './cmunbx.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: './cmunbi.woff',
            weight: '700',
            style: 'italic',
        },
    ],
})
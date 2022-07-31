import { createStitches } from '@stitches/react'


export const { css, globalCss, styled, theme } = createStitches({
    theme: {
        colors: {
            'Orange': 'hsl(25, 97%, 53%)',
            'White': 'hsl(0, 100%, 100%)',
            'VeryDarkUnsaturatedBlue': 'hsl(238, 29%, 16%)',
            'SoftRed': 'hsl(14, 88%, 65%)',
            'SoftViolet': 'hsl(273, 75%, 66%)',
            'SoftBlue': 'hsl(240, 73%, 65%)',
            'VeryDarkGrayishBlue': 'hsl(237, 12%, 33%)',
            'DarkGrayishBlue': 'hsl(240, 6%, 50%)',
            'LightGrayishBlue': 'hsl(240, 5%, 91%)'
        },
        space: {
            1: '8px',
            2: '16px',
            3: '24px',
            4: '32px',
            5: '40px',
            6: '48px',
            7: '56px',
            8: '64px',
            9: '72px',
            10: '80px',
        },
        fontSizes: {

        },
        lineHeights: {

        },
        fontWeights: {
            4: '400',
            7: '700',
        },

        transitions: {
        },


    },
    media: {
        desktop: '(min-width: 1024px)'
    },
    utils: {
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value
        }),
        mb: (value: string) => ({
            marginBottom: value
        }),
        mt: (value: string) => ({
            marginTop: value
        }),
        px: (value: string) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: string) => ({
            paddingTop: value,
            paddingBottom: value
        }),

        linearGradient: (value: string) => ({
            backgroundImage: `linear-gradient(${value})`,
        })

    }
})
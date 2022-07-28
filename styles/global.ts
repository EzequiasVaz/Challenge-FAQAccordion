import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        margin: 0, padding: 0, boxSizing: 'border-box', outline: 'none', fontFamily: 'Kumbh Sans',
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)'
    },
    body: {
        minHeight: '100vh',
        linearGradient: '0deg, $SoftBlue 0%, $SoftViolet 100%',
        backgroundAttachment: 'fixed',
    },
    '#__next': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})
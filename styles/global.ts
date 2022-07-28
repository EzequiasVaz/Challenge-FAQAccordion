import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box', outline: 'none', fontFamily: 'Kumbh Sans' },
    body: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        linearGradient: '0deg, $SoftBlue 0%, $SoftViolet 100%'
    }
})
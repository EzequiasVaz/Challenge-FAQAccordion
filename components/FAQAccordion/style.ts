import { styled } from "../../styles/stitches.config";

export const FAQContainer = styled('section', {
    position: 'absolute',
    top: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: '20px',
    paddingTop: '128px',
    paddingBottom: '$4',
    maxWidth: '320px',
    maxHeight: 'fit-content',
    borderRadius: '24px',
    backgroundColor: '$White',

    '@desktop': {
        minWidth: '900px',
        paddingTop: '50px',
        paddingRight: '100px',
    }
})

export const IconDiv = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '400px',
    height: '100%',
    zIndex: '0',

    '@desktop': {
        overflow: 'hidden',
    }
})


export const HeaderIcon = styled('svg', {
    position: 'absolute',
    top: '-110px',
    backgroundImage: 'url("/illustration-woman-online-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '180px',
    width: 'fit-content',
    zIndex: '1',

    '@desktop': {
        position: 'absolute',
        top: '62px',
        left: '-80px',
        width: '472px',
        height: '359px',
        backgroundImage: 'url("/illustration-woman-online-desktop.svg")',
        zIndex: '2',
    }
})

export const HeaderIconBackground = styled('svg', {
    position: 'absolute',
    top: '0',
    backgroundImage: 'url("/bg-pattern-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30px -5px',

    '@desktop': {
        backgroundImage: 'url("/bg-pattern-desktop.svg")',
        width: '400px',
        height: '100%',
        backgroundPosition: '-580px -305px',
        zIndex: '1',
    }
})

export const BoxIllustration = styled('svg', {
    display: 'none',

    '@desktop': {
        position: 'absolute',
        left: '-93px',
        top: '200px',
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        backgroundImage: 'url("/illustration-box-desktop.svg")',
        backgroundRepeat: 'no-repeat',

    }
})


export const FAQContent = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@desktop': {
        alignSelf: 'flex-end',
        mb: '68px',
        alignItems: 'start',
    }

})

export const TitleFAQ = styled('h1', {
    textTransform: 'uppercase',
    fontSize: '28px',
    color: '$VeryDarkUnsaturatedBlue',
    fontWeight: '$7',
    mb: '24px',

})

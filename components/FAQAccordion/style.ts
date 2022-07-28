import { styled } from "../../styles/stitches.config";

export const FAQContainer = styled('section', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: '20px',
    paddingTop: '128px',
    paddingBottom: '$4',
    mt: '100px', //after make accordion, check this again to set a new margin top, of course if needed
    maxWidth: '320px',
    maxHeight: 'fit-content',
    borderRadius: '24px',
    backgroundColor: '$White',
})

export const HeaderIcon = styled('svg', {
    position: 'absolute',
    top: '-110px',
    backgroundImage: 'url("/illustration-woman-online-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '180px',
    width: 'fit-content',
    zIndex: '1'
})

export const HeaderIconBackground = styled('svg', {
    position: 'absolute',
    top: '0',
    backgroundImage: 'url("/bg-pattern-mobile.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30px -5px',
})


export const TitleFAQ = styled('h1', {
    textTransform: 'uppercase',
    fontSize: '28px',
    color: '$VeryDarkUnsaturatedBlue',
    fontWeight: '$7',
    mb: '24px'
})
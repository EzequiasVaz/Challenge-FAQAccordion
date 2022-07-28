import { styled } from "../../../styles/stitches.config";

export const AccordionOptionContainer = styled('div', {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'space-between',
    width: '280px',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    '&.active > li': {
        transition: 'all 0.1s ease',
        fontWeight: '$7',
        color: '$VeryDarkUnsaturatedBlue',
    },
    '&.active > svg': {
        transition: 'all 0.1s ease',
        transform: 'rotate(180deg)',
        mt: '5px'
    }
})

export const AccordionOptionButton = styled('li', {
    listStyle: 'none',
    fontWeight: '$4',
    color: '$VeryDarkGrayishBlue',
    fontSize: '13px',
    mb: '18px',
    paddingRight: '32px',
})

export const AccordionOptionIcon = styled('svg', {
    width: '10px',
    height: '12px',
    backgroundImage: 'url("/icon-arrow-down.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'contain'
})

export const AccordionInfoContainer = styled('article', {
    transition: 'all 0.1s ease',
    width: '100%',
    height: 'fit-content',
})

export const OptionInfo = styled('p', {
    transition: 'all 0.1s ease',
    fontSize: '12px',
    fontWeight: '$4',
    color: '$DarkGrayishBlue',
    maxWidth: '90%',
    mb: '18px',
})

export const DivisorOption = styled('hr', {
    mb: '18px',
    border: 'none',
    borderBottom: '1px solid $LightGrayishBlue',
})


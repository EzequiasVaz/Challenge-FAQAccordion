import { styled } from "../../../styles/stitches.config";

export const AccordionOptionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'top',
    width: '280px',
    cursor: 'pointer',

    '&.active > li': {
        transition: 'color 0.2s ease-in-out',
        fontWeight: '$7',
        color: '$VeryDarkUnsaturatedBlue',
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
    position: 'absolute',
    right: '0',
    width: '10px',
    height: '12px',
    backgroundImage: 'url("/icon-arrow-down.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    transition: 'transform 0.2s ease-in-out',
    '&.active': {
        transform: 'rotate(180deg)',
        mt: '5px'
    }
})

export const AccordionInfoContent = styled('article', {
    fontSize: '12px',
    fontWeight: '$4',
    color: '$DarkGrayishBlue',
    maxWidth: '90%',
    mb: '18px',
    transition: 'max-height 0.5s ease-in-out',


})

export const DivisorOption = styled('hr', {
    mb: '18px',
    border: 'none',
    borderBottom: '1px solid $LightGrayishBlue',
})


import { useState } from "react";
import { IAccordionOption } from "../../../utils/interfaces/AccordionOption";
import { AccordionInfoContent, AccordionOptionButton, AccordionOptionContainer, AccordionOptionIcon, DivisorOption } from "./style";

export function FAQAccordionOption({ title, content }: IAccordionOption) {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <AccordionOptionContainer className={isActive ? 'active' : ''} onClick={() => { !isActive ? setIsActive(true) : setIsActive(false) }}>
                <AccordionOptionButton>{title}</AccordionOptionButton>
                <AccordionOptionIcon className={isActive ? 'active' : ''} />
                {isActive && <AccordionInfoContent className={isActive ? 'active' : ''}>{content}</AccordionInfoContent>}
            </AccordionOptionContainer>
            <DivisorOption />
        </>
    )
}
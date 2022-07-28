import { useState } from "react";
import { IAccordionOption } from "../../../utils/interfaces/AccordionOption";
import { AccordionInfoContainer, AccordionOptionButton, AccordionOptionContainer, AccordionOptionIcon, DivisorOption, OptionInfo } from "./style";

export function FAQAccordionOption({ title, content }: IAccordionOption) {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <AccordionOptionContainer className={isActive ? 'active' : ''} onClick={() => { !isActive ? setIsActive(true) : setIsActive(false) }}>
                <AccordionOptionButton>{title}</AccordionOptionButton>
                <AccordionOptionIcon />
            </AccordionOptionContainer>
            <AccordionInfoContainer>
                {isActive && <OptionInfo>{content}</OptionInfo>}
            </AccordionInfoContainer>
            <DivisorOption />
        </>
    )
}
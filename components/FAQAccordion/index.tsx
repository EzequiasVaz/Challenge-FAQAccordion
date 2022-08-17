import { FAQAccordionOption } from "./DropDownOptions";
import { BoxIllustration, FAQContainer, FAQContent, FAQItems, HeaderIcon, HeaderIconBackground, IconDiv, TitleFAQ } from "./style";

export function FAQAccordion() {
    return (
        <FAQContainer>

            <IconDiv>
                <HeaderIcon />
                <HeaderIconBackground />
            </IconDiv>

            <BoxIllustration />

            <FAQContent>

                <TitleFAQ>Faq</TitleFAQ>

                <FAQItems>
                    <FAQAccordionOption
                        title="How many team members can I invite?"
                        content="You can invite up to 2 additional users on the Free plan. There is no limit on
            team members for the Premium plan." />

                    <FAQAccordionOption
                        title="What is the maximum file upload size?"
                        content="No more than 2GB. All files in your account must fit your allotted storage space." />

                    <FAQAccordionOption
                        title="How do I reset my password?"
                        content="Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you." />

                    <FAQAccordionOption
                        title="Can I cancel my subscription?"
                        content="Yes! Send us a message and we’ll process your request no questions asked." />

                    <FAQAccordionOption title="Do you provide additional support?"
                        content="Chat and email support is available 24/7. Phone lines are open during normal business hours." />
                </FAQItems>
            </FAQContent>
        </FAQContainer>
    )
}
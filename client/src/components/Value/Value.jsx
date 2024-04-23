import React from 'react'
import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side*/}
                <div className="v-left">
                    <div className="image-container">
                        <img src='./Value.jpg' alt='' />
                    </div>

                </div>


                {/*Right side*/}
                <div className="flexColStart v-right">
                    <span className='greyText'>Our Value</span>
                    <span className='primaryText'>
                        Value we give to you</span>
                    <span className='secondaryText'>
                        Discover your dream home with us.
                        <br />We're committed to providing
                        you with exceptional service and expertise throughout your homebuying journey.
                        <br />
                        At SWIFTHOOK, we turn your homeownership dreams into reality.
                    </span>

                    <Accordion allowMultipleExpanded={false}
                        preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">
                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }

                    </Accordion>


                </div>
            </div>

        </section>
    )
}

export default Value

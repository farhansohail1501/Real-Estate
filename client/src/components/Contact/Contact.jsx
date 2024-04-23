import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
    return (
        <div>
            <section className="c-wrapper">
                <div className="paddings innerWidth flexCenter c-container">
                    {/* left side*/}
                    <div className="flexColStart c-left">
                        <span className="greyText">Our Contacts</span>
                        <span className="primaryText">Easy to Contact</span>
                        <span className="secondaryText">At SWIFTNOOK, we are always ready to provide you with the best real
                            estate services. Your satisfaction is our priority!</span>
                        <div className="flexColStart contactModes">
                            {/*first row */}
                            <div className="flexStart row">
                                <div className="flexCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>
                                                Call
                                            </span>
                                            <span className='secondaryText'>
                                                437-985-1501
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>


                                {/*second mode */}
                                <div className="flexCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>
                                                Chat
                                            </span>
                                            <span className='secondaryText'>
                                                437-985-1501
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Chat Now</div>
                                </div>

                            </div>



                            {/*second row */}
                            <div className="flexStart row">
                                <div className="flexCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>
                                                Message
                                            </span>
                                            <span className='secondaryText'>
                                                437-985-1501
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Message Now</div>
                                </div>


                                {/*fourth mode */}
                                <div className="flexCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>
                                                Video Call
                                            </span>
                                            <span className='secondaryText'>
                                                437-985-1501
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Video Call Now</div>
                                </div>

                            </div>

                        </div>






                    </div>

                    {/* right side */}
                    <div className="cright">
                        <div className="image-container">
                            <img src="./Contact.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Contact

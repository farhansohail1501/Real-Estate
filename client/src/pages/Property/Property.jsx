import React from 'react'
import './Property.css'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import { AiFillHeart } from 'react-icons/ai'
import { FaShower } from 'react-icons/fa'
import { MdMeetingRoom } from 'react-icons/md'
import { AiTwotoneCar } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import Map from '../../components/Map/Map'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isError, isLoading } = useQuery(["resd".id], () => getProperty(id))
    //console.log(data)

    if (isLoading) {
        return <div className="wrapper">
            <div className="flexCenter paddings">
                <PuffLoader />
            </div>
        </div>
    }
    if (isError) {
        return <div className="wrapper">
            <div className="flexCenter paddings">
                Something went wrong
            </div>
        </div>
    }

    return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                <div className="like">
                    <AiFillHeart size={25} color='white' />

                </div>
                <img src={data?.image} alt="home" />


                <div className="flexCenter property-details">



                    {/*left  */}
                    <div className="flexColStart left">
                        {/*head */}
                        <div className="flexStart head">
                            <span className="primaryText">{data?.title}</span>
                            <span className="greyText" style={{ fontSize: '1.5rem' }}>$ {data?.price}</span>
                        </div>

                        <div className="flexStart facilities">
                            <div className="flexStart facility">
                                <FaShower size={25} color='#1F3E72' />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility">
                                <AiTwotoneCar size={25} color='#1F3E72' />
                                <span>{data?.facilities?.parkings} Parking</span>
                            </div>
                            <div className="flexStart facility">
                                <MdMeetingRoom size={25} color='#1F3E72' />
                                <span>{data?.facilities?.bedrooms} Rooms</span>
                            </div>
                        </div>


                        <span className="secondaryText" style={{ textAlign: "justify" }}>
                            {data?.description}
                        </span>

                        <div className="flexStart" style={{ gap: "1rem" }}>
                            <MdLocationPin size={25} />
                            <span className="secondaryText" style={{ fontSize: '1.5rem' }}>
                                {data?.address}
                                {data?.city}
                                {data?.country}
                            </span>
                        </div>

                        <button className="button">Book Visit Now</button>

                    </div>

                    {/*right */}
                    <div className="map">
                        <Map
                            address={data?.address}
                            city={data?.city}
                            country={data?.country} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property

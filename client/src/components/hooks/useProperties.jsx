import React from 'react'
import { useQuery } from 'react-query'
import { getAllProperties } from '../../utils/api'

const useProperties = () => {

    const { data, isError, isLoading, refetach } = useQuery(

        "allProperties", getAllProperties,
        { refetachOnWindowFocus: false }
    )

    return {
        data, isError, isLoading, refetach
    }
}

export default useProperties

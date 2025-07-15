'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
    const { userid } = useParams();


    return (
        <div>
            <h1>User ID Page</h1>
            <p>User ID: {userid}</p>
        </div>
    )
}

export default Page

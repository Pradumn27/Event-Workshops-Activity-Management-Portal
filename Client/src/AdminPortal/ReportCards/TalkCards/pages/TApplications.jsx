import React from 'react'
import Talks from '../../../Data/Talks'
import Navbar from '../../../../components/Nav/Nav'
import AllApplications from '../../../../components/Application/AllApplications'
import { useParams } from 'react-router-dom'
import db from "../../../../Firebase/Firebase"

function Applications() {

    const { eventId, type } = useParams()

    React.useEffect(() => {
        let a = eventId.slice(1, eventId.length)
        let b = type.slice(1, type.length)
        db.collection(b).doc(a).get().then(doc => {
            console.log(doc.data())
        })
    }, [])

    return (
        <>
            <Navbar ind={2} Menus={Talks} id={eventId} type={type} />
            <div className="h-screen flex-1 p-7">
                <AllApplications />
            </div>
        </>
    )
}

export default Applications
import React, { useEffect } from "react"
import User from './User'

const Test = () => {
    const [firstName, setFirstName] = useState('Anh Kha')
    const [lastName, setLastName] = useState('Mai')

    useEffect(() => {
        let member = { name: 1, phone: 2, email: 3, gender: 4, school: 5 }
        // member.email 
        const element = document.querySelector('.list-1 .user')
        element.classList.add('one')
    }, [])

    return (
        <React.Fragment>
            <div className="list">
                <User className="user" fullName={`${firstName} ${lastName}`} />
            </div>

            <div className="list-1">
                <User className="user one" fullName={`${firstName} ${lastName}`} />
            </div>
        </React.Fragment>
    )
}

export default Test
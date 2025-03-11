import { Link, Navigate } from "react-router-dom"

function LinkButton({children, to}) {
    if(to === '-1') {
        return (
            <button onClick={() => Navigate(-1)}>&larr; Go back</button>
        )
    }
    return (
        <Link to={to} className='text-sm text-blue-500 hover:underline hover:text-blue-600'>{children}</Link>
    )
}

export default LinkButton

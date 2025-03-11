import { Link } from "react-router-dom"

function Button({children,disabled,to}) {
    const classname="iniline-block bg-yellow-400 py-4 px-3 uppercase tracking-wide font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-yellow-300 sm:px-6 sm:py-4";
    if(to){
        return <Link className={classname} to={to}>{children}</Link>
    }
    return (
        <button disabled={disabled} className={classname}>
            {children}
        </button>
    )
}

export default Button

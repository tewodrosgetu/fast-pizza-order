import { Link } from "react-router-dom"

function Button({children,disabled,to,type,onClick}) {
    

    const base="iniline-block bg-yellow-400 uppercase tracking-wide font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-yellow-300 ";

    const styles={
        primary:base+" py-4 px-3 md:px-6 md:py-4",
        round:base+" py-1 px-2.5 md:px-3.5 md:py-2 text-sm",
        small:base+" py-2 px-3 md:px-4 md:py-2 text-xs",
        secondary:"iniline-block border-2 border-stone-300 hover:text-stone-800 uppercase tracking-wide font-semibold text-stone-400 rounded-full hover:bg-stone-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-stone-300 py-2.5 px-3 md:px-6 md:py-3.5"
    }
    if(to){
        return <Link className={styles[type]} to={to}>{children}</Link>
    }
    if(onClick){
        return (
            <button onClick={onClick} disabled={disabled} className={styles[type]}>
                {children}
            </button>
        )
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button

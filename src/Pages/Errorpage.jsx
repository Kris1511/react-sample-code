import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    
    const { status, statusText } = useRouteError();
    

    return (
        <div className="bg-red-400 m-10 rounded text-white max-w-xl mx-auto p-5">
            <h4 className="text-2xl">#{status} {statusText}</h4>
            <p>Sorry, something went wrong!</p>
            <Link to={'/'} className="underline">Go to home page</Link>
        </div>
    )
}

export default Errorpage;
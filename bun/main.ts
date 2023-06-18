import vixeny from "vixeny/fun"



// Basics
import urlParams from "./basic/urlParams"
import urlQueries from "./basic/urlQueries"
import httpOptions from "./basic/httpOptions"
import typeRequest from "./basic/typeRequest" 
import typeResponse from "./basic/typeResponse"
// Intermediate
import staticServer from  "./intermediate/staticServer"
import jsonStringifier from "./intermediate/jsonStringifier"
// Advanced

/*
    The vixeny framework requires:

    vixeny(option)([...routes])

    option - Configuration options for the vixeny server.
    routes - An array of routes for the vixeny server to handle.

    This example expects the Vixeny server to handle requests at "http://localhost:3000/"
*/
export default  {
    fetch: vixeny(
        { hasName: "http://localhost:3000/"}
    )(
        [
            {
                path: "/",
                f: () => "Hello world"
            },
            // Routes can be imported from other modules using the spread operator 
            ...urlParams,
            ...urlQueries,
            ...httpOptions,
            ...typeRequest,
            ...typeResponse,
            ...staticServer,
            ...jsonStringifier
        ]
    )
}

import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * When the type is set to "response", the optimizer is bypassed. In this case, we get a Request and return a Response directly.
 * Note that we use "r" instead of "f" to denote the request handling function in this case.
*/

export default [
    {
        path: "/response/hello",
        type: "response",
        r: (request) => new Response("Hello world!")    
    }
] as ObjectRawResponse[]

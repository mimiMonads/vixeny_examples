import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * By setting the type to "request", we change the return type to Response. This allows us to keep interacting with the optimizer.
 * Here, we demonstrate this by returning different responses based on a parameter in the URL.
*/

export default [
    {
        path: "/response/who/:name",
        type: "request",
        f: (req) => req.param.name === "Mimi"
            ? new Response( "Welcome back Mimi", {status:200})
            : new Response( "Only devs here", {status: 400})
    }
] as ObjectRawResponse[]

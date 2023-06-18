import { ObjectRawResponse } from "vixeny/optimizer/types";

// This module demonstrates the different options available for handling "untyped" requests in the Vixeny framework

export default [
    // Pre-set headers can be used with a shorthand string. For example, ".html" sets the "Content-Type" header to "text/html".
    {
        path: "/headers/hello",
        headers: ".html",
        f:  () => "<p>Hello world!</p>" 
    },
    // Headers can also be set manually using an object.
    {
        path: "/headers/again",
        headers: { "Content-Type": "text/html"},
        f:  () => "<p>Hello world!</p>" 
    },
    // The status of the response can be set using the "status" property.
    {
        path: "/headers/status",
        status: 201,
        f: () => "Resource successfully created."
    },
    // This route mirrors the body of the request. Vixeny supports five methods: "GET", "HEAD", "POST", "PUT", and "DELETE".
    {
        path: "/headers/method",
        method: "POST",
        status: 201,
        f: (request) => request.req.body
    }

] as ObjectRawResponse []

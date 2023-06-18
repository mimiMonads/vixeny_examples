import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * The "path" is relative to where the terminal is currently located. In this example, we're serving files from the "misc" directory.
 * MIME types are enabled by default but can be disabled by setting "mime: false".
 * At the moment, only one static file can be served at a time.
*/

export default [
    {
        type: "static",
        name: "/static/",
        path: "./misc/",
    },  
] as ObjectRawResponse[]

import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * This module demonstrates using JSON Schema for faster serialization. By defining the structure of our data, we can potentially speed up JSON.stringify by a factor of 3 or more.
*/

export default [
    {
        path: "/json/:name",
        f: (req) => req.param,
        json: {
            scheme: {
                type: "object",
                properties:{
                    name: {
                        type: "string"
                    }
                },
                required: ["name"]
            }
        }
    }
] as ObjectRawResponse[]

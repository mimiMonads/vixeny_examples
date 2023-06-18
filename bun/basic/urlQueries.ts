import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * The query parameters can be inferred if the function was created in the context.
 *
 * Using "Only"  makes the query parser faster.
 *
 */

export default [
  // It will also parse other queries even if we are not using them
  {
    path: '/query/name',
    f: (req) => `Your name is : ${req.query?.name || "default"}`
  },
  {
    path: '/query/nameAndId',
    f: (req) => `Your name is : ${req.query?.name || 'default'} with the id : ${req.query?.id || "-1"}`
  },
  {
    // It will ignore anything else other than 'name'
    path: '/query/onlyName',
    query: {
      only: ["name"]
    },
    f: (req) => `Hello ${req.query?.name || 'default'}`
  },
  {
    path: '/query/accept',
    add: ["query"],
    f: (req) => `Your name is : ${req.query?.name}`
  },
  {
    /*
     * The optimizer stringifies your function and checks for the tokens used,
     * in this case it will tell to the composer that we are expecting queries
     * and also that it has to parse them all. With 'delete', we are pushing it 
     * out, this request will respond 'true' 
     */
    path: '/query/block',
    delete: ['query'],
    f: () => (
      (query) => `${Number(null) === query}`
    )(0)
  }
] as ObjectRawResponse[]

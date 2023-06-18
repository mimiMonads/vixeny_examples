import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * Query cam be infer if the function was created in the context
 *
 * Only makes the query parser faster
 *
 *
 */bin /
export default [
  // it will also parse other queries even if we are not using them
  {
    path: '/query/name',
    f: f => "Your name is :" + f.query?.name || "default"
  },
  {
    path: '/query/nameAndId',
    f: f => 'Your name is :' + (f.query?.name || 'default') + ' wiht the id : ' + (f.query?.id || "-1")
  },
  {
    //it will ignore anything else
    path: '/query/onlyName',
    query: {
      only: ["name"]
    },
    f: f => 'Hello ' + (f.query?.name || 'default')
  },
  {
    path: '/query/accept',
    add: ["query"],
    f: f => "Your name is :" + f.query?.name
  },
  {
    /*
     * The checker stringtifies your function and check for the tokens used,
     * in this case it will tell to the composer that we are expection quieres
     * and also that it have to parse them all, with 'delete' we are pushing it 
     * out, this petition will responde 'true' 
     */
    path: '/query/block',
    delete: ['query'],
    f: () => (
      query => '' + (Number(null) === query)
    )(0)
  }
] as ObjectRawResponse[]

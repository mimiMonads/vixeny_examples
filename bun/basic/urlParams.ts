import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * Here, we are providing examples of how parameters work with the Vixeny framework,
 * and also providing a brief introduction to how the optimizer works.
 *
 * The Optimizer is a feature of the Vixeny framework that infers what the request requires,
 * adding or removing elements from the arguments of the route handler function.
 */

export default [
  {
    // Getting a single parameter from the URL.
    path: '/param/:id',
    f: (req) => `Your id from '/param/:id' is: ${req.param.id}`
  },
  {
    // Demonstrates that the route matching is sensitive to trailing slashes.
    path: '/param/:id/',
    f: (req) => `Your id from '/param/:id/' is: ${req.param.id}`
  },
  {
    // Demonstrates how to handle multiple parameters in a URL.
    path: '/param/:name/:id',
    f: (req) => `Your name is: ${req.param.name} with the id : ${req.param.id}`
  },
  {
    // Demonstrates handling non-sequential parameters.
    path: '/param/:name/bun/:where',
    f: (req) => `Hello ${req.param.name}, the oven is ready for you at : ${req.param.where}`
  },
  {
    path: '/param/:name/deno/:where',
    f: (req) => `Hello ${req.param.name}, time to ride the t-rex at : ${req.param.where}`
  },
  {
    // Shows how to force the addition of a parameter in the optimizer.
    path: '/param/out/:name',
    add: ["param"],
    f: (req) => `Hey, ${req.param.name}, what are you doing?`
  },
  {
    // Demonstrates how to disable parameters in the optimizer. 
    // If the 'number' parameter is not available, 'default' is returned.
    path: '/param/block/:number',
    delete: ['param'],
    f: (req) => req.param?.number ?? 'default'
  }
] as ObjectRawResponse[]

import { ObjectRawResponse } from "vixeny/optimizer/types";

/*
 * parameters are infer if the function is created in the context 
 */

export default [
  {
    // getting just one element
    path: '/param/:id',
    f: f => "Your id from '/param/:id' is:" + f.param.id
  },
  {
    // sensible to '/'
    path: '/param/:id/',
    f: f => "Your id from '/param/:id/' is:" + f.param.id
  },
  {
    // multiple
    path: '/param/:name/:id',
    f: f => 'Your name is:' + f.param.name + ' with the id : ' + f.param.id
  },
  // not sequetial parameter
  {
    path: '/param/:name/bun/:where',
    f: f => 'Hello ' + f.param.name + ' the oven is ready for you at : ' + f.param.where
  },
  {
    path: '/param/:name/deno/:where',
    f: f => 'Hello ' + f.param.name + ' time to ride the t-rex at : ' + f.param.where
  },
  {
    //how to handle a function out of the scope, in this case it does do anything
    path: '/param/out/:name',
    add: ["param"],
    f: f => 'Hey, ' + f.param.name + ' where are u doing?'
  },
  {
    //how to disable parameters
    path: '/param/block/:number',
    delete: ['param'],
    f: f => '"2" + 2 = ' + f.param?.number ?? '22'
  }
] as ObjectRawResponse[]

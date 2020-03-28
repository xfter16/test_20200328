'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Tariff = use('App/Models/Tariff');
const License = use('App/Models/License');

Route.on('/').render('welcome');

Route.get('/tariff/:id', async ({params}) => {
  return await Tariff.getById(params.id);
});

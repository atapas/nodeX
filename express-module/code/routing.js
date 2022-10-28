/*
* @description : Routing in Express
*   Routing is very crucial. It defines the URL structure that can be used to
*   interact with the web application.
*   Express apps use routers that are containers for a bunch of middleware. The
*   middleware holder can be used on a certain route, which enables to place the logic
*   in separate files and bring them together. 
*/

const express = require('express')

let router = express.Router();

const reqRouterDest = require('<Provide here the path to the controller where we need to route the request to>');

router.get('<Give here the end points we need to redirect>', reqRouterDest.nameOfFunction);
router.post('<Give here the end points we need to redirect>', reqRouterDest.nameOfFunction);
router.put('<Give here the end points we need to redirect>', reqRouterDest.nameOfFunction);
router.delete('<Give here the end points we need to redirect>', reqRouterDest.nameOfFunction);
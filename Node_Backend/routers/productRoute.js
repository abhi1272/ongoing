const express = require('express');
const router = express.Router();
const appConfig =  require('./../config/appConfig')
const productController = require('./../controllers/productController')
const mailController = require('./../controllers/mailController')

let productRouter = (app) => {

    let baseUrl = appConfig.apiVersion+'/products'

    app.get(baseUrl+'/email',mailController.getEmail)

    app.post(baseUrl+'/mail',mailController.sendMail)

    app.post(baseUrl+'/add',productController.addProduct)

    app.get(baseUrl+'/all',productController.getAllProduct)

    app.get(baseUrl+'/:name',[productController.getSingleProduct])

    app.post(baseUrl+'/edit/:Batch',productController.editProduct)

    app.put(baseUrl+'/delete/:Batch',productController.deleteProduct)

}

module.exports = productRouter




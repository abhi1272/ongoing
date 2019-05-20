
let notFound = (req,res,next) =>{

    console.log('route not found')
    res.status(400).send('route not found')
}


module.exports = {
    notFound:notFound
}
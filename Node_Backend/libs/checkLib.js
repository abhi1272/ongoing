
    let isEmpty = (result) =>{

        if(result === undefined || result === null || result === ""){
            return true
        }else{
            return false
        }
    }



    module.exports = {
        isEmpty:isEmpty
    }
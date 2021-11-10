// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigOrSmall = (str) =>{
    return new Promise(
        (resolve,reject)=>{
            if(str.length > 10){
                resolve(str)
            }
            else{
                reject(str)
            }
        }
    )
}

isBigOrSmall("hellohowareyou").then(
    (result)=>{
        console.log(`${result} : Big Word `)
    }).catch(
        (error)=>{
            console.log(`${error} : Small Word `)
        }
    )
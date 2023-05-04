const fs = require("fs")

const addperson = (id,fname,lname,city,age)=> {
    const allData = loadData()
    // console.log(allData)
    const duplicatedData = allData.filter((obj)=>{
        return obj.id ===id
    })
    // console.log(duplicatedData)
    if(duplicatedData.length ==0) {
        
     allData.push ({
        id : id,
        fname : fname ,
        lname : lname , 
        age : age ,
        city : city 
     })
     saveData(allData)
    }
    else {
        console.log("DUPLICATED ID NOT ALLOWED")
    }

}
/////////////////////

const loadData = () => {

    try {
        const dataJson = fs.readFileSync( "data1.json")
     return JSON.parse(dataJson)
    
        
     } catch {
        console.log("gggggggggggggggg")
         return []
     }

 }
 //////////////////////////////////////////
 
 const saveData = (allData) => {
    const saveDataJson  = JSON.stringify(allData)
    fs.writeFileSync ("data1.json" , saveDataJson)
    // console.log("you added an item")
}
///////////////////////////////////////

const deleteData = (id) => {
    const allData = loadData()
console.log (allData,"data present in file")
    const dataToKeep = allData.filter ((obj) => {
        return  obj.id !== id 
    })
  
console.log(dataToKeep,"ddddddddddddddddddddddd")
    saveData (dataToKeep)
    console.log(" You have successfully deleted the item ")


}
const readData = (id) => {
        
    const allData = loadData()
 
    const itemNeeded =  allData.find ((obj) => {
        return  obj.id === id 
    })
     console.log(itemNeeded)
 
     if (itemNeeded) {
        console.log(itemNeeded.id)
     } else {
        console.log("id needed not found ")
     }
 }
 //////////////////////////////////////////////////////////////////////
 
      const listData = () => {
            const allData = loadData()
 
            allData.forEach ((obj) => {
                console.log(obj.fname ,  obj.age , obj.city)
            })
      }
 
 
 
 
  module.exports = {
     addperson ,
     deleteData ,
     readData ,
     listData
  }
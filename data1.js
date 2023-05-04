const fs = require("fs")

const addPerson = (id,fname,lname,city,age)=> {
    const allData = loadData()
    const duplicatedData = allData.filter((obj)=>{
        return obj.id ===id
    })
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
        
         return []
     }

 }
 //////////////////////////////////////////
 
 const saveData = (allData) => {
    const saveDataJson  = JSON.stringify(allData)
    fs.writeFileSync ("data1.json" , saveDataJson)
    
}
///////////////////////////////////////

const deleteData = (id) => {
    const allData = loadData()
        const dataToKeep = allData.filter ((obj) => {
        return  obj.id !== id 
    })
    saveData (dataToKeep)
    console.log(" You have successfully deleted the item ")


}
/////////////////////*************** ********************///////////////////////
const readData = (id) => {
        
    const allData = loadData()
 
    const itemToRead =  allData.find ((obj) => {
        return  obj.id === id 
    })
     console.log(itemToRead)
 
     if (itemToRead) {
        console.log(itemToRead.id)
     } else {
        console.log("id needed not found ")
     }
 }
 //////////////////////**********************************/////////////////////
 
      const listData = () => {
            const allData = loadData()
 
            allData.forEach ((obj) => {
                console.log(obj.fname ,  obj.age , obj.city)
            })
      }
 
 
 //*************************************************************************************/
 
  module.exports = {
     addPerson ,
     deleteData ,
     readData ,
     listData
  }
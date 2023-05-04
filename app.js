const yargs = require("yargs")
const data1 = require("./data1")
yargs.command({
    command:"add",
    describe : "add an item to file" ,
    builder : {
        fname : {
            describe : "first name of person",
            demandOption: true ,
            type : "string"
        } ,
        lname : {
            describe : "last name of person",
            demandOption: true ,
            type : "string"
        } ,
        city : {
            describe : "city where a person live",
            demandOption: true ,
            type : "string"
        } ,
        id : {
            describe : "id of a person ,it's unique",
            demandOption: true ,
            type : "string"

        } ,
        age :{
            
            describe : "ageof a person ",
            demandOption: true ,
            type : "string"
        }
    },
    handler :(item)=> {
        data1.addPerson(item.id,item.fname,item.lname,item.city,item.age)
    }
})

/////////////////////////////////


yargs.command ({
    command : "delete" ,
    describe : "to delete an item",
    builder : {
        id : {
            describe : "this is id of requied item to be deleted ",
            demandOption : true ,
            type : "string"
        }
   },
    handler :(x)=> {

       data1.deleteData (x.id)
    }
  })   

  yargs.command ({
    command : "read",
    describe : "Read data from file" ,
    builder : {
         id : {
             describe : "this is id desc in read command ",
             demandOption : true ,
             type : "string"
         }
    },
    handler : (x) => {
      data1.readData(x.id)
    }
  })
  
///////////////////////////////////////////////////////////////////////////////////////////
  yargs.command ({
   command : "list",
    describe : "to list data",
     handler : ()=> {
       data1.listData()
     }
  })

   console.log(yargs.argv)

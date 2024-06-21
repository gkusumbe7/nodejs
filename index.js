const fs = require("fs");

fs.writeFile("sample.txt","This is Sample File", (err)=>{
    if(err){
        console.log("error is occured");
    }else{
        console.log("File is created successfully");
    }
})
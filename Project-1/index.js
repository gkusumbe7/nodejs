const fs = require("fs");


const fileName = "userData.json"
const user = [{id:1 , name:"Ganesh" , age:22}]

const writeFileDemo = (fileName,user) =>{
        fs.writeFile(fileName,JSON.stringify(user),(err)=>{
            if(err){
                console.log("Error Occuured")
                return;
            }else{
                console.log("Succefully Created file")
            }
        })
}
writeFileDemo(fileName , user);



const newData = {id:3  , name:"Bhushan" , age:20}

const readFileDemo = (fileName)=>{
    fs.readFile(fileName,(err , data)=>{
        if(err){
            console.log("Error Occuured" , err);
            return;
        }
        console.log("file data ", data.toString());

        const userData = JSON.parse(data.toString());

        userData.push(newData)
        // console.log(userData)
        writeFileDemo(fileName , JSON.stringify(userData))
    })
}

readFileDemo(fileName);

// const appeFileDemo = ()=>{
//     fs.appendFile("textFile1.txt","append example in file",(err)=>{
//         if(err){
//             console.log("err occured in file", err);
//         }else{
//             console.log("Append Successfully")
//         }
//     } )
// }
// appeFileDemo();
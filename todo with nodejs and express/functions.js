var fs= require('fs');
var data; //=fs.readFileSync('data.json');
// data = JSON.parse(data);

var id=0;
module.exports.view=()=>
{
    read();
   data=JSON.stringify(data);
   console.log('data in data : '+data);
    return data;
}
module.exports.add = (value)=>
{
    read();
    IdVal();
    const obj = {
        'id':id,
        'value':value
    }
    
    data.push(obj);
    id++;
    console.log(data);
write();
};
module.exports.Del=(Did)=>
{
    read();
    data=data.filter(a=>a.id!=Did);
   write();
}
module.exports.update=(bod)=>
{
    read();
    for(x in data)
    {
        if(data[x].id===bod.id)
        {            
            data[x].value=bod.value;
            write();
        }
    }
}
 var read=()=>
{
    console.log("in read");
    
   data =fs.readFileSync('data.json');
    data = JSON.parse(data);  
}
var IdVal=()=>{
    var sId=JSON.stringify(data);
    if(sId!='[]')
    {
        console.log('data is not []');
        id=data[data.length-1].id;
        id++;
    }
}
var write=()=>
{
data=JSON.stringify(data);
fs.writeFileSync('data.json',data);
console.log("data inserted");
}
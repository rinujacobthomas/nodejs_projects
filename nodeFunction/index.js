const Module = require('./package1');
var a=function()
{
    console.log("Rinu");
}
var b=function(fun){
    fun();
    console.log(" thomas");
}
var e=Module.d();
console.log(e);
Module.f();
//b(a);
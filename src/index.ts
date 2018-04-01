import path from "path";

console.log(path);

console.log( process.platform);
if(process.env.PATH){
  console.log( process.env.ProgramFiles);
  console.log( process.env["ProgramFiles(x86)"]);
  //console.log( process.env.PATH.split(';'));
}

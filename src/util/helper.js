//const Date= getdate()
function printdate()
{let systemdate =new Date()
    console.log(systemdate)}

//module.exports.systemdate= this.systemdate
module.exports.printdate= printdate

function printmonth(){
const today = new Date()
const month=today.toLocaleString('default', { month: 'long' }) //print the months name
console.log(month)
}
module.exports.printmonth = printmonth

function getBatchInfo()
{const batchinfo=["Plutonium", "W3D3","the topic for today is Nodejs module system"]
    for(let i=0;i<batchinfo.length; i++)
    console.log(batchinfo[i])

    }
    module.exports.getBatchInfo= getBatchInfo
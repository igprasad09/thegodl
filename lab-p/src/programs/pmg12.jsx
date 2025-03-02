import React, { useEffect, useState } from 'react'

function Pmg12() {
  console.log()
  const [data,setData] = useState(`import re
# Search String
str="The rain in spain"
x=re.findall("ai",str)
print("Search of string 'ai': ",x)
x=re.search("\s" ,str)
print("The first white-space character is located in position : ",x.start())
x=re.split("\s",str,1)
print("Split the string in the occurance of first white-space:",x)
x=re.sub("\s","9",str)
print("Each white-space is replaced with 9 digit: ",x)
print("----------------------------------------------")
# Metacharacters
x=re.findall("[a-g]",str)
print("The letters in between a to g in the string:",x)
x=re.findall("spain$",str)
if(x):
print("\n",str, ": Yes, this string ends with 'spain' word ")
else:
print("\n No match ")
x=re.findall("^The",str)
if(x):
print("\n",str,": Yes, this string starts with 'The' word")
else:
print("\n No match")
str1="The rain in spain falls mainly in the plain"
x=re.findall("ai*",str1)
print("\n All ai matching characters:",x)
if(x):
print("Yes, there is atleast one match")
else:
print("No match")
x=re.findall("all{1}",str1)
print("\n The string which contains 'all':",x)
if(x):
print("Yes, there is atleast one match")
else:print("No match")
str2="That will be 59 dollars"
x=re.findall("\d",str2)
print("\n Digits in the string:",x)
x=re.findall("do...rs",str2)
print("\n Dot metacharacter matches any character:",x)`);
  
   const handleCopy = async()=>{
       try{
         await navigator.clipboard.writeText(data)
         alert('program copyed')
       }catch(err){
        console.log(err)
        alert('failed to copy.....')
       }
   }

  return (
    <div className='grid justify-center '>
     <button onClick={handleCopy} className='bg-emerald-500 mt-10 cursor-pointer flex items-center justify-center text-white h-9 rounded-lg font-bold w-40 text-base gap-2 group'>

        <lord-icon
    src="https://cdn.lordicon.com/ijahpotn.json"
    trigger="hover" 
    >
</lord-icon>
        </button>   
     <div className='w-300 h-120 bg-white mt-5'>

     <div class="relative h-full w-full overflow-hidden overflow-y-scroll bg-slate-950">
     <pre className="select-text ml-5 mt-4  text-white font-bold" >
     {data}
</pre>

<div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        </div>
        
     </div>

<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  )
}

export default Pmg12
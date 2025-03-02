import React, { useEffect, useState } from 'react'

function Pmg8() {
  console.log()
  const [data,setData] = useState(`str1=input("Enter the first string:")
str2=input("Enter the second string:")
print("conversion of uppercase of",str1,"is",str1.upper())
print("conversion of lowercase of",str2,"is",str2.lower())
print("swapcase of string",str1,"is",str1.swapcase())
print("title-case-of string",str1,"is",str1.title())
print("string replacement of first string",str1,"is",str1.replace(str1,str2))
string="python is awesome"
capitalized_string=string.capitalize()
print("\n old string ",string)
print("capitalized string",capitalized_string)
name="bcacollegenidasoshi"
if name.isalpha()==True:
print("All characters are alphabets")
else:
print("All characters are not alphabets")
print("Maximum is",max(1,2,3,4))
num=[1,3,2,8,5,10,6]
print("Maximum number is:",max(num))
teststring="python"
print("Length of",teststring,"is",len(teststring))`);
  
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

export default Pmg8
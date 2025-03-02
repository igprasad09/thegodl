import React, { useEffect, useState } from 'react'

function Pmg14() {
  console.log()
  const [data,setData] = useState(`print("PROGRAM FOR BUILT-IN METHODS OF LIST\n ");
demonstrate List
numbers=[1,2,13,40,5]
print(numbers)
sum_of_numbers=sum(numbers)
print("Sum=",sum_of_numbers)
max_number=max(numbers)
print("Max=",max_number)
min_number=min(numbers)
print("Min=",min_number)
numbers.sort()
print("sorted numbers in ascending",numbers)
numbers.reverse()
print("sorted numbers in descending",numbers)
numbers.append(6)
print("Updated numbers",numbers)
numbers.remove(13)
print("Removed",numbers)
numbers.clear()
print("List after clear",numbers)`);
  
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

export default Pmg14
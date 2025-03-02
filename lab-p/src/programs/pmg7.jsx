import React, { useEffect, useState } from 'react'

function Pmg7() {
  console.log()
  const [data,setData] = useState(`def add(x, y):
 return x + y
def subtract(x, y):
 return x - y
def multiply(x, y):
 return x * y
def divide(x, y):
 return x / y
print("Select operation.")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Divide")
while True:
 choice = input("Enter choice(1/2/3/4): ")
 if choice in ('1', '2', '3', '4'):
 try:
 num1 = float(input("Enter first number: "))
 num2 = float(input("Enter second number: "))
 except ValueError:
print("Invalid input. Please enter a number.")
 continue
 if choice == '1':
print(num1, "+", num2, "=", add(num1, num2))
elif choice == '2':
print(num1, "-", num2, "=", subtract(num1, num2))
elif choice == '3':
print(num1, "*", num2, "=", multiply(num1, num2))
elif choice == '4':
print(num1, "/", num2, "=", divide(num1, num2))
next_calculation = input("Let's do next calculation? (yes/no): ")
 if next_calculation == "no":
 break
 else:
print("Invalid Input")`);
  
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

export default Pmg7
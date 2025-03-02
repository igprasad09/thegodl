import React, { useEffect, useState } from 'react'

function Pmg16() {
  console.log()
  const [data,setData] = useState(`import sqlite3
# create a connection to a Sqlite database
conn=sqlite3.connect('test.db')
# create a cursor object
cursor=conn.cursor()
# create a table
cursor.execute("create table emp2(id integer, name tect)")
#insert a record into the tables
cursor.execute("insert into emp2(id,name) values(101,'ravi')")
cursor.execute("insert into emp2(id,name) values(102,'raj')")
cursor.execute("insert into emp2(id,name) values(103,'ramesh')")
print("\nDisplaying the emp2 table")
cursor.execute("select *from emp2")
rows=cursor.fetchall()
for row in rows:
 print(row)
print("\nafter update and delete the records in the table")
# update records in the table
cursor.execute("update emp2 set name ='Akash' where id=101")
#delete a record from the table
cursor.execute("delete from emp2 where id=103")
print("Displaying the emp2 table")
cursor.execute("select *from emp2")
rows=cursor.fetchall()
for row in rows:
 print(row)
 #drop the table
print("\nTable is droped...")
cursor.execute("drop table emp2")
#commit the transaction
conn.commit()
#close the cursor and the connections
cursor.close()
conn.close()`);
  
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

export default Pmg16
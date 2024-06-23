
import { useState } from "react"

export default function App() {
 
  var [task, setTask] = useState([]);
  var [gay, setgay] = useState("");
  var [num, setNum] = useState(0);
  var [u,setu]=useState(true)

  function create (){
    setgay('');
    setTask(  prev=>{return [...prev, gay];})
    }
    const arr = [...new Set(task)]

    function toggle (){
      if (u){setNum(num+1)}
      setu(false);
      u = !u;
    }

    function func (){
      if (gay !== ""){
        create(); 
      }
      else if (gay === ""){console.log("error")};
      
    }

function del(para){
 setTask(task.filter(item => item!== para));
 if (arr.length === 0){setNum(0);}
 else if (arr.length > num){setNum(arr.length - num)}
}

function delAll (){
  arr.length = 0;
  setTask(arr)
  setNum(0);
}
  
  
  return (
    <section>
    <h1 className="text-5xl text-center font-bold py-8">
      TaskPlanner
    </h1>
    <h1 className="text-4xl text-center font-bold py-0">
      Number of Tasks: {arr.length}
    </h1>
    {/* <h1 className="text-4xl text-center font-bold py-8">
      Number of Tasks Completed: {num}
    </h1> */}

<center className="flex gap-10 justify-center py-10">
  <input id="btn" className="px-20 rounded-full border-slate-900 text-2xl border-4"
  onChange={e=>{setgay(e.target.value)}} value={gay}
  onKeyDown={e=>{if(e.key === 'Enter'){func()}}}
  >
  </input>
  <button onClick={func}  className='bg-blue-500 shadow-2xl shadow-sky-950 p-5  w-min rounded-full text-center text-white text-2xl font-bold'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
  <button onClick={delAll}  className='shadow-2xl shadow-red-950 bg-red-600 p-5  w-auto rounded-full text-center text-white text-2xl font-bold'>Delete All</button>
</center>

     { arr.map((p)=>{
      
        return <center className=" flex gap-5 justify-center py-1">
          <input onClick={toggle} className=" w-16" type="checkbox"></input>
        <div className="py-5 text-center flex gap-5 center shadow-2xl shadow-black bg-black rounded-2xl w-1/2 h-20 text-white text-3xl font-bold">
        <p className="text-center px-20 text-blue-400">{arr.indexOf(p)+1}.</p>
        <p className=" first-letter:uppercase"> {p} </p>
        </div>
        <button onClick={()=>{del(p)}} className=" bg-red-600 p-6 text-white font-bold rounded-2xl text-xl text-bold"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
        </center>
      })}

    </section>
  )
}
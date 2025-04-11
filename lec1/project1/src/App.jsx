import {getDatabase, ref, set} from "firebase/database"
import {app} from "./firebase"
import './App.css'

const db = getDatabase(app);

function App() {
  const putData = () =>{
    set(ref(db, 'user/shubham'), {id:1,name:"shubham", age:21} )
  }

  return (
    <>
      <div className='text-3xl text-center py-5 bg-slate-300'>
        <h1>Firebase React App</h1>
        <button onClick={putData}>Put Data</button>
      </div>
    </>
  )
}

export default App

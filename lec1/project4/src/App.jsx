import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { app } from "./firebase";
import "./App.css";

const firestore = getFirestore(app);

function App() {
  const writedata = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      nams: "Delhi",
      pincode: "1234",
      lat: "123",
      long: "564",
    });
    console.log(result);
  };

  const makeSubCollecton = async () => {
    await addDoc(collection(firestore, "cities/3A2Gi3ATM5kT1PTZJ7AD/places"), {
      name: "This is a place",
      desc: "Awsm Desc",
      date: Date.now(),
    });
  };
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "3A2Gi3ATM5kT1PTZJ7AD");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };
  const getDocByQuery = async() => {
    const collectionsref = collection(firestore, "users")
    const q = query(collectionsref,where("isMale", "==", true) );
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()))
  }

  const updatedoc = async() => {
    const docref = doc(firestore, "cities","3A2Gi3ATM5kT1PTZJ7AD" )
    await updateDoc(docref, {
      name:"New Delhi"
    })
  }

  return (
    <>
      <div>
        <h1>Firebase Firestore</h1>
        <button onClick={writedata}>Put Data</button>
        <button onClick={makeSubCollecton}>Put Sub Data</button>
        <button onClick={getDocument}>Get Data</button>
        <button onClick={getDocByQuery}>Get Doc By query</button>
        <button onClick={updatedoc}>Update doc</button>
      </div>
    </>
  );
}

export default App;

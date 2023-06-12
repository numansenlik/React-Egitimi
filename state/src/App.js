import { useState } from "react";
function App() {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState("25");
  const [friends, setFriends] = useState(["Süleyman", "Cahit"]);
  const [address, setAddress] = useState({ title: "Bursa", zip: 190933 })
  const [value,setValue]= useState("")
  function onChangeInput(e) {
    setValue(e.target.value)
  };
  function addFriends() {
    setFriends([...friends, value])
    setValue("")
  }
  return (<>
    <h3>Merhaba {name}</h3>
    <h3>Yaş {age}</h3>
    <button onClick={() => setName("Numan")}>Name Change</button>
    <button onClick={() => setAge("26")}>Age Change</button>
    <button onClick={addFriends}>Arkadaş Ekle</button>
    <input name="name" value={value} onChange={onChangeInput}/>
    <button onClick={()=>setAddress({...address,title:"İstanbul"})}>Adress Change</button>
    <hr />
    {friends.map((item, index) => { return <h3 key={index}>{item}</h3> })}
    <hr />
    <h3>{`Şehir ${address.title} Posta kodu: ${address.zip}`}</h3>
  </>)
}
export default App;
import React,{ useState }  from 'react';
import './App.css';
import Cards from "C:\\Users\\SanjayeJ\\Desktop\\card\\my-app\\src\\Components\\Card.js";

function App() {
  const [h,seth]=useState("h");
    const [e,sete]=useState('e');
    const [a,seta]=useState("1");
    const [b,setb]=useState("2");
    const [c,setc]=useState("3");
    const [d,setd]=useState("4");
    const [ee,setee]=useState("5");
    const [f,setf]=useState("6");
    const [g,setg]=useState("7");
    const [i,seti]=useState("8");
  return (
    <div className="App">
      <Cards h={"FREE"} e={"$0/month"} a={"✔ Single User"} b={"✔ 5GB Storage"} c={"✔ Unlimited Public Projects"} d={" ✔Community Access"} ee={"✖ Unlimited Private Projects"} f={"✖ Dedicated Phone Support"} g={"✖ Free Subdomain"} i={"✖ Monthly Status Reports"}/>
      <Cards h={"PLUS"} e={"$9/month"} a={"✔ 5 Users"} b={"✔ 50GB Storage"} c={"✔ Unlimited Public Projects"} d={"✔ Community Access"} ee={"✔ Unlimited Private Projects"} f={"✔ Dedicated Phone Support"} g={"✔ Free Subdomain"} i={"✖ Monthly Status Reports"}/>
      <Cards h={"PRO"} e={"$49/month"} a={"✔ Unlimited Users"} b={"✔ 150GB Storage"} c={"✔ Unlimited Public Projects"} d={"✔ Community Access"} ee={"✔ Unlimited Private Projects"} f={"✔ Dedicated Phone Support"} g={"✔ Unlimited Free Subdomain"} i={"✔ Monthly Status Reports"}/>
    </div>
  );
}

export default App;

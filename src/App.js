import Form from "./Form";
import {useState} from 'react'
import './App.css'
import FormSuccess from "./FormSuccess";

function App() {
const [isSubmitted, setIsSubmitting] = useState(false);

const submitedForm = () =>{
  setIsSubmitting(true);
}
  return (
    <div className="app">
    {!isSubmitted ? <Form submitform ={submitedForm} /> : (<FormSuccess />)}
    </div>
  );
}

export default App;

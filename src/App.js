import FormSub from "./FormSub";
import {useState} from 'react'
import './App.css'
import FormSuccess from "./FormSuccess";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
const [isSubmitted, setIsSubmitting] = useState(false);

const submitedForm = () =>{
  setIsSubmitting(true);
}
  return (
    <div className="app">
    {!isSubmitted ? <FormSub submitform ={submitedForm} /> : (<FormSuccess />)}
    </div>
  );
}

export default App;

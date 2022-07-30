import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
    <div>
    <Navbar theme = {theme} setTheme = {setTheme} />
    <Alert alert={alert}/>
    <Textform showAlert={showAlert} theme = {theme} setTheme = {setTheme} />
    </div>
  );
}

export default App;

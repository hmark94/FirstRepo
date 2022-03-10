import SimpleComponent from './Components/SimpleComponent';
import './App.css';
import SimpleComponent2 from './Components/SimpleComponent2';

function App() {

  const componentVar = <SimpleComponent />
  const componentVar2 = <SimpleComponent2 />
  const switchEnable = false;


  return (
    <div className="App">
      <SimpleComponent />
      {switchEnable ? componentVar : componentVar2}
    </div>
  );
}

export default App;

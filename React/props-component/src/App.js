import SimpleComponent from './Components/SimpleComponent';
import './App.css';
import SimpleComponent2 from './Components/SimpleComponent2';
import MenuItem from './Components/MenuItem';
import ImageComp from './Components/ImageComp';
import PropsDestructoring from './Components/PropsDestructoring';
import ImageIcon from './Components/ImageIcon';
import Books from './Components/Books';
import Label from './Components/Label';


function App() {

  const componentVar = <SimpleComponent />
  const componentVar2 = <SimpleComponent2 />
  const switchEnable = false;

  const bookList = ['Konyv cim 1', 'Konyv cim 2', 'Konyv cim 3']

  return (
    <div className="App">
      {/*       <SimpleComponent />
      {switchEnable ? componentVar : componentVar2}

      <MenuItem />

      <ImageComp 
      title = {'Leírás'}
      button = {<button>Profil szerkesztése</button>}/>

      <PropsDestructoring src="https://placekitten.com/200/200" label="hello" /> */}

      <Books bookList={bookList} />
      <Books bookList={bookList} decorationComponent={<ImageIcon src="https://placekitten.com/20/20" alt="Hello" />} />


    </div>
  );
}

export default App;

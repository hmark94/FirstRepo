
import './App.css';
import StateComponent from './Components/states/StateComponent';
import ClickComponent from './Components/states/ClickComponent';
import Counter from './Components/states/CounterComp';
import Toggle from './Components/states/Toggle';
import ImageToggle from './Components/states/ImageToggle';
import ArrayState from './Components/states/ArrayState';
import ObjectState from './Components/states/ObjectState';
import Form from './Components/froms/Form';
import FormMoreInput from './Components/froms/FormMoreInputs';
import ShareData from './Components/Share/ShareData';
import Header from './ClassComponents/Header';
import Filter from './ClassComponents/Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slider from './slider/Slider';


function App() {

  const images = [
    'https://www.w3schools.com/howto/img_nature_wide.jpg',
    'https://www.w3schools.com/howto/img_snow_wide.jpg',
    'https://www.w3schools.com/howto/img_lights_wide.jpg'
  ]

  /* const heroes = ["batman", "superman", "wonder woman", "aquaman", "spider-man", "captain america", "wolverine", "black panther", "flash", "thor", "hulk"]; */

  return (
    <div className="App">
      {/* <StateComponent />

      <ClickComponent /> */}
      {/*   <Counter />

      <Toggle /> */}

      {/*       <ImageToggle />

      <ArrayState />

      <ObjectState /> */}

      {/* <Form /> */}
      {/* <FormMoreInput /> */}

      {/*  <ShareData /> */}
      {/* {<Header title={"Hello class component with props"} subtitle= {"Hello subtitle prop"} />} */}

      {/* <Filter words={ heroes }/> */}

      {/* <FontAwesomeIcon icon={ faChevronLeft } />
      <FontAwesomeIcon icon={ faChevronRight } /> */}
      <Slider images={images} />
    </div>
  );
}

export default App;


import './App.css';
import Title from './components/MyTitle'
import Paragraph from './components/MyParagraph'
import Img from './components/MyImg'
import Conditional from './components/ConditionalJSX';
import AnimalCard from './components/AnimalCard';
import ArrayProps from './components/ArrayProps';
import CompetitionProps from './components/Competition';
import FuncProps from './components/FuncProps';
import ShowItem from './components/ShowItem';



const helloFuncVar = () => { return `Hello Function Var` };
const dateNow = () => {
  return new Date().toISOString().slice(0, 10);
};

const items = [1, 2, 'alma', 'abc'];
const getItem = (index) => items[index];

function App() {
  return (
    <div>
      {/* <Img />
      <Title />
      <Paragraph />

      <Conditional />
      <AnimalCard obj={{
        id: 1,
        name: "CicaMica",
        species: "Bengal",
        age: 4,
        pedigree: true,
        other: null,
      }} />

      <ArrayProps
        array={
          [1, 2, 3, 4, 5, 6]
        } />

      <CompetitionProps
        competitors={
          ["Béla", "Sanyi", "Réka", "Alma"]
        } /> */}

      <FuncProps
        helloFunction={() => { return `Hello Function` }}
        helloFuncVar={helloFuncVar}

        dateNow = {dateNow}
      />

      <ShowItem 
      selectedIndex={3}
      getItem={getItem}
      />


    </div>
  );
}

export default App;

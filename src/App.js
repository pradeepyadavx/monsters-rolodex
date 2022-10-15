//import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/searh-box/search-box.component";
import { useState ,useEffect } from "react";

const App = () => {
  
  const [searchField, setSeaerchFiled]= useState(''); // [value,setValue]
  const [ monsters , setMonsters ]= useState([]);
  const [filterdMonster , setFilteredMonster] = useState([monsters]);

  useEffect( () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      setMonsters(users)
    );
  },[])

  useEffect(()=>{
    const newfilterdMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newfilterdMonster);
  },[monsters,searchField])

  
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSeaerchFiled(searchFieldString);
  };

  
  

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
    <SearchBox onChangeHandler={onSearchChange} placeHolder="Search  Monsters" className="search-box"/>
    <CardList monsters={filterdMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterdMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeHolder="Search  Monsters" className="search-box"/>
//         <CardList monsters={filterdMonster} />
//       </div>
//     );
//   }
// }

export default App;

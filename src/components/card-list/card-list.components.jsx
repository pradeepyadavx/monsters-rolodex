import { Component } from "react";
import "./card-list.styles.css"
import CardConatiner from "../card/card.component";
import Card from "../card/card.component";

const CardList = ({monsters}) => {
      return (
          <div className="card-list">
          {monsters.map((monster) =>{
            return(
              <Card key={monster.id} monster={monster}/>
            )
          })}
       </div>
      );
    }


// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//         <div className="card-list">
//         {monsters.map((monster) =>{
//           return(
//             <Card key={monster.id} monster={monster}/>
//           )
//         })}
//      </div>
//     );
//   }
// }

export default CardList;

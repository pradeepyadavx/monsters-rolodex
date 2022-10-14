import { Component } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import "./card-list.styles.css"

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
        <div className="card-list">
           {monsters.map((monster) =>{
            const { id,name, email }= monster;
             return(
                <div className="card-container" key={id}>
                    <img alt={`Monster ${monster.name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} ></img>
                    <h1>{name}</h1>
                    <p>{email}</p>
                </div>
             )
           })}
        </div>
    );
  }
}

export default CardList;

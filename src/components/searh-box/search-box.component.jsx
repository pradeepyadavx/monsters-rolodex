import { Component } from "react";
import './search-box.styles.css';

const SearchBox =({className ,placeHolder , onChangeHandler}) =>   (
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeHolder}
          onChange={onChangeHandler}
        ></input>
      );
    


// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeHolder}
//         onChange={this.props.onChangeHandler}
//       ></input>
//     );
//   }
// }

export default SearchBox;

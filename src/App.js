import "./styles.css";
import React, { Component } from "react";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Api Data Fetching By Using Calss Compoennts</h1>
        <ApiData />
      </div>
    );
  }
}
class ApiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading The Data.....</div>;
    } else {
      return (
        <div>
          <ol>
            {items.map((item) => (
              <li key={item.id}>{item.phone}</li>
            ))}
          </ol>
        </div>
      );
    }
  }
}

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { TeacherContext } from "./teacherContext";
import { Teacher } from "./teacher";

class App extends React.Component {
  defaultTeacher = {
    name: "Wybierz nauczyciela",
    officeHours: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      teacher: this.defaultTeacher
    };
  }

  choose = id => {
    switch (id) {
      case 1:
        this.setState({
          teacher: {
            name: "prof. dr hab. inż. Adam Słodowy",
            officeHours: "Niedziela 12-16 SK103"
          }
        });
        break;
      case 2:
        this.setState({
          teacher: {
            name: "dr inż. Grzegorz Mularczy",
            officeHours: "Sobota 11-16 GG103"
          }
        });
        break;
      default:
        this.setState({
          teacher: this.defaultTeacher
        });
    }
  };

  render() {
    // const { Provider } = TeacherContext;
    const Provider = TeacherContext.Provider;
    return (
      <Provider value={this.state.teacher}>
        <div className="App">
          <h1>Portal informacyjny</h1>
          <a href="#" onClick={() => this.choose(1)}>
            Jan Słodowy
          </a>
          <a href="#" onClick={() => this.choose(2)}>
            Grzegorz Mularczyk
          </a>
          <Teacher />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

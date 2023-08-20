import React from "react";
import "./index.css";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      positoin: "top",
      hovering: false,
    };
  }

  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    return (
      <div className="App">
        <h1>Tooltip</h1>
        <div className="btn-position">
          <button
            className="btn-grp"
            onClick={(e) => {
              this.handleClick("top");
            }}
          >
            Top
          </button>

          <button
            className="btn-grp"
            onClick={(e) => {
              this.handleClick("left");
            }}
          >
            Left
          </button>

          <button
            className="btn-grp"
            onClick={(e) => {
              this.handleClick("right");
            }}
          >
            Right
          </button>

          <button
            className="btn-grp"
            onClick={(e) => {
              this.handleClick("down");
            }}
          >
            Bottom
          </button>
        </div>

        <div id="button-container">
          <button
            className="hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!!
          </button>
          {this.state.hovering && (
            <Tooltip
              position={this.state.position}
              text={"Thanks for hover over me"}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    //Adding State(Subscriber Count) to Our Component
    this.state = {
      SubscriberCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    //In this I have to write out the Logic
    //For Increasing the Subscriber Count
    //at each Respective Iteration :
    this.setState(prevState => {
      //Receiving prevState as a Parameter:
      return {
        SubscriberCount: prevState.SubscriberCount + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.SubscriberCount}</h3>
        <button onClick={this.handleChange}>
          Click Here to Subscribe Me!!
        </button>
      </div>
    );
  }
}

export default App;
//We need to build this in such a manner that
//whenever I click on the Button , the Subscriber Count
//increases at each Iteration .

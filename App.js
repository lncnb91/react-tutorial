import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          name: "Cuong"
        },
        {
          id: 2,
          name: "Huong"
        }
      ],
      number: 1
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.setNumber = this.setNumber.bind(this);
  };

  setStateHandler() {
    var item = {
      id: 3,
      name: "Minh"
    }
    var myArray = this.state.data.slice();
        myArray.push(item);
    this.setState({data: myArray})
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  setNumber() {
    this.setState({data: this.state.data, number: this.state.number + 1})
  }

  render(){
    return(
      <div>
        <Header headerProp = {this.props.propHeader}/>
        <h1>{this.state.data[1].name}</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i}
              data = {person} />)}
          </tbody>
        </table>
        <div id = "myDiv">RandomNumber: {Math.random()}</div>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
        <button onClick = {this.findDomNodeHandler}>CHANGE COLOR TO GREEN</button>

        <hr/>

        <button onClick = {this.setNumber}>INCREMENT</button>
        <Content myNumber = {this.state.number}/>
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return (
      <h1>{this.props.headerProp}</h1>
    );
  }
}

class TableRow extends Component{
  render(){
    return (
      <tr>
        <td id = {"id-" + this.props.data.id}>{this.props.data.id}</td>
        <td id = {"name-" + this.props.data.name}>{this.props.data.name}</td>
      </tr>
    );
  }
}

class Content extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

App.defaultProps = {
  propHeader: "This is a header",
  propContent: "This is the content"
}

export default App;
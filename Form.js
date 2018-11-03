import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Initial data..."
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
      <div>
        <Content propData = {this.state.data} propUpdateState = {this.updateState} />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value = {this.props.propData} onChange = {this.props.propUpdateState} />
        <h4>{this.props.propData}</h4>
      </div>
    );
  }
}

export default Form;

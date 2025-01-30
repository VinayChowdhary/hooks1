import React, { Component } from 'react';

export default class ClsComp extends Component {
    constructor(props){
        super(props);
        this.state = {email:"class@gmail.com"};
    }
    // componentDidMount(){
    //     console.log(this.state.email);
    // }
  render() {
    return (
      <>
      <h1>Class Component</h1>
        <p>Email is :{this.state.email}</p>
        <button onClick={this.mychange}>Click me</button>
      </>
    );
  }
  mychange=()=>{
    this.setState({email:"changed@gmail.com"})
}
}

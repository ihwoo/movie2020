import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructed');
  }
  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('component updated.')
  }
  componentWillUnmount(){
    console.log('component unmounted')
  }
  state={
    count:0,
  };
  plus=()=>{
    this.setState({count: this.state.count+1});
  }
  minus=()=>{
    this.setState({count: this.state.count-1});
  }

  render(){
    console.log('render');
  return (
  <div>
    <h1>i'm a class componemt. And the state is: {this.state.count}</h1>
    <button onClick={this.plus}>Plus</button>
    <button onClick={this.minus}>Minus</button>
  </div>
  )
  }
}

export default App;

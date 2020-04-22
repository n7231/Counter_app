import React , {Component} from 'react' 


class App extends Component {
  state = {  
    count: 0
  };
  increment = ()=>{
    this.setState({
      count: this.state.count + 1

    });
  };
  render () {
    return(
      <div>
        <div className="col-6 left">
        <h2> counter app </h2>
         <button onClick={this.increment}> 
          clicked  {this.state.count} times 
          </button>
          </div>
          </div>
    );
  }
    
}


export default App;


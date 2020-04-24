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
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
 
     <h1> counter app </h1>
      <button onClick={this.increment} > 
          clicked  {this.state.count} times 
          </button>
          </div> 
          
    );
  };      
  };
  
export default App;


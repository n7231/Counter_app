import React , {Component, useState} from 'react' 

const App = () => {
  const [count, setCount]= useState(0)

const increment = () => {
  setCount(count + 1);
};
return(
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

 <h1> counter app </h1>
  <button onClick={increment} > 
      clicked  {count} times </button>
      </div> 
      
)
}
  

/*class App extends Component {
  state = {  
    count: 0
  };
  increment = () => {
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
  };*/
  
export default App;


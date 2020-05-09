import React , {Component, useState, useEffect} from 'react' ;
 import { Button } from '@material-ui/core';


const App = () => {
  const [count, setCount]= useState(0)
  
  useEffect(() => {
    document.title=`Clicked ${count} times`;

  })

const increment = () => {
  setCount(count + 1);
};

return(
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

 <h1> counter app </h1>
 
  <Button  variant="contained" color="primary"onClick={increment} > 
      clicked  {count} times </Button>
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
  componentDidMount(){
    document.title=`Clicked ${this.state.count} times`
  }
  componentDidUpdate(){
    document.title=`Clicked ${this.state.count} times`
  }
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
  }*/
  
export default App;


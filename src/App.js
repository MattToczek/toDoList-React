import React, {Component} from 'react';
import './App.css';
import Post from './Components/Post'
import Btn from './Components/Btn'


export default class App extends Component {
  state = {
    item: '',
    list: [],
    deleted: []
  }

  logItem = (event) => {
    this.setState({
      item: event.target.value,
    })
    console.log(this.state.item);
  }

  run = () => {
    this.setState({
      list: [...this.state.list, this.state.item]
    })
    return this.state.list

  }

  checkArray = () => {                            // lets user know that ther is nothing to return if array is empty
    if (this.state.deleted.length > 0) {
      return this.state.deleted.splice(this.state.deleted.length-1, 1)
    }else {
      return "Nothing to undo"
    }
  }

  post = async () => {
    console.log(this.state.item); //logs correct string
    
     await this.run();
     console.log(this.state.list); //logs correct arrays 
       
     
    }

  remove = (i) => {                           // removes item from list
    this.setState({
      deleted: this.state.list.splice(i, 1)

      })
      console.log(this.state.list);
      
    }

  undo = () => {                            // brings previous item back
    this.setState({
      list: [...this.state.list, this.checkArray()]
      })
  }


  render() {

   


    return (
      <div>
        <input onChange= {this.logItem} type = "text" className="inputBox" placeholder = "Please enter an item"/>
        <button onClick = {this.post} className = "addBtn">Add!</button> <Btn text="Undo" onClick ={() => {this.undo()}} />
        <div className="listItem">
          {/* <Post list={this.state.list} button = {<Btn onClick={(i)=> {this.remove(i)}}/>} /> */}
          <ul>
            {   
              this.state.list.map((item, i)=> {
                  return <li key={i}>{item} <Btn text="Remove" onClick={() => {this.remove(i)}}/> </li>
              })  
            }
            </ul>
        </div>
      </div>
    )
  }
}


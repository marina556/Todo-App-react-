import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem'
import AddItem from './components/Additem/AddItem'

class App extends Component{
  state={
    items:[
      {id:0,name:"Marina",job:"frontEnd developer",age:23},
      {id:1,name:"Magy",job:"FullStack developer",age:24},
      {id:2,name:"Fatma",job:"Game developer",age:23}
    ]
  }

  deletItem = (id)=>{
    let items = this.state.items;
    let index =items.findIndex(i=>i.id===id);
    items.splice(index,1);
    this.setState({items});
  }

  addnewitem=(obj)=>{
    let {items} = this.state;
    let newid = items.length;
    obj.id=newid;
    items.push(obj);
    this.setState({
      items
    })
  }

  render(){
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <section className="container" > 
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>age</th>
                <th>Action</th>
              </tr>
            </thead>
              <tbody>
                <TodoItem data={this.state.items} delItem={this.deletItem}/>
              </tbody>
          </table>
          <AddItem addnewitem={this.addnewitem}/>
        </section>
      </div>
    )
  }
}

export default App;

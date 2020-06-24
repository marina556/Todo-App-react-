import React, { Component } from "react"
import "./AddItem.css"
class AddItem extends Component{
    state={
      name:"",
      job:"",
      age:""
    }

    handelchange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handelsubmit=(e)=>{
        e.preventDefault();
        if(e.target.age.value === "" || e.target.name.value === "" || e.target.job.value === ""){
            return false
        }
        else{        
            this.props.addnewitem(this.state);
            this.setState({
                name:"",
                job:"",
                age:""
            })}
            console.log(this.state)
    }
    render(){
        return(
            <div className="additem" onSubmit={this.handelsubmit}>
                <form className="row">
                    <input className="col p-2 mt-1 mb-1 mr-1" value={this.state.name} onChange={this.handelchange} id="name" type="text"  placeholder="enter your Name"/>
                    <input className="col p-2 m-1" value={this.state.job} onChange={this.handelchange} id="job" type="text"  placeholder="enter your Job"/>
                    <input className="col p-2 m-1" value={this.state.age} onChange={this.handelchange} id="age" type="number"  placeholder="enter your Age"/>
                    <input className="col p-2  mt-1 mb-1 ml-1" type="submit" value="add"/>
                </form>
            </div>
        )
    }
}

export default AddItem
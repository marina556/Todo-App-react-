import React, { Fragment } from "react"
import "./TodoItem.css"
const TodoItem = (props)=>{
    const {data,delItem} = props;
        const item = data.length>0 ?
        (data.map(i=>{ 
            return(
            <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.job}</td>
                <td>{i.age}</td>
                <td className="del" onClick={()=>delItem(i.id)}>x</td>   
            </tr>
            )
        }))
        :(<tr><td colSpan="4">No Item To Show !</td></tr>)


    return(
        <Fragment >
           {item}
        </Fragment>
    )
}

export default TodoItem
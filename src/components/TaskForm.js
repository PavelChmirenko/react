import React, { Component } from 'react'


 class TaskForm extends Component {

  state={
      title:'',
      description:''
  }

onSubmit=e=>{
    this.props.addTask(this.state.title,this.state.description)
    e.preventDefault()

}


onChange = e=>{

this.setState({
    [e.target.name] : e.target.value
})

}
    render() {
      return (

        <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="NAME TASK" name="title" onChange={this.onChange} value={this.state.title}/>
        <br/>
        <br/>
        <textarea placeholder="HERE WRITE DESCRIPTION !!!!" name="description" onChange={this.onChange} value={this.state.description}></textarea>
        
        <button type="submit">
        SAVE
        </button>
        </form>
      )


    }


}
export default TaskForm;
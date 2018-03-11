import React from "react"
import { anecdoteCreation } from "./../reducers/anecdoteReducer"
import {setNotification} from "./../reducers/notificationReducer"

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    console.log("creating new anecdote with content: " + e.target.anecdote.value)
    this.props.store.dispatch(
      anecdoteCreation(content)
    )
    console.log("setting notification timeout...")


    this.props.store.dispatch(setNotification("Anectode: " + content + " added!"))

    setTimeout(() => {
      this.props.store.dispatch(
        setNotification("")
      )
    }, 5000)

    e.target.anecdote.value = ""
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm

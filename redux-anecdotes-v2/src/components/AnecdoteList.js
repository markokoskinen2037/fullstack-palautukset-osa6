import React from "react"
import { voteAnecdote } from "./../reducers/anecdoteReducer"
import { setNotification } from "./../reducers/notificationReducer"

class AnecdoteList extends React.Component {

  handleVote = (anecdote) => {
    this.props.store.dispatch(voteAnecdote(anecdote))
    this.props.store.dispatch(setNotification("You voted for anecdote with id: " + anecdote.id))
    setTimeout(() => {
      this.props.store.dispatch(setNotification(""))
    }, 5000)
  }

  filterAnecdotes = () => {
    const anecdotesToShow = []
    const anecdotes = this.props.store.getState().anecdotes

    anecdotes.forEach(anecdote => {
      if (anecdote.content.includes(this.props.store.getState().filter)) {
        anecdotesToShow.push(anecdote)
      }
    })
    console.log("filtering")
    return anecdotesToShow
  }

  render() {

    let anecdotes = this.props.store.getState().anecdotes
    console.log(anecdotes)

    anecdotes = this.filterAnecdotes()
    console.log(anecdotes)

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList

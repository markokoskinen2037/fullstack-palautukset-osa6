const initialFilter = ""

const reducer = (store = initialFilter, action) => {
  console.log(action.type)
  if (action.type === "SET_FILTER") {
    console.log(action.content)
    return action.content
  }
  return store
}

export const setFilter = (content) => {
  console.log("called me")
  return {
    type: "SET_FILTER",
    content
  }
}


export default reducer
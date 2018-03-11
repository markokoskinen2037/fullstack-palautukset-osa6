const initialNotification = "No notifications yet..."

const reducer = (store = initialNotification, action) => {
  if (action.type === "SET_NOTIFICATION") {
    console.log(action.content)
    return action.content
  }
  return store
}

export const setNotification = (content) => {
  return {
    type: "SET_NOTIFICATION",
    content
  }
}


export default reducer
//Basic Implementation of Redux

const createStore = (reducer,init)=>{//init is initial state
    const store =  {}
    store.state = init
    store.listeners = []

    store.getState = () => store.state

    store.subscriber = listener => store.listeners.push(listener)

    store.dispatch = action =>{
        store.state = reducer(store.state, action)
        store.listeners.forEach(listener => listener())
    }

    return store
}
export default createStore;
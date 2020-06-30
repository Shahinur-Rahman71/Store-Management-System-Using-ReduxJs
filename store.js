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

//Use of Our redux store

const reducer = (state,action)=>{
    switch(action.type){
        case 'Add' :
            return state + action.payload
        case 'Sub' :
            return state - 10
        default : return state
    }
}

const store = createStore(reducer,0);//initial value 0

store.subscriber(()=>{
    console.log(store.getState())
});

store.dispatch({type : 'Add', payload : 20});
store.dispatch({type : 'Sub'});


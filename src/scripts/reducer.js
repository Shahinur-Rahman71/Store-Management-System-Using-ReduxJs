
const init =[
    {
        url: 'https://facebook.com',
        name: 'facebook.com',
        isFav: false,
        id: 'shanto'
    }
]

const reducer = (state = init , action)=>{

    switch(action.type){
        case 'add_bookmark':{
            return state.concat(action.payload);
        }
        case 'remove_bookmark':{
            return state.filter(bookmark => bookmark.id !== action.payload);
        }
        case 'toggle_bookmark':{

            return state.map(bookmark =>{
                if(bookmark.id === action.payload){
                    bookmark.isFav = !bookmark.isFav
                }
                return bookmark;

            })
        }
        default: return state

    }
}

export default reducer;
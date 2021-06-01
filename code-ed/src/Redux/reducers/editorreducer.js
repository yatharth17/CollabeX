
const initState = {
    language:"javascript",
    theme:"vs-dark",
    code:"console.log(Hello World)}"
};

export default function editorReducer(state = initState, action){
    switch(action.type){
        case "SET_LANGUAGE":
            return{
                ...state,
                language:action.payload
            }
        case "SET_THEME":
            
            return{
                ...state,
                theme:action.payload
            } 
        case "SET_CODE":
            return{
                ...state,
                code:action.payload
            }    
        default: return state       
    }
    
}
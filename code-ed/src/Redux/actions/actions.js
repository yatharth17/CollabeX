import axios from 'axios'
export function setLanguage(language){
    return {
        type:"SET_LANGUAGE",
        payload:language
    }
}

export function setTheme(theme){
    return{
        type:"SET_THEME",
        payload:theme
    }
}


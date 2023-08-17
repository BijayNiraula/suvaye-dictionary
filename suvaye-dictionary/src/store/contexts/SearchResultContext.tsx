import { createContext, useContext, useReducer, } from "react";
import { searchResultReducer } from "../reducers/searchResultReducer";
import { ACTIONS } from "../../ENUMS/ReducersActionsEnum";
import { STATUSES } from '../../ENUMS/StatusesEnum';
import { ApiData } from "../../Interfaces/ApiDataInterFace";

interface InitialStateInterface {
    data: ApiData[] | null,
    status: string,
    searchWord: (searchTerm: string) => void
}

const initialState: InitialStateInterface = {
    data: null,
    status: "",
    searchWord: () => { }
}
const searchResultContext = createContext(initialState);

const SearchResultContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(searchResultReducer, initialState)
    const searchWord = async (searchTerm: string | undefined) => {
        try {
            dispatch({ type: ACTIONS.SET_STATUS, payload: STATUSES.LOADING })
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/v2/entries/en/${searchTerm}`)
            const result = await response.json();
            dispatch({ type: ACTIONS.SET_SEARCH_RESULTS, payload: result })
        } catch (e) {
            dispatch({ type: ACTIONS.SET_STATUS, payload: STATUSES.ERROR })
        }
    }

    return (
        <searchResultContext.Provider value={{ ...state, searchWord }}>
            {children}
        </searchResultContext.Provider>
    )

}

const useSearchResultContext = () => useContext(searchResultContext);

export default SearchResultContextProvider;
export { useSearchResultContext }
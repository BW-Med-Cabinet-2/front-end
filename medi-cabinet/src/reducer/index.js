import { FETCH_STRAINS_START, FETCH_STRAINS_SUCCESS, FETCH_STRAINS_FAIL } from '../actions';

const initialState = {
    weedData: '',
}

const strainReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STRAINS_START:
            return {
                ...state
            }
        case FETCH_STRAINS_SUCCESS:
            return {
                ...state,
                weedData: action.payload
            }
        case FETCH_STRAINS_FAIL:
            return {
                ...state,
                error: action.payload
            }

    }
}

export default strainReducer; 
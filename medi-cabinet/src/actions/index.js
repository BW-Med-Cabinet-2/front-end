import axios from 'axios'; 

export const FETCH_STRAINS_START = 'FETCH_STRAINS_START';
export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAINS_SUCCESS';
export const FETCH_STRAINS_FAIL = 'FETCH_STRAINS_FAIL';

export const fetchStrains = (weedData) => (dispatch) => {
    dispatch({
        type: FETCH_STRAINS_START
    })
    console.log('start')
    axios
        .post('http://hold-your-turnips.herokuapp.com/predict', weedData)
        .then((res) => {
            console.log(res); 
            dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log(err); 
            dispatch({ type: FETCH_STRAINS_FAIL, payload: err })
        }); 

}

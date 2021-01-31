import JsonPlaceHolder from '../Api/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const respons = await JsonPlaceHolder.get(/post);
   
      dispatch({ type:'FETCH_POST', payload:respons}) 
    

}
import Axios from 'axios'


const quoteRequest = ()=> {
    return{
        type: 'QUOTE_REQUEST'
    }
}

const quoteSuccess = (data)=> {
    return{
        type: 'QUOTE_SUCCESS',
        payload: data
    }
}
const quoteError = (error)=> {
    return{
        type: 'QUOTE_ERROR',
        payload: error
    }
}

export const GetQuote = () => {
    return (dispatch) =>{
        dispatch(quoteRequest())
        return Axios({
            method: 'GET',
            url:    `https://api.kanye.rest`,
        }).then((res)=> {
            const data =  res.data
            
            dispatch(quoteSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(quoteError(message))
        })
    }
}






import axios from 'axios';
import {reset} from 'redux-form';




export function contactSubmit(contact){

    return function (dispatch) {
        axios({
            method: 'post',
            url: '/api/contact',
            data: contact,
        })
        .then(response => {
            dispatch(reset('contact'));
            console.log('res',response)

            console.log('pass')
    })
        .catch(err => {
            //dispatch({type:"POST_CONTACT_REJECTED", payload:"there was an error while sending your message"})
            console.log('err' + err)
        })


    }

// console.log('contact',contact)
//
//     axios({
//         method: 'post',
//         url: '/api/contact',
//         data: contact,
//
//     }).then(response => {
//         console.log('res',response)
//
//         console.log('pass')
//     })
//         .catch(err => {
//             //dispatch({type:"POST_CONTACT_REJECTED", payload:"there was an error while sending your message"})
//             console.log('err' + err)
//         })

    // return function(dispatch){
    //
    //
    //
    //
    //     axios({
    //         method: 'post',
    //         url: '/api/contact',
    //         data: contact,
    //
    //     })
    //         .then(response => {
    //             console.log('res',response)
    //
    //             dispatch({type:"POST_CONTACT", payload:response.data})
    //         })
    //         .catch(err => {
    //             dispatch({type:"POST_CONTACT_REJECTED", payload:"there was an error while sending your message"})
    //         })
    // }

}



// export function postBook(book){
//     return function(dispatch){
//
//         axios({
//             method: 'post',
//             url: '/api/books',
//             data: book,
//
//         })
//             .then(function(response){
//                 console.log( 'resposne: hi: ', response);
//                 dispatch({type:"POST_BOOK", payload:response.data})
//             })
//             .catch(function(err){
//                 dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
//             })
//     }
// }
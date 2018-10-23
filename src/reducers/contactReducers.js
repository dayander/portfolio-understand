"use strict";

//Cart reducers



const initialState = {
    contact: {
        name: '',
        email: '',
        message:'',
        success: false,
        failed: false,

    }
}

export const contactReducer=(state=initialState, action) =>{

    console.log(action)
    switch(action.type) {
        case "POST_CONTACT":




            return{...state, contact:{

                        name: '',
                        email:'',
                        message: '',
                        success: true,}
            };


        case "SET_FORM_INPUT":


            console.log('action', action);

            if(action.payload.name === ""){
                return {contact:{name: 'fuck'}}
            }

            if(action.payload.name) {
                // console.log(state.contact.name)


                return {...state, contact: {name: action.payload.name, email: '', message: ''}};
            }

                //return state.contact.name = action.payload.name;
            // }else if(action.payload.email){
            //     return {...state,   contact: { email: action.payload.email}};
            // }
            //
            // else if(this.action.payload.message){
            //     return {...state,   contact: { message: action.payload.message}};
            //
            // }


            return {...state, }





    };
    return state

};


"use strict";
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

//import Reducers




import {projectReducer} from './projectsReducer';
import {contactReducer} from './contactReducers';
import {blogReducer} from './blogReducers';




// combine reducers


export default combineReducers({
    projects:projectReducer,
    form: formReducer,
    posts:blogReducer,
    contact:contactReducer,


})
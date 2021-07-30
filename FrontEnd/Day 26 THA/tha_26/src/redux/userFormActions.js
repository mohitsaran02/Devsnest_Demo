 import  {updateFirstName, updateLastName} from "./userFormActionTypes";

 export const updateFirstNameInp = (input) => {
     return {
         type: updateFirstName,
         payload: input,
     };
 };

 export const updateLastNameInp = (input) => {
    return {
        type: updateLastName,
        payload: input,
    };
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstNameInp, updateLastNameInp } from "../redux/userFormActions.js"

const Form = () => {
    const firstName = useSelector(state => state.firstName);
    const lastName = useSelector(state => state.lastName);

    const dispatch = useDispatch();

    return (
        <div className="form">
            <div>
                Username :
                <input id="name"
                    type="text" placeholder="Username"
                    value = {firstName}
                    onChange={(e) => dispatch(updateFirstNameInp(e.target.value))}
                />
            </div>

            <div>
                Email : 
                <input id="email"
                    type="text" placeholder="Email"
                    value = {lastName}
                    onChange={(e) => dispatch(updateLastNameInp(e.target.value))}
                />
            </div>
            <div className="show">
                <h5>Show</h5>
                <p>Username : {firstName}</p>
                <p>Email : {lastName}</p>
            </div>
        </div>
    )
}

export default Form;

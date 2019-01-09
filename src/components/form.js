import React from 'react';

const Forms = () => {
    return (
        <form>
            <div className="form-group">
                <label>First name:
                <input type="text" id="Fname" /></label>

                <label>Last name:
                <input type="text" id="Lname" /></label>

                <label>Email:
                <input type="email" id="Lname" /></label>

                <label>Gender
                    <select type="select">
                        <option>Please Select...</option>
                        <option>Female</option>
                        <option>Male</option>
                    </select>
                </label>
                <br />

                <label className="mb-1">Message:
                <textarea type="text" id="msg" /></label>
                <br />
                
                <button className="btn btn-primary" type="submit">Save</button>
            </div>
        </form> 
    );    
};

export default Forms;
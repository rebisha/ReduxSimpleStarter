import React from 'react';
import Container from '../sxa/Container';

const Forms = () => {
    return (
        <Container>
            <form>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" id="Fname" />

                    <label>Last name:</label>
                    <input type="text" id="Lname" />

                    <label>Email:</label>
                    <input type="email" id="Lname" />

                    <label>Please Select</label>
                    <select type="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>

                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </Container>  
    );    
};

export default Forms;
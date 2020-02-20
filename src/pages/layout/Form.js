import React from 'react';

const Form = () => {
    return (
    <div className="campo">
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="radio">
                    <input type="radio" name="question" />
                    Yes
                </label>
                <label className="radio">
                    <input type="radio" name="question" />
                    No
                </label>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-link">Submit</button>
            </div>
            <div className="control">
                <button className="button is-link is-light">Cancel</button>
            </div>
        </div>
    </div>

    );
};

export default Form;
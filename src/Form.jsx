import { useState } from 'react';

function Form({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(inputValue);
        setInputValue('');
        
        const form = document.querySelector('form');
        const bodyDiv = document.querySelector('.body');
        form.style.display = 'none';
        bodyDiv.style.filter = 'none';
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={
                            (e) => setInputValue(e.target.value)
                        }
                type="text"
                placeholder="Enter your goal"
            />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default Form

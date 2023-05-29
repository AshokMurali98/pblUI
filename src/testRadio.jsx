import React, { useState } from 'react';

const RadioButtonGroup = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>


            {/* Add more radio buttons as needed */}

            {selectedOption === 'option1' && (
                // Render the content to be shown when 'option1' is selected
                <div>
                    {/* Place your hidden page behavior components here */}
                    <div className="form-group">

                        <label htmlFor="username">UserName</label>

                        <input type="text"  name="email" required/>

                    </div>

                </div>
            )}

            {selectedOption === 'option2' && (
                // Render the content to be shown when 'option2' is selected
                <div>
                    {/* Place your hidden page behavior components here */}
                </div>
            )}

            {/* Add more conditions for different options */}

            <label>
                <input
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                />
                Option 1
            </label>

            <label>
                <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                />
                Option 2
            </label>

        </div>
    );
};

export default RadioButtonGroup;

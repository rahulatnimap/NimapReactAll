import React, { useState } from 'react';

const DynamicInput = () => {
    const [InputField, setInputField] = useState([{ id: Date.now(), data: '' }]);

    const addInput = () => {
        setInputField((prev) => [...prev, { id: Date.now(), data: '' }]);
    };

    const removeField = (id) => {
        const filteredField = InputField.filter((ele) => ele.id !== id);
        setInputField(filteredField);
    };

    const handleOnChange = (e, id) => {
        const { value } = e.target;
        const updatedFields = InputField.map((field) =>
            field.id === id ? { ...field, data: value } : field
        );
        setInputField(updatedFields);
    };
    return (
        <div>
            <ul>
                {InputField.map((ele, index) => (
                    <li key={ele.id}>
                        <input
                            type="text"
                            value={ele.data}
                            onChange={(e) => handleOnChange(e, ele.id)}
                        />
                        {InputField[0].id === ele.id && <button onClick={addInput}>+</button>}
                        {InputField[0].id !== ele.id && <button onClick={() => removeField(ele.id)}>x</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DynamicInput;

import React, { useState} from 'react';
import {RxCross1} from 'react-icons/rx';

const InputList = () => {
  const [categoryInputs, setcategoryInputs] = useState(['']);
  const [itemInputs, setitemInputs] = useState(['']);
 

  const handleCategoryInputChange = (index, e) => {
    const { value } = e.target;
    const newInputs = [...categoryInputs];
    newInputs[index] = value;
    setcategoryInputs(newInputs);
  };

  const handleCategoryInputKeyPress = (index, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newInputs = [...categoryInputs];
      newInputs.splice(index + 1, 0, '');
      setcategoryInputs(newInputs);
    }
  };

  const handleItemInputChange = (index, e) => {
    const { value } = e.target;
    const newInputs = [...itemInputs];
    newInputs[index] = value;
    setitemInputs(newInputs);
  };

  const handleItemInputKeyPress = (index, e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newInputs = [...itemInputs];
      newInputs.splice(index + 1, 0, '');
      setitemInputs(newInputs);
    }
  };

  const handleRemoveCategoryInput = (index) => {
    if (categoryInputs.length === 1) {
      return;
    }
    const newInputs = [...categoryInputs];
    newInputs.splice(index, 1);
    setcategoryInputs(newInputs);
  };

  const handleRemoveItemInput = (index) => {
    if (itemInputs.length === 1) {
      return;
    }
    const newInputs = [...itemInputs];
    newInputs.splice(index, 1);
    setitemInputs(newInputs);
  };

  const renderCategoryInputs = () => {
    return categoryInputs.map((value, index) => (
      <div key={index} className='flex gap-3 mt-1'>
        <input
          autoFocus
          type='text'
          value={value}
          onChange={(e) => handleCategoryInputChange(index, e)}
          onKeyDown={(e) => handleCategoryInputKeyPress(index, e)}
          className='border border-black flex flex-col'
          placeholder={`Category ${index+1}`}
        />
        {index > 0 && (
          <button type='button' onClick={() => handleRemoveCategoryInput(index)}>
            <RxCross1/>
          </button>
        )}
      </div>
    ));
  };

  const renderItemInputs = () => {
    return itemInputs.map((value, index) => (
      <div key={index} className='flex gap-3 mt-1'>
        <input
          autoFocus
          type='text'
          value={value}
          onChange={(e) => handleItemInputChange(index, e)}
          onKeyDown={(e) => handleItemInputKeyPress(index, e)}
          className='border border-black flex flex-col mb-2'
          placeholder={`Item ${index+1}`}
        />
        {index > 0 && (
          <button type='button' onClick={() => handleRemoveItemInput(index)}>
          <RxCross1/>
          </button>
        )}
      </div>
    ));
  };

  return (
    <div className='m-3'>

       <div className='flex flex-col'>
       <label>Question 1</label>
        <input type='text' name='question1' placeholder='Description(optional)' className='border border-black w-7/12 mt-1' />
       </div>
      <h2 className='mt-12'>Categories</h2>
      {renderCategoryInputs()}
      <h2 className='mt-8'>Items</h2>
      {renderItemInputs()}
    </div>
  );
};

export default InputList;


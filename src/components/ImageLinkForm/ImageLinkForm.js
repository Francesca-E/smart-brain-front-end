import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
  return(
  <div className='hidden'>
    <p className='f3 center'>
      {'The Magic Brain will detect faces in your pictures; give it a try'}
    </p>
    <div>
      <div className= 'form pa4 br3 shadow-5 center'>
        <input className='f4 pa2 w-70' type='text' onChange={onInputChange} />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  </div>
  );

}
export default ImageLinkForm;

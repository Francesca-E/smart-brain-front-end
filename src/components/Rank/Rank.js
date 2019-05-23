import React from 'react';


const Rank = ({name, entries}) =>{
  return(
    <div className='wrapper'>
      <div className='white f1 inside'>
        <p>{`${name} your current entry count is....`}</p>
      </div>
      <div className='white f1 inside'>
      {entries}
      </div>
    </div>

  );

}
export default Rank;

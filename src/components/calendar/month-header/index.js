import React from 'react'

// TODO format month and date

const MonthHeader = ({ month, year, next, prev}) => (
  <div className='MonthHeader'>
    <div>
      <button type='button' onClick={prev}> {'<<'}</button>
    </div>
    <div>
      Month: {month} - Year: {year}
    </div>
    <div>
      <button type='button' onClick={next}> {'>>'}</button>
    </div>
    
  </div>
)

export default MonthHeader

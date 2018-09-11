import React from 'react'
import moment from 'moment'
import Button from '../../../components/ui/button'

// TODO format month and date

const MonthHeader = ({ month, year, next, prev}) => (
  <div className='MonthHeader'>
    <Button 
      onClick={prev}
      content={'Prev'}
    />
    <div className="month-year">
      {moment(`${year}-${month}`, 'YYYY-M').format('MMMM YYYY')}
    </div>
    <Button 
      onClick={next}
      content={'Next'}
    />
  </div>
)

export default MonthHeader

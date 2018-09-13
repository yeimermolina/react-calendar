import moment from 'moment'
import Holidays from 'date-holidays'

const SATURDAY = 6
const SUNDAY = 0
const FORMAT = 'YYYY-M-D'
const DAYS = 'days'

export const generateWeeks = (currentMonth, currentYear, startDay, startMonth, startYear, maxDays, countryCode) => {
  const startDate = moment(`${startYear}-${startMonth}-${startDay}`, FORMAT)
  let currentDate = moment(`${currentYear}-${currentMonth}-1`, FORMAT)
  let hd = new Holidays(countryCode)
  let calendarDays = []

  // Generate current month days
  do {
    calendarDays.push({
      day: currentDate,
      active: currentDate.isSameOrAfter(startDate) && currentDate.diff(startDate, DAYS) <= maxDays,
      isHoliday: hd.isHoliday(currentDate.toDate()),
      isWeekend: currentDate.day()=== SUNDAY || currentDate.day() === SATURDAY
    });
    currentDate = moment(currentDate).add(1, DAYS)
  } while((currentDate.month() + 1) === currentMonth)

  // Fill previous month days
  currentDate = moment(calendarDays[0].day)
  if(currentDate.day()!== SUNDAY){
    do{
      currentDate = moment(currentDate).subtract(1, DAYS);
      calendarDays.unshift({
        day: currentDate
      });
    }while(currentDate.day() !== SUNDAY);
  }

  // Fill next month days
  currentDate = moment(calendarDays[calendarDays.length - 1].day)
  if(currentDate.day()!== SATURDAY){
    do{
      currentDate = moment(currentDate).add(1, DAYS);
      calendarDays.push({
        day: currentDate
      });
      
    }while(currentDate.day() !== SATURDAY);
  }

  // Generate Weeks
  let calendarWeeks = []
  let week = []
  
  for(let day of calendarDays){
    week.push(day)
    if(week.length === 7){
      calendarWeeks.push(week)
      week = []
    }
  }
  
  return calendarWeeks
}
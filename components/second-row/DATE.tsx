'use client';

import { useState, useRef } from 'react';
import styles from './Search.module.css';

interface DateProps {
  placeholder: string;
}

const DateTimeInput : React.FC<DateProps>= ({placeholder}) => {
  const Dateplaceholder = placeholder;
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [formattedDateTime, setFormattedDateTime] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    updateFormattedDateTime(event.target.value, time);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let [hour, minute] = event.target.value.split(':');
    let ampm = 'AM';

    if (parseInt(hour) >= 12) {
      ampm = 'PM';
      if (parseInt(hour) > 12) {
        hour = (parseInt(hour) - 12).toString().padStart(2, '0');
      }
    } else if (parseInt(hour) === 0) {
      hour = '12';
    }

    const formattedTime = `${hour}:${minute} ${ampm}`;
    setTime(formattedTime);
    updateFormattedDateTime(date, formattedTime);
  };

  const updateFormattedDateTime = (date: string, time: string) => {
    if (!date) return;

    const [year, month, day] = date.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    setFormattedDateTime(`${formattedDate} ${time}`);
  };

  const handleTextInputClick = () => {
    setIsPickerVisible(true);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleBlur = () => {
    setIsPickerVisible(false);
  };

  

  return (
    <div >
      <input
        type="text"
        value={formattedDateTime}
        readOnly
        onClick={handleTextInputClick}
        placeholder={Dateplaceholder}
        ref={textInputRef}
      />
      {isPickerVisible && (
        <div  className={styles.dateInputs} onMouseLeave={handleBlur} >
          <input 
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <input
            
            type="time"
            value={time.replace(/ [AP]M$/, '')} 
            onChange={handleTimeChange}
          />
        </div>
      )}
    </div>
  );
};

export default DateTimeInput;

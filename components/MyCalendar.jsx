import moment from 'moment';
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const Calendar = dynamic(() => import('react-calendar'), {
  ssr: false,
});

const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
  }
  .react-calendar__navigation__label > span {
    font-size: 20px;
    font-weight: bold;
  }
  .react-calendar__month-view__weekdays {
    div:nth-child(6) {
      color: #4f94d5;
    }
    div:nth-child(7) {
      color: #ff4a4a;
    }
  }
  .react-calendar__month-view__days {
    display: flex;
    justify-content: space-between;
  }
  .react-calendar__month-view__days__day--weekend {
    button:nth-child(1) {
      color: #4f94d5;
    }
    button:nth-child(2) {
      color: #ff4a4a;
    }
  }
  .react-calendar__month-view__weekdays__weekday > abbr {
    text-decoration-line: none;
  }

  .react-calendar__month-view__days__day {
    width: 40px;
    height: 40px;
    max-width: 40px;
    margin: 7px 10px;
  }

  .react-calendar__month-view__days__day:has(.dot) {
    padding-top: 12px;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #cacaca;
  }
  .react-calendar__year-view__months {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__year-view__months__month {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    max-width: 50px;
    height: 50px;
    margin: 5px 12px;
    padding: 0;
  }

  .react-calendar__tile {
    border-radius: 100%;
  }

  .react-calendar__decade-view__years__year,
  .react-calendar__century-view__decades__decade {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 133px;
    height: 60px;
    max-width: 133px;
    margin: 12px 4px;
    border-radius: 15px;
  }

  .react-calendar__tile--now {
    background: #d4e6ff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #9dc6ff;
  }
  .react-calendar__tile--hasActive {
    background: #4a4a4a;
    color: white;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #9a9a9a;
    color: white;
  }

  .react-calendar__tile--active {
    background: #2e2e2e;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #000000;
    color: white;
  }
  .dot {
    height: 8px;
    width: 8px;
    background-color: #f87171;
    border-radius: 50%;
    display: flex;
    margin-top: 2px;
  }
`;

const MyCalendar = () => {
  const [value, onChange] = useState();
  const [mark, setMark] = useState(['2023-04-23', '2023-04-21']);

  useEffect(() => {
    onChange(new Date());
  }, []);

  return (
    <div className="px-5 mt-[50px] ">
      <CalendarContainer>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format('DD')}
          tileContent={({ date, view }) => {
            // 날짜 타일에 컨텐츠 추가하기 (html 태그)
            // 추가할 html 태그를 변수 초기화
            let html = [];
            // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
            if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
              html.push(<div className="dot"></div>);
            }
            // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  {html}
                </div>
              </>
            );
          }}
        />
      </CalendarContainer>
    </div>
  );
};

export default MyCalendar;

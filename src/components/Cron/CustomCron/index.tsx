import React, { Fragment, useEffect, useState } from 'react';
import { Select } from 'antd';
import { CronBuilder } from 'cron-builder-ts';
import {
  convertResult,
  dayOfTheMonthOption,
  dayOfTheWeekOption,
  defaultCron,
  hourOption,
  minuteOption,
  monthOption,
} from '../utils';
import './index.less';

const cronExp = new CronBuilder();
const EVERY = ['*'];

const { Option } = Select;

export default function CustomCron({ value, disabled, onChange }: any) {
  const [expression, setExpression] = useState({});
  // const [cronResult, setCronResult] = useState('');

  useEffect(() => {
    if (!value) return;
    const currentCron = value.split(' ');
    currentCron.shift();
    const [minutes, hours, dayOfMonth, month1, dayOfWeek] = currentCron;

    /* eslint-disable */
    function splitMultiple(value: any) {
      if (!value || value === '*' || value === '?') {
        return;
      }

      if (value.includes(',')) {
        return value.split(',');
      }
      return [value];
    }

    const expre: any = {
      minute: splitMultiple(minutes) || [],
      hour: splitMultiple(hours) || [],
      dayOfTheMonth: splitMultiple(dayOfMonth !== '0' ? dayOfMonth : '0'),
      dayOfTheWeek: splitMultiple(dayOfWeek) || [],
      month: splitMultiple(month1) || [],
    };
    setExpression(expre);
    // setCronResult(convertCron(value));
  }, [value]);

  function handleChange(obj: any) {
    const tmp = { ...expression, ...obj };
    setExpression(tmp);
    onChange(generateExpression(tmp));
  }

  function generateExpression(expression: any) {
    const {
      minute = [],
      hour = [],
      dayOfTheMonth = [],
      month = [],
      dayOfTheWeek = [],
    } = expression;
    const exp = cronExp.getAll();
    exp.minute = minute.length > 0 ? minute : EVERY;
    exp.hour = hour.length > 0 ? hour : EVERY;
    exp.dayOfTheMonth =
      dayOfTheMonth && dayOfTheMonth.length > 0 && dayOfTheMonth[0] !== '0' ? dayOfTheMonth : EVERY;
    exp.month = month.length > 0 ? month : EVERY;
    exp.dayOfTheWeek = dayOfTheWeek.length > 0 ? dayOfTheWeek : EVERY;
    cronExp.setAll(exp);
    const expressionResult = cronExp.build();
    const result = expressionResult === defaultCron ? '' : expressionResult;
    // setCronResult(result);

    return convertResult(result);
  }

  function renderSelect(label: any, placeholder: any, key: string, value: any, data: any[] = []) {
    return (
      <div className="cron-box">
        <div className="cron-label">{label}:</div>
        <div className="cron-select">
          <Select
            mode="multiple"
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(val) => handleChange({ [key]: val })}
            style={{ width: 200 }}
          >
            {data.map((item) => (
              <Option key={item.key} value={item.key}>
                {item.label}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    );
  }

  const { minute, hour, dayOfTheMonth, dayOfTheWeek, month }: any = expression;

  return (
    <Fragment>
      {renderSelect('月份', '每月', 'month', month, monthOption)}
      {renderSelect('星期', '每周', 'dayOfTheWeek', dayOfTheWeek, dayOfTheWeekOption)}
      {renderSelect('日', '每天', 'dayOfTheMonth', dayOfTheMonth, dayOfTheMonthOption)}
      {renderSelect('小时', '每小时', 'hour', hour, hourOption)}
      {renderSelect('分钟', '每分钟', 'minute', minute, minuteOption)}
    </Fragment>
    // <div>{cronResult}</div>
  );
}

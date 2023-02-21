import React, { Fragment, useEffect, useState } from 'react';
import { Select, TimePicker, ConfigProvider } from 'antd';
import { dayOfTheMonthOption, dayOfTheWeekData } from './utils';
import CustomCron from './CustomCron';
import moment from 'moment';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import './index.less';

const { Option } = Select;
const format = 'HH:mm';
const defaultCron = '0 * * * * ?';
const space = ' ';
const timeTypes = [
  { key: 'everyDay', label: '每天' },
  { key: 'everyWeek', label: '每周' },
  { key: 'everyMonth', label: '每月' },
  { key: 'customize', label: '周期' },
];

interface Props {
  /**
   * @description 默认显示的cron
   * */
  value?: string;
  /**
   * @description 改变后回调
   * */
  onChange?: (v?: string) => void;
}
const Cron: React.FC<Props> = ({ value, onChange }) => {
  const [defaultTimeType, setDefaultTimeType] = useState(timeTypes[0].key);
  const [selectedValue, setSelectedValue] = useState<[]>([]);
  const [selectTime, setSelectTime] = useState<moment.Moment | null | undefined>(null);
  const [expression, setExpression] = useState<string | null>(defaultCron);

  /* eslint-disable */
  useEffect(() => {
    if (!value || value === defaultCron) return;
    const currentCron = value.split(' ');
    const [seconds, minutes, hours, dayOfMonth, , dayOfWeek] = currentCron;
    if (defaultTimeType !== 'customize') {
      let selectTimeType = '';
      let defaultSelectValue = [];
      if (dayOfWeek === '?' && dayOfMonth === '*' && hours !== '*' && minutes !== '*')
        selectTimeType = 'everyDay';

      if (
        dayOfWeek !== '?' &&
        (dayOfMonth === '*' || dayOfMonth === '?') &&
        minutes !== '*' &&
        hours !== '*'
      ) {
        selectTimeType = 'everyWeek';
        defaultSelectValue = dayOfWeek.split(',');
      }
      if (
        dayOfMonth !== '*' &&
        dayOfMonth !== '?' &&
        dayOfWeek === '?' &&
        minutes !== '*' &&
        hours !== '*' &&
        seconds
      ) {
        selectTimeType = 'everyMonth';
        defaultSelectValue = dayOfMonth.split(',');
      }
      setSelectTime(moment({ hours, minutes }));
      setExpression(value);
      setSelectedValue(defaultSelectValue);
      setDefaultTimeType(selectTimeType);
    }
    if (
      minutes.indexOf(',') !== -1 ||
      hours.indexOf(',') !== -1 ||
      (hours === '*' && minutes !== '*') ||
      (hours !== '*' && minutes === '*')
    ) {
      setDefaultTimeType('customize');
    }
  }, [value]);

  const handleTimeTypeChange = (selectValue: string) => {
    setDefaultTimeType(selectValue);
    setSelectTime(null);
    setSelectedValue([]);
    setExpression(defaultCron);
  };

  const handleSelectChange = (data: []) => {
    setSelectedValue(data);
    const selectValues = data.join(',');
    const currentCron = expression ? expression.split(' ') : [];
    const [seconds, minutes, hours, dayOfMonth, month1, dayOfWeek] = currentCron;
    let result = '';
    if (defaultTimeType === 'everyWeek') {
      result = seconds
        .concat(space)
        .concat(minutes)
        .concat(space)
        .concat(hours)
        .concat(space)
        .concat(dayOfMonth)
        .concat(space)
        .concat(month1)
        .concat(space)
        .concat(selectValues);
    }
    if (defaultTimeType === 'everyMonth') {
      result = seconds
        .concat(space)
        .concat(minutes)
        .concat(space)
        .concat(hours)
        .concat(space)
        .concat(data.length ? selectValues : '*')
        .concat(space)
        .concat(month1)
        .concat(space)
        .concat(dayOfWeek);
    }
    if (selectTime) onChange?.(result);
    setExpression(result);
  };

  const handleTimeChange = (time: moment.Moment | null) => {
    setSelectTime(time);
    // if (!time) return;
    const currentCron = expression ? expression.split(' ') : [];
    const [seconds, , , dayOfMonth, month1, dayOfWeek] = currentCron;
    const minutes = moment(time).minutes().toString();
    const hours = moment(time).hours().toString();
    let result = null;
    if (!Number.isNaN(Number(hours)) && !Number.isNaN(Number(minutes))) {
      const minutesAndHour = seconds
        .concat(space)
        .concat(minutes)
        .concat(space)
        .concat(hours)
        .concat(space);
      if (defaultTimeType === 'everyDay') result = minutesAndHour.concat('* * ?');
      if (defaultTimeType !== 'everyDay')
        result = minutesAndHour
          .concat(dayOfMonth)
          .concat(space)
          .concat(month1)
          .concat(space)
          .concat(dayOfWeek);
    }
    onChange?.(result);
    setExpression(result);
  };

  const RenderSelect = ({
    placeholder,
    data = [],
  }: {
    placeholder: string;
    data: { key: string; label: string }[];
  }) => {
    return (
      <Fragment>
        <Select
          mode="multiple"
          placeholder={placeholder}
          onChange={handleSelectChange}
          className={
            selectedValue.length
              ? `select-right select-auto-width`
              : `select-right select-fixed-width`
          }
          value={selectedValue}
        >
          {data.map((item: { key: string; label: string }) => (
            <Option key={item.key} value={item.key}>
              {item.label}
            </Option>
          ))}
        </Select>
        {defaultTimeType !== 'everyHour' ? (
          <ConfigProvider locale={zh_CN}>
            <TimePicker
              value={selectTime && moment(selectTime, format)}
              format={format}
              placeholder="请选择时间"
              onChange={handleTimeChange}
            />
          </ConfigProvider>
        ) : null}
      </Fragment>
    );
  };

  return (
    <div className={defaultTimeType !== 'customize' ? 'cron' : ''}>
      <Select
        role="cron-type"
        style={{ marginRight: '16px', width: 'auto' }}
        placeholder="请选择类型"
        onChange={(val) => handleTimeTypeChange(val)}
        value={defaultTimeType}
      >
        {timeTypes.map((item) => (
          <Option key={item.key} value={item.key}>
            {' '}
            {item.label}
          </Option>
        ))}
      </Select>
      {defaultTimeType === 'customize' && <CustomCron onChange={onChange} value={value} />}
      {defaultTimeType === 'everyDay' && (
        <ConfigProvider locale={zh_CN}>
          <TimePicker
            value={selectTime && moment(selectTime, format)}
            format={format}
            placeholder="请选择时间"
            onChange={handleTimeChange}
          />
        </ConfigProvider>
      )}
      {defaultTimeType === 'everyWeek' && (
        <RenderSelect data={dayOfTheWeekData} placeholder="请选择星期" />
      )}
      {defaultTimeType === 'everyMonth' && (
        <RenderSelect data={dayOfTheMonthOption} placeholder="请选择日期" />
      )}
    </div>
  );
};

export default Cron;

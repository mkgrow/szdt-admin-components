import cronstrue from 'cronstrue/i18n';

function getDayOfTheMonthOption() {
  const days = [];
  for (let i = 1; i < 32; i += 1) {
    days.push({ key: i.toString(), label: i.toString().concat('号') });
  }
  return days;
}

function getHourOption() {
  const hours = [];
  for (let i = 0; i < 24; i += 1) {
    hours.push({ key: i.toString(), label: i.toString() });
  }
  return hours;
}

function getMinuteOption() {
  const hours = [];
  for (let i = 0; i < 60; i += 1) {
    hours.push({ key: i.toString(), label: i.toString() });
  }
  return hours;
}

export const defaultCron = '* * * * *';
export const everyDay = '0 0 0 * * ?';
export const dayOfTheMonthOption = getDayOfTheMonthOption();

/* eslint-disable */
export function convertCron(exp: any) {
  if (!exp) return;
  if (exp === everyDay || exp === defaultCron) return '每天';
  const convertExpZH = cronstrue.toString(exp, { locale: 'zh_CN' });
  return convertExpZH.replace(/^每\D+,\s*/, '');
}

export const dayOfTheWeekData = [
  { key: 'MON', label: '星期一' },
  { key: 'TUE', label: '星期二' },
  { key: 'WED', label: '星期三' },
  { key: 'THU', label: '星期四' },
  { key: 'FRI', label: '星期五' },
  { key: 'SAT', label: '星期六' },
  { key: 'SUN', label: '星期天' },
];

export const dayOfTheWeekOption = [
  { key: '1', label: '星期一' },
  { key: '2', label: '星期二' },
  { key: '3', label: '星期三' },
  { key: '4', label: '星期四' },
  { key: '5', label: '星期五' },
  { key: '6', label: '星期六' },
  { key: '7', label: '星期天' },
];

export const monthOption = [
  { key: '1', label: '一月' },
  { key: '2', label: '二月' },
  { key: '3', label: '三月' },
  { key: '4', label: '四月' },
  { key: '5', label: '五月' },
  { key: '6', label: '六月' },
  { key: '7', label: '七月' },
  { key: '8', label: '八月' },
  { key: '9', label: '九月' },
  { key: '10', label: '十月' },
  { key: '11', label: '十一月' },
  { key: '12', label: '十二月' },
];

export const hourOption: any = getHourOption();
export const minuteOption: any = getMinuteOption();

export function convertResult(expression: any) {
  const defaultSecond = '0 ';
  const defaultMinute = '0 * ';
  const defaultHour = '0 * * ';
  const questionMark = '?';
  const asterisk = '*';
  const space = ' ';

  if (!expression) return null;
  let result: any = '';
  const splitCron: any = expression.split(' ');
  const minute: any = splitCron[0];
  const hour: any = splitCron[1];
  const day: any = splitCron[2];
  const month: any = splitCron[3];
  const week: any = splitCron[4];
  const minuteSame: any = result.concat(defaultSecond).concat(minute).concat(space);
  const hourSame: any = result.concat(defaultMinute).concat(hour).concat(space);
  const daySame: any = result.concat(defaultHour).concat(day).concat(space);
  const weekSame: any = result.concat(defaultHour).concat(questionMark).concat(space);

  if (
    minute !== asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(asterisk);
  }

  // cron error 不支持同时指定星期几和几月参数
  if (
    minute !== asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(week);
  }

  // cron error 不支持同时指定星期几和几月参数
  if (
    minute !== asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(week);
  }

  if (
    minute !== asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(questionMark)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(week);
  }

  if (
    minute !== asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(questionMark)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(week);
  }

  if (
    minute !== asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute !== asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(asterisk)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(questionMark)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(week);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(questionMark)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(week);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(questionMark);
  }

  // cron error 不支持同时指定星期几和几月参数
  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(week);
  }

  // cron error 不支持同时指定星期几和几月参数
  if (
    minute !== asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = minuteSame
      .concat(hour)
      .concat(space)
      .concat(day)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(week);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = hourSame.concat(questionMark).concat(space).concat(month).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = hourSame
      .concat(questionMark)
      .concat(space)
      .concat(month)
      .concat(space)
      .concat(asterisk);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = hourSame
      .concat(asterisk)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(questionMark);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = hourSame
      .concat(questionMark)
      .concat(space)
      .concat(asterisk)
      .concat(space)
      .concat(week);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = hourSame.concat(day).concat(space).concat(month).concat(space).concat(questionMark);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = hourSame.concat(day).concat(space).concat(asterisk).concat(space).concat(questionMark);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = hourSame.concat(day).concat(space).concat(asterisk).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour !== asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = hourSame.concat(day).concat(space).concat(month).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = daySame.concat(month).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = daySame.concat(asterisk).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = daySame.concat(month).concat(space).concat(questionMark);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day !== asterisk &&
    week === asterisk &&
    month === asterisk
  ) {
    result = daySame.concat(asterisk).concat(space).concat(questionMark);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month !== asterisk
  ) {
    result = weekSame.concat(month).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week !== asterisk &&
    month === asterisk
  ) {
    result = daySame.concat(questionMark).concat(space).concat(week);
  }

  if (
    minute === asterisk &&
    hour === asterisk &&
    day === asterisk &&
    week === asterisk &&
    month !== asterisk
  ) {
    result = weekSame.concat(month).concat(space).concat(asterisk);
  }

  return result;
}

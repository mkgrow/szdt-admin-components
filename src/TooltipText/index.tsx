import React, { useRef, useState } from 'react';
import { Tooltip } from 'antd';
import cls from 'classnames';

import styles from './index.less';

const TooltipText: React.FC<{
  text: React.ReactNode;
  title?: React.ReactNode;
  overlayStyle?: React.CSSProperties;
  textClassName?: React.CSSProperties;
  rowNumber?: number;
  betweenSpace?: number; // 父节点两侧内边距
}> = ({
  text,
  title: defaultTitle,
  overlayStyle,
  textClassName,
  rowNumber = 1,
  betweenSpace = 0,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  // 用来获取内容的宽度
  const ref = useRef<any>();
  const title = <div>{text}</div>;
  const parentWidth = ref?.current?.parentNode?.clientWidth
    ? ref?.current?.parentNode?.clientWidth
    : ref?.current?.parentNode?.parentNode?.clientWidth;

  return (
    <Tooltip
      visible={visible && ref?.current?.clientWidth > (parentWidth - betweenSpace) * rowNumber}
      overlayStyle={overlayStyle || { maxWidth: 'max-content' }}
      title={defaultTitle || title}
    >
      <div className={styles.placeText} ref={ref}>
        {text}
      </div>
      <div
        className={cls(styles.text, textClassName)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {text}
      </div>
    </Tooltip>
  );
};

export default TooltipText;

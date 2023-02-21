import React, { useRef, useState } from 'react';
import { Tooltip } from 'antd';
import cls from 'classnames';

import './index.less';

const TooltipText: React.FC<{
  /**
   * @description 文本内容
   * */
  text: React.ReactNode;
  /**
   * @description 弹窗内容
   * */
  title?: React.ReactNode;
  /**
   * @description 弹窗样式
   * */
  overlayStyle?: React.CSSProperties;
  /**
   * @description 文本样式
   * */
  textClassName?: React.CSSProperties;
  /**
   * @description 弹窗显示的行数
   * */
  rowNumber?: number;
  /**
   * @description 父节点两侧内边距
   * */
  betweenSpace?: number;
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
      <div className="place-text" ref={ref}>
        {text}
      </div>
      <div
        className={cls('text', textClassName)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {text}
      </div>
    </Tooltip>
  );
};

export default TooltipText;

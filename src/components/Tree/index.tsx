import React, { useState } from 'react';
import cls from 'classnames';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

import './index.less';

const Children = ({
  data = [],
  selectedMenu,
  onChange,
  icons = [],
  iconClassName = '',
  valueClassName = '',
  dropdownClassName = '',
  selectedClassName,
}) => {
  const [parent, setParent] = useState();

  const handleParentClick = (it) => {
    if (it?.children) {
      setParent(parent?.value === it?.value ? {} : it);
    } else {
      onChange(it);
    }
  };

  return (
    <div className={cls('children', dropdownClassName)}>
      {data?.map((it, index) => {
        const isParentSelected = parent?.value === it?.value;
        const isMenuSelected = selectedMenu?.value === it?.value;
        const hasChildren = it?.children?.length;

        return (
          <div key={`${it?.value}-${index}`}>
            <div className="child" onClick={() => handleParentClick(it)}>
              <div className={cls('icon', iconClassName)}>
                {hasChildren && isParentSelected && <img src={icons?.[0] || minus} alt="" />}
                {hasChildren && !isParentSelected && <img src={icons?.[1] || plus} alt="" />}
              </div>
              <div
                className={cls('text', it?.className || '', valueClassName, {
                  [selectedClassName || 'selected']: isMenuSelected,
                })}
              >
                {it?.value}
              </div>
            </div>
            {hasChildren && isParentSelected && (
              <Children
                data={it?.children}
                onChange={onChange}
                icons={icons}
                selectedMenu={selectedMenu}
                iconClassName={iconClassName}
                valueClassName={valueClassName}
                selectedClassName={selectedClassName}
                dropdownClassName={dropdownClassName}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

type DataType = {
  value: string;
  className?: React.CSSProperties;
  children?: Array<DataType>;
};

interface Props {
  /**
   * @description 需要显示的数据。DataType包含value, className, children
   * */
  data: Array<DataType>;
  /**
   * @description 展开收起时的图标
   * */
  icons: any[];
  /**
   * @description 选中之后回调函数
   * */
  onSelect?: (v: DataType) => void;
  /**
   * @description 最外层样式
   * */
  className?: React.CSSProperties;
  /**
   * @description 图标样式
   * */
  iconClassName?: React.CSSProperties;
  /**
   * @description 数据样式
   * */
  valueClassName?: React.CSSProperties;
  /**
   * @description 展开之后的数据样式
   * */
  dropdownClassName?: React.CSSProperties;
  /**
   * @description 选中之后数据样式
   * */
  selectedClassName?: React.CSSProperties;
}
const Tree = ({
  data = [],
  icons,
  onSelect,
  className = '',
  iconClassName = '',
  valueClassName = '',
  dropdownClassName = '',
  selectedClassName = '',
}: Props) => {
  const [selectedMenu, setSelectedMenu] = useState();

  const handleChange = (v) => {
    setSelectedMenu(v);
    onSelect?.(v);
  };

  return (
    <div role="tree" className={cls('tree', className)}>
      <Children
        data={data}
        icons={icons}
        selectedMenu={selectedMenu}
        dropdownClassName={dropdownClassName}
        iconClassName={iconClassName}
        valueClassName={valueClassName}
        selectedClassName={selectedClassName}
        onChange={handleChange}
      />
    </div>
  );
};

export default Tree;

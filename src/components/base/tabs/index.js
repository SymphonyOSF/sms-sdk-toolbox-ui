import React, {
  useState, useEffect, createRef, useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../box';
import {
  getHeaderIndicatorBackground,
  getTabHeaderBorder,
  getTabHeaderIndicatorMarginLeft,
  getHeaderIndicatorWidth,
  getTabItemAlign,
  getTabItemColor,
  getTabItemWeight,
} from './theme';

const BaseTabs = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;
`;

const TabHeader = styled.ol`
  padding-left: 0;
  width: 100%;
  border-bottom: ${props => getTabHeaderBorder(props)};
`;

const TabHeaderLabel = styled.span`
  font-size: 1.25rem;
  font-weight: ${props => getTabItemWeight(props)};
  line-height: 22px;
  cursor: pointer;
  color: ${props => getTabItemColor(props)};
`;

const TabHeaderItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0 0.75rem 17px 0.75rem;
  border-bottom: 0px;
  text-align: ${props => getTabItemAlign(props)};
  float: ${props => getTabItemAlign(props)};
  &:hover {
    color: ${props => props.theme.colors.primary}
  }
`;


const TabHeaderIndicator = styled.div`
  width: ${props => getHeaderIndicatorWidth(props)};
  height: 3px;
  display: absolute;
  background: ${props => getHeaderIndicatorBackground(props)};
  margin-top: 38px;
  margin-left: ${props => getTabHeaderIndicatorMarginLeft(props)};
  transition-property: margin, width;
  transition-duration: .5s;
  transition-timing-function: ease;
`;


export default function Tabs({ children, activeTab, ...rest }) {
  const elRef = useRef([...Array(children.length)].map(() => createRef()));
  const [currentRef, setCurrentRef] = useState(null);
  const [selectedTab, setActiveTab] = useState(children[activeTab].props.label);
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);
  const [activeTabAlign, setActiveTabAlign] = useState(children[activeTab].props.align);

  const onClickTabItem = (label, index, align) => {
    setActiveTab(label);
    setActiveTabIndex(index);
    setActiveTabAlign(align);
  };

  useEffect(() => {
    let hasRefs = true;
    for (let i = 0; i < elRef.current.length; i++) {
      hasRefs = hasRefs && (elRef.current[i] !== undefined);
    }
    if (!hasRefs) return;
    setCurrentRef(elRef.current[activeTabIndex]);
  }, [elRef, elRef.current, activeTabIndex]);

  return (
    <BaseTabs {...rest}>
      <Box horizontal>
        <TabHeader>
          {children.map((child, index) => {
            const { label, align } = child.props;
            return (
              <TabHeaderItem
                key={label}
                label={label}
                activeTab={selectedTab}
                ref={ref => elRef.current[index] = ref}
                align={align}
                onClick={() => onClickTabItem(label, index, align)}
              >
                <TabHeaderLabel label={label} activeTab={selectedTab}>{label}</TabHeaderLabel>
              </TabHeaderItem>
            );
          })}
          {currentRef && (
          <TabHeaderIndicator
            tabs={elRef.current}
            activeTabIndex={activeTabIndex}
            activeTabAlign={activeTabAlign}
          />
          )}
        </TabHeader>
      </Box>
      <Box horizontal>
        {children.map((child) => {
          if (child.props.label !== selectedTab) return undefined;
          return child.props.children;
        })}
      </Box>
    </BaseTabs>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.number,
  children: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
  activeTab: 0,
};

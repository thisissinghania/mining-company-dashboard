import React, { useState } from 'react';
import {
  Col, TabContent, TabPane, Nav, NavItem, NavLink,
} from 'reactstrap';
import classnames from 'classnames';

const EnablerTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <div className="scope_inside_parent row">
        <Col sm="12" className="scope_inside_tabs">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Strategy and Planning
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Innovation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                People and Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
              >
                Operations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => { toggle('5'); }}
              >
                External Engagement
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </div>

      <Col sm="12">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            Demo data
          </TabPane>

          <TabPane tabId="2">
            Demo data
          </TabPane>

          <TabPane tabId="3">
            Demo data
          </TabPane>

          <TabPane tabId="4">
            Demo data
          </TabPane>

          <TabPane tabId="5">
            Demo data
          </TabPane>
        </TabContent>
      </Col>
    </>
  );
};

export default EnablerTabs;

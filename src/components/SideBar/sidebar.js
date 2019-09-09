import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

const MySideBar = ({ visible = true, toggleVisible }) => (
    <Sidebar as={Menu} visible={visible} vertical>
      <Menu.Item>
        <Icon name="home" />
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Icon name="user" />
        <Link to="/users">Users</Link>
      </Menu.Item>
      <div
        onClick={() => toggleVisible(false)}
        role="button"
        style={{ width: '100%', position: 'absolute', top: '90%' }}
        className="collapse-button"
      >
        <Menu.Item as="a">
          <Icon name="arrow left" />
          Collapse
        </Menu.Item>
      </div>
    </Sidebar>
);

export default MySideBar;

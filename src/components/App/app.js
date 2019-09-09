import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Icon, Button } from 'semantic-ui-react';
import SideBar from '../SideBar';
import HomePage from '../../layouts/HomePage';
import './style.scss';
import UsersPage from '../../layouts/UsersPage';

const App = () => {
  const [globalVisibleSideBar, setGlobalVisible] = useState(false);
  return (
    <Router>
      <SideBar
        toggleVisible={setGlobalVisible}
        visible={globalVisibleSideBar}
      />
      <Container
        style={{ paddingLeft: globalVisibleSideBar ? '150px' : '' }}
        className="main"
      >
        <Button.Content
          style={{ visibility: globalVisibleSideBar ? 'collapse' : 'inherit' }}
          onClick={() => setGlobalVisible(true)}
          className="toggleSideBar"
        >
          <Icon name="sidebar" />
        </Button.Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={UsersPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

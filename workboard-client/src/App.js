import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkBoardsPage from './components/WorkBoardsPage';
import CreateWorkBoard from './components/CreateWorkBoard';
import WorkBoardDetailPage from './components/WorkBoardDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WorkBoardsPage} />
        <Route path="/create-workboard" component={CreateWorkBoard} />
        <Route path="/workboard/:id" component={WorkBoardDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;

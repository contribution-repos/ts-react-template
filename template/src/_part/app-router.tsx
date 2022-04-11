import { Outlet, Link } from 'react-router-dom';

const App: React.FC = () => (
  <div>
    <div>
      Hello, ESBoot!
    </div>

    <Link to="demo">To demo</Link>

    <Outlet />
  </div>
);

export default App;

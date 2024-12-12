import Calendar from './Dashboard/Calendar';
import Dashboard from './Dashboard/Dashboard';
import Notices from './Dashboard/Notices';
import SearchBar from './Dashboard/SearchBar';
import SiderBar from './Dashboard/SiderBar';
import VerticalNavbar from './Dashboard/VerticalNavbar';
import './home.css';

export default function home() {
  return (
    <>
      <SiderBar />
      <div className="app-container">
        <VerticalNavbar />
        <div className="content-container" style={{ marginLeft: '200px', padding: '20px' }}>
          <div className="row">
            <div className="col-12">
              <SearchBar />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-8">
              <Dashboard />
              <Notices />
            </div>
            <div className="col-md-4">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
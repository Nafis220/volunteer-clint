import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  
    return (
        <div><nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img className="w-25" src='https://i.ibb.co/D8ND3bK/Group-1329.png' alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Blog</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to='/registeredEvent'><button className='btn btn-dark'>Register</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"  to='/admin'><button className="btn btn-primary">Admin</button></Link>
            </li>
          </ul>
        </div>
      </nav>



      <div className="p-5 m-5">
      <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h2>
      {/* <!-- Search form --> */}
      <form className="form-inline md-form mr-auto m-5  d-flex justify-content-center">
  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
  <button className="tn btn-outline-primary btn-rounded btn-sm my-0" type="submit">Search</button>
</form>
      </div>
        </div>
        
    );
};

export default Header;
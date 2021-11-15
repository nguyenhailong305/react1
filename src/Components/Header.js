import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3 text-center">Project quản lý thành viên bằng React JS
          </h1>
          <p className="lead text-center">
            với dữ liệu JSON
          </p>
        </div>
      </div>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableDaTa extends Component {

    deleteButtonClick = (idUser) => {
      this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.DataUserProps.map((value,key) => 
    (
      <TableDataRow 
      deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
      changeEditUserStatus = {() => this.props.changeEditUserStatus()}
      editFunClick= {(user) => this.props.editFun(value)}
       Name={value.name}
       Tel = {value.tel}
       Permissions={value.permission}
       STT = {key}
       key={key} 
       id = {value.id}
       />
    ))
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover ">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
            {this.mappingDataUser()}
               
              </tbody>
            </table>
          </div>
        );
    }
}

export default TableDaTa;
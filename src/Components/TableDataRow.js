import React, { Component } from 'react';

class TableDataRow extends Component {
  permissionShow = () => {
    if(this.props.Permissions === 1) {return "Admin";}
    else if(this.props.Permissions === 2) {return "Moderator";}
    else {return "Normal User";} 
  }
  editClick = () => {
    this.props.editFunClick() ;
    this.props.changeEditUserStatus(); 
  }

  deleteButtonClick = (idUser) => {
    this.props.deleteButtonClick(idUser);
  }

    render() {
        return (
            <tr>
                  <td >{this.props.STT+1}</td>
                  <td>{this.props.Name}</td>
                  <td>{this.props.Tel}</td>
                  <td>{
                    this.permissionShow()
                  }
                  </td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning sua" onClick = {() => this.editClick()}><i className="fa fa-edit" />Sửa</div>
                      <div className="btn btn-danger xoa" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-delete" />Xóa</div>
                    </div>
                  </td>
                </tr>
        );
    }
}

export default TableDataRow;
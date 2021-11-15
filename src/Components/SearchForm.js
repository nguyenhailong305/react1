import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: '',
      userObj:{} 
    }
  }
  getUserEditInfo = (info) => {
    this.setState = ({
      userObj : info 
    });
    this.props.getUserEditInfoApp(info);
  }
  isShowEditForm = () => {
    if(this.props.editUserStatus === true) {
      return <EditUser 
      getUserEditInfo = {(info) => this.getUserEditInfo(info)}
      userEditObject = {this.props.userEditObject}
      changeEditUserStatus = {() => this.props.changeEditUserStatus()} />
      
    }
  
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({ 
      tempValue: event.target.value
    });
    this.props.checkConnectProps(this.state.tempValue);
  }
  hienThiNut = () => {
    if (this.props.hienThiForm === true) {
      return <div className="col-3 mx-auto btn btn-outline-secondary " onClick={() => this.props.ketNoi()} > Đóng lại</div>
    }else {
      return  <div className=" col-3 btn btn-outline-info " onClick={() => this.props.ketNoi()} > Thêm mới</div>
    }
  }
    render() {
        return (
            <div className="col-lg-12">
           {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group mb-2">
            <input  type="text" className="form-control" onChange={(event) => this.isChange(event)}placeholder="Nhập từ khóa " name id aria-describedby="helpId" />
            <div className="btn btn-info " onClick = {(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
          </div>
          <div className="btn-group1">
         {this.hienThiNut()}
          </div> 
        </div>
        <hr />
      </div>
        );
    }
}

export default SearchForm;
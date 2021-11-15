import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditObject.id ,
      name : this.props.userEditObject.name ,
      tel : this.props.userEditObject.tel ,
      permission : this.props.userEditObject.permission ,

    }
  }
  
  saveButton = () => {
    var info = {} ;
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState ({
      [name] :value 
    })
  }
    render() {
        return (
            <form>
                .<div class="row">
                <div className="col">
        <div className="card text-white bg-secondary mb-3 mt-2">
        <div className="card-header text-center">Sửa Thông Tin User</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" className="form-control" name="name"   placeholder="Ten user"  />
          </div>
          <div className="form-group">
            <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" className="form-control" name="tel"  placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission"  required>
              <option value>Chọn Quyền</option>
              <option value={1}>admin</option >
              <option value={2}>Moderator</option>
              <option value={3}>Normal</option>
            </select>
          </div>
          <div className="form-group">
            <input className="btn btn-block btn-warning"   value="Lưu " onClick = {() => this.saveButton()} ></input>
          </div>
        </div>
      </div>
      </div>
                </div>
         
      </form>
        );
    }
}

export default EditUser;
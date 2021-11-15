import React, { Component } from 'react';

class AddUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      permission : ""
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]:value
    });
  }
  
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     trangThaiChinhSua : false
  //   }
  // }
  // thayDoiTrangthai = () => {
  //   this.setState({
  //     trangThaiChinhSua : !this.state.trangThaiChinhSua
  //   })
  // }
  // hienThiNut = () => {
  //   if(this.state.trangThaiChinhSua === true) {
  //     return <div className="btn btn-block btn-outline-secondary" onClick={this.thayDoiTrangthai}> Đóng lại</div>;
  //   }else {
  //     return <div className="btn btn-block btn-outline-info" onClick={this.thayDoiTrangthai}> Thêm mới</div>;   
  //   }
  // }
  // hienThiForm = () => {
  //   if(this.state.trangThaiChinhSua === true) {
  //     return (
  //       <div className="card border-primary mb-3 mt-2">
  //       <div className="card-header">Thêm mới user vào hệ thống</div>
  //       <div className="card-body text-primary">
  //         <div className="form-group">
  //           <input type="text" className="form-control" placeholder="Ten user" id name />
  //         </div>
  //         <div className="form-group">
  //           <input type="text" className="form-control" placeholder="Điện thoại" id name />
  //         </div>
  //         <div className="form-group">
  //           <select className="custom-select" required>
  //             <option value>Chọn Quyền</option>
  //             <option value={1}>admin</option>
  //             <option value={2}>Moderator</option>
  //             <option value={3}>Normal</option>
  //           </select>
  //         </div>
  //         <div className="form-group">
  //           <div className="btn btn-block btn-primary">Thêm mới</div>
  //         </div>
  //       </div>
  //     </div>
  //     )
  //   }
  // }
  kiemTraTrangThai = () => {
    if(this.props.hienThiForm === true) {
      return (
        <form>
        <div className="col">
        <div className="card border-primary mb-3 mt-2">
        <div className="card-header">Thêm mới user vào hệ thống</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text" className="form-control" name="name"  onChange={(event) => this.isChange(event)} placeholder="Ten user"  />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="tel" onChange={(event) => this.isChange(event)} placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
              <option value>Chọn Quyền</option>
              <option value={1}>admin</option >
              <option value={2}>Moderator</option>
              <option value={3}>Normal</option>
            </select>
          </div>
          <div className="form-group">
            <input className="btn btn-block btn-primary" type ="reset" onClick={(name,tel,permission) => this.props.add(this.state.name,this.state.tel,this.state.permission)} value="Thêm mới " ></input>
          </div>
        </div>
      </div>
      </div>
      </form>
      )
    }
  }
  render() {
    console.log(this.state);
    console.log(this.props.hienThiForm);
    return (
        <div>
       
     {this.kiemTraTrangThai()}
      </div>
    );
  }
}

export default AddUsers;
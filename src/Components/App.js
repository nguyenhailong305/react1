import React, { Component } from 'react';
import './../App.css';
import AddUsers from './AddUsers';
import Header from './Header';
import SearchForm from './SearchForm';
import TableDaTa from './TableDaTa' ;
import DataUser from './data.json';


const { v4: uuidv4 } = require('uuid');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true ,
      data : [] ,
      searchText:'' ,
      editUserStatus : true ,
      userEditObject:{}
    }
  }
 
 componentWillMount() {
   //kiem tra xem co localstorage khong 
   if (localStorage.getItem('userData') === null ){
     localStorage.setItem('userData',JSON.stringify(DataUser));
   }
   else {
     var temp = JSON.parse(localStorage.getItem('userData'));
     this.setState({
       data:temp
     });
   }
 }
 
  deleteUser = (idUser) => {
    var tempData = this.state.data ; 
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState ({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  //   this.state.data.forEach((value,key) => {
  //     if(value.id === idUser) {
  //       console.log(key);

  //     }
  
  
  // })
  } 
  getUserEditInfoApp = (info) => {
    console.log('Thong tin da sua xong la '  +  info.name);
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel ; 
        value.permission = info.permission;
      }
    })
  }
  changeEditUserStatus = () => {
    this.setState ({
      editUserStatus : !this.state.editUserStatus
    })
  };
  getNewUserData = (name,tel,permission) => {
    var item = {} ;
    item.id = uuidv4(); ;
    item.name = name ;
    item.tel = tel ;
    item.permission = permission ;
    var items = this.state.data;
    this.setState({
      data:items
    });
    items.push(item)
    console.log(this.state.data);

  }
  getTextSearch = (dl) => {
    this.setState({
      searchText:dl 
    })
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  editUser = (user) => {
    console.log("Da ket noi");
    this.setState ({
      userEditObject:user
    })
    console.log(user);
  }
  
  // thongbao = () => {
  //   alert('Ket noi thanh cong');
  // }
  render() {
    localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua = [] ;
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1 ){
        ketqua.push(item);
      }
    })
    console.log(ketqua);
    return (
      <div>
        <Header/>
        <div className="searchForm">
        <div className="container">
          <div className="row">
           <SearchForm 
           getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
           userEditObject = {this.state.userEditObject}
           editUserStatus = {this.state.editUserStatus}
           changeEditUserStatus = {() => this.changeEditUserStatus()}
           checkConnectProps = {(dl)=>  this.getTextSearch(dl)}
           ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm}  />
           <TableDaTa deleteUser =  {(idUser) => this.deleteUser(idUser)}
            editFun= {(user) => this.editUser(user)}  DataUserProps = {ketqua}  changeEditUserStatus = {() => this.changeEditUserStatus()}/>
           <AddUsers add = {(name,tel,permission) => this.getNewUserData(name,tel,permission)} hienThiForm = {this.state.hienThiForm}/>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;


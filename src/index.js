import React from "react";
import ReactDOM from "react-dom";
// import video from '../src/assets/Draft_1.mp4';

const DemoComponent = React.forwardRef((props, ref) => {
  function testClick() {
    ref.current.focus();
  }

  return <button onClick={testClick}>CLick</button>;
});

class Elevator extends React.Component {
  constructor(props) {
    super(props);

    this.elevatorRef = React.createRef();
  }

  render() {
    return (
      <div>
        <h2>Welcome to Elevator Ordering Screen...</h2>

        <p>
          <label>
            Elevator Name : <input ref={this.elevatorRef} type="text"></input>
          </label>
        </p>

        <p>
          <label>
            Elevator Speed : <input type="text"></input>
          </label>
        </p>

        <p>
          <label>
            Elevator Load : <input type="text"></input>
          </label>
        </p>

        <Summary innerRef={this.elevatorRef}></Summary>
        <DemoComponent ref={this.elevatorRef}></DemoComponent>
      </div>
    );
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  focusInput = () => {
    this.props.innerRef.current.focus();
  };

  render() {
    return (
      <div>
        <h2>Summary Details...</h2>

        <p onClick={this.focusInput}>
          <label>
            Elevator Name : <b>Name - 1</b>
          </label>
        </p>

        <p>
          <label>
            Elevator Speed : <b>10 m/s</b>
          </label>
        </p>

        <p>
          <label>
            Elevator Load : <b>550 Kg</b>
          </label>
        </p>
      </div>
    );
  }
}

function testComponent() {
  let testRef = null;
  function handleClick() {
    testRef.focus();
  }

  return (
    <div>
      <input type="text" ref={(e) => (testRef = e)} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

// const element = testComponent();

const element=<Elevator></Elevator>

ReactDOM.render(element, document.getElementById("root"));

// class QuantityIncrement extends React.Component{
//   constructor(props){
//     super(props);
//     // this.state={quantity:0};
//     this.quantityRef= React.createRef();
//   }

// incrementQuantity=() =>{
//   this.quantityRef.current.value++;
//  this.setState({quantity:this.state.quantity+1})
// }

//   render(){
//     alert('Text Message');
//     return(
//       <div>
//         <p>
//           <lable>Enter Quantity: <input type="text"ref={this.quantityRef}></input>
//           {/* value={this.state.quantity} */}
//           <button onClick={this.incrementQuantity}>+</button>
//           </lable>
//         </p>
//       </div>
//     )
//   }
// }

// class LogIn extends React.Component {
//   constructor(props){
//     super(props);
//     this.userNameRef = React.createRef();
//   }

// componentDidMount(){
//   this.userNameRef.current.focus();
// }

//   render(){
//     return(
//       <div>
//         <h2>LogIn Screen...</h2>
//         <p>
//           <lable>UserName : <input type= "text" ref={this.userNameRef}></input></lable>
//         </p>
//         <p>
//           <lable>PassWord: <input type="text"></input></lable>
//         </p>
//         <button>LogIn</button>
//       </div>
//     );
//   }
// }

// class VideoPlayer extends React.Component{
//   constructor(props){
//     super(props);
//     this.videoRef= React.createRef();
//   }

// playVideo=()=>{
//  this.videoRef.current.play();
// }

// pauseVideo=()=>{
//  this.videoRef.current.pause();
// }

//   render(){
//     return(
//       <div>
//         <video ref={this.videoRef} width="300" height= "200" controls>
//             <source src= {video} type="video/mp4"></source>
//         </video>
//         <div>
//           <button onClick= {this.playVideo}>Play</button>
//           <button onClick= {this.pauseVideo}>Pause</button>
//         </div>
//       </div>
//     );
//   }
// }

// const element = <VideoPlayer></VideoPlayer>

// const element = <LogIn></LogIn>

// const element = <QuantityIncrement></QuantityIncrement>

// ReactDOM.render(element,document.getElementById("root"));

// class CustomErrorBoundary extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={hasError:null};
//   }
//   static getDerivedStateFromError(error){
//     return{hasError:true};
//   }
//   componentDidCatch(error,errorinfo){
//     console.log(error);
//     console.log(errorinfo);
//   }

// render(){
//   if(this.state.hasError){
//     return(
//       <React.Fragment>
//       <div>
//         <h2>We are having Problems to Load your Preferrences now.</h2>
//       </div>
//       <div>
//        <h2> We are having a Problems to Load Your Preferrences now.</h2>
//       </div>
//       </React.Fragment>
//     );
//   }
//     else{
//       return this.props.children;
//     }
//   }
// }

// class OrderComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { quantity: '', address: '' };
//   }

// orderInfoChanged = (val) => {
//   this.setState({ quantity: val });
// };

// addressChanged = (val )=> {
//   this.setState({ address: val });
// };

// render() {
//   return (
//     <>
//       <h1>Welcome to Product Order Screen...</h1>
{
  /* <OrderInfoComponent quantity={this.state.quantity} 

    onQuantityChange={this.orderInfoChanged}></OrderInfoComponent> */
}
//         <ProductInformationComponent
//           quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>
//         <AddressComponent  address={this.state.address}  onAddressChange={this.addressChanged}></AddressComponent>
//         <SummaryComponent quantity={this.state.quantity} address={this.state.address}
//           onQuantityChange={this.orderInfoChanged}></SummaryComponent>
//       </>
//     );
//   }
// }

// class ProductInformationComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

// handleChange = (e) => {
//   this.props.onQuantityChange(e.target.value);
// };

//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Product Information.....</h2>
//         <p>
//           <lable>
//             Product Name:
//             <select>
//               <option value="Product-1">Product-1</option>
//               <option value="Product-2">Product-2</option>
//               <option value="Product-3">Product-3</option>
//             </select>
//           </lable>
//         </p>
//         <p>
//           <lable>
//             Enter Quantity:{" "}
//             <input
//               type="text"
//               value={this.props.quantity}
//               onChange={this.handleChange}
//             ></input>
//           </lable>
//         </p>
//       </div>
//     );
//   }
// }

// class AddressComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

// handleChange = (e) => {
//   this.props.onAddressChange(e.target.value);
// };

//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Address Information......</h2>
//         <p>
//           <lable>
//             Address:{" "}
//             <textarea
//               value={this.props.address}
//               onChange={this.handleChange}
//             ></textarea>
//           </lable>
//         </p>
//         <CustomErrorBoundary>
//         <UserPreferredAddressList></UserPreferredAddressList>
//         </CustomErrorBoundary>
//       </div>
//     );
//   }
// }

// class UserPreferredAddressList extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     // throw new Error ("Not Able To Load The Address List");
//     return (
//       <div>
//         <h2>Your Existing Addresses....</h2>
//         <p>
//           Office<br></br>
//           Marathalli , Bangalore -560037
//         </p>
//       </div>
//     );
//   }
// }

// class SummaryComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// handleChange = (e) => {
//   this.props.onQuantityChange(e.target.value);
// };

//   render() {
//     return (
//       <div style={{ border: "3px solid red" }}>
//         <h2>Summary Information....</h2>
//         <p>
//           <lable>
//             Product Name: <b>Product -1</b>
//           </lable>
//         </p>
//         <p>
//           <lable>
//             Enter Quantity:{" "}
//             <input
//               type="text"
//               value={this.props.quantity}
//               onChange={this.handleChange}
//             ></input>
//           </lable>
//         </p>
//         <p>
//           <lable>
//             Address: <b>{this.props.address}</b>
//           </lable>
//         </p>
//         <button>Place order</button>
//       </div>
//     );
//   }
// }

// const element = <OrderComponent></OrderComponent>;
// ReactDOM.render(element, document.getElementById("root"));
// import {useFormik} from 'formik';
// import * as yup from 'yup';

// const validateEmployee = empData=>{
//   const errors={};

//   if(!empData.Name){
//     errors.Name= 'Please Enter Employee  Name';
//   }
//   else if(empData.Name.length>20){
//     errors.Name= 'Employee Name should not exceed 20 characters';
//   }

//   if(!empData.location){
//     errors.location= "Please Enter Employee Location";
//   }
//   if(!empData.EmailId){
//     errors.EmailId= "Please Enter Email ID";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
//     errors.EmailId = 'Invalid email address';
//   }
//    return errors;
// }

// const EmployeeComponent= ()=>{
//   const formik = useFormik({
//     initialValues:{
//       Id:'',
//       Name:'',
//       Location:'',
//       Salary:'',
//       EmailId:''
//     },
//     validateSchema:yup.object({
//       Name:yup.string().max(20,'Name should not exceed 20 characters').
//       required('Please Enter Employee Name'),
//       Location:yup.string()
//       .required('Please Enter Employee Location'),
//       EmailId:yup.string()
//       .email('Invalid email address')
//       .required('Please Enter Email Id')
//     }),
//     // validate:validateEmployee,
//     onSubmit: values=>{
//       alert(JSON.stringify(values));
//     },
//   });

//   return (
//     <div>
//       <h2>New Employee Form...</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <p>
//           <lable htmlFor= "Id">Employee ID:</lable>
//           <input type="text" name="Id" id ="id" value= {formik.values.Id}
//           onChange={formik.handleChange}></input>
//         </p>
//         <p>
//           <lable htmlFor= "Name">Employee Name:</lable>
//           <input type="text" name="Name" id ="Name"
//           onChange={formik.handleChange} value= {formik.values.Name} onBlur={formik.handleBlur}></input>
//          {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
//         </p>
//         <p>
//           <lable htmlFor= "Location">Employee Location :</lable>
//           <input type="text" name="Location" id ="Location" onChange={formik.handleChange} onBlur={formik.handleBlur} value= {formik.values.Location}
//           ></input>
//           {formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
//         </p>
//         <p>
//           <lable htmlFor="Salary">Employee Salary:</lable>
//           <input type="text" name="Salary" id ="Salary" value= {formik.values.Salary}
//           onChange={formik.handleChange}></input>
//         </p>
//         <p>
//           <lable htmlFor="EmailId">Employee EmailId:</lable>
//           <input type="text" name="Emailid" id ="Emailid" value= {formik.values.EmailId}
//           onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
//           {formik.touched.EmailId && formik.errors.EmailId ? <span style={{color:'red'}}>{formik.errors.EmailId}</span> : null}
//         </p>
//         <button type="Submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element,document.getElementById("root"));

// class EmployeeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       employee: {
//         Id: "",
//         Name: "",
//         Location: "",
//         Salary: "",
//       },
//     };
//   }

// changeHandler = (e) => {
//   const name = e.target.name;
//   const value = e.target.value;
//   this.setState({
//     employee: {
//       ...this.state.employee,
//       [name]: value,
//     },
//   });
// };

// onCreateEmployee = () => {
//   console.log(this.state.employee);
// };

// render() {
//   return (
//     <div>
//       <h2>New Employee Form.....</h2>
//       <form>
// {
  /* <p>
            <lable>
              Employee ID :{" "}
              <input
                type="text"
                name="Id"
                value={this.state.employee.Id}
                onChange={this.changeHandler}
              ></input>{" "}
            </lable>
          </p> */
// }
// {
  /* <p>
            <lable>
              Employee Name:{" "}
              <input
                type="text"
                name="Name"
                value={this.state.employee.Name}
                onChange={this.changeHandler}
              ></input>{" "}
            </lable>
          </p> */
// }
// {
  /* <p>
            <lable>
              Employee Location:{" "}
              <input
                type="text"
                name="Location"
                value={this.state.employee.Location}
                onChange={this.changeHandler}
              ></input>{" "}
            </lable>
          </p> */
// }
// {
  /* <p>
            <lable>
              Employee Salary :{" "}
              <input
                type="text"
                name="Salary"
                value={this.state.employee.Salary}
                onChange={this.changeHandler}
              ></input>{" "}
            </lable>
          </p>
        </form>
        <button onClick={this.onCreateEmployee}>Create</button>
      </div>
    );
  }
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root")); */
// }

// function Employee(props){
//   return <div style={{border:"3px solid red"}}>
// <p>
//   <lable>Employee ID: <b>{props.data.Id}</b></lable>
// </p>
// <p>
//   <lable>Employee Name: <b>{props.data.Name}</b></lable>
// </p>
// <p>
//   <lable>Employee Location: <b>{props.data.Location}</b></lable>
// </p>
// <p>
//   <lable>Employee Salary: <b>{props.data.Salary}</b></lable>
// </p>
//   </div>
// }

// function DisplayEmployees(props){
//   const empList = props.employeeList;

//   const listElements= empList.map((emp)=>
//   <Employee Key = {emp.id} data = {emp}></Employee>
//   );

//   return (
//     <div>
//       {listElements}
//     </div>
//   );
// }
// const employees = [

//   {Id:101,Name:'Abhinav',Location:'Banglore',Salary:45809},
//   {Id:101,Name:'Emma',Location:'Sweden',Salary:458096},
//   {Id:101,Name:'Rohit',Location:'Mumbai',Salary:890567}
// ];

// const element = <DisplayEmployees employeeList ={employees}></DisplayEmployees>

// ReactDOM.render(element,document.getElementById("root"));

// const EmployeeContext = React.createContext({

//   data:'',
//   changeEmployeeInfo:()=>{}

// });

// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       data: {
//         Id:101,
//         Name: 'Sumit Upadhyay',
//         Location: 'Sydny',
//         Salary:6700
//       },
//       changeEmployeeInfo: this.updateEmployeeDetails
//     };
//   }

// updateEmployeeDetails=()=>{
//   this.state({data:{Id:102}});
// }

//   render() {
//     return <div>
//       <h2>Welcome to App Component</h2>
//       <p>
//         <lable>Employee Id: <b>{this.state.data.Id}</b></lable>
//       </p>
//       <EmployeeContext.Provider value = {this.state}>
//         <Employee></Employee>
//       </EmployeeContext.Provider>

//     </div>
//   }
// }

// class Employee extends React.Component {
//   static context= EmployeeContext;

//   render() {
//     return <div>
//       <h2> Welcome to Employee Component...</h2>
//       <p>
//         <lable>Employee Id:<b>{this.context.data.Id}</b></lable>
//       </p>
//       <button onClick= {this.context.changeEmployeeInfo}>Update</button>
//     </div>
//   }
// }

// const element = <App></App>
// ReactDOM.render(element,document.getElementById('root'));

import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [comment, setComment] = useState('');

  const [newComment, setNewComment] = useState([]);

  const[employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {comment: comment}).then(() => {
      setEmployeeList([
        ...employeeList, 
        {
          comment: comment,
        },
      ]);
    });
  };

  const getEmployees = () => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data);
    });
  }

  const updateEmployeeComment = (id) => {
    Axios.put("http://localhost:3001/update", {comment: newComment, id: id}).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id == id
            ? {
                id: val.id,
                image: val.image_url,
                name: val.name,
                comment: val.newComment,
                time_stamp: val.time_stamp,
              }
            : val;
        })
      );
    }
    );
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <br></br>
      <div className="information">
        <img src="./images/icons/braum-icon.jpeg" width="50"></img>
        <input type="text" onChange={(event) => {setComment(event.target.value);
        }}
        />
        <button onClick={addEmployee}></button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Comments</button>
        {employeeList.map((val, key) => {
          return (
          <div className="employee"> 
            <div className="comment-box-1">
              <img src={val.image_url} width="50" height="50"></img>
              <h3>{val.name}</h3>
              <h3>{val.comment}</h3>
              <h5>{val.time_stamp}</h5>
            </div>
            <div className="comment-box-2">
              <input type="text" onChange={(event) => {setNewComment(event.target.value);
              }}/>
              <a href="#" onClick={(e) => { e.preventDefault(); updateEmployeeComment(val.id); }}>Update</a>&nbsp;
              <a href="#" onClick={(e) => { e.preventDefault(); deleteEmployee(val.id); }}>Delete</a>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

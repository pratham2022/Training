import { useState, useEffect } from "react";
import invite from "../json/invitations.json";
import updatedInvite from "../json/invitations_update.json";

import { useNavigate } from "react-router-dom";
import './ShowInvitation.css';
const ShowInvitation = (props) => {
  const uId = localStorage.getItem("Id");
  let navigate =useNavigate();
  const invitations = invite.invites;

  const updatedInvitations = updatedInvite.invites;
  const style = {
    Active: {
      color: "green",
    },
    InActive: {
      color: "red",
    },
  };
  const inviteNew = invitations
    .filter((item, key) => {
      return item.user_id === uId;
    })
    .map((e) => {
      return (
        <tr key={e.invite_id}>
          <td>{e.invite_id}</td>
          <td>{e.sender_id}</td>
          <td>{e.sig_id}</td>
          <td>{e.invite}</td>
          <td>{e.vector}</td>
          <td>{e.invite_time}</td>
          <td>{e.user_id}</td>
          <td style={e.status === "read" ? style.Active : style.InActive}>
            {e.status}
          </td>
        </tr>
      );
    });
  const [list, setList] = useState(inviteNew);
  const [updateList, setUpdateList] = useState(
    updatedInvitations.filter((e) => {
      //console.log(e.user_id === uId);
      return e.user_id === uId;
    })
  );

  //console.log(updateList);
  useEffect(() => {
    if (updateList.length !== 0) {
      const interval = setInterval(() => {
        if (updateList.length) {
          let newData = updateList;
          let data = newData.shift();
          setList([...list, data]);
          setUpdateList(newData);
        }
        return clearInterval(interval);
      }, 5000);
    }
  }, [list, updateList]);

  const inviteUpdate = list.map((e) => {
    return (
      <tr key={e.invite_id}>
        <td>{e.invite_id}</td>
        <td>{e.sender_id}</td>
        <td>{e.sig_id}</td>
        <td>{e.invite}</td>
        <td>{e.vector}</td>
        <td>{e.invite_time}</td>
        <td>{e.user_id}</td>
        <td style={e.status === "read" ? style.Active : style.InActive}>
          {e.status}
        </td>
      </tr>
    );
  });
  //console.log(updateList);
  //console.log(inviteNew);
  const logoutHandler=()=>{
    localStorage.clear();
    
    navigate("/");
  }
  return (
    <div>
    <h1>Welcome</h1>
      <table>
        <thead>
         
            <th>Invite Id</th>
            <th>Sender Id</th>
            <th>Sig Id</th>
            <th>Invite</th>
            <th>Vector</th>
            <th>Invite Time</th>
            <th>User Id</th>
            <th>Status</th>
         
        </thead>
        <tbody>
          {inviteNew}
          {inviteUpdate}
        </tbody>
      </table>
      <div class="container">
  <div class="vertical-center">
    <button onClick={logoutHandler}>Logout</button>
  </div>
</div>
     
    </div>
  );
};

export default ShowInvitation;

import invite from "../json/invitations.json";
import updatedInvite from "../json/invitations_update.json";
const ShowInvitation = (props) => {
  const uId = localStorage.getItem("Id");

  const invitations = invite.invites;
  const updatedInvitations =updatedInvite.invites;
  const style = {
    Active: {
      color: "green",
    },
    InActive: {
      color: "red",
    },
  };
  
  return (
    <div>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th>Invite Id</th>
            <th>Sender Id</th>
            <th>Sig Id</th>
            <th>Invite</th>
            <th>Vector</th>
            <th>Invite Time</th>
            <th>User Id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invitations
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
                  <td
                    style={e.status === "read" ? style.Active : style.InActive}
                  >
                    {e.status}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowInvitation;

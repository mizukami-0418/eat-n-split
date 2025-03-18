import React from "react";
import Button from "./Button";

function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          <strong>
            owes you {friend.name} ${Math.abs(friend.balance)}
          </strong>
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          <strong>
            owes you {friend.name} ${Math.abs(friend.balance)}
          </strong>
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          <strong>
            owes you {friend.name} ${Math.abs(friend.balance)}
          </strong>
        </p>
      )}

      <Button>Select</Button>
    </li>
  );
}

export default FriendsList;

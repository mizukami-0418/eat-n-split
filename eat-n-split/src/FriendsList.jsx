import React from "react";
import Button from "./Button";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          <strong>
            {friend.name}さんに{Math.abs(friend.balance)}円の借金があります
          </strong>
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          <strong>
            {friend.name}さんに{Math.abs(friend.balance)}円貸しています
          </strong>
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          <strong>{friend.name}さんとお金のやりとりはありません</strong>
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "閉じる" : "選択"}
      </Button>
    </li>
  );
}

export default FriendsList;

import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userPayment, setUserPayment] = useState("");
  const friendPayment = bill ? bill - userPayment : "";
  const [whoPays, setWhoPays] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userPayment) {
      return;
    }
    onSplitBill(whoPays === "user" ? friendPayment : -userPayment);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{selectedFriend.name}さんと割り勘！</h2>

      <label>💰 支払い額</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍🏻 あなたの支払い額</label>
      <input
        type="text"
        value={userPayment}
        onChange={(e) =>
          setUserPayment(
            Number(e.target.value) > bill ? userPayment : Number(e.target.value)
          )
        }
      />

      <label>👬 {selectedFriend.name}さんの支払い</label>
      <input type="text" value={friendPayment} disabled />

      <label>😳 お支払いは？</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">自分</option>
        <option value="friend">{selectedFriend.name}さん</option>
      </select>
      <Button>割り勘</Button>
    </form>
  );
}

export default FormSplitBill;

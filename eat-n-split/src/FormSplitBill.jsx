import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [userPayment, setUserPayment] = useState("");
  const friendpayment = bill ? bill - userPayment : "";
  const [whoPays, setWhoPays] = useState("user");

  return (
    <form className="form-split-bill">
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
      <input type="text" value={friendpayment} disabled />

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

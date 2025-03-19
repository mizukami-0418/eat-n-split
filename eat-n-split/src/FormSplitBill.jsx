import React from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>{selectedFriend.name}さんと割り勘！</h2>

      <label>💰 支払い額</label>
      <input type="text" />

      <label>🧍🏻 あなたの支払い額</label>
      <input type="text" />

      <label>👬 {selectedFriend.name}さんの支払い</label>
      <input type="text" disabled />

      <label>😳 お支払いは？</label>
      <select>
        <option value="user">自分</option>
        <option value="friend">{selectedFriend.name}さん</option>
      </select>
      <Button>割り勘</Button>
    </form>
  );
}

export default FormSplitBill;

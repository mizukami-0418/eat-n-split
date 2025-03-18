import React from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>form split bill</h2>

      <label>💰 支払い額</label>
      <input type="text" />

      <label>🧍🏻 あなたの支払い額</label>
      <input type="text" />

      <label>👬 友達の支払い</label>
      <input type="text" disabled />

      <label>😳 お支払いは？</label>
      <select>
        <option value="user">自分</option>
        <option value="friend">友達</option>
      </select>
      <Button>割り勘</Button>
    </form>
  );
}

export default FormSplitBill;

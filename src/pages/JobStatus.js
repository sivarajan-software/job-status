import "./JobStatus.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export function JobStatus() {
  async function onSave(e) {
    console.log("save clicked");
    await addDoc(collection(db, "jobs"), {
      name: "job name",
      client: "client",
    });
    console.log("command executed");
  }

  return (
    <div className="main">
      <header>Job Status</header>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Job Name</label>
            </td>
            <td>
              <input name="name" id="name" autoComplete="off" />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="client">Client Name</label>
            </td>
            <td>
              <input name="client" id="client" autoComplete="off" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="description">Description</label>
            </td>
            <td>
              <textarea
                name="description"
                id="description"
                rows={5}
                autoComplete="off"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="quantity">Quantity</label>
            </td>
            <td>
              <input
                name="quantity"
                id="quantity"
                type="number"
                autoComplete="off"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="rate">Rate</label>
            </td>
            <td>
              <input name="rate" id="rate" type="number" autoComplete="off" />{" "}
            </td>
          </tr>
          <tr className="disabled">
            <td>
              <label htmlFor="total">Total</label>
            </td>
            <td>
              <input name="total" id="total" disabled={true} />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="gstpercentage">GST %</label>
            </td>
            <td>
              <select defaultValue={18} name="gstpercentage" id="gstpercentage">
                <option value={5}>5%</option>
                <option value={12}>12%</option>
                <option value={18}>18%</option>
              </select>
            </td>
          </tr>
          <tr className="disabled">
            <td>
              <label htmlFor="grandtotal">Grand Total</label>
            </td>
            <td>
              <input name="grandtotal" id="grandtotal" disabled={true} />{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="action-bar">
        <input
          type="submit"
          className="save-btn"
          value="Save"
          onClick={onSave}
        />
      </div>
    </div>
  );
}

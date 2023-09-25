'use client'
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

export default function BillEstimate() {
  const item = {
    product: "",
    price: "0",
  };
  const [total, setToal] = useState(0);
  const [form, setForm] = useState([item]);

  const handleChange = (e, index) => {
    let data = [...form];
    setToal(
      form.reduce((acc, item) => parseFloat(acc) + parseInt(item.price), 0)
    );
    data[index][e.target.name] = e.target.value;

    setForm(data);
  };
  console.log(form);
  const componentRef = useRef( );
  return (
    <div>
      <h2>Estimate</h2>
      <form>
        {form.map((item, index) => {
          return (
            <div>
              <input
                type="text"
                name="product"
                onChange={(e) => handleChange(e, index)}
                value={item.product}
              />
              <input
                type="text"
                name="price"
                onChange={(e) => handleChange(e, index)}
                value={item.price}
              />
            </div>
          );
        })}
      </form>
      <button onClick={() => setForm([...form, item])}>add</button>
      <div>
        <table ref={componentRef}>
          <tbody>
            <tr>
              <th>no.</th>
              <th>product</th>
              <th>Price</th>
            </tr>

            {form.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ReactToPrint
        trigger={() => {
          return <button>Print</button>;
        }}
        content={() => componentRef.current}
      />
    </div>
  );
}

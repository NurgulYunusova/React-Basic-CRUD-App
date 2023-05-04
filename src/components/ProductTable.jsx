/* eslint-disable react/prop-types */

import { Table } from "reactstrap";

function ProductTable({ data, removeProduct }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <th>{item.firstname}</th>
                  <td>{item.lastname}</td>
                  <td>{item.username}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => removeProduct(item.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default ProductTable;

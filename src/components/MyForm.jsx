/* eslint-disable react/prop-types */
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

function MyForm({ handleInputs, addProduct }) {
  return (
    <>
      <Form>
        <FormGroup floating>
          <Input
            id="id"
            name="id"
            placeholder="ID"
            type="text"
            onChange={(e) => handleInputs(e.target.value.trim(), "id")}
          />
          <Label for="firstname">ID</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="firstname"
            name="firstname"
            placeholder="First Name"
            type="text"
            onChange={(e) => handleInputs(e.target.value.trim(), "firstname")}
          />
          <Label for="firstname">First name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            type="text"
            onChange={(e) => handleInputs(e.target.value.trim(), "lastname")}
          />
          <Label for="lastname">Last Name</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
            onChange={(e) => handleInputs(e.target.value.trim(), "username")}
          />
          <Label for="username">Username</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="age"
            name="age"
            placeholder="Age"
            type="text"
            onChange={(e) => handleInputs(e.target.value.trim(), "age")}
          />
          <Label for="age">Age</Label>
        </FormGroup>
        <Button onClick={addProduct}>Submit</Button>
      </Form>
    </>
  );
}

export default MyForm;

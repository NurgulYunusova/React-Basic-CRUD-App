import { Container, Row } from "reactstrap";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import MyForm from "./components/MyForm";
import { Col } from "reactstrap";

function App() {
  const [products, setProducts] = useState([]);

  let productObj = {
    id: undefined,
    firstname: undefined,
    lastname: undefined,
    username: undefined,
    age: undefined,
  };

  const [productObject, setProductObj] = useState(productObj);

  const getData = (value, type) => {
    setProductObj((oldData) => ({ ...oldData, [type]: value }));
  };

  const addProduct = () => {
    setProducts([...products, productObject]);
  };

  const removeProduct = (id) => {
    let filteredProducts = products.filter((q) => q.id != id);
    setProducts(filteredProducts);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <ProductTable data={products} removeProduct={removeProduct} />
          </Col>
          <Col xs={6}>
            <MyForm handleInputs={getData} addProduct={addProduct} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

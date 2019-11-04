import React, {Component} from "react";
import { Form, Input, Modal } from 'antd';
import {connect} from "react-redux";
import Actions from "../../redux/actions";

class AddProduct extends Component {
    state = {
        error: "",
        productName: "",
        quantityProduct: "",
        typeProduct: "",
    }

    handleSubmit = e => {
        const {productName, quantityProduct, typeProduct } = this.state;
        const {toggleVisible, data, setProductsData} = this.props;

        if(productName !== "" && quantityProduct !== "" && typeProduct !== ""){
            this.setState({error: ""});
            toggleVisible(false);
            const newData = [...data, 
                {
                    id: data.length + 1,
                    name: productName,
                    quantity: parseInt(quantityProduct),
                    type: typeProduct,
                }];
            setProductsData(newData);
        } else {
            this.setState({error:"Please fill in all field"});
        }
      };
    
    handleChange = e => {
        const {productName, quantityProduct, typeProduct } = this.state;
        if(e.target.name === "name") {
            this.setState({productName: e.target.value});
        } else if (e.target.name === "quantity") {
            this.setState({quantityProduct: e.target.value});
        } else if (e.target.name === "type") {
            this.setState({typeProduct: e.target.value});
        }

        if(productName !== "" && quantityProduct !== "" && typeProduct !== ""){
            this.setState({error: ""});
        }
    } 
    render() {
        const {visible, toggleVisible} = this.props;
        const {error} = this.state;

        return (
            <div>
              <Modal
                title="Add product"
                visible={visible}
                onOk={() => this.handleSubmit()}
                onCancel={() => toggleVisible(false)}
              >
                  <Form onSubmit={this.handleSubmit}>
                      <Form.Item >
                          <Input placeholder="Product name" onChange={(e) => this.handleChange(e)} name="name" />
                      </Form.Item>
                      <Form.Item>
                          <Input placeholder="Quantity" onChange={(e) => this.handleChange(e)} name="quantity" />
                      </Form.Item>
                      <Form.Item>
                          <Input placeholder="Type" onChange={(e) => this.handleChange(e)} name="type" />
                      </Form.Item>
                      {error && <span style={{color: 'red'}}>{error}</span> }
                  </Form>
              </Modal>
            </div>
          );
    }
    
}

export default connect(
    state => {
        return {
            data: state.products.data,
        };
    },
    {setProductsData: Actions.products.setProductsData}
)(AddProduct);
  
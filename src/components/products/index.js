import React, {Component} from "react";
import { List, Card, Button } from 'antd';
import { ProductData } from "./productData";
import AddProduct from "./addProduct";
import {connect} from "react-redux";
import Actions from "../../redux/actions";

class ProductsList extends Component {
    state = {
        visible: false,
        productData: null,
        addProductVisible: false,
    }

    handleShowProductData = (id) => {
        const {data} = this.props;
        const productData = data.filter(item => item.id === id)[0];
        this.setState({visible: true, productData});
    }

    toggleVisible = (toggle) => {
       this.setState({visible: toggle, addProductVisible: toggle});
    }

    handleDeleteProduct = (id) => {
        const {data, setProductsData} = this.props;
        const newData = data.filter(item => item.id !== id);
        setProductsData(newData);
        this.setState({visible: false});
    }

    handleAddProduct = () => {
        this.setState({addProductVisible: true});
    }

    render() {
        const {visible, productData, addProductVisible} = this.state;
        const {data} = this.props;

        return (
            <>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    style={{cursor: 'pointer', width: '100%', margin: "10px"}}
                    renderItem={item => (
                        <List.Item >
                             <Button 
                                icon="delete" 
                                type="danger" 
                                onClick={() => this.handleDeleteProduct(item.id)}
                                style={{position: 'relative', zIndex: '1', top: '32px', right: '-258px' }}
                                />
                            <Card title="Goods" onClick={() => this.handleShowProductData(item.id)}>{item.name}</Card>
                        </List.Item>
                    )}
                />
                <Button icon="plus" type="primary" onClick={() => this.handleAddProduct()}>Add product</Button>
                {visible && <ProductData visible={visible} productData={productData} toggleVisible={() => this.toggleVisible()} />}
                {addProductVisible && <AddProduct visible={addProductVisible} toggleVisible={() => this.toggleVisible()} />}
            </>
        );
    }
 
}
export default connect(
    state => {
        return {
            data: state.products.data,
        };
    },
    {
        setProductsData: Actions.products.setProductsData,
    }
  )(ProductsList);
  
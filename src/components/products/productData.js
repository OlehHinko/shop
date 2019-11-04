import React from "react";
import { Modal } from 'antd';

 export function ProductData(props) {

    const {visible, toggleVisible, productData} = props;

    return (
      <div>
        <Modal
          title="Product"
          visible={visible}
          onOk={() => toggleVisible(false)}
          onCancel={() => toggleVisible(false)}
        >
            <p>Name: {productData.name}</p>
            <p>Quantity: {productData.quantity}</p>
            <p>Type: {productData.type}</p>
        </Modal>
      </div>
    );
}

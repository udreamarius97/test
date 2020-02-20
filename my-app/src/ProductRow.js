import React, { Component } from 'react';
import EditableCell from "./EditableCell";

class ProductRow extends Component{
    constructor(props) {
        super(props);
    }
    onDelEvent() {
        this.props.onDelEvent(this.props.product);

    }
    render() {
        return (
            <tr className="eachRow">
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type": "id",
                    value: this.props.product.id,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "first_name",
                    value: this.props.product.first_name,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "last_name",
                    value: this.props.product.last_name,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "email",
                    value: this.props.product.email,
                    id: this.props.product.id
                }}/>
               <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "gender",
                    value: this.props.product.gender,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "address_id",
                    value: (this.props.product.address ? this.props.product.address.id : null),
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "address_id_user",
                    value:(this.props.product.address ? this.props.product.address.user_id: null),
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "address_street",
                    value:(this.props.product.address ? this.props.product.address.street: null),
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "address_number",
                    value:(this.props.product.address ? this.props.product.address.number: null),
                    id: this.props.product.id
                }}/>
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
                </td>
            </tr>
        );
    }
}

export default ProductRow;
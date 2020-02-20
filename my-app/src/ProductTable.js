import React, { Component } from 'react';
import ProductRow from "./ProductRow";

class ProductTable extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function(product) {
            if (product.first_name.indexOf(filterText) === -1) {
                if (product.last_name.indexOf(filterText) === -1){
                    if (product.id != filterText){
                        return;
                    }
                }
            }
            return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Address id</th>
                        <th>Address id user</th>
                        <th>Address street</th>
                        <th>Address number</th>
                    </tr>
                    </thead>

                    <tbody>
                    {product}

                    </tbody>

                </table>
            </div>
        );

    }
}

export default ProductTable;
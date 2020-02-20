import React, { Component } from 'react';
import {getData} from "./ApiHelper";
import SearchBar from "./SearchBar";
import Select from 'react-select';
import ProductTable from "./ProductTable";
const options = [
    { value: 'id', label: 'Sort by id' },
    { value: 'name',label: 'Sort by name' }
];
class Table extends Component{

    constructor(props) {
        super(props);
        this.state={
            filterText : "",
            sorting:"id",
            products:[]
        }
        this.loadDataFromUrl=this.loadDataFromUrl.bind(this);
        this.handleUserInput=this.handleUserInput.bind(this);
        this.handleRowDel=this.handleRowDel.bind(this);
        this.handleProductTable=this.handleProductTable.bind(this);
    }

    loadDataFromUrl(){
        getData().then(
            response=>{
                this.setState({
                        products:response
                        }
                )
            }
        ).catch(error => {
            if(error.status === 404) {
                this.setState({
                    notFound: true,
                    isLoading: false
                });
            } else {
                this.setState({
                    serverError: true,
                    isLoading: false
                });
            }
        });
    }

    componentDidMount() {
        this.loadDataFromUrl();
    }

    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };
    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;

                }
            }
            return product;
        });
        this.setState({products:newProducts});
    };

    handleChange = sorting => {
        this.setState(
            { sorting },
        );

    };
    componentDidUpdate() {

    }

    render() {
        if(this.state.sorting.value=='id'){
            this.state.products.sort((a,b)=>(a.id>b.id) ? 1:-1);
        }
        else
        if(this.state.sorting.value=='name'){
            this.state.products.sort((a,b)=>(a.first_name < b.first_name) ? 1 : -1)
        }
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                <Select
                    value={this.state.sorting}
                    onChange={this.handleChange}
                    options={options}
                />
                <ProductTable onProductTableUpdate={this.handleProductTable}  onRowDel={this.handleRowDel} products={this.state.products} filterText={this.state.filterText}/>
            </div>
        )
    }
}

export default Table;
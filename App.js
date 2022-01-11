class App extends React.Component {

    state = {
        products: productsList,
        item: '', 
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false,
        // cartItems: []
    }

    addToCart = item => {
        console.log('We are inside addToCart function', item)
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: parseInt(this.state.quantity),
  
            
        }

        // console.log(typeof parseInt(newItem.price))
        this.setState({
            products: [newItem, ...this.state.products],
            item: '',
            brand: '',
            units: '',
            quantity: 0,
        })

    }

    render() {
     
        return (
            <div>
                <h1>Grocery List</h1>

                <div id='create-product'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='item'>Item:</label>
                        <input id='item' type='text' value={this.state.item} onChange={this.handleChange} />
                        <label htmlFor='brand'>Brand:</label>
                        <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} />
                        <label htmlFor='units'>Units:</label>
                        <input id='units' type='text' value={this.state.units} onChange={this.handleChange} />
                        <label htmlFor='quantity'>Quantity:</label>
                        <input id='quantity' type={Number} value={this.state.quantity} onChange={this.handleChange} />
                        
                        <input type='submit' />
                    </form>

                    <div className='preview'>
                        <h2>Preview item to be added to grocery list</h2>
                        <h3>{this.state.item}</h3>
                        <h4>{this.state.brand}</h4>
                        <h5>{this.state.units}</h5>
                        <h6>{this.state.quantity}</h6>
                    </div>
                </div>


                <div className='products'>
                    <h3>Item List</h3>
                    <ul>
                        {
                            this.state.products.map(product => {
                                return (
                                    <Product 
                                        product={product} 
                                        handleAdd={this.addToCart} 
                                    />
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='cart'>
                    {/* <h3>Shopping Cart</h3> */}
                    <ul>
                        {
                            this.state.cartItems.map(item => {
                                return (
                                    <ShoppingCart product={item} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)
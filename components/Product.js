class Product extends React.Component {
    // Old syntax required you to use a constructor() and super() to use props.
    // constructor(props) {
    //     super(props)
    // }

    state = {
        inShoppingCart: false
    }

    // toggleCart = () => {
    //     this.setState({
    //         inShoppingCart: !this.state.inShoppingCart
    //     })
    // }

    render() {
        // console.log('Hey we are inside ProductsList', this.props)
        // console.log(this)
        return(
            <li onClick={() => this.props.handleAdd(this.props.product)}>
                {this.props.product.name} 
                {this.props.product.price}
                {
                    this.state.inShoppingCart
                    ?
                    <span> is in the shopping cart!</span>
                    : ''
                }
            </li>
        )
    }
}
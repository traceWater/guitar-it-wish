import React from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/reducers/products'
// import Auth from '../../components/auth/Home'
import './home.css'

import ProductsList from '../../components/products-list/ProductsList'

const Home = props => {

    const { products } = props
    
    return (
        <div className="home">
        
        <img src="https://i.ibb.co/Pjnfs0G/69-landing.jpg" alt="landing" className="home-img"/>

            <ProductsList products={products}/>
        </div>
    )
}

const mapStateToProps = state => ({
    products: getAllProducts(state.products)
})

export default connect(mapStateToProps)(Home)

import React,{useState, useEffect} from "react";
import './home.css'
import DeWalt from "./DeWalt";
import News from "./News";
import AboutUs from "./AboutUs";
import ProductCard from "../../components/ProductCard/productCard";



function Home() {
    const [product, setProduct] = useState({})
    const getProduct = async()=>{
        await fetch("http://localhost:3004/products")
        .then((response)=>response.json())
        .then((data)=> setProduct(data))
    }
    useEffect(()=>{
        getProduct()
    }, [])
    console.log(product)
    return (
        <div>
            <DeWalt />
             {
                product?.painting.map(({id, img, title})=>(
                    <ProductCard key={id} img={img} title={title} />
                ))
            } 
            <AboutUs />
            <News />
        </div>
    )
}

export default Home
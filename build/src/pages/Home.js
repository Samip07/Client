import { Navbar, Main, Destinations, Treks, Hotels, Review, Footer } from "../components";
import { useEffect } from "react";

const Home = ()=>{

    const fetchData = async () => {
        try{
            // const response = await fetch('/data.json')
            const response = await fetch('/api/v1')
            const data = await response.json()
            // console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Navbar/>
            <Main />
            <Destinations />
            <Treks />
            <Hotels />
            <Review />
            <Footer />
        </div>
    )
}

export default Home;
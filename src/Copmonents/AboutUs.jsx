import React, { Component} from 'react';
//Responsive
class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()

    }

    getData() {
        fetch("https://fakestoreapi.com/products").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
                console.warn(result)
            })
        })

    } 
      render() {
        return (

            <>
           About Us
            </>
       

        );
    }
}

export default AboutUs;
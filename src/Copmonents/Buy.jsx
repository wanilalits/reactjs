import React, { Component } from 'react';

class Buy extends Component {
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
            {
                this.state.list ?
                <>
                {this.state.list.map((item, i) =>
                <>
                    <div className="outer">
                    <div className="title" >{item.title}</div>
                    <div > <img className="Image1" src={item.image} alt="Image Name" /> </div>
                    <div className="description">{item.description}</div>
                    <div className="rate">Rating:-<span/>{item.rating.rate}</div>
                    <div className="count"> In stock:-<span/>{item.rating.count}</div>
                     <div className="price"> Price:-<span/>  <span/>${item.price}/-</div>
                     </div>
                     <div style={{   background:"#cc652a", height: "5px"}}> </div>
</>
                    )
                        }
                </>
               
               : <p>please wait......</p>
            }
           
            </>
       

        );
    }
}

export default Buy;
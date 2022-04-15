import React, { Component} from 'react';
import SideBar from '../Copmonents/SideBar';
import './Responsive.css';
class Responsive extends Component {
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
       <SideBar> </SideBar>
            <div className="grand_parent">
            {
                this.state.list ?
                <div className="parents">
                {this.state.list.map((item, i) =>
              
				<div className= "child">
                    
              <div >  <img className="Image3" src={item.image} alt="Image Name" /></div>
              <p5 className="ProductName3" > {item.title} </p5>
              <br/>
              <p3 className="ProductPrice3" > ${item.price}/- </p3>
              <br/>
<div > <button className="ProductButton3" >More</button></div>    

					 </div>
				   
                    )
                        }
                </div>
               
               : <p>please wait......</p>
            }
           


            
            </div>
   </>

        );
    }
}

export default Responsive;


/*
 <div className="title" >{item.title}</div>
                    <div > <img className="Image1" src={item.image} alt="Image Name" /> </div>
                    <div className="description">{item.description}</div>
                    <div className="rate">Rating:-<span/>{item.rating.rate}</div>
                    <div className="count"> In stock:-<span/>{item.rating.count}</div>
                     <div className="price"> Price:-<span/>  <span/>${item.price}/-</div>
*/
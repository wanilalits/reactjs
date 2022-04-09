import React, { Component} from 'react';
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
<button className="ProductButton3" >Buy</button>

					 </div>
				   
                    )
                        }
                </div>
               
               : <p>please wait......</p>
            }
           


            <div class="grand_parent">
			<h1> </h1>
			<div class="parents">
				<div class="child">
					<p>1</p>
				</div>
				<div class="child">
					<p>2</p>
				</div>
				<div class="child">
					<p>3</p>
				</div>
                <div class="child">
					<p>4</p>
				</div>
                <div class="child">
					<p>5</p>
				</div>
                <div class="child">
					<p>6</p>
				</div>
                <div class="child">
					<p>7</p>
				</div>
                <div class="child">
					<p>8</p>
				</div>
                <div class="child">
					<p>9</p>
				</div>
                <div class="child">
					<p>10</p>
				</div>
                <div class="child">
					<p>11</p>
				</div>
                <div class="child">
					<p>12</p>
				</div>
                <div class="child">
					<p>13</p>
				</div>
                <div class="child">
					<p>14</p>
				</div>
			</div>
		</div>
            </div>
       

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
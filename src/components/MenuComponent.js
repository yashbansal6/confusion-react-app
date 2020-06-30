import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
        console.log("Menu Component -->  Constructor");
    }
    
    componentDidMount() {
        console.log("Menu Component --> componentDidMount");
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    render() {
        console.log("Menu Component -->  Render");
        // now this.props instead of this.state
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;
import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { Dishes } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import About from "./AboutComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: Dishes,
      selectedDish: null,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/contactus" component={Contact} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route
              exact
              path="/aboutus"
              component={() => <About leaders={this.state.leaders} />}
            />
            <Route
              exact
              path="/menu"
              component={() => (
                <Menu
                  dishes={this.state.dishes}
                  onClick={(dishId) => this.onDishSelect(dishId)}
                />
              )}
            />
            <Redirect to="/home" />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;

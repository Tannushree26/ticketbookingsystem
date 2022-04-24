import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

const Menu = () =>{
    return (
        <ListGroup >
            <ListGroupItem className="bg-" tag="a" href="#!" action><h5>Login as User</h5></ListGroupItem>
            <ListGroupItem className="bg-" tag="a" href="#!" action><h5>Login as Admin</h5></ListGroupItem>
            <ListGroupItem className="bg-" tag="a" href="/registrationpage" action><h5>Register as New User</h5></ListGroupItem>
            <ListGroupItem className="bg-" tag="a" href="#!" action><h5>Home</h5></ListGroupItem>
            <ListGroupItem className="bg-" tag="a" href="#!" action><h5>About Us</h5></ListGroupItem>
            <ListGroupItem className="bg-" tag="a" href="#!" action><h5>Contact</h5></ListGroupItem>

        </ListGroup>
    )
}

export default Menu ;
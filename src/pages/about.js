import React, { Component } from 'react';
import Img from 'gatsby-image';

export default class About extends Component {

    constructor({ data }) {
        super();

        this.sizes = data.pageImage.sizes;
       
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor amet plaid tofu palo santo kickstarter godard man bun. Enamel pin crucifix selvage bushwick hammock, coloring book roof party art party dreamcatcher gluten-free pabst vegan. Kale chips hexagon tacos quinoa four loko swag 3 wolf moon. Polaroid four dollar toast hot chicken selfies beard pork belly blue bottle forage gluten-free ramps prism tacos. PBR&B polaroid fashion axe hella. Echo park shabby chic enamel pin farm-to-table butcher succulents quinoa vexillologist slow-carb adaptogen woke glossier dreamcatcher fanny pack. Photo booth ethical cronut edison bulb activated charcoal vexillologist organic butcher austin cornhole raclette air plant raw denim.</p>

                <p>Lorem ipsum dolor amet plaid tofu palo santo kickstarter godard man bun. Enamel pin crucifix selvage bushwick hammock, coloring book roof party art party dreamcatcher gluten-free pabst vegan. Kale chips hexagon tacos quinoa four loko swag 3 wolf moon.</p>

                <Img sizes={this.sizes} />

            </div>
        )
    }
};

export const query = graphql`
query AboutPage { 
    pageImage: imageSharp(id: { regex: "/macbook-on-desk.jpg/" }) {
        sizes(maxWidth: 960) {
            ...GatsbyImageSharpSizes
        }
    }
}
`;
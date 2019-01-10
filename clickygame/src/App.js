import React, { Component } from "react";
import Header from "./components/Header/index";
import Content from "./components/Content/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import images from "./images.json";

class App extends Component {
    state = {
        images
    };

    render() {
        return (<div className="fullBody">
            <Header></Header>
            <Wrapper>
            {this.state.images.map(image => (
                <Content
                    id={image.id}
                    key={image.id}
                    image={image.image}/>
            ))};
            </Wrapper>
            <Footer></Footer>
        </div>
        );
    }

}

export default App;
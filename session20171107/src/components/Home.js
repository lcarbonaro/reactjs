import React from 'react';

// using class to create a new component
/*
class Home extends React.Component {

    render() {
        return (
            <h3>test home</h3>
        );
    }
}
*/

// more compact, but more cryptic way
// use for stateless components
const Home = () => (<h3>test 1</h3>);

export default Home;

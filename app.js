const container1 = document.getElementById('reactContainer1')
ReactDOM.render("Hello! Welcome to React",container1)


// function component
/*const Container = () => {
    return React.createElement('div',null,'Hello! Welcome to React, container',
               React.createElement('p',null,"Let's rock and roll"));
}
const container2 = document.getElementById('reactContainer1')
ReactDOM.render(React.createElement(Container),container2)*/


// class component

class ReactContainer extends React.Component{
    // constructor - to initialize the state

    // render method to render the react dom
    render(){
        return React.createElement('div',null,'Hello! Welcome to React, container',
        React.createElement('p',null,"Let's rock and roll"));
    }
}
const container3 = document.getElementById('reactContainer1')
ReactDOM.render(React.createElement(ReactContainer),container3);



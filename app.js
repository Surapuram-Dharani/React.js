const parent = React.createElement("div",{id : "parent"},
    [React.createElement("div",{id : "child"},
        [React.createElement("h1",{},"i am dhanu"),
        React.createElement("h2",{},"i am dhanu")
        ]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"i am dhanu"),
         React.createElement("h2",{},"i am dhanu")  
        ]),
    ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
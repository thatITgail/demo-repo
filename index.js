function Header() {
  return (
    <header className="wrapper">
      <nav className="nav-center">
        <img src="./logo192.png" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="container">
      <h1>Reasons I'm excited to learn React</h1>
      <ol className="list">
        <li>Broaden my skillset</li>
        <li>Be readily available for hiring</li>
        <li>For the fun of learning</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small> &copy; 2023 Dim development. All rights reserved.</small>
    </footer>
  );
}

function Reactreasons(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      
    </div>
  );
}


ReactDOM.render(
  <Reactreasons />,
  document.getElementById("root")
);


// Why learn react.
// 1. Its composable, 2. Its Declarative - What should be done and the computer completes the task while imperative means show me how should it be done.


// Imperative method of coding (Vanilla Js)
// const root = document.getElementById("root");

// const newEl = document.createElement("h1");
// newEl.textContent = "Hello, World!";
// newEl.className = "header";

// root.appendChild(newEl)

// JSX means JavascriptXMl and it's a syntax extension to Javascript.You can only render one parent element in react. The JSX syntax is defined react from "react"  
import './App.css';

function App() {
  return (
    <div className="App">
          <header><h2>Home</h2></header>
          <section className="main-view">
            <section className="card">
              <div id="counter">x/x</div>
              <h2>NamePlaceholder</h2>
              <ul>
                <li>From: placholderLocation</li>
                <li>Job Title: placholderTitle</li>
                <li>Employer: placholderEmployer</li>
              </ul>
              <h3>Favorite Movies:</h3>
              <ul id="moviesList">
                <li>1: placholderMovie1</li>
                <li>2: placholderMovie2</li>
                <li>3: placholderMovie3</li>
              </ul>
            </section>
            <section id="buttonsContainer">
              <div className="previous">&#60;Previous</div>
              <div className="editDeleteNewContainer">
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
                <button id="new">New</button>
              </div>
              <div className="next">Next&#62;</div>
            </section>
          </section>
    </div>
  );
}

export default App;

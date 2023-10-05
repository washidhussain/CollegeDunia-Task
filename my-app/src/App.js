import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header>
        <div class="logo">
           
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Colleges</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
    <section class="search-bar">
            <h2>Search for Colleges and Courses</h2>
            <form>
                <input type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
        </section>
        <section class="featured-colleges">
            <h2>Featured Colleges</h2>
            <div class="college">
   
                <h3>College 1</h3>
                <p>Description of College 1.</p>
                <a href="#">Learn More</a>
            </div>
            <div class="college">

                <h3>College 2</h3>
                <p>Description of College 2.</p>
                <a href="#">Learn More</a>
            </div>

        </section>
        <section class="course-list">
            <h2>Popular Courses</h2>
            <ul>
                <li>
                    <h3>Course 1</h3>
                    <p>Description of Course 1.</p>
                    <span>Duration: 4 years</span>
                    <a href="#">Learn More</a>
                </li>
                <li>
                    <h3>Course 2</h3>
                    <p>Description of Course 2.</p>
                    <span>Duration: 3 years</span>
                    <a href="#">Learn More</a>
                </li>

            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 CollegeDunia. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;

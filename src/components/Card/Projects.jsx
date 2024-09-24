const Projects = () => {
    return (
      <>
        <div className="project">
          <h1 className="text-4xl my-16 text-white">Projects</h1>
          <section class="card-list ">
            <article class="card">
              <header class="card-header">
                <p>Dec 2022</p>
                <p className="text-left">
                Developed an interactive web-based Simon game where users follow a 
                sequence of colors and sounds, testing their memory.Managed the game’s state and sequence tracking using JavaScript arrays and functions.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">Simon</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://animated-biscochitos-873777.netlify.app/" target="_blank">Live</a>
                <a href="https://github.com/puneeeeeeet/Simon" target="_blank">Code</a>
              </div>
            </article>
            <article class="card">
              <header class="card-header">
                <p>Jan 2023</p>
                <p className="text-left">
                Built a simple clone of Spotify’s user interface that allows 
                users to play music and navigate through a basic playlist.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">
                    SpotifyClone
                  </div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://spotify-clone-phi-opal.vercel.app/" target="_blank">Live</a>
                <a href="https://github.com/puneeeeeeet/SpotifyClone" target="_blank">
                  Code
                </a>
              </div>
            </article>
  
            <article class="card">
              <header class="card-header">
                <p>Feb 2023</p>
                <p className="text-left">
                Developed a simple and intuitive to-do list web application for managing daily tasks with ease.
                Managed task data using JavaScript arrays and localStorage to ensure state persistence.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">ToDoList</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://github.com/puneeeeeeet/toDoList-v0.1" target="_blank">Code</a>
              </div>
            </article>
  
            <article class="card">
              <header class="card-header">
                <p>Dec 2023</p>
                <p className="text-left">
                Created a web application for restaurant management,
                 enabling users to book tables and order food online.
                 Implemented state management for efficient data handling across components.  
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">FoodRepublic</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://euphonious-mandazi-fd5383.netlify.app/" target="_blank">Live</a>
                <a href="https://github.com/puneeeeeeet/FoodRepublic" target="_blank">Code</a>
              </div>
            </article>
  
            <article class="card">
              <header class="card-header">
                <p>Jun 2024</p>
                <p className="text-left">
                Developed a full-stack web application to allow users to browse and rent houses in a specific area.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">TBM</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://tbm-frontend.vercel.app/" target="_blank">Live</a>
                <a href="https://github.com/puneeeeeeet/TBM" target="_blank">Code</a>
              </div>
            </article>
  
            <article class="card">
              <header class="card-header">
                <p>Aug 2024</p>
                <p className="text-left">
                Developing a web platform designed to sell psychological courses online, aimed at helping users improve mental health and personal development.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">BrainStreamliner</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://brain-streamliner.vercel.app/" target="_blank">Live</a>
                <a href="https://github.com/puneeeeeeet/BrainStreamliner" target="_blank">Code</a>
              </div>
            </article>
  
            {/* <article class="card">
              <header class="card-header">
                <p>2 February 2021</p>
                <p className="text-left">
                  A news application that retrieves data from the Hackernews API
                  and displays it in a beautiful dark interface.
                </p>
              </header>
  
              <div class="project-author ">
                <div class="author-name">
                  <div class="author-name-prefix text-white ">Hacker News</div>
                </div>
              </div>
  
              <div class="tags space-x-2">
                <a href="https://github.com/thelordzeus/HackerNews">Code</a>
              </div>
            </article> */}
          </section>
        </div>
      </>
    );
  };
  
  export default Projects;
import './App.css';

// const menu = document.getElementById('menu');
// const navMenu = document.querySelector('nav-menu');
// menu.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   navMenu.classList.toggle('active');
// });


// function mudar() {
//   // const menu = document.getElementById('menu');
//   const navMenu = document.querySelector('nav-menu');
  
//   if(navMenu.classList.toggle('active')) { 
//     console.log('deu certo')
//   } else {
//     console.log('nao deu certo');
//   }
// }
// mudar();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <a href='#/' className='logo'>Ruanny<span>Noleto</span></a>
          <ul id='menu' className='nav-menu'>
            <li><a href='#/'>inicio</a></li>
            <li><a href='#/'>sobre</a></li>
            <li><a href='#/'>conhecimento</a></li>
            <li><a href='#/'>experiencia</a></li>
            <li><a href='#/'>educação</a></li>
            <li><a href='#/'>contato</a></li>
          </ul>
          <div className='menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </nav>
      </header>
      <main>
        <section className='home'>
          <div className='home-text'>
            <h4 className='text-h4'>Welcome Developer</h4>
            <h1 className='text-h1'>lorem lorem</h1>
            <p>lorem
            </p>
          </div>
          <div className='img'>
            <img src='https://www.nationsrestaurants.com/wp-content/uploads/2022/06/hires_Nations_Hero_CheeseBurger-min.png' alt='img' />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

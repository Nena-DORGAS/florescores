import '../css/Home.css'
import girassol from '../img/girassol.jpg'
 
function ComponenteHome() {
    return (
        <>
        <div className='div-home'>
            <img src={girassol} alt=""  height={500} width={350}/>

            <div className='div-texto'>

        <h1>Sobre Nós</h1>

        <p>
        Lorem ipsum.
        </p>

        <p>
        Lorem ipsum
        </p>

        <p>
       Lorem ipsum
        </p>

        <p>
        Lorem ipsum
        </p>

        </div>
        </div>
        </>
  )
}

export default ComponenteHome;
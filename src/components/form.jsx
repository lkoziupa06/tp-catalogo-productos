import '../App.css'
export const Form = () =>{
  
  function refreshPage(){ 
    window.location.reload(); 
  }
    return(
      <div className="form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje"
              rows="5"
            />
          </div>
          <button type="button" onClick={refreshPage}> <span>Enviar</span> </button> 
        </form>
      </div>
    )
}
import '../css/Login.css'
 
function CadastroComponente() {
    return (

            <main className="login-conteudo">
        
              <h1>Cadastro do Produto:</h1>
        
              <form className="form">

               <div className="div-EmailSenha">
                 <label for="id_produto">ID Produto</label>
                  <input type="text" name="id_produto" id="id_produto" placeholder="ID"/>
               </div>

                <div className="div-EmailSenha">
                  <label value="text">Descrição: </label>
                  <input type="text" name="text" id="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label value="text">Tipo: </label>
                  <input type="text" name="text" id="text"/>
                </div>

                <div className="div-EmailSenha">
                  <label for="text">Data de Entrega</label>
                  <input type="text" name="text" id="text"/>
               </div>

                <div className="div-EmailSenha">
                  <label for="text">Quantidade em Estoque: </label>
                  <input type="text" name="text" id="text"/>
                </div>
        
                <button type="submit">Cadastrar</button>
              </form>
        
           
          </main>
  )
}

export default CadastroComponente;
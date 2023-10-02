//definido a classe de contatos
class contatos {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

//definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor() {
        // inicializa a lista da contatos vazia
        this.contatos = []
    }

    adicionarContato(contato) {
        //adicione um contato a lista de contatos
        this.contatos.push(contato);

    }

    exibirContatos() {
        //obtem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

        //limpa a lista de contatos 
        listaContatos.innerHTML = '';

        //para cada contato na lista de contatos, cria um novo elelmento 'li' e adiciona na lista de contatos
        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
            listaContatos.appendChild(li)
        }
    }
}
// cria um objeto da classe gerenciadorcontatos
const gerenciadorContatos = new GerenciadorContatos();

//cria os elementos necessarios 
const contatoForm = document.getElementById('contato-form')
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;

    // criando objeto da classe contato
    const contato = new contatos(nome, email, telefone);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = '';
    emailF.value = '';
    telefoneF.value = '';
});

//estamos adicionando um manipukador de eventos para o boatÃ£o mostrar contatos, que exibe a lista de contatos
mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', ()=>{
    listaContatos.style.display = 'none'
})

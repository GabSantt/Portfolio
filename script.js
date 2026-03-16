var agora = new Date()
var hora = agora.getHours()

var campoMensagem = document.getElementById('mensagem')

console.log(`Agora são ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
    campoMensagem.innerText += 'Bom dia!'
}else if (hora <= 18) {
    console.log('Boa tarde')
    campoMensagem.innerText += 'Boa tarde!'
} else {
    console.log('Boa noite')
    campoMensagem.innerText += 'Boa noite!'
}

new Glide('.glide', {
type: 'carousel',
perView: 3,
gap: 20,
autoplay: 3000,
breakpoints: {
    1024: {
        perView: 2
    },
    768: {
        perView: 1
    }
}
}).mount();

function loginAdmin(){
    let senha = prompt("Digite a senha");
    if(senha === "admin123"){
        document.body.classList.add("admin-mode");
    } 
    else if (senha !== null) {
        alert("Senha incorreta.");
    }

    }

function sairAdmin(){
    document.body.classList.remove("admin-mode");
    document.getElementById("perfil-texto").contentEditable = false;
    }

window.onload = function(){
    let textoSalvo = localStorage.getItem("perfilTexto");
    if(textoSalvo){
    document.getElementById("perfil-texto").innerHTML = textoSalvo;
    }
    }

function editarNome(){
    let elemento = document.getElementById("perfil-nome");
    let textoAtual = elemento.childNodes[0].textContent.trim();
    let novoNome = prompt("Editar nome:", textoAtual);
    if(novoNome){
    elemento.childNodes[0].textContent = novoNome + " ";
    }
    }

function editarTitulo(){
    let elemento = document.getElementById("perfil-titulo");
    let textoAtual = elemento.childNodes[0].textContent.trim();
    let novoTitulo = prompt("Editar título:", textoAtual);
    if(novoTitulo){
    elemento.childNodes[0].textContent = novoTitulo + " ";
    }
    }

function editarDescricao(){
    let elemento = document.getElementById("perfil-descricao");
    let textoAtual = elemento.innerHTML;
    let novoTexto = prompt("Editar descrição:", textoAtual);
    if(novoTexto){
    elemento.innerHTML = novoTexto;
    }
    }

function editarCurriculo(){
    let lista = document.querySelector("#curriculo ul")
    let itens = []
    lista.querySelectorAll("li span").forEach(li=>{
        itens.push(li.innerText)
    })
    let novo = prompt(
        "Edite a lista (uma linha por item):",
        itens.join("\n")
    )
    if(novo){
        lista.innerHTML = ""
        novo.split("\n").forEach(item=>{
            let li = document.createElement("li")
            li.innerHTML = `
            <span>${item}</span>
            <button class="admin-only" onclick="editarHabilidade(this)">✏️</button>
            <button class="admin-only" onclick="deletarItem(this,'li')">🗑</button>
            `
            lista.appendChild(li)
        })
    }
}

function adicionarCurriculo(){
    let lista = document.querySelector("#curriculo ul")
    let novoItem = prompt("Digite o novo item do currículo:")
    if(novoItem){
        let li = document.createElement("li")
        li.innerHTML = `
        <span>${novoItem}</span>
        <button class="admin-only" onclick="editarItem(this)">✏️</button>
        <button class="admin-only" onclick="deletarItem(this,'li')">🗑</button>
        `
        lista.appendChild(li)
    }
}

function editarHabilidade(botao){
    let li = botao.parentElement
    let span = li.querySelector("span")
    let novo = prompt("Editar habilidade:", span.innerText)
    if(novo){
        span.innerText = novo
    }
}

function adicionarHabilidade(listaId){
    let texto = prompt("Nova habilidade:")
    if(texto){
        let ul = document.getElementById(listaId)
        let li = document.createElement("li")
        li.innerHTML = `
        <span>${texto}</span>
        <button class="admin-only" onclick="editarHabilidade(this)">✏️</button>
        <button class="admin-only" onclick="deletarItem(this,'li')">🗑</button>
        `
        ul.appendChild(li)
    }
}

function editarDocumentos(){
    let elemento = document.getElementById("documentos-texto")
    let textoAtual = elemento.innerText
    let novoTexto = prompt("Editar documentos e trabalhos:", textoAtual)
    if(novoTexto){
        elemento.innerText = novoTexto
    }
}

function editarCertificacao(botao){
    let item = botao.closest(".item-certificacao")
    let texto = item.querySelector("span").innerText
    let novo = prompt("Editar certificação:", texto)
    if(novo){
    item.querySelector("span").innerText = novo
    }
}

function adicionarCertificacao(){
    let nome = prompt("Nome da certificação")
    let link = prompt("Link do certificado (pdf ou site)")
    if(nome){
    let lista = document.getElementById("lista-certificacoes")
    let p = document.createElement("p")
    p.className = "item-certificacao"
    p.innerHTML = `
    <span>${nome}</span>
    <a href="${link}" target="_blank">
    <img src="images/raccoon.png" class="icone-certificado">
    Confira aqui!
    </a>
    <button class="admin-only" onclick="editarCertificacao(this)">✏️</button>
    <button class="admin-only" onclick="deletarItem(this,'.item-certificacao')">🗑</button>
    `
    lista.appendChild(p)
    }

}

function editarContatos(){
    let email = document.querySelector('#contato a[href^="mailto"]')
    let tel = document.querySelector('#contato a[href^="tel"]')
    let linkedin = document.querySelector('#contato a[href*="linkedin"]')
    let github = document.querySelector('#contato a[href*="github"]')
    let novoEmail = prompt("Editar email:", email.href.replace("mailto:",""))
    if(novoEmail){
        email.href = "mailto:"+novoEmail
    }
    let novoTel = prompt("Editar telefone:", tel.href.replace("tel:",""))
    if(novoTel){
        tel.href = "tel:"+novoTel
    }
    let novoLinkedin = prompt("Editar LinkedIn:", linkedin.href)
    if(novoLinkedin){
        linkedin.href = novoLinkedin
    }
    let novoGithub = prompt("Editar GitHub:", github.href)
    if(novoGithub){
        github.href = novoGithub
    }
}

function deletarItem(botao,tipo){
    let item = botao.closest(tipo)
    if(confirm("Deseja excluir?")){
        item.remove()
    }
}
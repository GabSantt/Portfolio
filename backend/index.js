const express = require('express')
const app = express()
app.use(express.json())

// ========== DADOS INICIAIS ==========

let projetos = [
  { id: 1, nome: 'API Censo 2022', descricao: 'API com dados do censo', link: 'https://api-censo-2022.vercel.app' },
  { id: 2, nome: 'Site Cosplay',   descricao: 'Site informativo sobre cosplay', link: 'https://desafio-2-site.vercel.app' },
  { id: 3, nome: 'Desafio de Site', descricao: 'Site com layout responsivo', link: 'https://desafio-de-site.vercel.app' }
]

let habilidades = [
  { id: 1, nome: 'HTML5' },
  { id: 2, nome: 'CSS3' },
  { id: 3, nome: 'JavaScript' },
  { id: 4, nome: 'Node.js' }
]

let certificacoes = [
  { id: 1, nome: 'Desenvolvimento Web Básico', link: 'https://exemplo.com/cert1' },
  { id: 2, nome: 'Lógica de Programação',      link: 'https://exemplo.com/cert2' }
]

let nextId = { projetos: 4, habilidades: 5, certificacoes: 3 }

// ========== ROTAS: PROJETOS ==========

// GET todos os projetos
app.get('/projetos', (req, res) => {
  res.json(projetos)
})

// GET projeto por ID
app.get('/projetos/:id', (req, res) => {
  const projeto = projetos.find(p => p.id === parseInt(req.params.id))
  if (!projeto) return res.status(404).json({ erro: 'Projeto não encontrado' })
  res.json(projeto)
})

// POST criar projeto
app.post('/projetos', (req, res) => {
  const { nome, descricao, link } = req.body
  if (!nome || !descricao) return res.status(400).json({ erro: 'nome e descricao são obrigatórios' })
  const novo = { id: nextId.projetos++, nome, descricao, link: link || '' }
  projetos.push(novo)
  res.status(201).json(novo)
})

// PUT atualizar projeto
app.put('/projetos/:id', (req, res) => {
  const idx = projetos.findIndex(p => p.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Projeto não encontrado' })
  const { nome, descricao, link } = req.body
  projetos[idx] = { id: projetos[idx].id, nome, descricao, link: link || '' }
  res.json(projetos[idx])
})

// DELETE remover projeto
app.delete('/projetos/:id', (req, res) => {
  const idx = projetos.findIndex(p => p.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Projeto não encontrado' })
  projetos.splice(idx, 1)
  res.json({ mensagem: 'Projeto removido com sucesso' })
})

// ========== ROTAS: HABILIDADES ==========

app.get('/habilidades', (req, res) => res.json(habilidades))

app.get('/habilidades/:id', (req, res) => {
  const h = habilidades.find(h => h.id === parseInt(req.params.id))
  if (!h) return res.status(404).json({ erro: 'Habilidade não encontrada' })
  res.json(h)
})

app.post('/habilidades', (req, res) => {
  const { nome } = req.body
  if (!nome) return res.status(400).json({ erro: 'nome é obrigatório' })
  const nova = { id: nextId.habilidades++, nome }
  habilidades.push(nova)
  res.status(201).json(nova)
})

app.put('/habilidades/:id', (req, res) => {
  const idx = habilidades.findIndex(h => h.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Habilidade não encontrada' })
  habilidades[idx] = { id: habilidades[idx].id, nome: req.body.nome }
  res.json(habilidades[idx])
})

app.delete('/habilidades/:id', (req, res) => {
  const idx = habilidades.findIndex(h => h.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Habilidade não encontrada' })
  habilidades.splice(idx, 1)
  res.json({ mensagem: 'Habilidade removida com sucesso' })
})

// ========== ROTAS: CERTIFICAÇÕES ==========

app.get('/certificacoes', (req, res) => res.json(certificacoes))

app.get('/certificacoes/:id', (req, res) => {
  const c = certificacoes.find(c => c.id === parseInt(req.params.id))
  if (!c) return res.status(404).json({ erro: 'Certificação não encontrada' })
  res.json(c)
})

app.post('/certificacoes', (req, res) => {
  const { nome, link } = req.body
  if (!nome) return res.status(400).json({ erro: 'nome é obrigatório' })
  const nova = { id: nextId.certificacoes++, nome, link: link || '' }
  certificacoes.push(nova)
  res.status(201).json(nova)
})

app.put('/certificacoes/:id', (req, res) => {
  const idx = certificacoes.findIndex(c => c.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Certificação não encontrada' })
  certificacoes[idx] = { id: certificacoes[idx].id, nome: req.body.nome, link: req.body.link || '' }
  res.json(certificacoes[idx])
})

app.delete('/certificacoes/:id', (req, res) => {
  const idx = certificacoes.findIndex(c => c.id === parseInt(req.params.id))
  if (idx === -1) return res.status(404).json({ erro: 'Certificação não encontrada' })
  certificacoes.splice(idx, 1)
  res.json({ mensagem: 'Certificação removida com sucesso' })
})

// ========== START ==========

const PORT = 3000
app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`)
  console.log('\nRotas disponíveis:')
  console.log('  GET    /projetos')
  console.log('  GET    /projetos/:id')
  console.log('  POST   /projetos')
  console.log('  PUT    /projetos/:id')
  console.log('  DELETE /projetos/:id')
  console.log('')
  console.log('  GET    /habilidades')
  console.log('  GET    /habilidades/:id')
  console.log('  POST   /habilidades')
  console.log('  PUT    /habilidades/:id')
  console.log('  DELETE /habilidades/:id')
  console.log('')
  console.log('  GET    /certificacoes')
  console.log('  GET    /certificacoes/:id')
  console.log('  POST   /certificacoes')
  console.log('  PUT    /certificacoes/:id')
  console.log('  DELETE /certificacoes/:id')
})

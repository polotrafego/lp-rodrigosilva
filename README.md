# Rodrigo Silva — Landing Page

Landing page de captura contínua de leads qualificados para **Rodrigo Silva**, palestrante Exclusivo **Polo Palestrantes**.

Site **100% estático** (HTML + CSS + JS puro, sem build), pronto para deploy na **Vercel** via **GitHub**.

## 📁 Estrutura

```
rodrigo-silva-lp/
├─ index.html            # página única (a LP)
├─ css/
│  └─ styles.css         # design system + estilos
├─ js/
│  └─ main.js            # header glass, menu, scroll reveal, form (placeholder)
├─ assets/
│  ├─ fonts/             # Articulat CF (corpo) + Crimson Pro (títulos, fallback)
│  └─ img/               # fotos, logos Polo
├─ server.js             # servidor estático só para preview LOCAL (não vai ao deploy)
├─ vercel.json           # config de deploy estático (clean URLs + cache)
├─ package.json          # scripts de dev
├─ .gitignore
└─ .vercelignore
```

## 💻 Rodar localmente

Requer Node.js instalado.

```bash
npm run dev
```

Depois acesse `http://localhost:5173`. (Alternativa sem Node: abrir o `index.html` direto no navegador.)

## 🚀 Deploy — GitHub + Vercel

### 1. Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: landing page Rodrigo Silva"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/rodrigo-silva-lp.git
git push -u origin main
```

### 2. Conectar na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório do GitHub.
2. **Framework Preset:** `Other` · **Build Command:** vazio · **Output Directory:** `.` (raiz).
3. Clique em **Deploy**. A cada `git push` na branch `main`, a Vercel publica automaticamente.

## ⚙️ Pendências (placeholders no código)

- [ ] **Fonte Zenitha Classic** (títulos): adicionar o arquivo em `assets/fonts/zenitha/` e descomentar o `@font-face` em `css/styles.css`. Hoje usa **Crimson Pro** como fallback.
- [ ] **Formulário**: envio real não configurado. Conectar em `js/main.js` (marcado como `PLACEHOLDER`) a um endpoint/CRM/webhook.
- [ ] **Vídeos**: incluir os links (YouTube/Vimeo) na seção "Na prática".
- [ ] **Logos** de empresas/eventos e **depoimentos** reais na seção de provas sociais.

## 🎨 Identidade

- **Fontes:** Zenitha Classic (títulos) + Articulat CF (corpo).
- **Paleta:** navy `#1E3A57`, dourado `#D69B3F`, creme `#FBF7EF`.
- Header em glass fixo e footer no padrão de assinatura da marca **Polo Palestrantes**.

---

© 2026 Polo Palestrantes · Curadores de Palestras.

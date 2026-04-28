# ⚡ Quick Start - Executar no Navegador

## 🎯 Passos Rápidos (3 minutos)

### 1️⃣ Abrir Terminal
Abra o terminal na pasta do projeto (onde está o arquivo `package.json`)

**Windows:**
- Shift + Botão Direito na pasta → "Abrir janela do PowerShell aqui"
- Ou use o terminal integrado do VS Code (Ctrl + `)

**Mac/Linux:**
- Botão direito na pasta → "Abrir no Terminal"
- Ou use o terminal integrado do VS Code (Cmd + `)

### 2️⃣ Instalar Dependências
```bash
npm install
npm install motion
```

⏱️ Aguarde 1-2 minutos enquanto instala...

**Nota:** O `motion` é a versão mais recente do Framer Motion com melhor performance e novos recursos!

### 3️⃣ Executar o Projeto
```bash
npm run dev
```

### 4️⃣ Abrir no Navegador
O Vite abrirá automaticamente, ou acesse:
```
http://localhost:5173
```

## ✅ Pronto!

Você verá a landing page rodando com:
- ✨ Animações suaves com Motion
- 🎨 Efeitos glassmorphism modernos
- 🌟 Background animado com partículas
- 📱 Design 100% responsivo
- 🚀 Performance otimizada

## 🎨 Ver Demonstração dos Componentes

Para ver todos os componentes novos em ação, você pode criar uma rota de demonstração.

### Opção 1: Adicionar rota manualmente

1. Edite `src/main.tsx`:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ComponentsDemo from './pages/ComponentsDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo" element={<ComponentsDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```

2. Acesse: `http://localhost:5173/demo`

### Opção 2: Testar componentes individualmente

Edite temporariamente `src/App.tsx` para importar e testar componentes:

```tsx
import GlassCard from './components/GlassCard';
import GradientText from './components/GradientText';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <AnimatedBackground />
      
      <div className="relative z-10 p-20">
        <h1 className="text-5xl font-bold mb-8">
          <GradientText gradient="from-blue-400 via-purple-500 to-pink-500">
            Teste dos Componentes
          </GradientText>
        </h1>
        
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold mb-4">Glass Card</h2>
          <p className="text-white/60">
            Este é um card com efeito glassmorphism!
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
```

## 🔧 Comandos Úteis

```bash
# Parar o servidor
Ctrl + C (no terminal)

# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm install motion

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎯 Melhorias Aplicadas

### Hero Section
- ✅ Background animado com partículas
- ✅ Texto com gradiente dourado animado
- ✅ Badge com ícone de brilho pulsante
- ✅ Animações suaves com Motion
- ✅ Efeitos de hover melhorados

### Services Section
- ✅ Cards com efeito glass profissional
- ✅ Animação de flutuação ao scroll
- ✅ Hover effects com elevação 3D
- ✅ Gradiente animado no título
- ✅ Ícones com animação

### Testimonials Section
- ✅ Cards glassmorphism premium
- ✅ Animações escalonadas suaves
- ✅ Design mais moderno e clean
- ✅ Gradiente no título
- ✅ Efeitos de hover elegantes

## 📱 Testar Responsividade

### No Navegador:
1. Pressione `F12` para abrir DevTools
2. Clique no ícone de dispositivo móvel (ou `Ctrl + Shift + M`)
3. Teste diferentes tamanhos:
   - iPhone 12 Pro (390x844)
   - iPad (768x1024)
   - Desktop (1920x1080)

### Ou redimensione a janela do navegador

## 🎨 Personalizar

### Mudar Cores
Edite `src/components/Hero.tsx`, `Services.tsx`, etc:

```tsx
// De:
<GradientText gradient="from-[#D4AF37] via-[#FFD700] to-[#D4AF37]">

// Para:
<GradientText gradient="from-blue-400 via-purple-500 to-pink-500">
```

### Mudar Conteúdo
Edite `src/lib/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: "Seu Nome Aqui",
  oab: "OAB/XX 123456",
  yearsExperience: 15,
  // ...
};
```

### Adicionar Novos Componentes
Use os componentes criados:

```tsx
import GlassCard from './components/GlassCard';
import FloatingCard from './components/FloatingCard';
import GradientText from './components/GradientText';
import SparklesText from './components/SparklesText';

// Exemplo de uso
<FloatingCard delay={0.2}>
  <GlassCard hover={true}>
    <div className="p-6">
      <GradientText gradient="from-blue-400 to-purple-500">
        Título com Gradiente
      </GradientText>
      <p>Conteúdo do card</p>
    </div>
  </GlassCard>
</FloatingCard>
```

## 🐛 Problemas Comuns

### "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org/
- Reinicie o terminal após instalar

### "Porta 5173 já está em uso"
```bash
# Opção 1: Matar o processo
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5173 | xargs kill -9

# Opção 2: Mudar a porta no vite.config.ts
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Página em branco
1. Verifique o console do navegador (F12)
2. Verifique o terminal por erros
3. Tente limpar e reinstalar:
```bash
rm -rf node_modules package-lock.json
npm install
npm install motion
```

### Erro "Cannot find module 'motion'"
```bash
npm install motion
```

### Animações não funcionam
Verifique se o Motion está instalado:
```bash
npm list motion
# Se não aparecer, instale:
npm install motion
```

## 📚 Próximos Passos

1. ✅ Executar `npm install && npm install motion`
2. ✅ Executar `npm run dev`
3. ✅ Ver a landing page funcionando
4. 🎨 Personalizar cores e conteúdo
5. 📸 Adicionar suas imagens em `public/uploads/`
6. 🧪 Testar em diferentes dispositivos
7. 🚀 Fazer deploy (Vercel, Netlify, etc)

## 🎉 Sucesso!

Se você vê a landing page rodando com:
- ✨ Animações suaves
- 🎨 Efeitos glassmorphism
- 🌟 Background animado
- 📱 Design responsivo

**Está tudo funcionando perfeitamente!** 🎊

## 🚀 Deploy Rápido

### Vercel (Recomendado - 2 minutos)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Faça build: `npm run build`
2. Arraste a pasta `dist/` para netlify.com/drop

---

**Dúvidas?** Consulte:
- [SETUP-GUIDE.md](./SETUP-GUIDE.md) - Guia completo
- [README-UPDATED.md](./README-UPDATED.md) - Documentação detalhada
- [README-21st-components.md](./README-21st-components.md) - Componentes 21st.dev

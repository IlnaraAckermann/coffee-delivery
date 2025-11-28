<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-7.1.9-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-4.1.14-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
</div>

# ☕ Coffee Delivery

> Projeto de estudos para prática de React, gerenciamento de estado e PWA

Aplicação web de delivery de café desenvolvida como projeto de estudos, baseado no desafio Coffee Delivery da Rocketseat. O projeto implementa um fluxo completo de e-commerce, desde a listagem de produtos até a finalização do pedido.

## 🎨 Design

O layout foi baseado no design disponível no Figma:

- [Coffee Delivery - Figma](https://www.figma.com/design/CZwZZcsHT3qUH2cg4j5Lc0/Coffee-Delivery-%E2%80%A2-Desafio-React--Copy)

## ✨ Funcionalidades

- 📱 **Progressive Web App (PWA)** - Instalável e funciona offline
- 🛒 **Carrinho de Compras** - Adicione, remova e ajuste quantidades
- 💳 **Checkout Completo** - Formulário de endereço e seleção de pagamento
- 💾 **Persistência de Dados** - Estado do carrinho salvo no localStorage
- 🎭 **Mock Service Worker** - Simulação de API em desenvolvimento
- 🎨 **Interface Responsiva** - Layout adaptável para diferentes telas
- ⚡ **Performance Otimizada** - Build otimizado com Vite e React 19

## 🚀 Tecnologias Implementadas

### Core

- **React 19.2.0** - Biblioteca UI com features mais recentes
- **TypeScript** - Tipagem estática e segurança de tipos
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM** - Roteamento e navegação

### Gerenciamento de Estado

- **Zustand** - Gerenciamento de estado global simples e performático
- **Persistência** - Middleware de localStorage para persistir o carrinho

### UI/UX

- **Tailwind CSS v4** - Framework CSS utility-first
- **Tailwind Variants** - Variantes de componentes type-safe
- **Phosphor Icons** - Biblioteca de ícones moderna

### Formulários

- **React Hook Form** - Gerenciamento de formulários performático

### Desenvolvimento

- **MSW (Mock Service Worker)** - Interceptação de requisições HTTP
- **ESLint** - Linting e padronização de código
- **PWA Plugin** - Transformação em Progressive Web App

### Data Fetching

- **TanStack Query (React Query)** - Cache e sincronização de dados
- **React Query DevTools** - Ferramentas de debug

## 📋 Pré-requisitos

- Node.js 18+
- npm ou pnpm

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/coffee-delivery.git

# Entre no diretório
cd coffee-delivery

# Instale as dependências
npm install
```

## 🎮 Como Usar

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento com MSW ativo
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build

```bash
# Gera a build de produção
npm run build
```

### Preview

```bash
# Preview da build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── Button/
│   ├── Cart/
│   ├── Header/
│   ├── Input/
│   └── ...
├── contexts/        # Contextos e stores Zustand
│   └── CartContext.tsx
├── layouts/         # Layouts de página
├── mocks/          # Configuração MSW
│   ├── handlers.ts  # Handlers de API mockada
│   ├── browser.ts   # Setup MSW para browser
│   └── jsons/      # Dados mockados
├── pages/          # Páginas da aplicação
│   ├── Home/
│   └── Checkout/
├── types/          # Definições TypeScript
└── Router.tsx      # Configuração de rotas
```

## 🎯 Destaques Técnicos

### 1. Mock Service Worker (MSW)

Implementação de API mockada que intercepta requisições HTTP no nível do browser:

```typescript
// mocks/handlers.ts
export const handlers = [
	http.get(`${baseUrl}/coffees`, () => {
		return HttpResponse.json(coffeeList);
	}),
];
```

### 2. Zustand Store com Persistência

Gerenciamento de estado do carrinho com persistência automática:

```typescript
export const useCoffeeOrders = create<CoffeeOrdersState>()(
	persist(
		(set, get) => ({
			coffeeOrders: [],
			addOrUpdateCoffeeOrder: (coffee, quantity) => {
				/* ... */
			},
			// ...
		}),
		{
			name: "coffee-orders",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
```

### 3. PWA Configuration

Configuração completa de PWA com cache e manifest:

```typescript
VitePWA({
	registerType: "autoUpdate",
	manifest: {
		name: "Coffee Delivery",
		theme_color: "#DBAC2C",
		display: "standalone",
		// ...
	},
});
```

### 4. Componentes com Tailwind Variants

Componentes type-safe com variantes estilizadas:

```typescript
const button = tv({
	base: "rounded-md transition-colors",
	variants: {
		color: {
			yellow: "bg-yellow text-white",
			purple: "bg-purple text-white",
		},
	},
});
```

## 🛠️ Scripts Disponíveis

| Script            | Descrição                          |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Gera build de produção             |
| `npm run preview` | Preview da build                   |
| `npm run lint`    | Executa o linter                   |

## 📝 Aprendizados

Este projeto foi desenvolvido para estudar e praticar:

- ✅ Gerenciamento de estado com Zustand
- ✅ Implementação de PWA
- ✅ Mock de APIs com MSW
- ✅ Formulários com React Hook Form
- ✅ Roteamento com React Router
- ✅ Tailwind CSS v4
- ✅ TypeScript avançado
- ✅ Patterns de componentes React
- ✅ Persistência de dados no browser

## 🤝 Contribuindo

Este é um projeto pessoal de estudos, mas sugestões e feedbacks são sempre bem-vindos!

## 📄 Licença

Este projeto foi desenvolvido apenas para fins educacionais.

## 👨‍💻 Autor

Desenvolvido com ☕ durante os estudos de React

---

<div align="center">
  <p>Feito com React e muito café ☕</p>
</div>

# 🚀 CorePages

**CorePages** é um sistema dinâmico e flexível para a criação e gerenciamento de páginas web (landing pages, portfólios, blogs). Construído com **Next.js (App Router)** e **Tailwind CSS**, o projeto foca em uma arquitetura limpa e escalável, separando rigorosamente as regras de domínio, layout e apresentação.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** Next.js 13+ (App Router)
* **Estilização:** Tailwind CSS
* **Linguagem:** TypeScript
* **Design Pattern:** Arquitetura desacoplada (Domain, Core, UI, Infrastructure)

---

## 📌 Funcionalidades e Histórico de Desenvolvimento

O sistema foi desenvolvido de forma progressiva, garantindo escalabilidade desde a fundação até a interface final:

### 1. Fundação e Domínio
* **Setup Inicial:** Configuração do ambiente com `create-next-app` e setup do Tailwind CSS.
* **Camada de Domínio (`domain`):** Criação de propriedades (`props`) rigorosas para ditar as regras visuais de `layout`, `page` e `components`, mantendo a consistência visual em todo o sistema.

### 2. Estrutura de Layout e Core
* **Componentes de Layout:** Criação de componentes base modulares (`Header`, `Sidebar`, `Footer`) que consomem as regras definidas no domínio.
* **App Shell (`core`):** Implementação da casca principal da aplicação (`app-shell.tsx`), responsável por encapsular as páginas criadas pelos usuários dentro da interface padrão do sistema.
* **Root Layout:** Configuração do `layout.tsx` global do Next.js.

### 3. Sistema de UI Customizado
* **Biblioteca de Componentes (`ui`):** Criação de componentes "burros" (Dumb Components) e altamente reutilizáveis, incluindo:
  * `Button` (com variantes de estilo e tamanho)
  * `Input` (padronizado para formulários)
  * `Card` (para exibição em grade de dados)

### 4. Roteamento Dinâmico (App Router)
Implementação do fluxo completo de navegação do usuário:
* **`/` (Landing Page):** Tela de login e cadastro com opção de acesso como visitante.
* **`/dashboard`:** Painel de controle listando os projetos criadas.
* **`/[slug]`:** Geração de rotas dinâmicas para renderização em tempo real das páginas customizadas.
* **Navegação:** Implementação de botões inteligentes para interligar todo o fluxo da plataforma.

### 5. Persistência de Dados (Infraestrutura)
* **Banco de Dados Mockado:** Estruturação da pasta `persistence` com a criação de um arquivo `db.json` e arquivos de mock (`list-pages-mocks.ts`) para simular o armazenamento e consumo de dados de usuários e suas respectivas páginas configuradas.

---

## 📂 Arquitetura da Oficina (Estrutura de Pastas)

O projeto está organizado na seguinte hierarquia de diretórios:

```text
/ (Raiz do Projeto)
├── public/              – A Vitrine: Recursos estáticos acessados diretamente (imagens, mídias).
│
└── src/                 – A Oficina: O ambiente de trabalho principal de lógica e montagem.
    ├── app/             – O Mapa de Rotas: Caminhos de navegação e baseplates (Next.js).
    ├── assets/          – O Almoxarifado: Definições estéticas, temas e tokens.
    │   └── styles/      – A caixa de cores (Tailwind e globais).
    ├── core/            – O Coração da Oficina: Fiação global e casca principal (AppShell).
    ├── components/      – O Estoque de Peças: Nossos blocos de LEGO isolados.
    │   ├── layout/      – Peças de moldura (topo, rodapé, menu lateral).
    │   ├── ui/          – Tijolos universais e "burros" (botões, inputs, cards).
    │   └── features/    – Kits temáticos completos e componentes de nicho.
    ├── infrastructure/  – A Casa de Máquinas: Comunicação externa (APIs, Banco de Dados).
    │   └── persistence/ – A fiação de dados provisória (mocks) e integrações futuras.
    └── shared/          – A Biblioteca Comum: O manual compartilhado da oficina.
        ├── types/       – A gaveta de moldes tipados.
        │   └── domain/  – Contratos e interfaces que ditam o formato da informação.
        └── data/        – O depósito de valores estáticos.
            └── mocks/   – Barris de dados simulados que alimentam a aplicação.
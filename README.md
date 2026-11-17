# 💻 Código Comentado | Landing Page Acadêmica

### Entenda o código de verdade.

Landing page desenvolvida para apresentar a proposta do **Código Comentado (CC)**: transformar a experiência de aprender programação em algo mais compreensível, explorando não apenas o que cada linha de código faz, mas também **por que ela existe e como contribui para o funcionamento do programa**.

Este projeto foi desenvolvido como parte do módulo executivo **Digital Growth & AI-Driven Marketing**, do MBA em Engenharia de Software da Faculdade Impacta.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)

---

## 🌐 Acesse o projeto

| Plataforma | Descrição | Link |
|---|---|---|
| 🚀 Landing Page | Demonstração acadêmica interativa | [Acessar](https://ohlm1.github.io/cc-landing-mba-impacta/) |
| 🌎 Código Comentado | Site institucional do projeto original | [Conhecer](https://codigocomentado.com.br) |
| 💻 GitHub Oficial | Organização e repositórios do Código Comentado | [Explorar](https://github.com/Codigo-Comentado) |

> **Nota:** esta landing page é um protótipo acadêmico independente. Ela não substitui o site institucional do Código Comentado nem representa o lançamento comercial de novas funcionalidades.

## 🎯 Sobre o projeto

O **Código Comentado** nasce da ideia de que aprender programação envolve muito mais do que reproduzir exemplos ou executar comandos corretamente.

Durante o aprendizado, é comum conseguir fazer um código funcionar e, ainda assim, encontrar dificuldades quando surge a necessidade de modificar uma condição, adaptar uma estrutura ou resolver um problema diferente.

A proposta do CC é aproximar a explicação teórica da prática, incentivando três etapas fundamentais:

**01. Observe** — Identifique o objetivo do código e seu comportamento.

**02. Entenda** — Compreenda o papel de cada instrução e sua relação com as demais.

**03. Adapte** — Modifique elementos do programa e observe como a lógica influencia o resultado.

A landing page demonstra essa abordagem por meio de um exemplo interativo de Python.

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🧩 Código comentado | Explicações associadas às instruções de um exemplo Python |
| 🖱️ Interação por linha | Selecione instruções para compreender suas funções |
| 🔄 Adaptação da lógica | Modifique o intervalo de uma repetição e observe o resultado |
| 📊 Execução ilustrada | Acompanhe os valores acumulados ao longo do exemplo |
| 📱 Design responsivo | Interface adaptada para computadores, tablets e celulares |
| ♿ Acessibilidade | Navegação por teclado, indicadores de foco e recursos semânticos |
| 🎨 Identidade visual | Interface baseada nas cores, na tipografia e no conceito do Código Comentado |

A demonstração é implementada em JavaScript e representa conceitualmente o comportamento do código Python. Não se trata de um interpretador Python nem de um editor de código livre.

## 🧠 Demonstração prática

A landing page apresenta um exemplo de soma acumulada:

```python
total = 0

for numero in range(1, 4):
    total += numero

print(total)
```

**Resultado inicial:**

```text
6
```

O visitante pode selecionar as instruções para descobrir o que cada uma faz e por que é necessária.

Em seguida, é apresentado um desafio simples: **o que acontece se alterarmos o limite da repetição?**

| Código | Números percorridos | Resultado |
|---|---|---|
| `range(1, 4)` | 1, 2 e 3 | 6 |
| `range(1, 6)` | 1, 2, 3, 4 e 5 | 15 |

Essa interação ilustra o conceito central da proposta: **compreender o funcionamento de um código facilita o raciocínio necessário para adaptá-lo a novos desafios.**

## 🛠️ Tecnologias utilizadas

O projeto utiliza uma arquitetura estática, sem necessidade de backend, banco de dados ou serviços pagos.

| Tecnologia | Aplicação |
|---|---|
| **HTML5** | Estrutura semântica e organização do conteúdo |
| **CSS3** | Estilização, responsividade, transições e identidade visual |
| **JavaScript** | Interações, seleção de instruções e simulação da soma |
| **Inter** | Tipografia principal, carregada localmente |
| **GitHub Pages** | Hospedagem pública e gratuita da landing page |

A implementação prioriza simplicidade, manutenção e compatibilidade com navegadores modernos.

## 🎨 Identidade visual

A landing page segue a identidade do Código Comentado, com uma estética tecnológica, interfaces inspiradas em editores de código e destaque para a relação entre instrução e explicação.

| Cor | Código | Aplicação |
|---|---|---|
| Azul principal | `#2563EB` | Seleções e destaques |
| Verde | `#10B981` | CTA, resultados e elementos de ação |
| Fundo escuro | `#1E2937` | Painéis e superfícies |
| Branco | `#FFFFFF` | Tipografia de alto contraste |
| Roxo secundário | `#7C3AED` | Detalhes e elementos de sintaxe |

O objetivo visual é manter a experiência clara, agradável e coerente com a identidade da marca.

## 🚀 Como executar localmente

**1. Clone o repositório:**

```bash
git clone https://github.com/ohlm1/cc-landing-mba-impacta.git
```

**2. Entre na pasta do projeto:**

```bash
cd cc-landing-mba-impacta
```

**3. Inicie um servidor local:**

```bash
python -m http.server 8000
```

**4. Abra no navegador:**

```text
http://localhost:8000
```

Também é possível abrir diretamente o arquivo `index.html`, pois não há etapa de instalação de pacotes ou compilação.

## 📁 Estrutura do projeto

```text
cc-landing-mba-impacta/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── logo.png
│   ├── simbolo.png
│   └── fonts/
├── docs/
├── DESIGN.md
├── PRODUCT.md
└── README.md
```

Os arquivos estão organizados para facilitar manutenção, documentação e publicação no GitHub Pages.

## 🎓 Contexto acadêmico

Este projeto integra uma sequência de atividades desenvolvidas no módulo **Digital Growth & AI-Driven Marketing**, do MBA em Engenharia de Software da **Faculdade Impacta**, sob orientação do professor **Juliano Motta**.

A sequência conecta três etapas do processo de marketing digital:

| Etapa | Objetivo |
|---|---|
| **Atividade 1 — Persona** | Identificar hipóteses sobre o público, suas dificuldades e necessidades |
| **Atividade 2 — Meta Ads** | Criar uma comunicação persuasiva alinhada à persona |
| **Atividade 3 — Landing Page** | Construir uma experiência coerente com a promessa do anúncio |

O desenvolvimento desta landing page buscou manter a continuidade entre a necessidade identificada na persona, a mensagem do anúncio e a experiência oferecida ao visitante.

A atividade também permitiu aplicar conceitos de experiência do usuário (UX), comunicação orientada à conversão (CRO), desenvolvimento front-end e acessibilidade.

## 🔍 Limitações e transparência

O Código Comentado é um projeto em desenvolvimento, e esta landing page foi criada exclusivamente como demonstração acadêmica.

- A persona utilizada é uma hipótese exploratória, não um perfil validado por pesquisa de campo.
- A interação de código é uma demonstração conceitual implementada em JavaScript.
- As quantidades apresentadas referem-se aos elementos do exemplo, não a resultados educacionais ou indicadores comerciais.
- A página não coleta dados pessoais, não realiza vendas e não oferece cadastro.
- Recursos demonstrados aqui não devem ser interpretados como funcionalidades já disponíveis na plataforma oficial.

---

## 🔗 Conheça o Código Comentado

O projeto acadêmico apresenta uma pequena demonstração de uma proposta mais ampla: **aprender programação compreendendo a lógica, praticando e compartilhando conhecimento.**

Para conhecer a iniciativa original:

🌐 **Site oficial:** https://codigocomentado.com.br

💻 **Organização no GitHub:** https://github.com/Codigo-Comentado

---

**Código Comentado — Aprender Programação Ensinando Programação.**

*Projeto acadêmico independente · Faculdade Impacta · 2026*

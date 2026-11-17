---
name: Código Comentado
description: Programação explicada, linha por linha, em uma landing acadêmica independente.
colors:
  bg: "#0b1220"
  bg-deep: "#080f1b"
  panel: "#1e2937"
  blue: "#2563eb"
  green: "#10b981"
  violet: "#7c3aed"
  text: "#fff"
  soft: "#f1f5f9"
  muted: "#aebdd0"
  line: "#29384b"
  editor: "#0b1422"
  editor-top: "#142033"
  focus: "#91bcff"
  cta-hover: "#25d39b"
  cta-text: "#05251d"
  syntax-keyword: "#b69dff"
  syntax-number: "#64e9b7"
  syntax-function: "#84baff"
  syntax-operator: "#d3e1f5"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(44px, 4.5vw, 60px)"
    fontWeight: 680
    lineHeight: 1.04
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 46px)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.035em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  code:
    fontFamily: "Consolas, 'Liberation Mono', monospace"
    fontSize: ".95em"
rounded:
  panel: "14px"
  execution: "12px"
  explanation: "10px"
  control: "12px"
  step: "7px"
  tag: "6px"
spacing:
  section: "120px"
  section-tablet: "120px"
  section-mobile: "60px"
  demo-gap: "32px"
  hero-gap: "66px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cta-text}"
    rounded: "{rounded.control}"
    padding: "15px 24px"
  button-primary-hover:
    backgroundColor: "{colors.cta-hover}"
  editor:
    backgroundColor: "{colors.editor}"
    rounded: "{rounded.panel}"
  explanation:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "32px 30px"
---

# Design System: Código Comentado

## Overview

O contrato visual construído é a compreensão visível: uma instrução encontra sua explicação. Esta formulação descreve o comentário no início do `body`; não introduz uma nova identidade ou metáfora de marca. A landing usa a identidade existente do CC, composição prescrita no briefing e voz didática, direta e acolhedora.

O editor e a trilha de execução são a evidência central. A densidade alterna espaços amplos para a promessa e blocos técnicos compactos para explorar o exemplo. Este documento registra o código existente, sem redesenhar a interface. Fontes de verdade: `styles.css`, `index.html`, `script.js`, `PRODUCT.md` e `docs/direcao.md`.

Características: fundo escuro; tipografia Inter; código monoespaçado; azul para seleção; verde para ação e resultado; roxo para sintaxe; explicação associada à instrução.

## Colors

Os tokens acima preservam os valores CSS. Azul #2563EB, verde #10B981, roxo #7C3AED e painel #1E2937 pertencem à paleta de identidade; o canvas efetivamente construído é #0B1220, com rodapé #080F1B.

- Primária: verde nas CTAs; texto #05251D; hover #25D39B. Não transformar toda a interface em botões verdes.
- Secundária: azul na borda da linha ativa, setas e ícones; realce translúcido #2563eb20 na seleção.
- Terciária: roxo na identidade e suas variantes claras na sintaxe e ícones; palavras-chave usam #B69DFF para legibilidade no escuro.
- Neutros: branco para títulos, #F1F5F9 para texto forte, #AEBDD0 para corpo e #29384B para divisórias. Superfícies de editor, explicação e console distinguem contexto por tom.
- Complementares observados: problema/método #0e1727; prova #10283a; trilha #111d2c; etapas #172a3a e etapa final #174237. Não são uma nova paleta concorrente.

## Typography

Inter é obrigação do manual, carregada localmente por `assets/fonts/Inter-variable.ttf`, pesos 100–900, `font-display:swap`; fallback `system-ui,sans-serif`. Código, números de linha e números de explicação usam `Consolas,'Liberation Mono',monospace`.

A hierarquia geral consta no frontmatter. O hero limita título a 620px e descrição a 560px. Descrição desktop: 20px/1.65. Corpo de seção varia entre 14–17px; rótulos, notas e disclosures entre 10–13px conforme viewport. Os tamanhos são contextuais, não uma escala arbitrária para novos títulos.

H1 responsivo: 54px até 1100px, 60px até 850px e 44px/1.06 até 600px, conforme escala padrão do complemento V2. H2 mobile: 33px/1.15. Código da demonstração: 19px desktop, 16px até 1100px, 14px até 850px, 13px até 600px. Preservar indentação e `white-space:pre`.

## Layout

Container central: max-width1200px com padding32px desktop e20px mobile. Header sticky com blur12px, altura mínima100px e marca194px. Seções com120px verticais no desktop e60px no mobile. Ordem: header, hero, dificuldade, demonstração, método, prova concreta, dúvidas, fechamento e rodapé.

Hero desktop: `1.04fr 1fr`, gap 66px, texto à esquerda, editor à direita; padding120px no desktop e60px no mobile. Demonstração: `1.32fr .85fr`, gap 32px, editor e explicação lado a lado. Dificuldades e método: três colunas; prova e FAQ: cabeçalho à esquerda, conteúdo à direita. Prova interna: duas colunas. Fechamento usa marca e conteúdo em linha.

- A partir de 1500px: hero com padding vertical 120px e gap 80px.
- Até 1100px: margens laterais 32px; hero `1fr 1fr` gap 32px; demo `1.15fr .9fr` gap 22px; prova/FAQ gap 45px.
- Até 850px: hero empilha com gap 54px; editor até 630px e sem rotação; seções120px a partir de768px e60px abaixo. Demo ainda mantém duas colunas iguais; desafio empilha. Prova e FAQ passam a uma coluna. Nota do header desaparece.
- Até 600px: margens laterais 20px, header 84px, logo 156px; seções 62px; hero padding 53px 0 64px e gap 42px. Demo, dificuldades, método e prova ficam em uma coluna. CTA ocupa largura total; cenários ficam em duas colunas. Trilha vira grade de duas colunas e último item ocupa ambas. Fechamento e rodapé empilham.

## Elevation & Depth

Profundidade vem principalmente de tons, bordas finas e fundos radiais discretos. O editor de prévia é a exceção elevada: sombra `0 24px 65px #03071170`, rotação -1deg apenas no desktop. Hover da CTA: `0 10px 28px #06171166`. Não generalizar essas sombras para todas as seções. Fechamento: gradiente linear 108deg de #173363 a #153d42.

## Shapes

Editores e explicação principal têm raio 14px; trilha 12px; explicação da prévia 10px; CTA12px e opções8px; etapas 7px; tag 6px. Editores recortam conteúdo com `overflow:hidden` e borda #32415b. A forma predominante é retangular com cantos moderados. Ícones são SVG de traço, não fotografias ou ornamentos genéricos.

## Components

### CTA e navegação

CTA única “Quero entender melhor”, link para `#demonstracao`, altura mínima 56px (55px mobile), peso 700, gap 26px. Clique também foca a seção com `preventScroll:true`. Header oferece “O método” e “Dúvidas”; links 14px, hover branco, 12px mobile. Não existe menu móvel colapsável.

### Editor e explicação

Quatro instruções interativas são botões nas linhas 1, 3, 4 e 6; linhas vazias não são controles. A linha 3 inicia ativa. Seleção atualiza `aria-pressed`, fundo azul translúcido e barra interna esquerda de 2px. Hover discreto #ffffff08. Cada editor mantém sua própria seleção; a prévia do hero permanece no exemplo original. A explicação usa número monoespaçado, título e texto, com separação para “Por que essa linha existe?”. Áreas atualizadas usam `aria-live=polite` e `aria-atomic=true`.

### Cenários, console e trilha

Radios nativos em fieldset com legend acessível. Inputs visualmente ocultos continuam focáveis; seleção tem fundo #143b34 e borda #24bf91. Original `range(1,4)` resulta 6; adaptado `range(1,6)` resulta 15. O JavaScript recalcula soma, fórmula e lista; conserva a instrução selecionada. Console usa output 38px/1.4 monoespaçado (34px mobile). Trilha mostra cada acumulado; última etapa recebe verde mais escuro. Não há campo de edição livre, erro remoto ou estado de carregamento.

### FAQ e acessibilidade

FAQ usa `details/summary` nativos, divisórias horizontais e ícone que gira 45° ao abrir. Impressão abre respostas e restaura os estados depois. Foco visível: outline 3px #91bcff, offset 5px; na linha de código offset -3px. Skip link aparece ao focar. Preservar headings, nomes acessíveis, idioma pt-BR, legend, alvos semânticos e explicação noscript. Regra genérica de botão disabled: opacidade .6, cursor default; não é um estado da demonstração atual.

Movimento: navegação suave; transições de controles e FAQ300ms; entrada de etapas300ms ease-out, deslocamento4px e opacity. Revelação única de grupos450ms com IntersectionObserver, sem esconder conteúdo por padrão. `prefers-reduced-motion:reduce` remove animações/transições, rotação e scroll suave. Sem autoplay ou movimento contínuo.

## Do's and Don'ts

- **Do** preservar a copy entregue da Atividade 2: headline “Entenda o código de verdade”; subtítulo “Entenda a lógica de cada linha e pratique adaptar códigos a novos desafios. Conheça a proposta do Código Comentado.”; CTA “Quero entender melhor”.
- **Do** manter o contrato HTML do início do body e o layout prescrito pelo usuário, o logo original, Inter local e o fluxo de conversão para a própria demonstração.
- **Do** apresentar 1 exemplo, 4 instruções, 1 desafio e 2 resultados como inventário concreto do protótipo, sem convertê-los em resultados educacionais.
- **Do** preservar disclosures: persona é hipótese; interação calcula em JavaScript e não executa Python; protótipo acadêmico independente.
- **Don't** inventar preços, cursos, alunos, depoimentos, pesquisas ou métricas de aprendizagem.
- **Don't** alterar o site oficial ou seus repositórios, criar repositório ou publicar antes da aprovação do usuário.
- **Don't** trocar a identidade existente, acrescentar fotos genéricas ou insinuar que o editor já está disponível na plataforma oficial.

Registro documental de 16/11/2026. Revisão independente informada pelo fluxo principal: ship-clear nos cinco itens, sem falhas materiais. Este registro foi extraído dos fontes; não representa uma nova inspeção visual em navegador.

## Atualização real da retomada V2

Registro final dos ajustes autorizados no complemento V2. Container com border-box max-width1200px e padding interno32px (desktop) ou20px (mobile). Seções com padding vertical120px a partir de768px,60px abaixo. Hero preserva duas colunas no desktop e uma coluna até850px. H1 escala44–60px e máximo60px na escala padrão. Fundo complementar #0B1220, painéis #1E2937, azul #2563EB e verde #10B981 mantidos. CTA com raio12px e elevação de2px no hover. Headersticky, top0, z-index50, fundo90% opaco e backdrop blur12px, fallback sólido. Link de salto com z-index100, acima do header. Âncoras respeitam scroll-padding-top124px.

Transições300ms e reveal450ms, uma vez por grupo, usando opacity e transform. O conteúdo começa visível e permanece utilizável sem JavaScript. Reduced-motion desliga movimentos e scroll suave. FAQ nativa preservada. Consolas continua como alternativa do sistema a JetBrains Mono, com fallback genérico, sem CDN.

Copy segue os textos obrigatórios mais recentes, não o PDF histórico da Atividade2. Não se alterou esse PDF. A conferência documental consta no README. Meta de performance não é resultado garantido: as amostras locais de LCP e CLS estão documentadas separadamente.

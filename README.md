# Publicação da versão aprovada

Envio autorizado pelo aluno para o repositório `ohlm1/cc-landing-mba-impacta`, branch `main`, em 16/11/2026. O site é independente do domínio oficial. HTML, CSS, JavaScript, logotipo e fontes preservam a versão aprovada, sem otimizações para estabelecer a medição inicial do PageSpeed Insights.

Endereço de publicação: https://ohlm1.github.io/cc-landing-mba-impacta/

Origem do GitHub Pages: `main` e `/ (root)`. A documentação abaixo registra o desenvolvimento e suas decisões; referências a aprovação pendente descrevem a etapa anterior ao envio. A disponibilidade e os testes de produção são registrados separadamente após o deploy.

---

# Código Comentado — Atividade 3

Landing page acadêmica independente para receber o anúncio da Atividade 2 e demonstrar a proposta de explicar código linha por linha.

**Aluno:** Lucas Vieira de Lima  
**E-mail:** lucas.vlima@aluno.impacta.edu.br  
**Curso:** MBA em Engenharia de Software, Faculdade Impacta  
**Disciplina:** Digital Growth & AI-Driven Marketing  
**Professor:** Juliano Motta  

## Executar localmente

Não há instalação de pacotes nem etapa de build. A página também abre diretamente por `index.html`. Para reproduzir o ambiente de hospedagem em subdiretório, execute na pasta que contém `cc-landing-mba-impacta`:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8000/cc-landing-mba-impacta/`. Se estiver dentro da pasta do projeto, use o mesmo comando e abra `http://127.0.0.1:8000/`.

## Propósito e persona

O CC propõe ensino, prática e compartilhamento de conhecimentos em programação, explicando cada instrução, seu motivo e a relação com o restante do programa. O projeto está em desenvolvimento.

A campanha prioriza a persona-hipótese da Atividade 1: aprendiz que executa exemplos, mas encontra dificuldades para compreender e adaptar a lógica. Não há pesquisa com usuários ou resultados educacionais comprovados neste protótipo.

## Copy de referência e continuidade

O complemento V2 e a mensagem de retomada mais recente definem expressamente os textos obrigatórios abaixo. Eles substituem a decisão inicial da conversa, que havia mantido “Entenda o código para adaptar”. Nesta versão, o Hero usa literalmente:

- Headline: **Entenda o código de verdade**
- Subtítulo: **Entenda a lógica de cada linha e pratique adaptar códigos a novos desafios. Conheça a proposta do Código Comentado.**
- CTA: **Quero entender melhor**

Os dois botões principais têm o mesmo rótulo e navegam para `#demonstracao`. Não há formulário, cadastro, checkout ou captura de dados. Os controles do exemplo e a navegação não são conversões concorrentes.

**Conferência documental:** o PDF histórico da Atividade 2 neste workspace ainda contém a versão anterior. Ele não foi alterado nesta retomada da Atividade 3. A correspondência literal foi conferida com a copy obrigatória fornecida pelo aluno no complemento e na retomada. Para uma entrega conjunta com o anúncio histórico, essa divergência precisa ser harmonizada. Não se afirma que os dois PDFs existentes já trazem frases idênticas.

## Demonstração interativa

```python
total = 0

for numero in range(1, 4):
    total += numero

print(total)
```

As quatro instruções nas linhas 1, 3, 4 e 6 são selecionáveis com clique ou teclado. As explicações mostram o que cada instrução faz e por que existe. Na prévia do Hero, a seleção troca a explicação no próprio painel.

O desafio altera somente o limite final:

| Cenário | Números percorridos | Resultado |
|---|---|---:|
| `range(1, 4)` | 1, 2, 3 | 6 |
| `range(1, 6)` | 1, 2, 3, 4, 5 | 15 |

O JavaScript calcula a soma em um laço equivalente e gera os estados intermediários. **Nenhum código Python do visitante é executado.** Não é um editor livre nem uma funcionalidade confirmada da plataforma oficial. A própria página identifica a experiência como demonstração conceitual.

Os números da seção de benefícios são verificáveis na implementação: **1 exemplo, 4 instruções, 1 desafio e 2 resultados**. Não representam alunos, resultados de aprendizagem, avaliações ou provas sociais.

## Tecnologias e acessibilidade

HTML5 semântico, CSS3 e JavaScript puro. Fonte Inter local, logo original extraído do manual e ícones SVG em linha. Sem framework, CDNs, serviços pagos, analytics ou chaves privadas. Todos os caminhos são relativos e compatíveis com o subdiretório do GitHub Pages. O template V2 foi aplicado conforme `docs/compatibilidade-v2.md`.

A página inclui link para pular ao conteúdo, focos visíveis, controles nativos, explicações com `aria-live`, estados `aria-pressed`, opções por rádio acessíveis por setas, contraste elevado e respeito a `prefers-reduced-motion`. Perguntas frequentes usam `details`/`summary`.

## Estrutura

```text
cc-landing-mba-impacta/
  index.html
  styles.css
  script.js
  .nojekyll
  .gitignore
  assets/
    logo.png
    simbolo.png
    fonts/Inter-variable.ttf
    fonts/OFL.txt
  README.md
  PRODUCT.md
  DESIGN.md
  docs/
    direcao.md
    checklist-avaliacao.md
    prompts.md
```

## GitHub Pages, somente após aprovação

**Nenhum repositório foi criado e nenhuma publicação foi realizada.** Não alterar o site oficial ou seus repositórios. O destino planejado, ainda não confirmado como ativo, é:

`https://ohlm1.github.io/cc-landing-mba-impacta/`

Depois da aprovação do aluno:

1. Criar um repositório **novo**, público, `ohlm1/cc-landing-mba-impacta`. Se o nome já existir, verificar o conteúdo e pedir orientação antes de alterá-lo.
2. Colocar o conteúdo desta pasta na raiz do repositório, com `index.html` diretamente na raiz. Não enviar a pasta externa como uma subpasta adicional.
3. Em **Settings > Pages**, selecionar publicação a partir da branch `main`, pasta `/ (root)`, e salvar.
4. Aguardar a publicação e conferir no endereço retornado pelo GitHub se o logo, a fonte, os links e a demonstração carregam no subdiretório.

Não precisa de domínio personalizado, arquivo CNAME, backend, banco ou GitHub Actions personalizado. A localização dos controles de configuração pode variar no GitHub.

## Capturas e PDF

Os entregáveis de apresentação ficam na pasta `output/atividade3` do workspace e no pacote completo:

- `landing-desktop-full.png`: captura integral em navegador, largura 1440 px.
- `landing-mobile.png`: captura integral em navegador, largura 390 px.
- `Lucas-Vieira-de-Lima-landing.pdf`: impressão nativa do navegador, com texto selecionável e cores de fundo. É uma página longa para leitura em tela, com zoom ajustado à largura, sem cortes entre seções. Não é mais um PDF de imagem única.

As capturas de entrega mostram as quatro respostas das perguntas frequentes expandidas, um estado real da página, para incluir todo o conteúdo. A página inicia com somente a primeira resposta aberta. O CSS de impressão também expande as respostas durante a impressão no navegador.

## Fontes e limitações

- Atividade 1 do autor, PDF Persona-hipótese Código Comentado, 03/11/2026, pp. 1-4.
- Atividade 2 final, `Lucas_Vieira_de_Lima-anuncio.pdf`, `projeto.yaml` e `prompts.md`, produzidos nesta conversa.
- Enunciado do professor: `20261110_ME_2026_2_Turma_B_Digital_Growth_AI_Driven_Marketing_Aula_3_Atividade-Landing Page-NOTA.pdf`, cinco páginas, lido integralmente. Páginas 3-4: instruções e seis critérios.
- Manual de identidade visual fornecido pelo autor: cores, Inter, logotipo e símbolo preservados.
- Fonte Inter original de [Google Fonts](https://github.com/google/fonts/tree/main/ofl/inter), sob SIL Open Font License 1.1, incluída em `assets/fonts/OFL.txt`.

O site oficial `https://codigocomentado.com.br` e o [documento de apoio](https://docs.google.com/document/d/1UdbJCbP2D8uHDYLswmZLopnU0ZABiONxY9qExY6kkhY/edit) não ficaram acessíveis na consulta desta produção. Não se atribuem a eles conteúdos que não foram lidos. O enunciado local e os textos fornecidos pelo aluno orientam a entrega.

Testes e evidências estão registrados em `docs/checklist-avaliacao.md`. Não houve teste com usuários, pesquisa de conversão ou verificação da disponibilidade de funcionalidades do site oficial.

## Estado da retomada e desempenho

O projeto funcional anterior foi mantido. Foram atualizados copy, tokens de layout, header sticky, transições e revelação moderada. FAQ, cálculo, controles e estrutura de sete seções permanecem. O CSS existente foi formatado para facilitar manutenção.

O Git do workspace está na branch `master`, sem commits e sem remotos configurados. Os arquivos do projeto ainda são não rastreados. Não se criou repositório local adicional nem remoto, não se fez commit, push ou deploy.

Os testes atuais cobrem 1440, 768, 390 e 375 px. Há verificações de teclado, foco acima do header, âncora abaixo do header, contraste por revisão, conteúdo sem JavaScript e movimento normal/reduzido. As medições de laboratório locais constam em `docs/performance-local.json`: seis amostras, LCP de 120 a 356 ms e CLS 0. Event Timing registrou interações de 16 a 24 ms nas amostras observáveis. Isso não equivale ao INP de campo nem comprova Core Web Vitals de produção. Sem rede ou CPU simuladas e sem site publicado.

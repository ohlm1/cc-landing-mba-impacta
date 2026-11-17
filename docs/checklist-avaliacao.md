# Checklist da Atividade 3

Revisão em 16/11/2026. Aluno: Lucas Vieira de Lima.

## Seis critérios do professor

| Critério | Resposta e evidência | Estado |
|---|---|---|
| Alinhamento | Hero confere literalmente com os textos obrigatórios do complemento e da retomada. O PDF histórico do anúncio ainda usa a versão anterior e não foi modificado. | Copy atual atendida; divergência documental registrada |
| Seções justificadas | Hero explica a proposta, situações conectam a dor, demonstração responde como funciona, método relaciona leitura e prática, números especificam o que explorar, FAQ esclarece escopo e disponibilidade, fechamento retoma a ação local. | Atendido |
| Prova e gatilhos | Prova é o exemplo calculado, com resultados 6 e 15. Curiosidade na pergunta e explicações, identificação nas situações hipotéticas, autonomia no desafio. Sem depoimentos, usuários fictícios, urgência ou escassez. | Atendido |
| Clareza | Logo, descrição “Programação explicada, linha por linha”, promessa e CTA aparecem antes da dobra nas quatro larguras testadas. Isso atende à organização solicitada, sem alegar teste real de compreensão de cinco segundos com usuários. | Atendido na revisão de interface |
| Um CTA só | Dois botões principais com rótulo exato “Quero entender melhor”, ambos `href="#demonstracao"`. Clique e transferência de foco passaram. Controles do exemplo e navegação não são conversões concorrentes. | Atendido |
| Benefício com número | A seção apresenta 1 exemplo, 4 instruções explicadas, 1 desafio e 2 resultados. Quantidades conferidas no HTML e nas interações. | Atendido |

## Funcionalidade e experiência

- [x] Página real em HTML5, CSS3 e JavaScript, sem backend ou build.
- [x] Logo original preservado e fonte Inter local.
- [x] Sete seções solicitadas, na sequência narrativa do briefing.
- [x] Quatro instruções selecionáveis na prévia e na demonstração.
- [x] Estado ativo exclusivo e explicações para as linhas 1, 3, 4 e 6.
- [x] Inicial `range(1, 4)`: soma 6, três iterações.
- [x] Adaptado `range(1, 6)`: soma 15, cinco iterações, fórmula e código atualizados.
- [x] Retorno do cenário adaptado ao original.
- [x] Botões operáveis com Enter. Rádios operáveis com setas do teclado.
- [x] FAQ operável com clique e teclado.
- [x] Foco visível, link de salto e regiões de anúncio de atualização.
- [x] Movimento reduzido respeitado no CSS.
- [x] Nenhuma coleta de dados, formulário falso ou serviço pago.
- [x] Recursos locais, sem CDN, chave ou chamada de API externa.
- [x] Nenhum erro de JavaScript, de console ou de requisição durante os testes registrados.
- [x] Nenhum transbordamento horizontal em 1440, 768, 390 e 375 px.
- [x] CTA do Hero visível nas alturas testadas: 1000 px desktop/tablet e 844 px mobile.
- [x] Caminhos relativos testados em `/cc-landing-mba-impacta/`, não apenas na raiz.

## Captura e entrega

- [x] Página servida em localhost e aberta em navegador real Chromium 151, via Playwright.
- [x] Capturas reais de desktop e mobile, com página inteira e FAQ expandida para mostrar as respostas.
- [x] PDF da captura integral, nome `Lucas-Vieira-de-Lima-landing.pdf`, uma página longa, sem cortes de seção.
- [x] Texto da página conferido na renderização do PDF com zoom adequado à largura.
- [x] Código-fonte, assets, README, registro de prompts e documentação de identidade incluídos no pacote.
- [x] Revisão independente Impeccable: **ship — clear**, sem achados materiais.

## Fontes e limites da verificação

Enunciado local do professor, cinco páginas, lido integralmente. As instruções de entrega e os seis critérios das páginas 3-4 orientam este checklist. Atividades anteriores, YAML e manual também foram consultados.

O site oficial e o Google Doc de apoio não abriram na consulta inicial. O aluno anexou depois o texto oficial V2, lido integralmente nesta retomada. Não se inventaram requisitos ou informações desses endereços. O conteúdo do site oficial não foi modificado.

Os testes são de implementação e interface. Não houve estudo com a persona, leitor de tela, Safari, Firefox, campanha real ou medição de conversão. Não se atribui validação de mercado à revisão visual. O aviso do detector sobre uso de Inter foi mantido deliberadamente, pois a família é obrigatória no manual do autor.

## Publicação

- [x] Preparado para GitHub Pages em um novo repositório independente.
- [x] Nenhum repositório criado e nenhum push ou deploy realizado.
- [ ] Aprovação do aluno antes de criar `ohlm1/cc-landing-mba-impacta`.
- [ ] Publicação e validação do endereço de produção, somente após aprovação.

Os dois últimos itens são etapas futuras deliberadamente não executadas. O escopo atual é a versão local completa.

## Complemento V2 incorporado

- [x] Container máximo1200px, padding20px mobile/32px desktop.
- [x] Espaçamento vertical60px mobile/120px desktop.
- [x] Headersticky com fundo escuro, transparência e blur12px, com fallback sólido.
- [x] Transições300ms, revelação450ms com transform/opacity e conteúdo visível sem JS.
- [x] Foco do link de salto acima do header, verificado por teclado e elementFromPoint.
- [x] Alvos de instruções e navegação com altura mínima44px.
- [x] Mesmas funcionalidades de código e cálculo mantidas.
- [x] Fonte Inter local e alternativa monoespaçada do sistema.
- [x] LCP/CLS medidos em seis amostras de laboratório, sem alegação de INP de campo.
- [x] Nenhum serviço pago, API com chave, commit, remoto ou deploy acrescentado.

### Conferência do anúncio anterior

A copy obrigatória da última mensagem foi aplicada exatamente. O PDF histórico da Atividade2 ainda traz “Entenda o código para adaptar” e o texto principal anterior. O requisito de continuidade literal com esse PDF histórico não pode ser declarado atendido sem harmonizar a versão do anúncio. A Atividade3 local está concluída segundo os textos obrigatórios atuais; essa diferença fica explícita para a conferência de uma entrega conjunta.

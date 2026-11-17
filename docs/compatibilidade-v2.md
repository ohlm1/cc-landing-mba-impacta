# Aplicação do template V2

O texto oficial anexado pelo aluno foi lido integralmente. Ele complementa o enunciado, a estratégia e o manual da marca, sem substituir essas referências.

| Recomendação / configuração | Decisão implementada |
|---|---|
| Inter e monoespaçada | Inter local existente mantida. JetBrains Mono é a primeira opção da stack se instalada, seguida por Consolas e alternativas do sistema. |
| Escala padrão | H1 responsivo de44 a60px, corpo16–20px, títulos de seção responsivos. |
| Container / padding | max-width1200px, padding20px mobile e32px desktop. |
| Seções | Padding vertical60px mobile e120px desktop. |
| Hero | Mesma composição existente, duas colunas em desktop, uma em telas menores. |
| Header | Sticky, fundo escuro90% opaco e blur12px, fallback sólido e foco acima dele. |
| Motion | Transições300ms, reveal450ms uma vez, só transform/opacity, reduced-motion. |
| FAQ | Acordeão nativo acessível por teclado preservado. |
| Mídia | Logo com dimensões e prioridade alta. Símbolo do fechamento lazy. Sem fotografia genérica. |
| Performance | JS defer, fontes locais preloaded, sem CDN. Metas registradas e laboratório local medido. |
| HTML único / inline | Não aplicado: briefing principal exige fonte organizada em HTML/CSS/JS e proíbe reiniciar o projeto. A página abre localmente com seus assets relativos. |
| Apenas fontes do sistema | Não aplicado ao texto: o manual e o aluno obrigam Inter. Ela é hospedada localmente, não em CDN. |
| Onze seções comerciais | Não aplicado: mantidas sete seções úteis à persona, sem preços, garantias ou formulários fictícios. |
| Prova social fictícia “realista” | Rejeitada: conflita com integridade e instrução expressa do aluno. A prova vem do exemplo funcional. |
| Um único breakpoint / somente flex | Não imposto: os breakpoints existentes foram mantidos para preservar a responsividade funcional. |
| content-visibility automático | Não aplicado indiscriminadamente: evita estimativas de altura incorretas na captura integral exigida. Conteúdo da página é curto e não depende de assets pesados. |

## Metas e medição

Metas do template: LCP<2,5s, CLS próximo de0 e INP<200ms. A validação local consta em `performance-local.json`. Seis amostras de localhost sem emulação de rede ou CPU registraram LCP120–356ms e CLS0. Event Timing das interações observáveis registrou16–24ms, mas isso não é INP de campo. Não há validação em produção, dados reais de usuários ou promessa de desempenho em hospedagem futura.

## Continuidade de copy

O complemento e a retomada fixaram os textos “Entenda o código de verdade” e seu subtítulo. Eles prevalecem sobre a escolha anterior desta conversa na landing. O PDF histórico da Atividade2 não foi modificado. A diferença precisa ser conferida antes de uma entrega conjunta que exija os dois PDFs com as mesmas palavras.

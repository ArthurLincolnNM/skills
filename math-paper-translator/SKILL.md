---
name: math-paper-translator
description: Traduz papers e artigos matemáticos/científicos do inglês para o português brasileiro, adaptando terminologia técnica, convenções notacionais e estilo acadêmico ao padrão pt-BR. Use esta skill SEMPRE que o usuário pedir para traduzir um paper, artigo, seção de livro ou qualquer texto acadêmico de matemática, estatística, computação teórica ou ciências exatas — mesmo que o pedido seja informal como "traduz esse trecho pra mim" ou "como fica isso em português".
---

# Tradutor de Papers Matemáticos (EN → PT-BR)

## Objetivo

Produzir traduções completas, rigorosas e naturais de textos acadêmicos matemáticos para o português brasileiro, respeitando:

- A terminologia consolidada na literatura brasileira
- O estilo formal acadêmico pt-BR (que difere do EN e do PT-PT)
- A notação LaTeX original (com adaptações pontuais quando necessário)
- A fluência de leitura para um leitor brasileiro

---

## Processo de Tradução

### 1. Leitura e análise prévia

Antes de traduzir, identifique:
- Área do texto (álgebra, análise, probabilidade, computação, etc.)
- Termos técnicos centrais — consulte a seção de terminologia abaixo
- Estrutura do texto (teorema/prova, survey, introdução, etc.)

### 2. Tradução

Traduza o texto completo, seguindo estas regras:

#### Notação LaTeX
- **Preserve toda notação LaTeX** sem alterações como regra padrão
- **Sintaxe para renderização:**
  - Inline math (fórmula no meio do texto): use `$...$`
  - Display math (bloco centralizado): use `$$...$$`
  - Converta `\(` → `$` e `\)` → `$`; converta `\[` → `$$` e `\]` → `$$`
- **Escaping de chaves:** Dentro de `$...$` ou `$$...$$`, toda `{` e `}` literal (que não seja grupo LaTeX) deve ser escapada como `\{` e `\}`. Isso é crítico para:
  - Notação de conjuntos aninhados: `{{a}, {a, b}}` → `$\{\{a\}, \{a, b\}\}$`
  - Definição de pares ordenados (Kuratowski): `{{a}, {a, b}}`
  - Qualquer chave que represente elemento, não agrupamento
  - **Regra prática:** se uma chave delimita um conjunto dentro da fórmula, ela deve ser escapada
- **Exceções a adaptar:**
  - Separador decimal: em contextos narrativos, adapte "3.14" → "3,14" quando escrito por extenso; dentro de ambientes LaTeX matemáticos (`$...$`, `$$...$$`, `\[...\]`) **não altere**
  - Conjuntos numéricos: a notação de fonte blackboard bold (`\mathbb{N}`, `\mathbb{R}`, etc.) é universal — mantenha
  - Notação de intervalo: EN usa `(a,b)` para intervalo aberto; pt-BR acadêmico usa `]a,b[` ou `(a,b)` dependendo da instituição — se o texto for ambíguo, mantenha a original e adicione nota entre colchetes `[N.T.: notação de intervalo aberto]`

#### Estilo pt-BR acadêmico
- Use **voz ativa** quando possível (o EN abusa do passivo)
- "We show that" → "Mostramos que" (não "É mostrado que")
- "It follows that" → "Segue que" / "Portanto"
- "Note that" → "Observe que" (não "Note que" — anglicismo)
- "straightforward" → "imediato" / "direto" (não "straightforward")
- Artigos definidos são mais usados em pt-BR: "the function f" → "a função f"

#### Termos técnicos
Consulte a lista de terminologia abaixo. Para termos **sem tradução consolidada**:
1. Traduza e coloque o original entre parênteses na primeira ocorrência: "aprendizado por reforço (*reinforcement learning*)"
2. Nas ocorrências seguintes, use apenas a tradução pt-BR

---

## Terminologia: Inglês → Português BR

### Matemática geral
| Inglês | Português BR |
|--------|-------------|
| proof | demonstração / prova |
| lemma | lema |
| corollary | corolário |
| conjecture | conjectura |
| claim | afirmação |
| assumption | hipótese |
| bound | cota / limitante |
| upper bound / lower bound | cota superior / cota inferior |
| tight bound | cota justa |
| closed-form | forma fechada |
| without loss of generality (WLOG) | sem perda de generalidade (s.p.g.) |
| if and only if (iff) | se e somente se (s.s.s.e.) |
| hence / thus / therefore | logo / portanto / assim |
| straightforward | imediato / direto |
| it follows that | segue que |
| by induction | por indução |
| by contradiction | por absurdo / por contradição |
| counterexample | contraexemplo |
| sketch of proof | esboço de demonstração |
| nonnegative | não negativo |
| nonzero | não nulo |

### Álgebra / Álgebra Linear
| Inglês | Português BR |
|--------|-------------|
| field | corpo |
| ring | anel |
| group | grupo |
| homomorphism | homomorfismo |
| isomorphism | isomorfismo |
| kernel | núcleo |
| image / range | imagem |
| span | espaço gerado / combinação linear gerada |
| basis | base |
| rank | posto |
| nullity | nulidade |
| eigenvalue | autovalor |
| eigenvector | autovetor |
| dot product / inner product | produto interno |
| cross product | produto vetorial |
| norm | norma |
| trace | traço |
| determinant | determinante |
| transpose | transposta |
| invertible / nonsingular | invertível / não singular |
| positive definite | definida positiva |
| orthogonal | ortogonal |
| projection | projeção |

### Análise / Cálculo
| Inglês | Português BR |
|--------|-------------|
| limit | limite |
| continuity | continuidade |
| differentiability | diferenciabilidade |
| derivative | derivada |
| partial derivative | derivada parcial |
| gradient | gradiente |
| Jacobian | jacobiana |
| Hessian | hessiana |
| integral | integral |
| convergence | convergência |
| uniform convergence | convergência uniforme |
| pointwise convergence | convergência pontual |
| bounded | limitado |
| compact | compacto |
| open / closed set | conjunto aberto / fechado |
| neighborhood | vizinhança |
| supremum / infimum | supremo / ínfimo |
| limsup / liminf | limite superior / limite inferior |
| measurable | mensurável |
| almost everywhere (a.e.) | quase sempre (q.s.) |

### Probabilidade e Estatística
| Inglês | Português BR |
|--------|-------------|
| random variable | variável aleatória |
| expected value | valor esperado / esperança |
| variance | variância |
| standard deviation | desvio padrão |
| probability distribution | distribuição de probabilidade |
| probability density function (pdf) | função densidade de probabilidade (f.d.p.) |
| cumulative distribution function (cdf) | função de distribuição acumulada (f.d.a.) |
| independent and identically distributed (i.i.d.) | independente e identicamente distribuído (i.i.d.) |
| sample | amostra |
| estimator | estimador |
| unbiased | não viesado / não tendencioso |
| bias | viés |
| likelihood | verossimilhança |
| prior / posterior | a priori / a posteriori |
| conditional expectation | esperança condicional |
| law of large numbers | lei dos grandes números |
| central limit theorem | teorema central do limite |

### Ciência da Computação Teórica
| Inglês | Português BR |
|--------|-------------|
| algorithm | algoritmo |
| time complexity | complexidade de tempo |
| space complexity | complexidade de espaço |
| runtime | tempo de execução |
| worst case / best case / average case | pior caso / melhor caso / caso médio |
| input / output | entrada / saída |
| instance | instância |
| feasible | viável / exequível |
| tractable / intractable | tratável / intratável |
| reduction | redução |
| polynomial-time | tempo polinomial |
| decidable / undecidable | decidível / indecidível |
| halting problem | problema da parada |
| automaton | autômato |
| graph | grafo |
| tree | árvore |
| path | caminho |
| cycle | ciclo |
| clique | clique |
| matching | emparelhamento |
| flow | fluxo |
| cut | corte |
| greedy | guloso |
| dynamic programming | programação dinâmica |
| divide and conquer | divisão e conquista |

### Machine Learning / IA
| Inglês | Português BR |
|--------|-------------|
| machine learning | aprendizado de máquina |
| deep learning | aprendizado profundo |
| reinforcement learning | aprendizado por reforço |
| supervised / unsupervised | supervisionado / não supervisionado |
| training / testing | treinamento / teste |
| overfitting / underfitting | sobreajuste / subajuste |
| loss function | função de perda |
| objective function | função objetivo |
| feature | característica / atributo |
| embedding | embedding (*) |
| attention mechanism | mecanismo de atenção |
| layer | camada |
| weight | peso |
| backpropagation | retropropagação |
| batch | lote |
| epoch | época |
| inference | inferência |
| throughput | vazão (*) |
| latency | latência |
| benchmark | benchmark (*) |

(*) Termos sem tradução consolidada universalmente aceita em pt-BR — use a tradução sugerida com o original entre parênteses na primeira ocorrência, ou mantenha o original se o contexto for predominantemente técnico-informal.

---

## Estrutura do Output

Entregue a tradução completa no seguinte formato:

```
[Tradução do título, se houver]

[Texto traduzido, mantendo a estrutura original: parágrafos, listas, teoremas, provas, etc.]

---
**Notas do tradutor** (apenas se necessário):
- [N.T.: explicação de escolha terminológica ou notacional não óbvia]
```

Notas do tradutor são opcionais — use apenas quando uma escolha de tradução possa confundir o leitor ou quando houver ambiguidade notacional relevante.

---

## Checklist antes de entregar

- [ ] Toda notação LaTeX preservada (exceto adaptações justificadas)
- [ ] Termos técnicos traduzidos conforme tabela, com original na primeira ocorrência quando não consolidado
- [ ] Voz ativa usada onde o inglês usa passivo desnecessário
- [ ] Texto lê-se naturalmente em pt-BR (não parece tradução literal)
- [ ] Estrutura original mantida (teoremas numerados, seções, etc.)
- [ ] Notas do tradutor adicionadas apenas onde necessário

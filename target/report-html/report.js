$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("alugar_filme.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Alugar Filme",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "alugar-filme",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "alugar-filme;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 10
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 11
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 12
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o preço do aluguel será de R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 15,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmeSteps.umFilme(DataTable)"
});
formatter.result({
  "duration": 112012600,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 1302400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 2704000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 671700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 113700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "alugar-filme;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 22,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 141400,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 105300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#Scenario Outline"
    }
  ],
  "line": 25,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será de R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 34,
      "value": "# Examples"
    }
  ],
  "line": 35,
  "name": "",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 36,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 37,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 38,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 39,
      "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será de R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 161600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 80900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 113600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 30
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 375600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será de R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 83200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 30
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 1064100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 73500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "alugar-filme;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "que o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "que o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "o preço do aluguel será de R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 31,
  "name": "a data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "a pontuação recebida será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "AlugarFilmeSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 127700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "AlugarFilmeSteps.queOPreçoDoAluguelSejaR$(int)"
});
formatter.result({
  "duration": 35700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 27
    }
  ],
  "location": "AlugarFilmeSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "AlugarFilmeSteps.alugar()"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 30
    }
  ],
  "location": "AlugarFilmeSteps.oPreçoDoAluguelSeráDeR$(int)"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 26
    }
  ],
  "location": "AlugarFilmeSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 182100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 29
    }
  ],
  "location": "AlugarFilmeSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.uri("aprender_cucumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Aprender Cucumber",
  "description": "Como um aluno\r\nEu quero aprender a utilizar cucumber\r\nPara que eu possa automatizar critérios de automação",
  "id": "aprender-cucumber",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve executar especificação",
  "description": "",
  "id": "aprender-cucumber;deve-executar-especificação",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "eu executá-lo",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a especificação deve finalizar com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "duration": 137000,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.euExecutáLo()"
});
formatter.result({
  "duration": 9500,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificaçãoDeveFinalizarComSucesso()"
});
formatter.result({
  "duration": 10600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#\t5 passos do teste: Pass, failed, skipped, pending e undefined"
    }
  ],
  "line": 14,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 15,
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 109100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "duration": 44200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 20,
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "eu incrementar em 35",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o valor do contador será 158",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 144900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "158",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 25,
  "name": "que a entrega é dia 05/04/2019",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "a entrega será efetuada em 07/04/2019",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2019",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "duration": 1206300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "dias",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 227400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/04/2019",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 183800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Deve calcular atraso no prazo de entrega da China",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-no-prazo-de-entrega-da-china",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 30,
  "name": "que a entrega é dia 05/04/2019",
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "a entrega será efetuada em 05/06/2019",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2019",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "duration": 234400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "meses",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2019",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 124300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "id": "aprender-cucumber;deve-criar-steps-genéricos-para-estes-passos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 36,
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.step({
  "line": 37,
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.step({
  "line": 41,
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AF345",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉ(String,String)"
});
formatter.result({
  "duration": 148900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230,45",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 248100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano da Silva",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999-9999",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "duration": 8300,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "duration": 7900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "id": "aprender-cucumber;deve-reaproveitar-os-steps-\"dado\"-do-cenário-anterior",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 44,
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 46,
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.step({
  "line": 47,
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 48,
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AB167",
      "offset": 15
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉ(String,String)"
});
formatter.result({
  "duration": 102300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " especial",
      "offset": 12
    },
    {
      "val": "AB167",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberSteps.queOTicketÉ(String,String)"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1120,23",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "duration": 112300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cicrano de Oliveira",
      "offset": 28
    }
  ],
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 21500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9888-8888",
      "offset": 31
    }
  ],
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores",
  "description": "",
  "id": "aprender-cucumber;deve-negar-todos-os-steps-\"dado\"-dos-cenários-anteriores",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 50,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "que o ticket é CD123",
  "keyword": "Dado "
});
formatter.step({
  "line": 54,
  "name": "que o ticket é AG1234",
  "keyword": "Dado "
});
formatter.step({
  "line": 55,
  "name": "que o valor da passagem é R$ 1.1345,56",
  "keyword": "Dado "
});
formatter.step({
  "line": 56,
  "name": "que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 57,
  "name": "que o telefone do passageiro é 1234-5678",
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "que o telefone do passageiro é 999-2223",
  "keyword": "Dado "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "1.1345,56",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
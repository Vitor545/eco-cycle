export const filterOptionsPlantas = {
    name: 'Adubos',
    options: ['Adubo de casca de banana', 'Adubo de casca de laranja', 'Adubo de casca de melancia', 'Adubo de casca de batata', 'Adubo de limão']
} as {name: string, options: string[]}

export const plants = [
    {
        "name": "Tomate",
        "description": "O tomate é uma hortaliça versátil e rica em licopeno, um antioxidante que ajuda a proteger as células do corpo dos danos causados pelos radicais livres. Além de melhorar a saúde do coração, o consumo regular de tomates também pode reduzir o risco de câncer e melhorar a saúde da pele. É uma excelente fonte de vitaminas A e C, essenciais para o funcionamento adequado do organismo.",
        "recommendation": {
            "name": "Adubo de casca de banana",
            "color": "#eab308",
            "description": "A casca de banana é uma excelente fonte de potássio, um mineral essencial para o crescimento saudável das plantas. Quando adicionada ao solo, ela ajuda a fortalecer as raízes, aumenta a resistência das plantas a pragas e doenças e promove um desenvolvimento mais robusto. Além disso, suas propriedades ajudam a manter a umidade no solo."
        },
        "difficulty": {
            "level": "Médio",
            "color": "#c2410c"
        },
        "image": "https://images.unsplash.com/photo-1534940519139-f860fb3c6e38?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "tip": "Mantenha o solo sempre úmido, mas evite o excesso de água, pois isso pode levar ao apodrecimento das raízes. O cultivo em estufas pode ajudar a regular a temperatura e a umidade, contribuindo para uma colheita abundante."
    },
    {
        "name": "Cenoura",
        "description": "A cenoura é uma raiz nutritiva, famosa por seu alto teor de beta-caroteno, que é convertido em vitamina A no corpo, fundamental para a saúde ocular e para o fortalecimento do sistema imunológico. Além disso, é uma boa fonte de fibras, que ajudam na digestão e promovem a saciedade, sendo uma escolha saudável para dietas balanceadas.",
        "recommendation": {
            "name": "Adubo de casca de laranja",
            "color": "#f97316",
            "description": "O adubo feito de cascas de laranja contém ácido cítrico e uma variedade de nutrientes que ajudam a equilibrar o pH do solo. Essa adição enriquece a terra, favorecendo o crescimento das cenouras, além de repelir pragas. É uma forma sustentável de aproveitar restos de frutas na sua jardinagem."
        },
        "difficulty": {
            "level": "Baixo",
            "color": "#15803d"
        },
        "image": "https://images.unsplash.com/photo-1511448799201-28c098eb6004?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "tip": "Para melhores resultados, plante em solo solto e bem drenado, evitando a compactação. As cenouras precisam de espaço para crescer; mantenha um espaçamento adequado entre as sementes para garantir raízes saudáveis e grandes."
    },
    {
        "name": "Couve",
        "description": "A couve é uma verdura rica em vitaminas A, C e K, que desempenham papéis essenciais na saúde do corpo, como a proteção contra doenças e a melhora na coagulação sanguínea. Além disso, suas propriedades antioxidantes ajudam a combater o estresse oxidativo, contribuindo para a saúde geral. Incorporar couve na dieta é uma forma saborosa de aumentar a ingestão de nutrientes.",
        "recommendation": {
            "name": "Adubo de casca de melancia",
            "color": "#b91c1c",
            "description": "A casca de melancia, muitas vezes descartada, é rica em água e nutrientes que ajudam a manter a umidade do solo. Ao usá-la como adubo, você não só enriquece o solo, mas também aproveita um recurso que, de outra forma, seria jogado fora, contribuindo para uma prática de jardinagem mais sustentável."
        },
        "image": "https://images.unsplash.com/photo-1448030081970-b7d1ae923ed6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "difficulty": {
            "level": "Baixo",
            "color": "#15803d"
        },
        "tip": "Plante em um local com luz solar direta por pelo menos 6 horas ao dia. A couve se desenvolve melhor em solos ricos e bem drenados; adicione compostagem regularmente para maximizar a fertilidade."
    },
    {
        "name": "Morango",
        "description": "Os morangos são frutos deliciosos e nutritivos, ricos em vitamina C, antioxidantes e fibras. Eles ajudam a melhorar a digestão, contribuem para a saúde cardiovascular e podem ajudar a regular o açúcar no sangue. Seu consumo regular está associado a uma série de benefícios à saúde, tornando-os uma excelente adição a qualquer dieta.",
        "recommendation": {
            "name": "Adubo de casca de batata",
            "color": "#7e22ce",
            "description": "As cascas de batata são uma fonte rica em potássio e fósforo, nutrientes que são essenciais para o crescimento e desenvolvimento saudável dos morangos. Ao utilizá-las como adubo, você proporciona um ambiente nutritivo que favorece a produção de frutos doces e saborosos, além de melhorar a qualidade do solo."
        },
        "image": "https://images.unsplash.com/photo-1591271300850-22d6784e0a7f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "difficulty": {
            "level": "Médio",
            "color": "#c2410c"
        },
        "tip": "Evite o excesso de umidade, que pode causar doenças fúngicas. Mantenha um espaçamento adequado entre as plantas para garantir uma boa circulação de ar, o que é crucial para a saúde das folhas e frutos."
    },
    {
        "name": "Feijão",
        "image": "https://images.unsplash.com/photo-1506620780696-e5cb6c54524e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "O feijão é uma excelente fonte de proteínas, fibras e uma variedade de micronutrientes, contribuindo para uma dieta equilibrada. Além de ser um alimento básico em muitas culturas, o feijão é conhecido por seu papel na promoção da saúde digestiva e na manutenção de níveis saudáveis de colesterol. Incorporá-lo na dieta é uma maneira saborosa de enriquecer suas refeições.",
        "recommendation": {
            "name": "Adubo de limão",
            "color": "#22c55e",
            "description": "O adubo de limão não só ajuda a enriquecer o solo com nutrientes essenciais, mas também melhora a drenagem e o pH do solo. Isso cria um ambiente mais saudável para as plantas, promovendo o crescimento robusto do feijão e contribuindo para uma colheita mais rica e saudável."
        },
        "difficulty": {
            "level": "Baixo",
            "color": "#15803d"
        },
        "tip": "Plante em solo bem arejado e evite áreas com muita sombra. A exposição ao sol é fundamental para o desenvolvimento das plantas; assim, escolha um local adequado para maximizar a produção."
    },
    {
        "name": "Chuchu",
        "image": "https://images.unsplash.com/photo-1716652391399-c2e60420f29d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "O chuchu é uma hortaliça de baixa caloria, rica em água e com propriedades antioxidantes. É uma excelente opção para quem busca uma alimentação saudável, pois pode ser incorporado em diversas receitas. Além disso, suas fibras ajudam na digestão e proporcionam sensação de saciedade, contribuindo para o controle de peso.",
        "recommendation": {
            "name": "Adubo de casca de banana",
            "color": "#eab308",
            "description": "O uso de cascas de banana como adubo fornece potássio, que é crucial para o desenvolvimento da planta e para a produção de frutos. Este adubo natural ajuda a fortalecer as raízes e a resistência das plantas, resultando em chuchus mais saudáveis e produtivos."
        },
        "difficulty": {
            "level": "Médio",
            "color": "#c2410c"
        },
        "tip": "Dê suporte adequado para os ramos, já que o chuchu é uma planta trepadeira. Utilizar treliças ou outros suportes garantirá que a planta tenha espaço suficiente para crescer, facilitando a colheita."
    }
]


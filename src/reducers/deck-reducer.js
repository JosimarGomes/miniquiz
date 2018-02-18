import { LOAD_DECK_SUCCESS, SELECT_DECK_SUCCESS, DELETE_DECK_SUCCESS } from '../actions/constants';

export const decks = (state=initialQuiz, action)=>{ 
    switch(action.type){
        case LOAD_DECK_SUCCESS:
            return [...state, ...action.payload];
        case DELETE_DECK_SUCCESS:
            return action.payload
        default : 
            return state;
    }
}

export const deck = (state={}, action)=>{ 
    switch(action.type){        
        case SELECT_DECK_SUCCESS:
            return action.payload;        
        default : 
            return state;
    }
}

const initialQuiz = [
    {
        id: 'sjd3jhsdf',
        title: 'Português',
        questions: [
            {
                question: 'Seguindo as regras gramaticais, você pode dizer "os menino pega o peixe"?',
                answer: 'Não, o correto seria "os meninos pegam o peixe"'
            },
            {
                question: 'A ortografia dessa palavra pega muita gente: esseção, exceção, excessão ou eceção?',
                answer: 'Exceção'
            },
            {
                question: 'Sabe o que significam respectivamente as palavras ratificar e retificar?',
                answer: 'Confirmar e alinhar'
            },
            {
                question: '"Ouviram do Ipiranga as margens plácidas." Qual o tipo de sujeito presente nessa famosa frase?',
                answer: 'Simples'
            },
            {
                question: '"A caverna estava meio escura", o núcleo do sujeito dessa oração é:',
                answer: 'Caverna'
            },
            {
                question: 'Sobre a colocação correta do "porque"? João: ___ é separado? Bia: ____ não é junto! João: Mas ___? Bia: O ____ eu não sei.',
                answer: 'Por que, Porque, por quê e porquê'
            },
            {
                question: '"Engodar" é o mesmo que:',
                answer: 'Iludir'
            },
            {
                question: 'Complete com "Em frente" e "enfrente": Siga ___ e ___ seus medos',
                answer: 'Em frente e enfrente'
            },
            {
                question: 'Qual o plural correto de couve-flor, girassol, pudim, giz e lápis?',
                answer: 'Couves-flores, girassóis, pudins, gizes e lápis'
            },
            {
                question: 'As dez classes gramaticais são fundamentais para a compreensão da norma culta da língua portuguesa. Dessa forma, qual é a ordem correta das classes em uma oração?',
                answer: 'Artigo, substantivo, adjetivo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição'
            },
            {
                question: 'No refrão da música "Cálice", do cantor e compositor Chico Buarque, "Pai, afasta de MIM ESSE cálice...", os termos destacados exercem, morfologicamente, a função de pronomes. Quais, respectivamente?',
                answer: 'Pronome pessoal do caso oblíquo e pronome demonstrativo'
            },
            {
                question: 'Qual é o pretérito mais-que-perfeito do verbo "ESTUDAR", na forma simples?',
                answer: 'Estudara'
            },
            {
                question: 'No trecho da música "O Tempo não Para", de Cazuza, "A tua piscina está cheia de ratos...", os termos "tua", "piscina" e "de", morfologicamente, exercem função de?',
                answer: 'Pronome possessivo, substantivo concreto e preposição'
            },
            {
                question: 'Na oração "As providências tomadas foram infrutíferas, LAMENTAVELMENTE", o termo destacado, morfologicamente, exerce função de?',
                answer: 'Advérbio de intensidade'
            },
            {
                question: 'Julgue, morfologicamente, o verbo destacado da oração "Maria RECEBEU flores de João":',
                answer: 'Verbo transitivo direto e indireto'
            }
        ]
    }
]
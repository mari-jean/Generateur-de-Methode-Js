const decks = {
    themes : {
        'GestionDesTableaux': {
            'pop()': {
                description: 'Supprime le dernier élément d’un tableau',
                syntaxe: 'array.pop()'
            },
            'push()': {
                description: 'Ajoute un nouvel élément à la fin du tableau',
                syntaxe: 'array.push(element1, element2, ..., elementN)'
            },
            'sort()': {
                description: 'Trie les éléments par ordre alphabétique',
                syntaxe: 'array.sort(compareFunction)'
            },
            'reverse()': {
                description: 'Trier les éléments dans un ordre décroissant',
                syntaxe: 'array.reverse()'
            },
            'shift()': {
                description: 'Supprime le premier élément d’un tableau',
                syntaxe: 'array.shift()'
            },
            'toString()': {
                description: 'Convertit des éléments en chaînes de caractères',
                syntaxe: 'array.toString()'
            },
            'unshift()': {
                description: 'Ajoute un nouvel élément au début d’un tableau',
                syntaxe: 'array.unshift(element1, element2, ..., elementN)'
            },
            'concat()': {
                description: 'Fusionne plusieurs tableaux en un seul',
                syntaxe: 'array.concat(array2, array3, ..., arrayN)'
            },
            'join()': {
                description: 'Combine les éléments d’un tableau en une seule chaîne de caractères et renvoie la chaîne',
                syntaxe: 'array.join(separator)'
            },
            'slice()': {
                description: 'Copie une partie d’un tableau dans un nouveau tableau',
                syntaxe: 'array.slice(start, end)'
            },
            'splice()': {
                description: 'Est utilisé pour modifier le contenu d’un tableau en supprimant les éléments existants et/ou en ajoutant de nouveaux éléments.',
                syntaxe: 'array.splice(start, deleteCount, item1, item2, ...)'
            },
            'valueOf()': {
                description: 'Retourne la valeur primitive de l’objet spécifié',
                syntaxe: 'array.valueOf()'
            },
            'indexOf()': {
                description: 'Retourne le premier index auquel l’élément donné peut être trouvé dans un tableau, ou -1 s’il n’est pas présent dans un tableau.',
                syntaxe: 'array.indexOf(searchElement[, fromIndex])'
            },
            'lastIndexOf()': {
                description: 'Retourne le dernier index auquel l’élément donné peut être trouvé dans un tableau, ou -1 s’il n’est pas présent dans un tableau.',
                syntaxe: 'array.lastIndexOf(searchElement[, fromIndex])'
            }
        },

        'GestionDesStrings': {
            'charAt()': {
            description: 'Renvoie le caractère à la position spécifiée.',
            syntaxe: 'string.charAt(index)'
            },
            'charCodeAt()': {
            description: 'Renvoie une valeur numérique indiquant l\'ordre de codage Unicode du caractère à la position donnée.',
            syntaxe: 'string.charCodeAt(index)'
            },
            'concat()': {
            description: 'Fusionne deux ou plusieurs chaînes et renvoie une nouvelle chaîne.',
            syntaxe: 'string.concat(string1, string2, ..., stringN)'
            },
            'endsWith()': {
            description: 'Détermine si une chaîne de caractères se termine par les caractères d\'une autre chaîne.',
            syntaxe: 'string.endsWith(searchString[, length])'
            },
            'fromCharCode()': {
            description: 'Renvoie une chaîne créée à partir d\'une séquence de valeurs unitaires UTF-16.',
            syntaxe: 'String.fromCharCode(char1, char2, ..., charN)'
            },
            'includes()': {
            description: 'Détermine si une chaîne de caractères peut être trouvée dans une autre chaîne.',
            syntaxe: 'string.includes(searchString[, position])'
            },
            'indexOf()': {
            description: 'Renvoie la position de la première occurrence d\'une valeur spécifiée.',
            syntaxe: 'string.indexOf(searchValue[, fromIndex])'
            },
            'lastIndexOf()': {
            description: 'Renvoie la position de la dernière occurrence d\'une valeur spécifiée.',
            syntaxe: 'string.lastIndexOf(searchValue[, fromIndex])'
            },
            'match()': {
            description: 'Recherche une chaîne pour une correspondance contre une expression régulière et renvoie les correspondances.',
            syntaxe: 'string.match(regexp)'
            },
            'repeat()': {
            description: 'Renvoie une nouvelle chaîne contenant un certain nombre de copies de la chaîne originale.',
            syntaxe: 'string.repeat(count)'
            },
            'replace()': {
            description: 'Recherche et remplace une valeur dans une chaîne.',
            syntaxe: 'string.replace(searchValue|regexp, replaceValue)'
            },
            'search()': {
            description: 'Recherche une valeur dans une chaîne et renvoie sa position.',
            syntaxe: 'string.search(regexp)'
            },
            'slice()': {
            description: 'Extrait une partie d\'une chaîne et renvoie une nouvelle chaîne.',
            syntaxe: 'string.slice(beginIndex[, endIndex])'
            },
            'split()': {
            description: 'Sépare une chaîne en un tableau de sous-chaînes.',
            syntaxe: 'string.split([separator[, limit]])'
            },
            'startsWith()': {
            description: 'Détermine si une chaîne commence par les caractères d\'une autre chaîne.',
            syntaxe: 'string.startsWith(searchString[, position])'
            },
            'substr()': {
            description: 'Renvoie une partie de la chaîne, en commençant à la position spécifiée et en s\'étendant pour le nombre spécifié de caractères suivants.',
            syntaxe: 'string.substr(start[, length])'
            },
            'substring()': {
            description: 'Renvoie une partie de la chaîne entre deux indices.',
            syntaxe: 'string.substring(indexStart[, indexEnd])'
            },
            'toLocaleLowerCase()': {
            description: 'Convertit une chaîne en minuscules, en tenant compte de la locale.',
            syntaxe: 'string.toLocaleLowerCase([locales[, options]])'
            },
            'toLocaleUpperCase()': {
            description: 'Convertit une chaîne en majuscules, en tenant compte de la locale.',
            syntaxe: 'string.toLocaleUpperCase([locales[, options]])'
            },
            'toLowerCase()': {
            description: 'Convertit une chaîne en minuscules.',
            syntaxe: 'string.toLowerCase()'
            },
            'toString()': {
            description: 'Renvoie une chaîne représentant l\'objet spécifié.',
            syntaxe: 'string.toString()'
            },
            'toUpperCase()': {
            description: 'Convertit une chaîne en majuscules.',
            syntaxe: 'string.toUpperCase()'
            },
            'trim()': {
            description: 'Supprime les blancs des deux extrémités d\'une chaîne.',
            syntaxe: 'string.trim()'
            },
            'valueOf()': {
            description: 'Renvoie la valeur primitive de l\'objet String.',
            syntaxe: 'string.valueOf()'
            },
        },

        'GestionDesObject': {
            'Object.keys()': {
                description: 'Renvoie les noms des propriétés énumérables d\'un objet',
                syntaxe: 'Object.keys(obj)'
                },
                'Object.values()': {
                description: 'Renvoie les valeurs des propriétés énumérables d\'un objet',
                syntaxe: 'Object.values(obj)'
                },
                'Object.entries()': {
                description: 'Renvoie des paires clé-valeur pour les propriétés énumérables d\'un objet',
                syntaxe: 'Object.entries(obj)'
                },
                'Object.assign()': {
                description: 'Copie les valeurs de propriétés énumérables d\'un ou plusieurs objets sources vers un objet cible',
                syntaxe: 'Object.assign(target, ...sources)'
                },
                'Object.hasOwnProperty()': {
                description: 'Vérifie si un objet possède la propriété spécifiée',
                syntaxe: 'obj.hasOwnProperty(prop)'
                },
                'Object.create()': {
                description: 'Crée un nouvel objet avec le prototype spécifié',
                syntaxe: 'Object.create(proto, [propertiesObject])'
                },
            },

        'Fonctions': {
            'functionName()': {
            description: 'Déclare une fonction nommée avec des paramètres',
            syntaxe: 'function functionName(parameters) { ... }'
            },
            '() => {}': {
            description: 'Déclare une fonction fléchée',
            syntaxe: '() => { ... }'
            },
            'functionName.call()': {
            description: 'Appelle une fonction avec un objet this et des arguments séparés',
            syntaxe: 'functionName.call(thisArg, arg1, arg2, ...)'
            },
            'functionName.apply()': {
            description: 'Appelle une fonction avec un objet this et un tableau d\'arguments',
            syntaxe: 'functionName.apply(thisArg, [argsArray])'
            },
            'functionName.bind()': {
            description: 'Crée une nouvelle fonction avec un this prédéfini et des arguments',
            syntaxe: 'let newFunc = functionName.bind(thisArg, arg1, arg2, ...)'
            },
            'arguments': {
            description: 'Un objet représentant les arguments passés à une fonction',
            syntaxe: 'arguments[index]'
            },
            'Function.prototype.call()': {
            description: 'Appelle une fonction avec un objet this et des arguments séparés',
            syntaxe: 'functionName.call(thisArg, arg1, arg2, ...)'
            },
        },

        'Opérateurs': {
            '+': {
            description: 'Opérateur d\'addition',
            syntaxe: 'a + b'
            },
            '-': {
            description: 'Opérateur de soustraction',
            syntaxe: 'a - b'
            },
            '*': {
            description: 'Opérateur de multiplication',
            syntaxe: 'a * b'
            },
            '/': {
            description: 'Opérateur de division',
            syntaxe: 'a / b'
            },
            '%': {
            description: 'Opérateur de modulo',
            syntaxe: 'a % b'
            },
            '++': {
            description: 'Opérateur d\'incrémentation',
            syntaxe: 'a++'
            },
            '--': {
            description: 'Opérateur de décrémentation',
            syntaxe: 'a--'
            },
            '===': {
            description: 'Opérateur d\'égalité stricte',
            syntaxe: 'a === b'
            },
            '!==': {
            description: 'Opérateur de non-égalité stricte',
            syntaxe: 'a !== b'
            },
        },

        'Contrôle de Flux (if, else, switch)': {
            'if...else': {
                description: 'Structure de contrôle conditionnelle pour exécuter des blocs de code en fonction d\'une condition',
                syntaxe: 'if (condition) { ... } else if (autreCondition) { ... } else { ... }'
            },
            'switch': {
                description: 'Structure de contrôle pour les multiples cas de décision',
                syntaxe: 'switch (expression) { case valeur1: ... break; case valeur2: ... break; default: ... }'
            }
        },
        
        'Boucles (for, while, do...while)': {
            'for': {
                description: 'Boucle pour exécuter un bloc de code un nombre spécifique de fois',
                syntaxe: 'for (initialisation; condition; mise à jour) { ... }'
                },
            'while': {
                description: 'Boucle pour exécuter un bloc de code tant qu\'une condition est vraie',
                syntaxe: 'while (condition) { ... }'
                }
            },
        
        'Fonctions Fléchées': {
            '() => {}': {
                description: 'Déclare une fonction fléchée',
                syntaxe: '() => { ... }'
                }
            },

        
        'Destructuring': {
            'Destructuring d\'objets': {
                description: 'Extrait les valeurs des propriétés d\'un objet dans des variables distinctes',
                syntaxe: 'const { prop1, prop2 } = objet;'
            },

        'Destructuring d\'arrays': {
            description: 'Extrait les éléments d\'un tableau dans des variables distinctes',
            syntaxe: 'const [ element1, element2 ] = tableau;'
            },
        },

        'Spread et Rest': {
            'Spread Operator': {
                description: 'Étend les éléments d\'un tableau ou les propriétés d\'un objet dans un nouvel objet ou tableau',
                syntaxe: 'const newArray = [...ancienTableau]; const nouvelObjet = { ...ancienObjet };'
            },
            'Rest Parameter': {
                description: 'Regroupe les arguments restants d\'une fonction dans un tableau',
                syntaxe: 'function maFonction(param1, param2, ...rest) { ... }'
            }
            },
        
        'Objets Map et Set': {
            'Map': {
                description: 'Collection d\'éléments avec des paires clé-valeur et un accès rapide',
                syntaxe: 'const map = new Map(); map.set(clé, valeur);'
            },            
            'Set': {
                description: 'Collection d\'éléments uniques sans doublons',
                syntaxe: 'const set = new Set(); set.add(élément);'
            },
            },

        'Classes et Héritage': {
            'class': {
                description: 'Déclare une classe pour créer des objets avec des propriétés et des méthodes',
                syntaxe: 'class MaClasse { constructor() { ... } method() { ... } }'
            },
            'extends': {
                description: 'Hérite des propriétés et méthodes d\'une classe parente',
                syntaxe: 'class Enfant extends Parent { constructor() { super(); ... } }'
            }
            },
        
        'Promesses et Async/Await': {
            'Promise': {
                description: 'Représente une valeur pouvant être disponible maintenant, dans le futur ou jamais',
                syntaxe: 'const promise = new Promise((resolve, reject) => { ... });'
            },
            'async/await': {
                description: 'Gère les opérations asynchrones de manière plus lisible et séquentielle',
                syntaxe: 'async function maFonction() { const result = await promesse; ... }'
            }
            },
        
        'Gestion des Erreurs (try, catch, throw)': {
            'try...catch': {
                description: 'Capture les erreurs et gère les exceptions dans un bloc de code',
                syntaxe: 'try { ... } catch (erreur) { ... }'
            },
            'throw': {
                description: 'Lance une exception personnalisée avec un message',
                syntaxe: 'throw new Error(\'Message d\'erreur\');'
            }
            },
    
        'Modules (import/export)': {
            'import': {
                description: 'Importe des fonctionnalités ou des valeurs d\'autres fichiers JavaScript',
                syntaxe: 'import { fonction1, fonction2 } from \'./chemin/vers/fichier.js\';'
            },
            'export': {
                description: 'Exporte des fonctionnalités ou des valeurs pour être utilisées dans d\'autres fichiers JavaScript',
                syntaxe: 'export function maFonction() { ... } export const maVariable = ...;'
            }
            },

        'Opérateurs ternaires': {
            'Opérateur ternaire': {
                description: 'Forme courte d\'une structure if...else pour retourner une valeur en fonction d\'une condition',
                syntaxe: 'condition ? valeurSiVraie : valeurSiFausse'
            }
            },
        
        'Expressions régulières': {
        'RegExp': {
            description: 'Permet de rechercher et de manipuler des motifs de texte complexes',
            syntaxe: '/motif/modificateurs'
        }
        },
    
        'Fonctions de Haut Niveau (map, filter, reduce)': {
        'map': {
            description: 'Applique une fonction à chaque élément d\'un tableau et crée un nouveau tableau avec les résultats',
            syntaxe: 'const nouveauTableau = tableau.map(element => fonction(element));'
        },
        'filter': {
            description: 'Crée un nouveau tableau avec les éléments qui satisfont une condition donnée',
            syntaxe: 'const nouveauTableau = tableau.filter(element => condition(element));'
        },
        'reduce': {
            description: 'Applique une fonction à une accumulation et à chaque élément d\'un tableau pour réduire le tableau à une seule valeur',
            syntaxe: 'const resultat = tableau.reduce((accumulation, element) => fonction(accumulation, element), valeurInitiale);'
        }
        },
    
        'Événements et Gestionnaires d\'Événements': {
        'addEventListener': {
            description: 'Associe un gestionnaire d\'événements à un élément HTML pour réagir à des événements spécifiques',
            syntaxe: 'element.addEventListener(\'nomEvenement\', fonctionGestionnaire);'
        }
        },
    
        'Manipulation du DOM (Document Object Model)': {
        'querySelector': {
            description: 'Sélectionne un élément HTML dans le DOM en utilisant un sélecteur CSS',
            syntaxe: 'const element = document.querySelector(\'selecteurCSS\');'
        },
        'innerHTML': {
            description: 'Modifie le contenu HTML d\'un élément',
            syntaxe: 'element.innerHTML = \'nouveauContenu\';'
        }
        },
    
        'Requêtes HTTP (Fetch, XMLHttpRequest)': {
        'Fetch API': {
            description: 'Effectue des requêtes HTTP pour récupérer des données depuis un serveur',
            syntaxe: 'fetch(\'url\').then(response => response.json()).then(data => { ... });'
        },
        'XMLHttpRequest': {
            description: 'Effectue des requêtes HTTP asynchrones pour récupérer des données depuis un serveur',
            syntaxe: 'const xhr = new XMLHttpRequest(); xhr.open(\'GET\', \'url\'); xhr.onload = () => { ... }; xhr.send();'
        }
        },

        'Web API (LocalStorage, SessionStorage, etc.)': {
            'LocalStorage': {
                description: 'Stocke des données dans le navigateur avec une durée de vie persistante',
                syntaxe: 'localStorage.setItem(\'clé\', \'valeur\'); const valeur = localStorage.getItem(\'clé\');'
            },
            'SessionStorage': {
                description: 'Stocke des données dans le navigateur avec une durée de vie limitée à la session',
                syntaxe: 'sessionStorage.setItem(\'clé\', \'valeur\'); const valeur = sessionStorage.getItem(\'clé\');'
            }
            },
        
        'Travail avec JSON': {
        'JSON.parse()': {
            description: 'Convertit une chaîne JSON en objet JavaScript',
            syntaxe: 'const objet = JSON.parse(\'{ "cle": "valeur" }\');'
        },
        'JSON.stringify()': {
            description: 'Convertit un objet JavaScript en chaîne JSON',
            syntaxe: 'const chaineJSON = JSON.stringify(objet);'
        }
        },
    
        'Temporisation (setTimeout, setInterval)': {
        'setTimeout': {
            description: 'Exécute une fonction après un délai donné (en millisecondes)',
            syntaxe: 'setTimeout(() => { ... }, delai);'
        },
        'setInterval': {
            description: 'Exécute une fonction de manière répétée à intervalles réguliers',
            syntaxe: 'setInterval(() => { ... }, intervalle);'
        }
        },
    
        'Date et Heure': {
        'Date': {
            description: 'Permet de travailler avec les dates et les heures',
            syntaxe: 'const dateActuelle = new Date();'
        },
        'Méthodes Date': {
            description: 'Les méthodes de l\'objet Date pour accéder aux éléments de date et d\'heure',
            syntaxe: 'const annee = date.getFullYear(); const mois = date.getMonth();'
        }
        },
    
        'Math et Nombres': {
        'Math': {
            description: 'Fournit des méthodes pour effectuer des opérations mathématiques',
            syntaxe: 'const resultat = Math.sqrt(nombre);'
        }
        },

        'Conversions de Type de Données': {
            'Conversion en Nombre': {
            description: 'Convertit une valeur en nombre en utilisant Number() ou parseInt()',
            syntaxe: 'const nombre = Number(\'123\'); const entier = parseInt(\'456\');'
            },
            'Conversion en Chaîne': {
            description: 'Convertit une valeur en chaîne en utilisant String() ou toString()',
            syntaxe: 'const chaine = String(123); const chaine2 = (456).toString();'
            }
        },
        
        'Variables (let, const)': {
            'let': {
            description: 'Déclare une variable pouvant être réassignée',
            syntaxe: 'let maVariable = \'valeur\'; maVariable = \'nouvelleValeur\';'
            },
            'const': {
            description: 'Déclare une variable en lecture seule qui ne peut pas être réassignée',
            syntaxe: 'const maConstante = \'valeur\';'
            }
        },
        
        'Décomposition (Spread, Rest)': {
            'Spread Operator': {
            description: 'Étend les éléments d\'un tableau ou les propriétés d\'un objet dans un nouvel objet ou tableau',
            syntaxe: 'const newArray = [...ancienTableau]; const nouvelObjet = { ...ancienObjet };'
            },
            'Rest Parameter': {
            description: 'Regroupe les arguments restants d\'une fonction dans un tableau',
            syntaxe: 'function maFonction(param1, param2, ...rest) { ... }'
            }
        }
    },
};


export { decks };
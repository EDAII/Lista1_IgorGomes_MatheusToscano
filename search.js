var team = [
    'Buffon',
    'Neur',
    'Oblak',
    'Alisson',
    'Sergio Ramos',
    'Pique',
    'Dani Alves',
    'Yago Pikachu',
    'Toni Kroos',
    'Modric',
    'James Rodriguez',
    'Arrascaeta',
    'Ozil',
    'Draxler',
    'Hazard',
    'Mbappe',
    'Cristiano Ronaldo',
    'Lionel Messi',
    'Neymar',
    'Gabigol',
    'Dudu',
    'Maradona',
    'Pele',
    'Romario',
    'Crespo',
    'Firmino',
    'Tevez',
];

function linear() {
    let n = team.length
    let a = []
    let k = String(prompt('Digite o nome do jogador que deseja encontrar: '))
    for (let i = 0; i < team.length; i++) {
        if (k === team[i]) {
            // document.body.innerText('');
            document.writeln('Jogador ' + team[i] + ' está na posição ' + i)
            break
        } else if (i === (team.length - 1) && k !== team[i]) {
            // document.body.innerText('');
            document.writeln('Jogador não encontrado!')
        }
    }
}

function makeList(array) {
    var list = document.createElement('ul');
    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }
    return list;
}

document.getElementById('plantel').appendChild(makeList(team));
 var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  let domain =['.com', '.net', 'us' , 'io' ];

 

function ranDom() {
    var container = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)] + domain[Math.floor(Math.random() * domain.length)];

    return container;
}

console.log(ranDom());


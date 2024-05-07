const ranks = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];
let heroName = "Lipex";
let heroXp = Math.round(Math.random() * 1000);
let heroRank = ranks[0];

for (let i = 0; i < 10; i++) {
  heroXp = heroXp + Math.round(Math.random() * 1000);
  if (heroXp <= 1000) {
    heroRank = ranks[0];
  }
  if (heroXp >= 1001 && heroXp <= 2000) {
    heroRank = ranks[1];
  }
  if (heroXp >= 2001 && heroXp <= 5000) {
    heroRank = ranks[2];
  }
  if (heroXp >= 5001 && heroXp <= 7000) {
    heroRank = ranks[3];
  }
  if (heroXp >= 7001 && heroXp <= 8000) {
    heroRank = ranks[4];
  }
  if (heroXp >= 8001 && heroXp <= 9000) {
    heroRank = ranks[5];
  }
  if (heroXp >= 9001 && heroXp <= 10000) {
    heroRank = ranks[6];
  }
  if (heroRank > 10000) {
    heroRank = ranks[7];
  }
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroRank}`);

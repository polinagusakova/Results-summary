import user from "./data.json" with { type: 'json' };

let arr = ['Reaction', 'Memory', 'Verbal', 'Visual']

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < user.length; j++) {
    if (arr[i] === user[j].category) {
      console.log(user[j].category)
      let newImage = document.createElement('img');
      newImage.src = user[j].icon;
      newImage.className = 'image'
      document.getElementById(user[j].category).appendChild(newImage);

      let newCategory = document.createElement('h3');
      newCategory.innerHTML = user[j].category;
      newCategory.className = 'category';
      document.getElementById(user[j].category).appendChild(newCategory);

      let newScore = document.createElement('p');
      newScore.innerHTML = user[j].score;
      newScore.className = 'score';
      document.getElementById(user[j].category).appendChild(newScore);

      let total = document.createElement('p');
      total.innerHTML = '/ 100';
      total.className = 'total';
      document.getElementById(user[j].category).appendChild(total);
    }
  }
}
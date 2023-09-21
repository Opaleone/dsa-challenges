const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
const birds = ['Mallard', 'African', 'Chicken', 'Parrot', 'Pilgrim', 'Eagle', 'Toulouse', 'Steinbacher'];

const sortBirds = (birds) => {
  let hash = {};
  let notGeese = [];

  for (const goose of geese) {
    hash[goose] = true;
  }

  for (let i = 0; i < birds.length; i++) {
    if (!hash[birds[i]]) notGeese.push(birds[i]);
  }

  return notGeese;
}

console.log(sortBirds(birds));
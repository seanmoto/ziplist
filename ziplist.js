function zipList(list1, list2) {
  const combined = [];
  const size = list1.length;
  let index = 0;
  while (index < size) {
    combined.push(list1[index]);
    combined.push(list2[index]);
    index++;
  }
  return combined;
}

function zipListTheSimpleWay(list1, list2) {
  const combined = _.zip(list1, list2);
  return _.flatten(combined);
}

const myList = [1, 2, 3, 4];
const otherList = ['a', 'b', 'c', 'd'];

console.log(zipList(myList, otherList));
console.log(zipListTheSimpleWay(myList, otherList));

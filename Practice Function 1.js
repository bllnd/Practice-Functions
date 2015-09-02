var names = ['Bob','Brenda','Ishmael','Earl']
var complement = " is great!"

complementGiver(names,complement) // Results in____
// ['Bob is great!','Brenda is great!','Ishmael is great!','Earl is great!']

function complementGiver(arr,phrase){
  var complete=[];
  for (var i =0; i<arr.length;i++){
    complete.push(arr[i]+ phrase);
  }
  return complete;
}
console.log(complementGiver(names,complement));

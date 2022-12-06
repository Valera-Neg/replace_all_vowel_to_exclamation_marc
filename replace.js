function replace(s){
  const vowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u' ];
  let res = "";
  for (let i = 0; i < s.length; i++) {
      if (vowel.includes(s[i])) {
     
        res = res + '!';
      } else {
        res = res + s[i];
      }
    } 
  return res;
}

console.log(replace("Hi!")) //> "!H!!"
console.log(replace("!Hi! Hi!")) //> "!H!! H!!"
console.log(replace("aeiou")) //> "!!!!!"
console.log(replace("ABCDE")) //> "!BCD!"
console.log(replace("kHKQR ISc IKQOi YET PQfEzdJ uxZdT! ejnQx !uWIcyDY ")) //> 'kHKQR !Sc !KQ!! !!T PQf!zdJ !xZdT! !jnQx !!!!c!D!'
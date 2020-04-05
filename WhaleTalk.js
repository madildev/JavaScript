let input="Adil is Handsome";
const vowels =['a','e','i','o','u'];
let resultArray=[];
for(let i=0;i<input.length;i++)
{
  for(let j=0;j<vowels.length;j++)
  {
    if(input[i]===vowels[j]) // Compares Vowels
    {
      resultArray.push(input[i]); // Adds vowels to the result Array
    }
  }
  if(input[i]==='e') // Check the e's in the input phrase
      {
        resultArray.push(input[i]); // double the number of e's
      }else if(input[i==='u']){
        resultArray.push(input[i]);
      }
}
console.log(resultArray.join('')); // Displays the phrase in Whale Talk
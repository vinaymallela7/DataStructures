let b = "19837658191095787329";
let a = 1221;
let result = 0;
for (let i = 0; i < b.length; i++)
{
    result = (result * 10 +
              b.charAt(i) - '0') % a;
   console.log(result);
}
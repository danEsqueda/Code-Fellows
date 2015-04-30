
var a = ["a", "a", "b", "a", "a", "b"];
var b = ["b", "a", "b", "a", "a", "a"];


function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = new Array();

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}

var array = ["aabaab", "babaaa"];

function sharedStart(array){
    var A = array.concat().sort(),
    a1 = A[0], // first element in the array
    a2 = A[A.length-1], // last element in the array
    L = a1.length, //
    i = 0;
    while(i<L && a1.charAt(i)=== a2.charAt(i))
      i++;
    return a1.substring(0, i);
}

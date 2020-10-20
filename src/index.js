
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let resMatrix=[];
  if(arguments.length===0) return [];
  for(let i=0;i<matrix.length;i++)
  { 
    if(i%2 !== 0)
    {
      for(let j = matrix[i].length-1; j >= 0; j--)
      {
       resMatrix.push(matrix[i][j]);
      }
    }
    else
    {
     for(let j = 0; j < matrix[i].length; j++)
      {
       resMatrix.push(matrix[i][j]);
      }
    }
  }
  return resMatrix;
}

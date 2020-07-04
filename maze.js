function MazeGame(s){
    let array1 = []
    let array2 = []
    let array3 = []
    let array4 = []
  
    let maze = []
  
    
    for(let i = 1; i <= s ; i++ ){
      if(i %2 === 0){
      array1.push(i)  
      }else{
        array2.push(i)
      }
    }
  
    for(let i = 0; i < array2.length; i++){
      if(i %2 == 0){
        array3.push(array2[i])
      }else {
        array4.push(array2[i])
      }
    }
    for (let i= 1; i <= s ;i++){
      let result = ''
      for (let j= 1; j <= s;j++){
        if(j == 1 || j == s ){
          result += '@ '
        }else{
          for(let f = 0; f < array3.length; f++){
            if(i == array3[f] && j == 2){
              result += '  ' 
            }else if(i == array3[f]){
              result += '@ ' 
            }
  
          }
  
          for(let f = 0; f < array4.length; f++){
            if(i == array4[f] && j == s-1){
              result += '  ' 
            }else if(i == array4[f]){
              result += '@ ' 
            }
  
          }
  
          for(let h = 0; h < array1.length; h++){
            if(i == array1[h]){
              result += '  ' 
            }
          }
          
        }
      }
      maze.push(result)
    }
    maze.forEach(row => console.log(row))
    // console.log(maze)
    
  }
  
  MazeGame(15)
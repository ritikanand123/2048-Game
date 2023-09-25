let score  = 0;
let r = 4;
let c = 4;

window.onload = function(){
    setGame();
};
function setGame(){

    let board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    // let board = [
    //     [2,2,2,2],
    //     [2,2,2,2],
    //     [4,4,8,8],
    //     [4,4,8,8]
    // ];

    for(let i = 0 ; i < r ; i++ ){
        for(let j  = 0 ; j < c ;j++){
            let tile = document.createElement("div");
            tile.id = i.toString() + "." +j.toString();
            let num = board[i][j];
            updateTile(tile , num);
            
            document.querySelector(".board").append(tile);
            
        }
    }
    setTwo();
    setTwo();


    function updateTile(tile , num){

        tile.innerText = "";
        tile.classList.value = "";
        tile.classList.add("tiles");
        if(num > 0){
            tile.innerText = num;
            if(num <= 1024){
                tile.classList.add("t"+num.toString());
            }else{
                tile.classList.add("t2");
            }

        }
    }

    document.addEventListener("keyup",(e) => {   
        if(e.code == "ArrowLeft"){
            slideLeft();
            setTwo();
        }
        if(e.code == "ArrowRight"){
            slideRight();
            setTwo();
        }   
        if(e.code == "ArrowDown"){
            slideDown();
            setTwo();
        }
        if(e.code == "ArrowUp"){
            slideUp();
            setTwo();
        }
        document.getElementById("Score").innerText  = score;
    });

    function filterZero(row){
        return row.filter(num => num!=0);
    }

    function slide(row){

        
        
        for(let i = 0 ; i < row.length ;i++){
            if(row[i] == row[i+1]){
                row[i] = row[i]*2;
                row[i+1] = 0;
                score+=row[i];
            }
        }
        
        row = filterZero(row);
        

        for(let i = row.length ;i < c ;i++){
            row.push(0);
        }
        
        return row;

    }

    function slideLeft(){

        for(let  i = 0 ; i <r ;i++){
            let row  = board[i];
            row = slide(row);
            board[i] = row;
            for(let j = 0 ; j < c ;j++){
                let tile = document.getElementById(i.toString() + "." + j.toString());
                let num = board[i][j];
                updateTile(tile , num);
                
            }  
        }
    }
    function slideRight(){

        for(let  i = 0 ; i <r ;i++){
            let row  = board[i];
            row.reverse();
            row = slide(row);
            board[i] = row.reverse();

            for(let j = 0 ; j < c ;j++){
                let tile = document.getElementById(i.toString() + "." + j.toString());
                let num = board[i][j];
                updateTile(tile , num);
                
            }  
        }
    }

    function slideUp(){
    
        for(let j = 0 ; j < c ;j++){
            let row  = [ board[0][j] , board[1][j] ,board[2][j] ,board[3][j] ];
            row = slide(row);
            board[0][j] = row[0];
            board[1][j] = row[1];
            board[2][j] = row[2];
            board[3][j] = row[3];
            for(let i = 0 ; i < r ;i++){
                let tile = document.getElementById(i.toString() + "." + j.toString());
                let num = board[i][j];
                updateTile(tile , num);
                 
            }
        }        
    }
    function slideDown(){
    
        for(let j = 0 ; j < c ;j++){
            let row  = [ board[0][j] , board[1][j] ,board[2][j] ,board[3][j] ];
            row.reverse();
            row = slide(row);
            row.reverse();
            board[0][j] = row[0];
            board[1][j] = row[1];
            board[2][j] = row[2];
            board[3][j] = row[3];
            for(let i = 0 ; i < r ;i++){
                let tile = document.getElementById(i.toString() + "." + j.toString());
                let num = board[i][j];
                updateTile(tile , num);
                 
            }
        }        
    }

    function isThereEmptyTile(){
        for(let i  =0 ; i < r ; i++){
            for(let j = 0 ; j < c ;j++){
                if(board[i][j] == 0){
                    return true;
                }
            }
        }
        return false;
    }

    function setTwo(){
        
        if(isThereEmptyTile() == false){
            
            return;
        }
        

        let found  = false;
        while(found != true){

            let randrow = Math.floor(Math.random() * r);
            let randcol = Math.floor(Math.random() * c);

            if(board[randrow][randcol] == 0){
                board[randrow][randcol] = 2;

                let tile = document.getElementById(randrow.toString() + "." + randcol.toString());
                
                tile.innerText = "2";
                tile.classList.add("t2");
                found = true;
            }

        }



    }


    
}


class Ship{
    constructor(hull, firepower, accuracy){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
        this.alive = true
    }
}

class USSSchwarzenegger extends Ship{
    constructor(hull, firepower, accuracy){
    super(hull, firepower, accuracy)

    }
    attack(enemy){
        if(this.accuracy > Math.random()){
           
                enemy.hull -= this.firepower
                alert("You hit the Alien!")
            console.log("You hit the Alien!")
            if(enemy.hull <= 0){
                enemy.alive = false
                alert("The Alien has been killed!")
                console.log("The Alien has been killed!")
            }
        }else{
            alert("You missed!")
            console.log("You missed!!")
        
    }
    }
    }



class Enemy extends Ship{
    constructor(hull, firepower, accuracy){
        super(hull, firepower, accuracy)
        this.hull = Math.floor(Math.random() * 4) + 3
        this.firepower = Math.floor(Math.random() * 3) + 2
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10
    }
    
        attack(player){
            if(this.accuracy > Math.random()){
                player.hull-=this.firepower
                alert(`The enemy hit your ship! You have ${player.hull} hit points left.`)
                console.log(`The enemy hit your ship! You have ${player.hull} hit points left.`)
                if(player.hull <= 0){
                    player.alive = false
                    alert("Your ship has been destroyed! Game Over!")
                    console.log("Your ship has been destroyed! Game Over!")
                }
            }else{
                alert("The Alien missed you this time!")
                console.log("The Alien missed you this time!")
            }
            }
    }



let hero = new USSSchwarzenegger (20, 5, .7)
let badGuy = new Enemy()


let enemyFleet = []
for (let i = 0; i <6; i++){
enemyFleet[i] = new Enemy()
}




function continueBattle (){
  
    let cont = prompt("Would you like to continue battling?", "Yes or No")
    if(cont.toLowerCase() === "yes"){
        return true
   
    }else{
        
        (cont.toLowerCase()==='no')
            alert("You have run away like a little baby! Earth will be ruined!")
            return false

    }
  
}





function battle(player, eF){
    for(let i=0; i < eF.length; i++ ){
       
        if(player.alive == true){alert('Battle #' + (i + 1))}
        if(continueBattle()=== true){
        
            
            while(player.alive && eF[i].alive ){
            
            player.attack(eF[i]);
            if (eF[i].alive ==true)
            {
                eF[i].attack(player)
            }
        }
    }
        else{ break}
    }

    }
    

    
    
    function fight(){
    let start = prompt("Would you like to battle some aliens?","Yes or No")
    if(start.toLowerCase()==='yes'){
        battle(hero,enemyFleet)
        }
        else{ alert("You coward! Earth will be destroyed!")
    }
}


fight()


//let heroS = document.querySelector('#playerStatus')
//heroS.innerHTML = `Hull : ${hero.hull} <br> Firepower : ${hero.firepower} <br> Accuracy : ${hero.accuracy}`
//heroS.innerHTML = "somejldkjdsf"

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
            console.log("You hit the Alien!")
            if(enemy.hull <= 0){
                enemy.alive = false
                console.log("The Alien has been killed!")
            }
        }else{
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
                console.log(`The enemy hit your ship! You have ${player.hull} hit points left.`)
                if(player.hull <= 0){
                    player.alive = false
                    console.log("Your ship has been destroyed! Game Over!")
                }
            }else{
                console.log("The Alien missed you this time!")
            }
            }
    }



let hero = new USSSchwarzenegger (5, 5, .7)
let badGuy = new Enemy()
//console.log(badGuy)
//console.log(hero)
//hero.attack(badGuy)
//badGuy.attack(hero)
//console.log(badGuy)
//console.log(hero)

let enemyFleet = []
for (let i = 0; i <6; i++){
enemyFleet[i] = new Enemy()
}


function battle(player, eF){
    for(i=0; i < eF.length; i++ ){
        if(player.alive ==true){console.log('\n\n' + 'Battle #' + (i + 1) + '\n')}
        
        while(player.alive && eF[i].alive){
            
        player.attack(eF[i]);
        if (eF[i].alive ==true)
        {
            eF[i].attack(player)
        }
    }
}
}

battle(hero,enemyFleet)

//prompt("Would you like to play?","Yes or No")
// Soldier
class Soldier {
   constructor(health, strength) {
    this.health = health 
    this.strength = strength   
}

attack (){
    return this.strength
}
receiveDamage(theDamage){
    this.health -= theDamage
}

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health,strength)
        this.name = name
    }
  
    attack (){
        return this.strength
    }

    receiveDamage(Damage){
        this.health -= Damage;
        const dead = 0;
        
        if (this.health > dead){
            return `${this.name} has received ${Damage} points of damage`
        } 
        else {
            return `${this.name} has died in act of combat`
        }
            
    }

    battleCry(){
       return "Odin Owns You All!"
    }

    
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
       super(health, strength)
    } 

    attack (){
        return this.strength
    }

    receiveDamage(Damage){
        this.health -= Damage;
        const dead = 0;
        
        if (this.health > dead){
            return `A Saxon has received ${Damage} points of damage`
        } 
        else {
            return `A Saxon has died in combat`
        }
            
    }


}




// War
class War {
     constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
     }
  
  addViking(viking){
      this.vikingArmy.unshift(viking);
  }

  addSaxon(saxon){
     this.saxonArmy.unshift(saxon)
  }

 /* armies attack */

    vikingAttack(){
      const chosenSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
      const chosenViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
      const saxonIndex = this.saxonArmy.indexOf(chosenSaxon) 
      
      let vikingResult = this.saxonArmy[chosenSaxon].receiveDamage(this.vikingArmy[chosenViking].attack())
           
      if (this.saxonArmy[chosenSaxon].health < 1){
        this.saxonArmy.splice([chosenSaxon], 1)
      }

      return vikingResult
    }

    
    saxonAttack(){
      const chosenSaxon = Math.round(Math.random()*this.saxonArmy.length)
      const chosenViking = Math.round(Math.random()*this.vikingArmy.length)
  
        let saxonResult = this.vikingArmy[chosenViking].receiveDamage(this.saxonArmy[chosenSaxon.attack()]) 
          
        if (this.vikingArmy[chosenViking].health < 1) {
            this.vikingArmy.splice([chosenViking], 1)
        }

      return saxonResult
    }

    showStatus() {
    if (this.saxonArmy.length <= 0) {
        return "Vikings have won the war of the century!"  
    } else if (this.vikingArmy.length <= 0){
     return 'Saxons have fought for their lives and survived another day...'
                   
     } else {
        return "Vikings and Saxons are still in the thick of battle."
     }
    }


}

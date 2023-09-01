import { world as Skytopia, system } from "@minecraft/server"; 
import { showActionFormData } from "./functions/Modal/ActionFormData.js"; 
  
//  Skytopia.afterEvents.playerSpawn.subscribe(ev => { 
//      const { initialSpawn, player } = ev 
//      if (initialSpawn && !player.hasTag('survival')) { 
//          system.runTimeout(() => { 
//              showActionFormData(player) 
//          }, 60) 
//      }
//  })

// const listPlayers = Skytopia.getAllPlayers()

    Skytopia.afterEvents.playerSpawn.subscribe(ev => {
        const { initialSpawn, player } = ev
        if (initialSpawn) {
            system.runTimeout(() => {
                showActionFormData(player)
            }, 120)
        }
    })
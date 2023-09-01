import { world, system, Player } from "@minecraft/server";
import { menuUI } from "./utils/menu_ui";
import setting from "./utils/setting";

system.beforeEvents.watchdogTerminate.subscribe(data => data.cancel = true)

world.afterEvents.entityHitEntity.subscribe(event => {
    const player = event.damagingEntity;
    const tag = event.hitEntity.hasTag(setting.tag)
    const typeId = event.hitEntity.typeId.split(":")[1] === setting.typeId

    if (!(player instanceof Player) || !(tag || typeId)) return false;
    
    menuUI(player)

})
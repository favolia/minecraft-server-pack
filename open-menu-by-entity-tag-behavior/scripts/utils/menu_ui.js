import { ActionFormData } from "@minecraft/server-ui";

export function menuUI(player) {
    const menu = new ActionFormData();

    menu.title('Skytopia Menu')
    menu.body('Disini deskripsi menu')
    // textures/icons/diamond_icon.png itu ambil dari resource pack (kalo ada)
    menu.button('+50 Diamond', `textures/icons/diamond_icon.png`)
    menu.button('Button 2')
    menu.button('Button 3')

    menu.show(player)
        .then( async result => {
            let {selection, canceled} = result

            switch (selection) {
                case 0:
                    canceled = true
                    sendMessage('§a+50 Diamond')
                    player.runCommandAsync('/give @s diamond 50')
                    break;
                case 1:
                    canceled = true
                    sendMessage('you have selected the second button')
                    break;
                case 2:
                    canceled = true
                    sendMessage('you have selected the third button')
                    break;
                default:
                    break;
            }
        })

}

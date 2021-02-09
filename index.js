const Discord = require("discord.js");
const Client = new Discord.Client();

//Ensemble des commandes
const prefix = "BD";

Client.on("ready", () => {
    console.log("Bot en ligne !");
    Client.user.setActivity("Surveille l'asso", {
        type: "STREAMING",
        url: "https://www.twitch.tv/soui_offi"
    });

});

Client.on("message", message => {
    if(message.author.bot) return;

    if(message.content == prefix + "ACHAT"){
        message.delete()
        message.channel.send("`Pour commander quelque chose chez nous suivez ce tuto :`");
    }
    if(message.content == prefix + "MC"){
        message.delete()
        message.channel.send("`Vous voulez installer un serveur minecraft suivez ce tuto :` ");
    }
    if(message.content == prefix + "WEB"){
        message.delete()
        message.channel.send("`Vous cherchez une offre web ? vous cherchez comment l'installer **suivez ce tuto** :` ");
    }
    if(message.content == prefix){
        message.channel.send("`Besoins d'aide pour utilisez le bot voici les commandes : \n - BDachat pour un tuto pour apprendre à commander chez nous ! \n - BDMC Pour obtenir le tuto d'installation et d'achat d'un serveur Minecraft \n - BDWEB Pour un tuto sur l'achat et l'installation de site web ! \n - BDassistance pour une assistance personalise et recevoir des conseils.`");
    }
    if(message.content == "Bonjour bot"){
        message.reply(" Hey comment vas-tu ? ^w^ ");
        message.react('❤');
    }
if(message.content == "Bien et toi bot ?"){
        message.channel.send(" Superrr ^w^ ");
}
    if(message.content == "Comment vas-tu mon pote ?"){
        message.channel.send(" bien bien je surveille les serveurs de l'asso :D ");
    }
    if(message.memeber.permissions.has("ADMINISTRATOR")){
     if(message.content == "Dis bot contrôle maintenance"){
         message.delete()
        message.channel.send("Très bien : - Serveur minecraft : 05/10 online -Serveur web: 00/00 - VPS : {const/100} - La temparture est normal tout fonctionne ");
    }  
    else {
        message.reply("Vous n'avez pas la permissions d'effectuer cette commande ")
    }
} 

if(message.content == prefix + "assistance"){
    message.reply("que se passe t'il ? Sagit t'il d'un problème BDtechnique / BDRemboursement / BDautres .");
    message.react('✅');
 } 
 if(message.content == prefix + "technique"){
    message.reply("Quel service est concernés ? BDMinecraft / BDWeb / BDVPS ?");
    message.react('✅');
 }
 //minecraft
 if(message.content == prefix + "Minecraft"){
    message.reply("Le problème est ? BDAchat / BDinstallation / BDdémarrage /BDautres ?");
    message.react('✅');
 }
 //Achat
 if(message.content == prefix + "Achat"){
    message.reply("Le problème est : BDstock / BDcomprend pas / BDrien reçu /BDautres");
    message.react('✅');
 }
//Stock
if(message.content == prefix + "stock"){
    message.reply("Pour les problèmes de stock merci de simplement patienter leurs retours ^^");
    message.react('✅');
 }
//comprend pas
if(message.content == prefix + "comprend pas"){
    message.reply("Si vous comprenez pas le système d'achat suivez ce tuto : si il s'agit un d'un problème technique vous pouvez demander de l'aide dans le support");
    message.react('✅'); 
}
//rien recu
if(message.content == prefix + "rien reçu"){
    message.reply("Vous avez effectué une commande et rien réçu merci de contacter  le responsable de cette section (Soui)");
    message.react('✅');
}
 if(message.content == prefix + "autres"){
    message.reply("Pour toutes autres questions les salons support sont disponibles");
    message.react('✅');
 } 
 //BDweb
 if(message.content == prefix + "Web"){
    message.reply("Pour toutes questions liées a l'achat d'un site suivez ce tuto: Pour un problème technique après achat utilisez un salon support pour un problème d'achat merci de contacter le Responsable de ce service (Soui)");
    message.react('✅');
} 
 //BDVPS
if(message.content == prefix + "VPS"){
    message.reply("Pour tout problème technique utiliser un salon support si il s'agit d'un problème d'achat ou un problème technique **critique** merci de contacter le responsable de cette section (Alexandre)")
    message.react('✅');
}
//BDRemboursement
if(message.content == prefix + "Remboursement"){
    message.channel.send("Avant de réclamer un remboursement merci de lire nos CGU/CGV disponible ici :")
    message.react('✅');
}
//BDdémarrage
if(message.content == prefix + "démarrage"){
    message.reply("Un problème avec le démarrage de votre serveur suivez ce tuto !")
    message.react('✅');
}
//BDinstallation 
if(message.content == prefix + "installation"){
    message.reply("Pour installer un serveur suivez ce tuto :")
    message.react('✅');
}
//BDintervention
if(message.member.permissions.has("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "TECH")){
        message.delete()
            console.log("Message masqués apr supréssion");
            message.channel.send("@everyone un problème technique encore inconnu empêche les serveurs de fonctionner correctement nous vous recontactions très bientôt");
        }
        else {
            message.reply("Vous n'avez pas la permisssions d'éeffectuer cette commande")
        }
    
}
//BDexpulsions
if(message.member.permissions.has("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "kick")){
        console.log("Expulsion du client en cours");
        message.delete()
        const user = message.mention.user.first();
        if (user){
            const member = message.guild.member(user);
            if (member){
                member
                .kick
                .then(() => {
                    message.reply(`Membre correctement expulser ${user.tag}`);
                })
            //Recupération de l'erreur pour verifier les perms de l'éxécuteur
            .catch(err =>{
                message.reply(`Vous n'avez pas la permissions d'expulser ${user.tag}`);
                console.log("Erreur pas possible de kick" + err);
            });        
            }
            else {
                message.reply("Vous n'avez pas mentionnez d'utilsiateur");
            }
        }

    }
}

//Commande de besoins d'aide 
if(message.content == prefix + "HELP"){
    message.delete()
    const helpIm = new Discord.MessageEmbeb()
    .setColor('#0099ff')
    .setTitle("Centre d'assistance")
    .setURL("https://discord.gg/eyazTXaz8v")
    .setAuthor("Soui In Space", 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    .setDescription("Le centre d'assistance vous permettera de trouver des tutos et un référencement de la totalité des commandes")
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
        { name : "Voici un document text contenant la totalité des commandes", value: "Ajouter le lien"},
        { name : "Un tuto général pour être guider sur le discord et sur le site de Bad Omen Telecom", value: "Ajouter le lien"}
    )
}

// Commande pour tester la vitalité du bot
if(message.member.permissions.has("ADMINISTRATOR")){
    if(message.content.startsWith(prefix + "TEST")){
        message.delete()
        message.reply("Je suis vivant ne vous inquiétez pas ^^ ");
    }
    else {
        message.reply("vous n'avez pas la permissions d'effectuer cette commande sorry :/")
    }
}


if(message.member.permissions.has("MANAGE_MESSAGES")){
    if(message.content.startsWith(prefix + "DELETOR")){
        let args = message.content.split(" ");

        if(args[1] == undefined){
            message.reply("Nombre de message à supprimer non définis ou mal orthographier (un chiffre entre 1 et 100");
        }
        else {
            let number = parseInt(args[1]);

            if(isNaN(number)){
                message.reply("Nombre de message à supprimer non définis ou mal orthographier (un chiffre entre 1 et 100)");
            }
            else{
                message.channel.bulkDelete(number + 1).then(messages =>{
                    console.log("les messages ont été supprimées");
                    
                }).catch(err =>{
                    console.log("erreur de supprésion"+ err);
                })
            }
        }
    }
}
});






Client.login("-");


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
        message.channel.send("Pour commander quelque chose chez nous suivez ce tuto :");
    }
    if(message.content == prefix + "MC"){
        message.channel.send("Vous voulez installer un serveur minecraft suivez ce tuto : ");
    }
    if(message.content == prefix + "WEB"){
        message.channel.send("Vous cherchez une offre web ? vous cherchez comment l'installer **suivez ce tuto** :");
    }
    if(message.content == prefix + "HELP"){
        message.channel.send("**Besoins d'aide pour utilisez le bot voici les commandes : ** ");
    }
    if(message.content == prefix){
        message.channel.send("**Besoins d'aide pour utilisez le bot voici les commandes : ** ");
    }
    if(message.content == "Bonjour bot"){
        message.channel.send(" Hey comment vas-tu ? ^w^ ");
        message.react('❤');
    }
    if(message.content == "Comment vas-tu mon pote ?"){
        message.channel.send(" bien bien je surveille les serveurs de l'asso :D ");
    }
    if(message.content == "Dis bot contrôle maintenance"){
        message.channel.send("Très bien : - Serveur minecraft : 05/10 online -Serveur web: 00/00 - VPS : {const/100} - La temparture est normal tout fonctionne ");
    }   

if(message.content == prefix + "assistance"){
    message.reply("que se passe t'il ? Sagit t'il d'un problème BDtechnique / BDRemboursement / BDautres .");
    message.react('✅');
 } 
 if(message.content == prefix + "technique"){
    message.reply("Quel service est concernées ? BDMinecraft / BDWeb / BDVPS ?");
    message.react(':white_check_mark:');
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
    message.reply("Avant de réclamer un remboursement merci de lire nos CGU/CGV disponible ici :")
    message.react('✅');
}
});



Client.login("ODA1NzQ5MDY3ODE1NTgzNzg0.YBfaSw.rihlY5Ok8-9YMWy-pRiwGBYezrU");


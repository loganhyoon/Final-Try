module.exports.run = async (bot,message,args) => {

    message.channel.send("Requeue in 1 minute and 30s!");
}


module.exports.help = {
    name: "rq"
}
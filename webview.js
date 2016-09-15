module.exports = (Franz, options) => {
    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
            if( obj.hasOwnProperty( el ) ) {
                sum += parseFloat( obj[el] );
            }
        }
        return sum;
    }
    function getMessages() {
        const mail_dict = rcmail.env.unread_counts;
        indir = sum(mail_dict);
        const curr = rcmail.env.mailbox ? rcmail.env.mailbox : "INBOX";
        if (curr in mail_dict) {
            dir = mail_dict[curr];
            indir -= dir;
        }
        Franz.setBadge(dir, indir);
    }
    Franz.loop(getMessages);
}

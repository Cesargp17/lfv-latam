import { connect, disconnect } from "../../database/db";
import Email from "../../models/Email";

export default function (req, res) {
    switch (req.method) {
        case 'POST':
           return sendEmail( req, res );
    
        default:
           return res.status(400).json({ msg: 'Bad Request' });
    }
}

const sendEmail = async( req, res ) => {

    await connect();

    const registeredEmail = await Email.findOne( req.body );

    if( registeredEmail ) {
        await disconnect();
        return res.json({ msg: 'Este email ya ha sido registrado.' });
    }

    const email = new Email( req.body );
    await email.save();

    await disconnect();

    return res.status(200).json({ msg: 'Email registrado con exito.' });

}
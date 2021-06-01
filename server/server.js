const mongoose = require('mongoose');
const Document = require('./document');

const uri = 'mongodb+srv://node_user:1234node@cluster0.gnrc2.mongodb.net/docs-clone?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const defaultValue = '';

// specifying the client port 3000 and server port 3001

const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST'],
    }
});


io.on("connection", (socket) => {
    socket.on('get-document', async documentId => {
        const document = await findOrCreateDoc(documentId);
        socket.join(documentId)
        socket.emit("load-document", document.data);  
        
        socket.on('send-changes', delta => {
            // console.log(delta);
            socket.broadcast.to(documentId).emit("receive-changes", delta);
        });

        socket.on('save-document', async data => {
            await Document.findByIdAndUpdate(documentId, { data: data });
        });

    });
    // console.log("connected")
});

// find doc using ID from db

async function findOrCreateDoc(id){
    if(id == null) return;

    const document = await Document.findById(id);
    if(document) return document;
    
    return await Document.create({ _id: id, data: defaultValue })
}
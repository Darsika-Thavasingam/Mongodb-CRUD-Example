const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars'); //templating engine
const db = require('./db'); 
const BookModel = require('./models/bookModel');
const getDatabase = db.getDatabase;
//const ObjectID = db.ObjectId; 
    db.getDatabase();


app.engine('hbs',exhbs.engine({
    layoutsDir:'views/',
    defaultLayout:'main', 
    extname:'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', 'hbs');
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false})) 
app.use(express.static('public'));


app.get('/',async (req,res)=>{
    //let database = await getDatabase();
   // const collection = database.collection('books');
    //const cursor = collection.find({})
    //let books = await cursor.toArray();
    let books = await BookModel.find({});

    let message = '';
    let edit_id, edit_book;

    if(req.query.edit_id){
        edit_id = req.query.edit_id;
        //edit_book = await collection.findOne({_id: new ObjectID(edit_id)})
        edit_book = await BookModel.findOne({_id: edit_id});

    }
    if(req.query.delete_id){
        //await collection.deleteOne({_id: new ObjectID(req.query.delete_id)});
        await BookModel.deleteOne({_id: req.query.delete_id});
        return res.redirect('/?status=3')
    }
    
    switch(req.query.status){
            case '1':
                message = 'inserted sucessfully';
                break;
            case '2':
                message = 'updated sucessfully';
                break;
            case '3':
                message = 'deleted sucessfully';
                break;

        default:
            break;
    }
    res.render('main',{message,books,edit_id,edit_book}    )
})

app.post('/store_book',async(req,res)=>{
    //let database = await getDatabase();
    //const collection = database.collection('books');
    //let book = {title: req.body.title, author: req.body.author}
    let edit_id = req.params.edit_id;
    //await collection.insertOne(book);
    const book = new BookModel({
        title: req.body.title, author: req.body.author  });
        
    await book.save();
    return res.redirect('/?status=1')
})

app.post('/update_book/:edit_id',async(req,res)=>{
    //let database = await getDatabase();
    //const collection = database.collection('books');
    //let book = {title: req.body.title, author: req.body.author}
    let edit_id = req.params.edit_id;

    //await collection.updateOne({_id: ObjectID(edit_id)}, {$set: {title: req.body.title, author: req.body.author}});
    await BookModel.findOneAndUpdate({_id: edit_id}, {title: req.body.title, author: req.body.author});
    return res.redirect('/?status=2')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

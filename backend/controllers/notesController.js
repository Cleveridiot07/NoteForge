const Note = require("../models/notesModel");
const User = require("../models/userModel");

const getAllNotes = async(req,res)=>{
    try{
        const notes = await Note.find({user: req.user.id});
        res
        .status(200)
        .json(notes);
    }catch(error){
        console.log(error);
        res.status(500)
        .json({message:"Server error nnf"})
    }
}

const getNote = async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note || note.user.toString !== req.user.id){
            return res.status(404).json({message:"Note not Found"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"server error nnf"});
    }
}

const createNote = async(req,res)=>{
    const{title,content,color}= req.body;
    try{
        const newNote = new Note({
            user: req.user.id,
            title,
            content,
            color: color || 'sky',
        });
        const note = newNote.save();

        await User.findByIdAndUpdate(req.user.id, { $push: { notes: note._id } });

        res.status(201)
        .json(note);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error eicn' });
    }
}

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Find the note by id and update it
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const deleteNote = async (req, res) => {
    try {
      const note = await Note.findByIdAndDelete(req.params.id);
  
      if (!note || note.user.toString() !== req.user.id) {
        return res.status(404).json({ message: 'Note not found' });
      }
  

      await User.findByIdAndUpdate(req.user.id, { $pull: { notes: req.params.id } });

      res.status(200).json({ message: 'Note deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
  };
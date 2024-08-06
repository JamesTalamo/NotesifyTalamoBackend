const Post = require('../Model/Post')

const addComment = async (req, res) => {

    const { id } = req.params
    const { commenter, comment } = req.body;//

    try {
        if (!commenter || !comment) return res.status(400).json({ 'error': 'Commenter and comment are needed' });


        const ifExist = await Post.findOne({ _id: id });
        if (!ifExist) return res.status(400).json({ "error": "No post with that ID" });


        ifExist.comments.push({ commenter, comment }); //nasa loob ng comments object diba, tapos pinush niya tong dalawa commenter and comment, gumamit ng {} kaya naging isa
        console.log(ifExist.comments)
        // ifExist.comments = ifExist.comments || [];


        await ifExist.save();

        res.status(200).json({ 'success': ifExist });
    } catch (error) {
        res.status(500).json({ "error": "server error" })
    }
}

let checkComment = async (req, res) => {

    const { id } = req.params

    try {

        let ifExist = await Post.findOne({ _id: id })
        if (!ifExist) return res.status(400).json({ "error": "no post like that" })

        res.send(ifExist.comments).status(200)

    } catch (error) {
        res.status(500)
    }
}


module.exports = {
    addComment,
    checkComment
}
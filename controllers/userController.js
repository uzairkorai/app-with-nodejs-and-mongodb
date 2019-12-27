//Import User Model
const User = require('../model/User')


exports.get_user = (req, res) => {
    User.find({}, (err, users) => {
        res.status(200).json({
            message: 'List of all users',
            data: users
        })
    })
}

exports.create_user = (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city

    })

    user.save(err => {
        if (!err) {
            res.status(201).json({
                message: 'User Created Successfully.',
                data: user
            })
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.update_user = (req, res) => {
    //get params.id
    const id = req.params.id
    //what you want to update
    const options = {
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    }

    User.findByIdAndUpdate({ _id: id }, options, err => {
        if (!err) {
            res.status(200).json({message: "Update successfully" })
        } else {
            res.status(500).json({ message: 'Failed' })
        }
    })
}

exports.delete_user = (req, res) => {
    const id = req.params.id

    User.deleteOne({ _id: id }, err => {
        if (!err) {
            res.status(200).json({ message: "Deleted successfully"})
        } else {
            res.status(500).json({ message: 'Failed'})
        }
    })
}
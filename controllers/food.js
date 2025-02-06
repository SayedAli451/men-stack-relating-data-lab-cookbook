const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

const home = (req, res) => {
    res.render('foods/index.ejs', { title: "My Pantry" })
}
const newFoods = async (req, res) => {
    res.render('foods/new.ejs', { title: "New" })
}
const creat = async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.pantry.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/foods`);
    } catch (err) {
        console.log(err);
        res.redirect('/')
    }
}
const index = async (req, res) => {
    console.log('HELLO')
    const currentUser = await User.findById(req.session.user._id);
    console.log(currentUser)
    console.log(currentUser.pantry)
    res.render('foods/index.ejs', {
        title: "My Pantry",
        pantry: currentUser.pantry
    });

    // console.log(req.session.user._id)
    // try {
    //     const currentUser = await User.findById(req.user._id);
    //     console.log(currentUser)
    //     console.log(currentUser.pantry)
    //     res.render('foods/index.ejs', {
    //         title: "My Pantry",
    //         pantry: currentUser.pantry
    //     });
    // } catch (err) {
    //     console.log(err);
    //     res.redirect('/');
    // }
};




module.exports = {
    home,
    newFoods,
    creat,
    index,

}
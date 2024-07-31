import express from "express";
import Player from "../models/playerSchema";

const getPlayers = async (req, res) => {
    try {
        const playerList = await Player.find({});
        res.status(200).json(playerList);
    } catch (error) {
        console.log(error);
    }
};


const getSinglePlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.playerId);
        if (!player) {
            res.status(404);
            throw new Error('Player not found.');
        }
        res.status(200).json(player);
    } catch (error) {
        console.log(error);
    }
};



const createPlayer = async (req, res) => {
    try {
        const newPlayer = await Player.create(req.body);
        res.status(201).json(newPlayer);
    } catch (error) {
        console.log(error);
    }
};


const updatePlayer = async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.playerId, req.body, {new: true});
        if (!updatedPlayer) {
            res.status(404);
            throw new Error('Player not found.');
        }
        res.status(200).json(updatedPlayer);
    } catch (error) {
        console.log(error);
    }
};


const deletePlayer = async (req, res) => {
    try {
        const deletedPlayer = await Player.findByIdAndDelete(req.params.playerId);
        if (!deletedPlayer) {
            res.status(404);
            throw new Error('Player not found.');
        }
        res.status(200).json(deletedPlayer);
    } catch (error) {
        console.log(error);
    }
};


module.exports = {getPlayers, getSinglePlayer, createPlayer, updatePlayer, deletePlayer};
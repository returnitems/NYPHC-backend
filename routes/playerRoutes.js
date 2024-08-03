import express from "express";
import { Router } from "express";
import * as playerController from "../Controllers/playerController.js";

const router = Router();

router.get('/', playerController.getPlayers);
router.get('/:playerId', playerController.getSinglePlayer);
router.post('/', playerController.createPlayer);
router.put('/:playerId', playerController.updatePlayer);
router.delete('/:playerId', playerController.deletePlayer);

export default router;
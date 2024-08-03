import express from "express";
import { Router } from "express";
import * as playerController from "../Controllers/playerController.js";

const router = Router();

router.get('/', playerController.getPlayers);
router.get('/:playerId', playerController.getSinglePlayer);
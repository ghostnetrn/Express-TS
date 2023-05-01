import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import { Types } from "mongoose"; // Importa o objeto Types do Mongoose
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(e.message);
    return res.status(500).json({ error: "Por favor, tente mais tarde!" });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const movie = Types.ObjectId.isValid(id) && (await MovieModel.findById(id));

    // Verifica se o valor é um ObjectId válido
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." });
    } else {
      return res.status(200).json(movie);
    }
  } catch (e: any) {
    Logger.error(e.message);
    return res.status(500).json({ error: "Por favor, tente mais tarde!" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(e.message);
    return res.status(500).json({ error: "Por favor, tente mais tarde!" });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const movie = Types.ObjectId.isValid(id) && (await MovieModel.findById(id));

    // Verifica se o valor é um ObjectId válido
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." });
    } else {
      await MovieModel.deleteOne({ _id: id });
      return res.status(200).json({ msg: "Filme deletado com sucesso!" });
    }
  } catch (e: any) {
    Logger.error(e.message);
    return res.status(500).json({ error: "Por favor, tente mais tarde!" });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = Types.ObjectId.isValid(id) && (await MovieModel.findById(id));

    // Verifica se o valor é um ObjectId válido
    if (!movie) {
      return res.status(404).json({ error: "O filme não existe." });
    } else {
      await MovieModel.updateOne({ _id: id }, data);
      return res.status(200).json({ msg: "Filme atualizado com sucesso!", data });
    }
  } catch (e: any) {
    Logger.error(e.message);
    return res.status(500).json({ error: "Por favor, tente mais tarde!" });
  }
}

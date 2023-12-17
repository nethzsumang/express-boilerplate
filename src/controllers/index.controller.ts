import { Request, Response } from "express";
import BaseController from "./base.controller";

/**
 * IndexController class
 * @author Kenneth Sumang
 */
export default class IndexController extends BaseController {
    constructor() {
        super();
    }

    /**
     * Says hello!
     * @param {Request}  _req 
     * @param {Response} _res 
     */
    sayHello = async (_req: Request, _res: Response) => {
        _res.send('Hello, World!');
    }
}
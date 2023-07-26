import { ExecutionContext, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class loggerMiddleware implements NestMiddleware{
  private logger = new Logger(loggerMiddleware.name);
  use( req: Request, res:Response, next: NextFunction ) {
    const {method  ,baseUrl} = req;
    this.logger.log(
      `${method} ${baseUrl} : invoked...`,
    );
    next();
  }

}
import * as z from "zod";
import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
export function ValidatorMiddleware(schema: any) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const data = await schema.safeParseAsync(req.body);

                if (!data.success) {
                    return res.status(400).json({
                        success: false,
                        message: data.error.issues[0].message,
                        param: data.error.issues[0].path[0],
                    });
                }
                req.body = data.data;
                next();
            }
        );
    };
}

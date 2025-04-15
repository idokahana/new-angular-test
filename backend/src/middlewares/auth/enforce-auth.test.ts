import { Request, Response } from "express";
import enforceAuth from "./auth";
import AppError from "../../errors/app-error";
import { StatusCodes } from "http-status-codes";

describe("enforce auth middelware test", () => {
  test("calls next with 401 error when no auth heater is provide", () => {
    const req = { headers: {} } as Request;
    const res = {} as Response;
    const next = jest.fn((err) => {});
    enforceAuth(req, res, next);
    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual(
      new AppError(StatusCodes.UNAUTHORIZED, "missing authorization header")
    );
  });
  test("calls next with a 401 error when no space between bearer and token ", () => {
    const req = {
      headers: {
        authorization: "Bearer123",
      },
    } as Request;
    const res = {} as Response;
    const next = jest.fn((err) => {});
    enforceAuth(req, res, next);
    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0]).toEqual(
      new AppError(StatusCodes.UNAUTHORIZED, "bad authorization header")
    );
  });
});

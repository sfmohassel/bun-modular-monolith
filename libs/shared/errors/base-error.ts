export abstract class BaseError extends Error {
  protected constructor(
    public readonly message: string,
    public readonly statusCode: number,
  ) {
    super(message)
    this.name = this.constructor.name
  }
}

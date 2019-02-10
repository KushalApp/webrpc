
/* tslint:disable */

// This file has been generated by https://github.com/webrpc/webrpc using gen/typescript
// Do not edit by hand. Update your webrpc schema and re-generate.


export enum Kind {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface IEmpty {
  toJSON?(): object
}

export class Empty implements IEmpty {
  private _data: IEmpty
  constructor(_data?: IEmpty) {
    this._data = {}
    if (_data) {
      
    }
  }
  
  public toJSON(): object {
    return this._data
  }
}

export interface IGetUserRequest {
  userID?: number
  toJSON?(): object
}

export class GetUserRequest implements IGetUserRequest {
  private _data: IGetUserRequest
  constructor(_data?: IGetUserRequest) {
    this._data = {}
    if (_data) {
      this._data['userID'] = _data['userID']!
      
    }
  }
  public get UserID(): number {
    return this._data['userID']!
  }
  public set UserID(value: number) {
    this._data['userID'] = value
  }
  
  public toJSON(): object {
    return this._data
  }
}

export interface IUser {
  id?: number
  USERNAME?: string
  created_at?: string
  toJSON?(): object
}

export class User implements IUser {
  private _data: IUser
  constructor(_data?: IUser) {
    this._data = {}
    if (_data) {
      this._data['id'] = _data['id']!
      this._data['USERNAME'] = _data['USERNAME']!
      this._data['created_at'] = _data['created_at']!
      
    }
  }
  public get ID(): number {
    return this._data['id']!
  }
  public set ID(value: number) {
    this._data['id'] = value
  }
  public get Username(): string {
    return this._data['USERNAME']!
  }
  public set Username(value: string) {
    this._data['USERNAME'] = value
  }
  public get CreatedAt(): string {
    return this._data['created_at']!
  }
  public set CreatedAt(value: string) {
    this._data['created_at'] = value
  }
  
  public toJSON(): object {
    return this._data
  }
}

export interface IExampleServiceService {
  Ping(headers: object): Promise<boolean>
  GetUser(params: IGetUserRequest, headers: object): Promise<User>
  
}

  
// Client

const ExampleServicePathPrefix = "/rpc/ExampleService/"

export class ExampleService implements IExampleServiceService {
  private hostname: string
  private fetch: Fetch
  private path = '/rpc/ExampleService/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = fetch
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

  
  Ping(headers: object = {}): Promise<boolean> {
    return this.fetch(
      this.url('Ping'),
      
      createHTTPRequest({}, headers)
      
    ).then((res) => {
      if (!res.ok) {
        return throwHTTPError(res)
      }
      
      return res.json().then((_data) => {return <boolean>(_data)})
      
    })
  }
  
  GetUser(params: IGetUserRequest, headers: object = {}): Promise<User> {
    return this.fetch(
      this.url('GetUser'),
      
      createHTTPRequest(params, headers)
      
    ).then((res) => {
      if (!res.ok) {
        return throwHTTPError(res)
      }
      
      return res.json().then((_data) => {return new User(_data)})
      
    })
  }
  
}



export interface WebRPCError extends Error {
  code: string
  msg: string
	status: number
}

export const throwHTTPError = (resp: Response) => {
  return resp.json().then((err: WebRPCError) => { throw err })
}

export const createHTTPRequest = (body: object = {}, headers: object = {}): object => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  }
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>


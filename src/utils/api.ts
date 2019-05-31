import {
  request,
  parsedResponse,
  HTTPMethod,
  APIError,
  urlWithQueryString,
} from './http'

interface IAPIAccessToken {
  accessToken: string
  expire: string
  userId: string
}
export class API {
  
}

export async function cretateToken(username:string, password:string) {
  try {
    const response = await request('POST','/tokens',null, {username, password});
    const token = await parsedResponse<IAPIAccessToken>(response);
    console.log(token)
    return token
  } catch(error) {
    console.error(error)
  }
  
}

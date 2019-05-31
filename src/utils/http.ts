export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'HEAD'

export interface IError {
  readonly message: string
  readonly resource: string
  readonly field: string
}

export interface IAPIError {

  readonly errors?: IError[]
  readonly message?: string
}

export class APIError extends Error {
  /** The error as sent from the API, if one could be parsed. */
  public readonly apiError: IAPIError | null

  public constructor(response: Response, apiError: IAPIError | null) {
    let message
    if (apiError && apiError.message) {
      message = apiError.message

      const errors = apiError.errors
      const additionalMessages = errors && errors.map(e => e.message).join(', ')
      if (additionalMessages) {
        message = `${message} (${additionalMessages})`
      }
    } else {
      message = `API error ${response.url}: ${response.statusText} (${
        response.status
      })`
    }

    super(message)

    this.apiError = apiError
  }
}

async function deserialize<T>(response: Response): Promise<T> {
  try {
    const json = await response.json()
    return json as T
  } catch (e) {
    const contentLength = response.headers.get('Content-Length') || '(missing)'
    const requestId = response.headers.get('X-GitHub-Request-Id') || '(missing)'
    console.warn(
      `deserialize: invalid JSON found at '${response.url}' - status: ${
        response.status
      }, length: '${contentLength}' id: '${requestId}'`,
      e
    )
    throw e
  }
}

export function request(method:HTTPMethod, url:string, token?: string, jsonBody?:Object) :Promise<Response> {
  
  let headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = `token ${token}`
  }
  const options = {
    headers,
    method,
    body: JSON.stringify(jsonBody),
  }
  return fetch(url, options)
}

export async function parsedResponse<T>(response: Response): Promise<T> {
  if (response.ok) {
    return deserialize<T>(response)
  } else {
    let apiError: IAPIError | null
    // Deserializing the API error could throw. If it does, we'll throw a more
    // general API error.
    try {
      apiError = await deserialize<IAPIError>(response)
    } catch (e) {
      throw new APIError(response, null)
    }

    throw new APIError(response, apiError)
  }
}

export function urlWithQueryString(
  url: string,
  params: { [key: string]: string }
): string {
  const qs = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

  if (!qs.length) {
    return url
  }

  if (url.indexOf('?') === -1) {
    return `${url}?${qs}`
  } else {
    return `${url}&${qs}`
  }
}

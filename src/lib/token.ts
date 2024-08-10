import { AxiosError, AxiosResponse } from 'axios';
import { AxiosCacheInstance } from 'axios-cache-interceptor';

/**
 * This function is used to retrive a JSON Web Token from Xello,
 * which is used to authenticate the user for further requests.
 *
 * @param username Username to be passed to Xello's auth endpoint
 * @param password Password to be passed to Xello's auth endpoint
 * @param axios The axios instance to be used for the request (with any config)
 * @returns {Promise<string>} the jwtToken from the response
 */
const getToken = async (
  username: string,
  password: string,
  axios: AxiosCacheInstance
): Promise<string> => {
  return await axios
    .post('https://login.xello.world/api/auth/login', {
      cache: false,
      username,
      password,
      SelectedLanguage: 'en-US',
      remember: true,
    })
    .then((res: AxiosResponse) => {
      // Return user object containing jwt token
      return res.data.data.jwtToken;
    })
    .catch((e: AxiosError) => {
      throw e;
    });
};

export default getToken;

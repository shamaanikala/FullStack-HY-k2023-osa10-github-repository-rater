import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    // the 'for' should probably be 'from'?
    const accessTokenJSON = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    );
    
    return accessTokenJSON ? JSON.parse(accessTokenJSON) : null;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken),
    );
  }
  
  async removeAccessToken() {
    // Remove the access token from the storage
  }
}

export default AuthStorage;

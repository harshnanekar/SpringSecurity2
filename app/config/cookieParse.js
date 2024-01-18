const cookie= require('js-cookie');
const crypto= require('crypto-js');
const key= 'koGhM1FeahNCWXGSiNfiQ6PPtTsJcR8YfDxWxcunMZREoR7MKQ9daf/su69VCruuxUMt3/SZO4f4fC1JCoIS7jWcXjDbYFwVeZRLsV/U9xF65+VTstcvzbTpAFDE+6CBsT4oR6jR+McIdTtl6rF6Wt2BaT1CdDoxkXLESoAhde/tPkpv3vSe+y7kWMWHyuJdUp3V8Pb1uDSwP1UjGUW9rCijvw/F+IWaPhJfqVeglkClIiyjtW04uuya7LiQE6RlH9SU3SUkAqUAsXrVgnNg+1ct5uxn1nbV2dbxsclOzI4NmZSWVv+od/XZ446SXX73QBVUvqaHLIWl9TUN3JZJRg==';

const a = class metadata{

static setEncryptedCookie(cookieName, cookieValue) {
    const encrypted = crypto.AES.encrypt(JSON.stringify(cookieValue), key);
    cookie.set(cookieName, encrypted.toString(), { expires: 1, secure: true, sameSite: 'strict' });
    return [key.toString()]; 
  }
  
 static getDecryptedCookie(cookieName) {
      const encryptedCookie = cookie.get(cookieName);
      const decrypted = crypto.AES.decrypt(encryptedCookie, key);
      const decryptedValue = JSON.parse(decrypted.toString(crypto.enc.Utf8));
      return decryptedValue;
  
  }
 static destroyCookie (cookieName) {
    Cookies.remove(cookieName);
  }
}

module.exports= a;

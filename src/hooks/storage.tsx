import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext } from "react";

interface LoginsStorageProviderType {
  children: ReactNode;
}

interface LoginsStorageContextData {
  getLogins: () => Promise<Login[] | null>;
  setLogin: (item: Login) => Promise<void>;
}

interface Login {
  id: string;
  title: string;
  email: string;
  password: string;
}

const LoginsStorageContext = createContext({} as LoginsStorageContextData);

function LoginsStorageProvider({ children }: LoginsStorageProviderType) {
  const key = "@passmanager:logins";
  async function getLogins() {
    try {
      const response = await AsyncStorage.getItem(key);
      if (!response) {
        return null;
      }
      return JSON.parse(response) as Login[];
    } catch (error) {
      throw new Error(error);
    }
  }

  async function setLogin(item: Login) {
    try {
      const logins = await getLogins();
      if (!logins) return;
      await AsyncStorage.setItem(key, JSON.stringify([...logins, item]));
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <LoginsStorageContext.Provider value={{ getLogins, setLogin }}>
      {children}
    </LoginsStorageContext.Provider>
  );
}

function useLoginsStorage() {
  return useContext(LoginsStorageContext);
}

export { LoginsStorageProvider, useLoginsStorage };

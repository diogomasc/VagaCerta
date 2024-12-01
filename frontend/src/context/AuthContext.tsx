import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  updateUser(updatedData: Partial<User>): Promise<boolean>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const loadStorageData = async () => {
      const storagedUser = await AsyncStorage.getItem("@AppName:user");

      if (storagedUser) {
        const parsedUser = JSON.parse(storagedUser);
        const response = await api.get(`/users/${parsedUser.id}`);
        if (response.data) {
          setUser(response.data);
          await AsyncStorage.setItem(
            "@AppName:user",
            JSON.stringify(response.data)
          );
        }
      }
      setLoading(false);
    };

    loadStorageData();
  }, []);

   const signIn = async (email: string, password: string) => {
     setLoading(true);
     try {
       const response = await api.get("/users");
       const userData = response.data.find(
         (u: any) => u.email === email && u.password === password
       );
       if (userData) {
         setUser(userData);
         await AsyncStorage.setItem("@AppName:user", JSON.stringify(userData));
       } else {
         throw new Error("Credenciais inválidas");
       }
     } finally {
       setLoading(false);
     }
   };

  const signOut = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem("@AppName:user");
      alert("Logout realizado com sucesso!");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log("Erro ao sair:", error);
    }
  };

  const updateUser = async (updatedData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    try {
      const response = await api.put(`/users/${user.id}`, updatedData);
      if (response.status === 200) {
        const updatedUser = { ...user, ...updatedData };
        setUser(updatedUser);
        await AsyncStorage.setItem(
          "@AppName:user",
          JSON.stringify(updatedUser)
        );
        return true;
      }
    } catch (error) {
      console.log("Failed to update user:", error);
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}

import { MOCK_USERS } from "./mockDATA";

export const authService = {
  login: async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // localStorage.setItem('token', user.token);
      return {
        success: true,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          token: user.token,
        },
      };
    }

    throw new Error("Invalid credentials");
  },
  signUp: async (
    name: string,
    email: string,
    password: string,
    role: string
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (MOCK_USERS.find((user) => user.email === email)) {
      throw new Error("Email already exists");
    }
    const newUser = {
      id: (MOCK_USERS.length + 1).toString(),
      email: email,
      password: password,
      name: name,
      role: role,
      token: role.toLowerCase() + Date.now(),
    };
    MOCK_USERS.push(newUser);
    return {
      success: true,
      data: newUser,
    };
  },
  updateName: async (name: string, id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const userIndex = MOCK_USERS.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new Error("User not found");
    }
    MOCK_USERS[userIndex] = {
      ...MOCK_USERS[userIndex],
      name: name.trim(),
    };
    return {
      success: true,
      data: {
        id: MOCK_USERS[userIndex].id,
        name: MOCK_USERS[userIndex].name,
        email: MOCK_USERS[userIndex].email,
        role: MOCK_USERS[userIndex].role,
      },
    };
  },
};
